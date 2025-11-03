//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: B336E38A-9A41-4AB6-A0BB-CF1E742A67AC
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Interaction Coordonate", types.POSITION),
  new PatchInput("Rectangle Position", types.POSITION),
  new PatchInput("Rectangle Size", types.SIZE),
  new PatchInput("Rectangle Angle", types.NUMBER),
];

patch.outputs = [new PatchOutput("Collide", types.BOOLEAN)];

// Add your logic in this function.
patch.evaluate = function () {
  const interactionPos = patch.inputs[0].value;
  const rectPos = patch.inputs[1].value;
  const rectSize = patch.inputs[2].value;
  const rectAngle = patch.inputs[3].value;

  const rect = {
    x: rectPos.x,
    y: rectPos.y,
    width: rectSize.x,
    height: rectSize.y,
    angle: rectAngle * (Math.PI / 180),
  };

  patch.outputs[0].value = collideRect(
    interactionPos.x,
    interactionPos.y,
    rect,
  );
};

return patch;

function collideRect(px, py, rect) {
  // function isPointInRotatedRectangle(px, py, rect) {
  const { x, y, width, height, angle } = rect;

  // Translate point back to origin
  const translatedX = px - x;
  const translatedY = py - y;

  // Rotate point in the opposite direction
  const cosAngle = Math.cos(-angle);
  const sinAngle = Math.sin(-angle);
  const rotatedX = translatedX * cosAngle - translatedY * sinAngle;
  const rotatedY = translatedX * sinAngle + translatedY * cosAngle;

  // Check if the rotated point is inside the axis-aligned rectangle
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  return (
    rotatedX >= -halfWidth &&
    rotatedX <= halfWidth &&
    rotatedY >= -halfHeight &&
    rotatedY <= halfHeight
  );
}
