//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: DAFD85C9-606C-4551-AB9B-9AE7F7614415
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("alt", types.NUMBER, 0),
  new PatchInput("az", types.NUMBER, 0),
  new PatchInput("latitude", types.NUMBER, 0),
  new PatchInput("longitude", types.NUMBER, 0),
  new PatchInput("lst", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Ra", types.NUMBER),
  new PatchOutput("Dec", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function () {
  const alt = patch.inputs[0].value;
  const az = patch.inputs[1].value;
  const lat = patch.inputs[2].value;
  const lon = patch.inputs[3].value;
  const lst = patch.inputs[4].value;

  const position = altAzToRaDec(alt, az, lat, lon, lst);

  patch.outputs[0].value = position.ra;
  patch.outputs[1].value = position.dec;
};

return patch;

function altAzToRaDec(alt, az, lat, lon, lst) {
  // Convert degrees to radians
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const toDegrees = (radians) => (radians * 180) / Math.PI;

  alt = toRadians(alt);
  az = toRadians(az);
  lat = toRadians(lat);
  lst = toRadians(lst);

  // Compute declination
  const sinDec =
    Math.sin(alt) * Math.sin(lat) +
    Math.cos(alt) * Math.cos(lat) * Math.cos(az);
  const dec = Math.asin(sinDec);

  // Compute hour angle
  const cosH =
    (Math.sin(alt) - Math.sin(lat) * Math.sin(dec)) /
    (Math.cos(lat) * Math.cos(dec));
  const ha = Math.acos(cosH);

  // Determine if the object is east or west of the meridian
  const azRadians = az > Math.PI ? 2 * Math.PI - az : az;
  const haFinal = az > Math.PI ? lst - ha : lst + ha;

  // Compute right ascension
  const ra = haFinal;

  return {
    ra: toDegrees(ra),
    dec: toDegrees(dec),
  };
}
