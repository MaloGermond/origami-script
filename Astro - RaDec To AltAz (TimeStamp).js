//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: 16748158-D0FB-42E3-AE8D-4ACED014D99B
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Ra/Dec (Objet)", types.JSON, 0),
  new PatchInput("Latitude (Number)", types.NUMBER, 0),
  new PatchInput("Longitude (Number)", types.NUMBER, 0),
  new PatchInput("Timestamp (Number)", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Alt/Az (Objet)", types.JSON),
  new PatchOutput("Alt (Degrees)", types.NUMBER),
  new PatchOutput("Az (Degrees)", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function () {
  const pos = patch.inputs[0].value;
  const lat = patch.inputs[1].value;
  const long = patch.inputs[2].value;
  const UTC = patch.inputs[3].value;

  const altAz = radecToAltAz(
    lat * (Math.PI / 180),
    long * (Math.PI / 180),
    pos.ra * (Math.PI / 180),
    pos.dec * (Math.PI / 180),
    UTC,
  );

  patch.outputs[0].value = altAz;
  patch.outputs[1].value = altAz.altitude;
  patch.outputs[2].value = altAz.azimuth;
};

return patch;

/*
 * Convert Ra/Dec to Altitude and Azimuth
 *
 * @param {number} ra - Right Ascension in radians on Date.
 * @param {number} dec - Declination in radians on Date.
 * @param {number} lat - Observer's latitude in radians.
 * @param {number} lon - Observer's longitude in radians (west longitudes are negative).
 * @param {number} Time - Timestamps in UTC.
 * @returns {Object} - {{number} Azimuth, {number} Altitude}. -  Azimut and Altitude are in degrees
 */

function radecToAltAz(latitude, longitude, ra, dec, time) {
  // Convert timestamps to times elapsed from julian day
  //Not valid for dates before Oct 15, 1582
  const jd = time / 86400000 + 2440587.5;

  //Meeus 13.5 and 13.6, modified so West longitudes are negative and 0 is North
  const gmst = GMST(jd);
  let localSiderealTime = (gmst + longitude) % (2 * Math.PI);

  let H = localSiderealTime - ra;
  if (H < 0) {
    H += 2 * Math.PI;
  }
  if (H > Math.PI) {
    H = H - 2 * Math.PI;
  }

  let az = Math.atan2(
    Math.sin(H),
    Math.cos(H) * Math.sin(latitude) - Math.tan(dec) * Math.cos(latitude),
  );
  let alt = Math.asin(
    Math.sin(latitude) * Math.sin(dec) +
      Math.cos(latitude) * Math.cos(dec) * Math.cos(H),
  );

  az -= Math.PI;

  if (az < 0) {
    az += 2 * Math.PI;
  }

  alt = alt / (Math.PI / 180);
  az = az / (Math.PI / 180);

  return { altitude: alt, azimuth: az };
}

/**
 * Calculate Greenwich Mean Sidereal Time.
 * @param {number} jd - Julian Date.
 * @returns {number} - Greenwich Mean Sidereal Time in radians.
 */

function GMST(jd) {
  //"Expressions for IAU 2000 precession quantities" N. Capitaine1,P.T.Wallace2, and J. Chapront
  const t = (jd - 2451545.0) / 36525.0;

  let gmst =
    earthRotationAngle(jd) +
    (((0.014506 +
      4612.156534 * t +
      1.3915817 * t * t -
      0.00000044 * t * t * t -
      0.000029956 * t * t * t * t -
      0.0000000368 * t * t * t * t * t) /
      60.0 /
      60.0) *
      Math.PI) /
      180.0; //eq 42
  gmst %= 2 * Math.PI;
  if (gmst < 0) gmst += 2 * Math.PI;

  return gmst;
}

/**
 * Calculate Earth Rotation Angle.
 * @param {number} jd - Julian Date.
 * @returns {number} - Earth Rotation Angle in radians.
 */
function earthRotationAngle(jd) {
  //IERS Technical Note No. 32

  const t = jd - 2451545.0;
  const f = jd % 1.0;

  let theta = 2 * Math.PI * (f + 0.779057273264 + 0.00273781191135448 * t); //eq 14
  theta %= 2 * Math.PI;
  if (theta < 0) theta += 2 * Math.PI;

  return theta;
}
