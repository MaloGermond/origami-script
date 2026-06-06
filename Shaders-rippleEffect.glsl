// SKSL Shader
// Standard uniforms:
//   iResolution = Layer size in pixels (width, height, 0)




uniform float2 origin;      // Center point of the ripple
uniform float time;          // Elapsed time
uniform float amplitude;     // Peak wave displacement
uniform float frequency;     // Wave oscillation rate
uniform float decay;         // Exponential falloff rate
uniform float speed;         // Propagation speed of the ripple

half4 main(float2 position) {
    // The distance of the current pixel position from `origin`.
    float distance = length(position - origin);

    // The amount of time it takes for the ripple to arrive at
    // the current pixel position.
    float delay = distance / speed;

    // Adjust for delay, clamp to 0.
    float t = max(0.0, time - delay);

    // The ripple is a sine wave scaled by an exponential decay function.
    float rippleAmount = amplitude * sin(frequency * t) * exp(-decay * t);

    // A unit vector pointing away from the origin.
    float2 n = normalize(position - origin);

    // Offset the sample position along that vector by the ripple amount.
    float2 newPosition = position + rippleAmount * n;

    // Sample the child shader at the displaced position.
    half4 color = iImage1.eval(newPosition);

    // Lighten or darken the color based on the ripple amount,
    // modulated by alpha to respect transparency.
    color.rgb += 0.3 * (rippleAmount / amplitude) * color.a;

    return color;
}
