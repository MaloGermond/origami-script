//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 01953386-B536-4744-8BF3-8F5A715AEF33
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [new PatchInput("Sentence", types.STRING, "Hello World")];

patch.outputs = [new PatchOutput("Array", types.JSON)];

// Add your logic in this function.
patch.evaluate = function () {
  // Inputs
  const sentence = patch.inputs[0].value;
  const letters = sentence.split("");

  // Main Logic

  // Outputs
  patch.outputs[0].value = letters;
};

return patch;
