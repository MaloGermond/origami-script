//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 2E25E04E-3A04-4194-B0AB-15E38A8C04D4
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Position", types.POSITION, { x: 100, y: 100 }),
  new PatchInput("Radius", types.NUMBER, 50),
  new PatchInput("Start Angle", types.NUMBER, 0),
  new PatchInput("Offset Angle", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Position", types.POSITION),
  new PatchOutput("Angle", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function () {
  const pos = patch.inputs[0].value;
  const radius = patch.inputs[1].value;
  const startAngle = patch.inputs[2].value;
  const offsetAngle = patch.inputs[3].value;

  const projectPos = getPositionOnCircle(pos.x, pos.y, radius, startAngle);
  const projectAngle =
    (Math.atan2(projectPos.y - pos.y, projectPos.x - pos.x) * 180) / Math.PI;

  patch.outputs[0].value = projectPos;
  patch.outputs[1].value = projectAngle + offsetAngle;
};

return patch;

function getPositionOnCircle(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = angleInDegrees * (Math.PI / 180);
  const x = centerX + radius * Math.cos(angleInRadians);
  const y = centerY + radius * Math.sin(angleInRadians);
  return { x, y };
}
