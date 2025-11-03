//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: BE6EF94F-0ECC-46CC-A8F6-39BE917A97BD
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Year", types.NUMBER, 0),
  new PatchInput("Month", types.NUMBER, 0),
  new PatchInput("day", types.NUMBER, 0),
  new PatchInput("hour", types.NUMBER, 0),
  new PatchInput("minute", types.NUMBER, 0),
  new PatchInput("second", types.NUMBER, 0),
  new PatchInput("latitude_deg", types.NUMBER, 0),
  new PatchInput("longitude_deg", types.NUMBER, 0),
  new PatchInput("ra", types.NUMBER),
  new PatchInput("dec", types.NUMBER),
  new PatchInput("j2000", types.BOOLEAN, 0),
];

patch.outputs = [
  new PatchOutput("Alt_deg", types.NUMBER),
  new PatchOutput("Az_deg", types.NUMBER),
];

// Add your logic in this function.
patch.evaluate = function () {
  const year = patch.inputs[0].value;
  const month = patch.inputs[1].value;
  const day = patch.inputs[2].value;
  const hour = patch.inputs[3].value;
  const minute = patch.inputs[4].value;
  const second = patch.inputs[5].value;
  const latitude_deg = patch.inputs[6].value;
  const longitude_deg = patch.inputs[7].value;
  const ra = patch.inputs[8].value;
  const dec = patch.inputs[9].value;
  const j2000 = patch.inputs[10].value;

  const output = rd2aa(
    year,
    month,
    day,
    hour,
    minute,
    second,
    latitude_deg,
    longitude_deg,
    ra,
    dec,
    j2000,
  );

  patch.outputs[0].value = output[0];
  patch.outputs[1].value = output[1];

  //rd2aa(year, month, day, hour, minute, second, latitude_deg, longitude_deg, ra_deg, dec_deg, j2000 = true)
};

return patch;

function deg2degms(degrees) {
  let dd = degrees % (360 * Math.sign(degrees));
  let ddd = modf(dd);
  if (isNaN(ddd[1])) {
    return null;
  }
  let d = parseInt(ddd[1]);
  let dm = modf(ddd[0] * 60);
  let m = parseInt(Math.abs(dm[1]));
  let s = parseFloat(Math.abs(dm[0] * 60));
  if (s < 1e-10) {
    s = 0;
  }
  return [d, m, s];
}

function deg2hms(degrees) {
  let d = degrees % 360;
  let dh = modf(d / 15);
  let h = parseInt(dh[1]);
  let dm = modf(dh[0] * 60);
  let m = parseInt(dm[1]);
  let s = parseFloat(dm[0] * 60);
  if (s < 1e-10) {
    s = 0;
  }
  return [h, m, s];
}

function degms2deg(sgn, degrees, minutes, seconds) {
  let mm2deg = minutes / 60;
  let ss2deg = seconds / 3600;
  let deg = degrees + mm2deg + ss2deg;
  return (sgn / Math.abs(sgn)) * deg;
}

function hms2deg(hours, minutes, seconds) {
  let hh2deg = hours * (360 / 24);
  let mm2deg = minutes * (360 / (24 * 60));
  let ss2deg = seconds * (360 / (24 * 60 * 60));
  let deg = hh2deg + mm2deg + ss2deg;
  return deg;
}

function compute_UT_h(hour, minute, second) {
  return hour + minute / 60 + second / 3600;
}

function compute_UT_frac(hour, minute, second) {
  return compute_UT_h(hour, minute, second) / 24;
}

function compute_JD0(year, month, day) {
  let JD0 = 367 * year;
  JD0 += -parseInt((7 * (year + parseInt((month + 9) / 12))) / 4);
  JD0 += parseInt((275 * month) / 9);
  JD0 += day;
  JD0 += 1721013.5;
  return JD0;
}

function compute_JD(year, month, day, hour, minute, second) {
  return compute_JD0(year, month, day) + compute_UT_frac(hour, minute, second);
}

function compute_LAST_deg(year, month, day, hour, minute, second, longitude) {
  let UT_h = compute_UT_h(hour, minute, second);
  let JD0 = compute_JD0(year, month, day);
  let JD = compute_JD(year, month, day, hour, minute, second);
  let D0 = JD0 - 2451545;
  let D = JD - 2451545;
  let GMST_deg =
    6.697374558 +
    0.06570982441908 * D0 +
    1.00273790935 * UT_h +
    0.000026 * Math.pow(D / 36525, 2);
  let omega_rad = ((125.04 - 0.052954 * D) * Math.PI) / 180;
  let L_rad = ((280.47 + 0.98565 * D) * Math.PI) / 180;
  let dPsi = -0.000319 * Math.sin(omega_rad) - 0.000024 * Math.sin(2 * L_rad);
  let epsilon_rad = ((23.4393 - 0.0000004 * D) * Math.PI) / 180;
  let eqeq_h = dPsi * Math.cos(epsilon_rad);
  let GAST_h = (GMST_deg % 24) + eqeq_h;
  let LAST_h = GAST_h + longitude / 15;
  return LAST_h * 15;
}

