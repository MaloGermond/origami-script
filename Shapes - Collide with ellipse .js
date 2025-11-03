//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 62776704-986F-45FF-9D23-1446D325D690
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Target Postion", types.POSITION),
  new PatchInput("Circle Position", types.POSITION),
  new PatchInput("Circle Size", types.SIZE),
  new PatchInput("Angle", types.NUMBER, 0),
];

patch.outputs = [new PatchOutput("Output", types.BOOLEAN)];

// Add your logic in this function.
patch.evaluate = function () {
  const target = patch.inputs[0].value;
  const ellipsePos = patch.inputs[1].value;
  const ellipseSize = patch.inputs[2].value;
  const ellipseAngle = patch.inputs[3].value;

  const ellipse = {
    cx: ellipsePos.x,
    cy: ellipsePos.y,
    rx: ellipseSize.x / 2,
    ry: ellipseSize.y / 2,
    angle: ellipseAngle * (Math.PI / 180),
  };

  patch.outputs[0].value = collideCircle(target.x, target.y, ellipse);
};

return patch;

function collideCircle(px, py, ellipse) {
  const { cx, cy, rx, ry, angle } = ellipse;
  console.log(cx);
  // Translate point to ellipse center
  const translatedX = px - cx;
  const translatedY = py - cy;

  // Rotate point in the opposite direction
  const cosAngle = Math.cos(-angle);
  const sinAngle = Math.sin(-angle);
  const rotatedX = translatedX * cosAngle - translatedY * sinAngle;
  const rotatedY = translatedX * sinAngle + translatedY * cosAngle;

  // Check if the point is inside the standard ellipse equation
  const ellipseEquation =
    (rotatedX * rotatedX) / (rx * rx) + (rotatedY * rotatedY) / (ry * ry);
  return ellipseEquation <= 1;
}
