//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 4CEB2B75-8437-4903-A191-1948450920D6
//==============================================================================


// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Value", types.NUMBER, 0),
  new PatchInput("Value min", types.NUMBER, 0),
  new PatchInput("Value max", types.NUMBER, 0),
  new PatchInput("Output min", types.NUMBER, 0),
  new PatchInput("Output max", types.NUMBER, 0),
];


patch.outputs = [
  new PatchOutput("Output", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function() {
  let value = patch.inputs[0].value
  let vMin = patch.inputs[1].value
  let vMax = patch.inputs[2].value
  let outMin = patch.inputs[3].value
  let outMax = patch.inputs[4].value

  patch.outputs[0].value = map(value, vMin, vMax, outMin, outMax);
}

return patch;


function map(n, start1, stop1, start2, stop2, withinBounds) {
  const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if(!withinBounds) {
    return newval;
  }
  if(start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};

