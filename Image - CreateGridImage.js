//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: B640CE8B-A2FE-44E0-8041-0DDD38A539FC
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Rows", types.NUMBER, 11),
  new PatchInput("Columns", types.NUMBER, 11),
  new PatchInput("Square Size", types.NUMBER, 10),
  new PatchInput("First Color", types.COLOR, { r: 0, g: 0, b: 0, a: 1.0 }),
  new PatchInput("Second Color", types.COLOR, {
    r: 1.0,
    g: 1.0,
    b: 1.0,
    a: 1.0,
  }),
];

patch.outputs = [new PatchOutput("", types.IMAGE)];

function drawRegion(img, startX, startY, size, color, primaryC, secondaryC) {
  let startI = startX * size;
  let startJ = startY * size;
  for (var i = startI; i < startI + size; i++) {
    for (var j = startJ; j < startJ + size; j++) {
      img.setPixelAt(i, j, color ? secondaryC : primaryC);
    }
  }
}

// Add your logic in this function.
patch.evaluate = function () {
  const rows = patch.inputs[0].value;
  const cols = patch.inputs[1].value;
  const squareSize = patch.inputs[2].value;
  const primaryColor = patch.inputs[3].value;
  const secondaryColor = patch.inputs[4].value;

  let change = 0;

  var image = new Image({
    width: cols * squareSize,
    height: rows * squareSize,
  });
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      // Handle partity.
      if (rows % 2 == 0 && j == 0) {
        change++;
      }
      drawRegion(
        image,
        i,
        j,
        squareSize,
        change++ % 2,
        primaryColor,
        secondaryColor,
      );
    }
  }

  patch.outputs[0].value = image;
};

return patch;
