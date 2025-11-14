/**
 * ⚓️ AnchorToPositionConverter
 *
 * Convertit une position d'origine en une nouvelle position en fonction d'un ancrage (anchor) et d'une taille.
 * Utile pour repositionner dynamiquement des éléments en fonction de leur point d'ancrage (ex. : top-left, center, bottom-right).
 * Inspiré des systèmes de layout en design UI/UX.
 *
 * @input {Position} Position - Position de référence (coordonnées x, y).
 * @input {Size} Size - Taille de l'élément (largeur, hauteur).
 * @input {Anchor} Anchor - Point d'ancrage normalisé (valeurs entre 0 et 1 pour x et y).
 * @output {Position} Convert - Nouvelle position calculée en fonction de l'ancrage et de la taille.
 *
 * Exemple : Un ancrage (0.5, 0.5) centrera l'élément par rapport à sa position initiale.
 */

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
	new PatchInput("Position", types.POSITION),
	new PatchInput("Size", types.SIZE),
	new PatchInput("Anchor", types.ANCHOR),
];

patch.outputs = [new PatchOutput("Convert", types.POSITION)];

// Add your logic in this function.
patch.evaluate = function () {
	const pos = patch.inputs[0].value;
	const size = patch.inputs[1].value;
	const anchor = patch.inputs[2].value;

	const output = { x: pos.x + size.x * anchor.x, y: pos.y + size.y * anchor.y };
	patch.outputs[0].value = output;
};

return patch;
