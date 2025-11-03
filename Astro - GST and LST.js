//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 05EA2AC1-A98C-41B7-87AB-D9FAC156E6B8
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Timestamp", types.NUMBER, 0),
  new PatchInput("Longitude", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("LST", types.NUMBER),
  new PatchOutput("GST", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function () {
  const timestamp = patch.inputs[0].value;
  const lon = patch.inputs[1].value;

  const JD = timestamp / 86400000 + 2440587.5;

  const gst = computeGST(JD);
  const lst = computeGST(gst, lon);

  patch.outputs[0].value = lst;
  patch.outputs[1].value = gst;
};

return patch;

function computeGST(date) {
  const jd = computeJulianDate(date);
  const T = (jd - 2451545.0) / 36525.0;
  const GST =
    280.46061837 +
    360.98564736629 * (jd - 2451545) +
    T * T * (0.000387933 - T / 38710000);
  return GST % 360;
}

function computeJulianDate(timestamp) {
  // Convert the timestamp from milliseconds to days
  const daysSinceUnixEpoch = timestamp / 86400000;
  // Unix epoch (1970-01-01) in Julian Date is 2440587.5
  const julianDate = daysSinceUnixEpoch + 2440587.5;
  return julianDate / 86400000 + 2440587.5;
}

function computeLST(gst, lon) {
  return (gst + lon) % 360;
}
