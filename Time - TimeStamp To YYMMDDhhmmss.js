//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: B919462B-66C4-47CB-972B-73628C1B84FB
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [new PatchInput("Timestamps ", types.NUMBER, 0)];

patch.outputs = [
  new PatchOutput("year", types.NUMBER),
  new PatchOutput("month", types.NUMBER),
  new PatchOutput("day", types.NUMBER),
  new PatchOutput("hours", types.NUMBER),
  new PatchOutput("minutes", types.NUMBER),
  new PatchOutput("seconds", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function () {
  const current = new Date(patch.inputs[0].value);

  const time = new Date();

  patch.outputs[0].value = time.getUTCFullYear();
  patch.outputs[1].value = time.getUTCMonth() + 1;
  patch.outputs[2].value = time.getUTCDate();
  patch.outputs[3].value = time.getUTCHours();
  patch.outputs[4].value = time.getMinutes();
  patch.outputs[5].value = time.getSeconds();
};

return patch;
