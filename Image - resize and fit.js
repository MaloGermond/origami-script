//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: AD735FE8-21C9-4158-B607-DC2241B3A1FD
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("", types.IMAGE, 0),
  new PatchInput("Size", types.SIZE, { x: 512, y: 512 }),
  new PatchInput("Settings", types.ENUM, 0, [
    "Exact Size",
    "Aspect Fit",
    "Max: Keep Aspect",
  ]),
];

patch.outputs = [new PatchOutput("", types.IMAGE)];

function aspectFitFromSize(naturalSize, targetSize) {
  let targetRatio = targetSize.x / targetSize.y;
  let naturalRatio = naturalSize.x / naturalSize.y;

  if (targetRatio > naturalRatio) {
    let hScale = targetSize.y / naturalSize.y;
    return { x: Math.ceil(naturalSize.x * hScale), y: targetSize.y };
  } else {
    let wScale = targetSize.x / naturalSize.x;
    return { x: targetSize.x, y: Math.ceil(naturalSize.y * wScale) };
  }
}

// Add your logic in this function.
patch.evaluate = function () {
  const inputImage = patch.inputs[0].value;
  const size = patch.inputs[1].value;
  const options = patch.inputs[2].value;
  const naturalSize = { x: inputImage.width, y: inputImage.height };
  if (naturalSize.x > 0 && naturalSize.y > 0 && size.x > 0 && size.y > 0) {
    // Resizing the image.
    if (0 === options) {
      patch.outputs[0].value = new Image(inputImage, size);
    } else if (1 === options) {
      patch.outputs[0].value = new Image(
        inputImage,
        aspectFitFromSize(naturalSize, size),
      );
    } else if (2 === options) {
      if (naturalSize.x > size.x || naturalSize.y > size.y) {
        patch.outputs[0].value = new Image(
          inputImage,
          aspectFitFromSize(naturalSize, size),
        );
      } else {
        patch.outputs[0].value = inputImage;
      }
    }
  } else {
    patch.outputs[0].value = 0;
  }
};

return patch;
