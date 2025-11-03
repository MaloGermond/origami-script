//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: C8274D0F-D44E-4E1B-9237-C422B5DF3BAE
//==============================================================================

// Bien faire matcher les Anchors de chaque forme.
// TODO
// - Ajouter le check Anchor ?

var patch = new Patch();
patch.alwaysNeedsToEvaluate = false;

patch.inputs = [
  new PatchInput("Object position", types.POSITION, { x: 0, y: 0 }),
  new PatchInput("Target position", types.POSITION, { x: 0, y: 0 }),
  new PatchInput("Offset", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Radian", types.NUMBER),
  new PatchOutput("Degree", types.NUMBER),
];

patch.evaluate = function () {
  let elPos = patch.inputs[0].value;
  let targetPos = patch.inputs[1].value;
  let offset = patch.inputs[2].value;

  let pi = Math.PI;

  // Calcul de la différence entre les positions
  let dy = targetPos.y - elPos.y;
  let dx = targetPos.x - elPos.x;

  // Calcul de l'angle en radians (atan2(dy, dx))
  let radian = Math.atan2(dy, dx);

  // Conversion en degrés et application de l'offset
  let degree = radian * (180 / pi) + offset;

  patch.outputs[0].value = radian;
  patch.outputs[1].value = degree;
};

return patch;
