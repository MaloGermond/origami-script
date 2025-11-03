
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
  new PatchInput("Drag", types.POSITION, 0),
  new PatchInput("Amount", types.NUMBER, 0),
  new PatchInput("Offset", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Array", types.JSON),
  new PatchOutput("Max scale", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function() {
  let position = patch.inputs[0].value
  let amount = patch.inputs[1].value
  let offset = patch.inputs[2].value

  let output = Array()


  for(var i = 0; i < amount; i++) {

    let offsetX = position.x * i * offset
    let offsetY = position.y * i * offset
    output.push({
      position: {
        x: offsetX,
        y: -offsetY
      },
      id: i,
      scale: 1 + i * offset,
      offset: offset
    })
  }

  // console.log(output)
  patch.outputs[0].value = output
  patch.outputs[1].value = 1 + amount * offset

}

return patch
