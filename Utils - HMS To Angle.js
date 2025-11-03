//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: AE4716D8-E763-4457-9EFE-4B62483B8CAD
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [new PatchInput("HMS (String)", types.STRING, 0)];

patch.outputs = [new PatchOutput("Degree", types.NUMBER)];

// Add your logic in this function.
patch.evaluate = function () {
  patch.outputs[0].value = hmsToDecimalDegrees(patch.inputs[0].value);
};

return patch;

/**
 * Convert DMS (Degrees, Minutes, Seconds) to decimal degrees.
 * @param {string} dmsString - DMS string in the format "-000° 27' 44.28".
 * @returns {number} - Decimal degrees.
 */
function hmsToDecimalDegrees(hmsString) {
  const regex = /^([-+]?\d{1,3}):(\d{1,2}):([\d.]+)$/;
  const match = hmsString.match(regex);

  if (!match) {
    throw new Error("Invalid DMS string format");
  }

  const heures = parseFloat(match[1]) * 3600;
  const minutes = parseFloat(match[2]) * 60;
  const seconds = parseFloat(match[3]);

  // Calculer l'angle total en degrés
  var angleTotal = (heures + minutes + seconds) / 3600;

  return angleTotal;
}
