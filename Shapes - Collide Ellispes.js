//==============================================================================
// Welcome to scripting in Origami! Helpful links:
//
// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics
// Scripting API - https://origami.design/documentation/concepts/scriptingapi
//
// Script ID: D46358A5-F6B9-43ED-AFF8-623C9C6B5CCA
//==============================================================================

// Define your patch

var patch = new Patch();

// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true
// Setting this to true makes scripts very inefficient and should be avoided at all cost.
patch.alwaysNeedsToEvaluate = false;

// Set Inputs and Outputs.
patch.inputs = [
  new PatchInput("Ellipse 1 (position)", types.POSITION, 0),
  new PatchInput("Ellipse 1 (size)", types.SIZE, 0),
  new PatchInput("Ellipse 1 (angle)", types.NUMBER, 0),
  new PatchInput("Ellipse 2 (position)", types.POSITION, 0),
  new PatchInput("Ellipse 2 (size)", types.SIZE, 0),
  new PatchInput("Ellipse 2 (angle)", types.NUMBER, 0),
];

patch.outputs = [new PatchOutput("Output", types.BOOLEAN)];

// Add your logic in this function.
patch.evaluate = function () {
  const ellipse1Pos = patch.inputs[0].value;
  const ellipse1Size = patch.inputs[1].value;
  const ellipse1Angle = patch.inputs[2].value;

  const ellipse2Pos = patch.inputs[3].value;
  const ellipse2Size = patch.inputs[4].value;
  const ellipse2Angle = patch.inputs[5].value;

  const ellipse1 = {
    cx: ellipse1Pos.x,
    cy: ellipse1Pos.y,
    rx: ellipse1Size.x / 2,
    ry: ellipse1Size.y / 2,
    angle: ellipse1Angle * (Math.PI / 180),
  };

  const ellipse2 = {
    cx: ellipse2Pos.x,
    cy: ellipse2Pos.y,
    rx: ellipse2Size.x / 2,
    ry: ellipse2Size.y / 2,
    angle: ellipse2Angle * (Math.PI / 180),
  };

  patch.outputs[0].value = ellipsesCollide(ellipse1, ellipse2);
};

return patch;

function isPointInEllipse(px, py, ellipse) {
  const { cx, cy, rx, ry, angle } = ellipse;
  // rx and ry are the radius in x and y axes

  // Translate point to ellipse center
  const translatedX = px - cx;
  const translatedY = py - cy;

  // Rotate point in the opposite direction
  const cosAngle = Math.cos(-angle);
  const sinAngle = Math.sin(-angle);
  const rotatedX = translatedX * cosAngle - translatedY * sinAngle;
  const rotatedY = translatedX * sinAngle + translatedY * cosAngle;

  // Check if the point is inside the standard ellipse equation
  const ellipseEquation =
    (rotatedX * rotatedX) / (rx * rx) + (rotatedY * rotatedY) / (ry * ry);
  return ellipseEquation <= 1;
}

function sampleEllipsePerimeter(ellipse, numPoints = 100) {
  const { cx, cy, rx, ry, angle } = ellipse;
  const points = [];
  const angleStep = (2 * Math.PI) / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const theta = i * angleStep;
    const x = rx * Math.cos(theta);
    const y = ry * Math.sin(theta);

    // Rotate point to match ellipse's orientation
    const rotatedX = x * Math.cos(angle) - y * Math.sin(angle);
    const rotatedY = x * Math.sin(angle) + y * Math.cos(angle);

    // Translate point to ellipse's center
    points.push({ x: cx + rotatedX, y: cy + rotatedY });
  }

  return points;
}

function ellipsesCollide(ellipse1, ellipse2) {
  const points1 = sampleEllipsePerimeter(ellipse1);
  const points2 = sampleEllipsePerimeter(ellipse2);

  for (let point of points1) {
    if (isPointInEllipse(point.x, point.y, ellipse2)) {
      return true;
    }
  }

  for (let point of points2) {
    if (isPointInEllipse(point.x, point.y, ellipse1)) {
      return true;
    }
  }

  return false;
}
