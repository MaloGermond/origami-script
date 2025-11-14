//==============================================================================
// 🖋️ PointsToShapeBuilder
//------------------------------------------------------------------------------
// **Description :**
// Ce patch convertit une liste de points JSON en un chemin vectoriel (shape) pour Origami.
// Il génère un trajet fermé ou ouvert en reliant les points par des segments droits,
// avec une option pour fermer automatiquement la forme.
// Idéal pour créer des formes personnalisées à partir de données dynamiques ou de croquis.
//------------------------------------------------------------------------------
// **Entrées :**
// - Points (JSON) : Tableau de points {X, Y} définissant la forme.
//------------------------------------------------------------------------------
// **Sorties :**
// - Shape (JSON) : Objet contenant un chemin ("path") au format Origami,
//   composé de commandes "moveTo", "lineTo", et "closePath".
//------------------------------------------------------------------------------
// **Exemple d'utilisation :**
// Entrée : [{X: 0, Y: 0}, {X: 100, Y: 0}, {X: 100, Y: 100}, {X: 0, Y: 100}]
// Sortie : Un carré fermé (voir exemple de structure JSON ci-dessous).
//------------------------------------------------------------------------------
// **Fonctions internes :**
// - drawLines() : Construit le chemin à partir des points.
// - moveTo() : Déplace le curseur vers un point.
// - lineTo() : Trace une ligne vers un point.
// - closePath() : Ferme le chemin si nécessaire.
//------------------------------------------------------------------------------
// **Exemple de sortie :**
// {
//   "path": [
//     {"point": {"X": 0, "Y": 0}, "type": "moveTo"},
//     {"point": {"X": 100, "Y": 0}, "type": "lineTo"},
//     {"point": {"X": 100, "Y": 100}, "type": "lineTo"},
//     {"point": {"X": 0, "Y": 100}, "type": "lineTo"},
//     {"type": "closePath"}
//   ]
// }
//==============================================================================

var patch = new Patch();

patch.alwaysNeedsToEvaluate = false;

patch.inputs = [
	new PatchInput("Points", types.JSON, []),
	new PatchInput("Close Path", types.BOOLEAN, true),
];

patch.outputs = [new PatchOutput("Shape", types.JSON)];

// Add your logic in this function.
patch.evaluate = function () {
	const points = patch.inputs[0].value;
	const closePath = patch.inputs[1].value;
	patch.outputs[0].value = { path: drawLines(points, closePath) };
};

return patch;

function drawLines(points, isClosed = true) {
	if (points.length < 2) return;
	const path = new Array();
	path.push(moveTo(points[0]));
	for (var i = 1; i < points.length; i++) {
		path.push(lineTo(points[i]));
	}

	if (isClosed) {
		path.push(closePath());
	}

	return path;
}

function moveTo(point) {
	return {
		point: {
			X: point.X,
			Y: point.Y,
		},
		type: "moveTo",
	};
}

function lineTo(point) {
	return {
		point: {
			X: point.X,
			Y: point.Y,
		},
		type: "lineTo",
	};
}

function closePath(isClosed = true) {
	if (!isClosed) {
		return;
	}
	return {
		type: "closePath",
	};
}
