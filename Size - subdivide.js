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
  new PatchInput("Size", types.SIZE, 0),
];

patch.outputs = [
  new PatchOutput("Size", types.SIZE),
];

// Add your logic in this function.
patch.evaluate = function() {
  const size = patch.inputs[0].value
  const output ={
    x: size.x>=size.y? size.x/2 : size.x,
    y: size.x<size.y? size.y/2 : size.y
  }
  patch.outputs[0].value = output;
}

return patch;