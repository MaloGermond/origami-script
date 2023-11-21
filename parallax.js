//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 2CBD541A-E9FA-487B-9B79-BEB5B8206034
//==============================================================================


// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Input", types.value, 0),
];

patch.outputs = [
  new PatchOutput("Output", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function() {
  console.log(patch.outputs[0].value )
  patch.outputs[0].value = patch.inputs[0].value;
}

return patch

function parallaxe(){
  
}

