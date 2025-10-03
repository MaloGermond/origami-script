//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
//==============================================================================
// Define your patch
var patch = new Patch();
// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Intensity", types.NUMBER, 0.5),
  new PatchInput("Sharpness", types.NUMBER, 0.5),
];

patch.outputs = [new PatchOutput("HapticJSON", types.JSON)];

// Add your logic in this function.
patch.evaluate = function () {
  // Get input values - clamp between 0 and 1 for safety
  const intensity = Math.max(0, Math.min(1, patch.inputs[0].value));
  const sharpness = Math.max(0, Math.min(1, patch.inputs[1].value));

  // Create haptic JSON with the direct input values
  const hapticJSON = {
    Pattern: [
      {
        Event: {
          EventParameters: [
            {
              ParameterID: "HapticIntensity",
              ParameterValue: intensity,
            },
            {
              ParameterID: "HapticSharpness",
              ParameterValue: sharpness,
            },
          ],
          EventType: "HapticTransient",
          Time: 0,
        },
      },
    ],
    Version: 1,
  };

  // Set the output to the haptic JSON
  patch.outputs[0].value = hapticJSON;
};

return patch;
