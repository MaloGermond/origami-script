//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 2AD16FD5-02B2-4FBF-B86B-65B435013933
//==============================================================================


// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("RA", types.NUMBER, 0),
  new PatchInput("DEC", types.NUMBER, 0),
  new PatchInput("Size", types.SIZE, { x: 400, y: 400 }),
  new PatchInput("Scale", types.NUMBER, 1),
  new PatchInput("Center", types.POSITION, { x: 200, y: 200 }),
];

patch.outputs = [
  new PatchOutput("Position", types.POSITION),
];

// Add your logic in this function.
patch.evaluate = function() {
  const ra = patch.inputs[0].value
  const dec = patch.inputs[1].value
  const size = patch.inputs[2].value
  const scale = patch.inputs[3].value
  const center = patch.inputs[4].value

  patch.outputs[0].value = raDecToXY(ra, dec, size.x, size.y, scale, center)
}

return patch;

// Function to project RA/Dec to X/Y using gnomonic projection
function raDecToXY(ra, dec, width, height, scale, center) {
  // Convert RA and Dec from degrees to radians
  let raRad = ra * (Math.PI / 180);
  let decRad = dec * (Math.PI / 180);

  // Center of the projection
  let centerX = center.x * (Math.PI / 180);
  let centerY = center.y * (Math.PI / 180);

  // Gnomonic projection formula
  let cosC = Math.sin(centerY) * Math.sin(decRad) + Math.cos(centerY) * Math.cos(decRad) * Math.cos(raRad - centerX);
  let x = (Math.cos(decRad) * Math.sin(raRad - centerX)) / cosC;
  let y = (Math.cos(centerY) * Math.sin(decRad) - Math.sin(centerY) * Math.cos(decRad) * Math.cos(raRad - centerX)) / cosC;

  // Scale and translate to canvas coordinates
  let projectedX = centerX - x * scale;
  let projectedY = centerY - y * scale;

  return { x: projectedX, y: projectedY };
}
