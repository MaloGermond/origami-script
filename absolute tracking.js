//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: C6D65E6D-D72B-48B8-A5B5-7FCD65F8C63B
//==============================================================================


// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("trigger", types.BOOLEAN, 0),
  new PatchInput("Position", types.POSITION, 0),
  new PatchInput("Limit", types.SIZE, 0),
  new PatchInput("Size", types.SIZE, 0)
];

patch.outputs = [
  new PatchOutput("Output", types.POSITION),
];

// Add your logic in this function.
patch.evaluate = function() {
  let trigger = patch.inputs[0].value
  let pos = patch.inputs[1].value
  let lim = patch.inputs[2].value
  let size = patch.inputs[3].value

  let output = {
    "x": 0,
    "y": pos.y + lim.y / 2 - size.y / 2
  }
  //console.log(output)
  patch.outputs[0].value = output
}

return patch;