function rd2aa(
  year,
  month,
  day,
  hour,
  minute,
  second,
  latitude_deg,
  longitude_deg,
  ra_deg,
  dec_deg,
  j2000 = true,
) {
  if (j2000) {
    let JD = compute_JD(year, month, day, hour, minute, second);
    let JD2000 = compute_JD(2000, 1, 1, 12, 0, 0);
    let result = precess(ra_deg, dec_deg, JD2000, JD);
    ra_deg = result[0];
    dec_deg = result[1];
  }
  let latitude_rad = (latitude_deg * Math.PI) / 180;
  let dec_rad = (dec_deg * Math.PI) / 180;
  let LAST_deg = compute_LAST_deg(
    year,
    month,
    day,
    hour,
    minute,
    second,
    longitude_deg,
  );
  let H_deg = LAST_deg - ra_deg;
  let H_rad = (H_deg * Math.PI) / 180;

  let alt_rad = Math.asin(
    Math.sin(latitude_rad) * Math.sin(dec_rad) +
      Math.cos(latitude_rad) * Math.cos(dec_rad) * Math.cos(H_rad),
  );
  let alt_deg = (alt_rad * 180) / Math.PI;
  let az_rad = Math.atan2(
    -Math.sin(H_rad),
    Math.tan(dec_rad) * Math.cos(latitude_rad) -
      Math.sin(latitude_rad) * Math.cos(H_rad),
  );
  let az_deg = (az_rad * 180) / Math.PI;

  return [alt_deg, (az_deg + 360) % 360];
}

function precess(ra0_deg, dec0_deg, JD0, JD1) {
  let ra0_rad = (ra0_deg * Math.PI) / 180;
  let dec0_rad = (dec0_deg * Math.PI) / 180;
  let T = (JD0 - 2451545.0) / 36525;
  let t = (JD1 - JD0) / 36525;
  let ksi =
    (2306.2181 + 1.39656 * T - 0.000139 * Math.pow(T, 2)) * t +
    (0.30188 - 0.000344 * T) * Math.pow(t, 2) +
    0.017998 * Math.pow(t, 3);
  let zeta =
    (2306.2181 + 1.39656 * T - 0.000139 * Math.pow(T, 2)) * t +
    (1.09468 + 0.000066 * T) * Math.pow(t, 2) +
    0.018203 * Math.pow(t, 3);
  let theta =
    (2004.3109 - 0.8533 * T - 0.000217 * Math.pow(T, 2)) * t -
    (0.42665 + 0.000217 * T) * Math.pow(t, 2) -
    0.041833 * Math.pow(t, 3);
  ksi *= 1 / 3600;
  zeta *= 1 / 3600;
  theta *= 1 / 3600;
  ksi *= Math.PI / 180;
  zeta *= Math.PI / 180;
  theta *= Math.PI / 180;
  let A = Math.cos(dec0_rad) * Math.sin(ra0_rad + ksi);
  let B =
    Math.cos(theta) * Math.cos(dec0_rad) * Math.cos(ra0_rad + ksi) -
    Math.sin(theta) * Math.sin(dec0_rad);
  let C =
    Math.sin(theta) * Math.cos(dec0_rad) * Math.cos(ra0_rad + ksi) +
    Math.cos(theta) * Math.sin(dec0_rad);
  let ra_rad = Math.atan2(A, B) + zeta;
  let notNorthPole =
    dec0_rad > 0 && Math.abs(dec0_rad - Math.PI / 2) > (5 * Math.PI) / 180;
  let notSouthPole =
    dec0_rad < 0 && Math.abs(-Math.PI / 2 - dec0_rad) > (5 * Math.PI) / 180;
  let notPole = notNorthPole && notSouthPole;
  let dec_rad = Math.acos(Math.sqrt(A ** 2 + B ** 2));
  if (notPole) {
    dec_rad = Math.asin(C);
  } else {
    dec_rad = 0;
  }
  dec_rad *= Math.sign(dec0_rad);
  return [(ra_rad * 180) / Math.PI, (dec_rad * 180) / Math.PI];
}

function modf(x) {
  let frac = x % 1;
  let integer = x - frac;
  return [frac, integer];
}
