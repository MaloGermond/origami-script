//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 6A979327-FBBE-4A72-92B4-A973616642AD
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [new PatchInput("Input", types.IMAGE)];

patch.outputs = [new PatchOutput("Output", types.IMAGE)];

function grayScaleColor(color) {
  return 0.299 * color.x + 0.587 * color.y + 0.114 * color.z;
}

// Add your logic in this function.
patch.evaluate = function () {
  const img = patch.inputs[0].value;

  if (img.width > 0 && img.height > 0) {
    let newImage = new Image({ width: img.width, height: img.height });
    for (let i = 0; i < img.width; i++) {
      for (let j = 0; j < img.height; j++) {
        const pixel = img.getPixelAt(i, j);
        const gray = grayScaleColor(pixel);
        newImage.setPixelAt(i, j, { r: gray, g: gray, b: gray, a: 1.0 });
      }
    }

    patch.outputs[0].value = newImage;
  } else {
    patch.outputs[0].value = 0;
  }
};

return patch;
