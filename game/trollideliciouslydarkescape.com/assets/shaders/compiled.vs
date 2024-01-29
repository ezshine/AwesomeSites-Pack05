{@}UICircleShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uProgress;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    float dist = length( vUv - vec2( 0.5 ));
    float edge = ( 1.0 - uProgress ) * 0.5;
    edge = sqrt( pow( edge, 2.0 ) * 2.0 );

    float border = 0.001;
    float alpha = crange( dist, edge - border, edge, 0.0, 1.0 ) * uAlpha;
    gl_FragColor = vec4(uColor, alpha);
}{@}UIVignette.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec2 uFalloff;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    vec3 color = uColor;
    float dist = length( vUv - vec2( 0.5 )) + getNoise( vUv, time ) * 0.1;
    float alpha = crange( dist, uFalloff.x * 0.5, uFalloff.y * 0.5, 1.0, 0.0 );

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha * uAlpha;
}{@}AntimatterCopy.fs{@}uniform sampler2D tDiffuse;

varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
}{@}AntimatterCopy.vs{@}varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}AntimatterPass.vs{@}varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}AntimatterPosition.vs{@}uniform sampler2D tPos;

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}{@}AntimatterBasicFrag.fs{@}void main() {
    gl_FragColor = vec4(1.0);
}{@}antimatter.glsl{@}vec3 getData(sampler2D tex, vec2 uv) {
    return texture2D(tex, uv).xyz;
}

vec4 getData4(sampler2D tex, vec2 uv) {
    return texture2D(tex, uv);
}

{@}blendmodes.glsl{@}float blendColorDodge(float base, float blend) {
    return (blend == 1.0)?blend:min(base/(1.0-blend), 1.0);
}
vec3 blendColorDodge(vec3 base, vec3 blend) {
    return vec3(blendColorDodge(base.r, blend.r), blendColorDodge(base.g, blend.g), blendColorDodge(base.b, blend.b));
}
vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendColorBurn(float base, float blend) {
    return (blend == 0.0)?blend:max((1.0-((1.0-base)/blend)), 0.0);
}
vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r, blend.r), blendColorBurn(base.g, blend.g), blendColorBurn(base.b, blend.b));
}
vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendVividLight(float base, float blend) {
    return (blend<0.5)?blendColorBurn(base, (2.0*blend)):blendColorDodge(base, (2.0*(blend-0.5)));
}
vec3 blendVividLight(vec3 base, vec3 blend) {
    return vec3(blendVividLight(base.r, blend.r), blendVividLight(base.g, blend.g), blendVividLight(base.b, blend.b));
}
vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendHardMix(float base, float blend) {
    return (blendVividLight(base, blend)<0.5)?0.0:1.0;
}
vec3 blendHardMix(vec3 base, vec3 blend) {
    return vec3(blendHardMix(base.r, blend.r), blendHardMix(base.g, blend.g), blendHardMix(base.b, blend.b));
}
vec3 blendHardMix(vec3 base, vec3 blend, float opacity) {
    return (blendHardMix(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearDodge(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendLinearDodge(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearBurn(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendLinearBurn(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearLight(float base, float blend) {
    return blend<0.5?blendLinearBurn(base, (2.0*blend)):blendLinearDodge(base, (2.0*(blend-0.5)));
}
vec3 blendLinearLight(vec3 base, vec3 blend) {
    return vec3(blendLinearLight(base.r, blend.r), blendLinearLight(base.g, blend.g), blendLinearLight(base.b, blend.b));
}
vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLighten(float base, float blend) {
    return max(blend, base);
}
vec3 blendLighten(vec3 base, vec3 blend) {
    return vec3(blendLighten(base.r, blend.r), blendLighten(base.g, blend.g), blendLighten(base.b, blend.b));
}
vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}
float blendDarken(float base, float blend) {
    return min(blend, base);
}
vec3 blendDarken(vec3 base, vec3 blend) {
    return vec3(blendDarken(base.r, blend.r), blendDarken(base.g, blend.g), blendDarken(base.b, blend.b));
}
vec3 blendDarken(vec3 base, vec3 blend, float opacity) {
    return (blendDarken(base, blend) * opacity + base * (1.0 - opacity));
}
float blendPinLight(float base, float blend) {
    return (blend<0.5)?blendDarken(base, (2.0*blend)):blendLighten(base, (2.0*(blend-0.5)));
}
vec3 blendPinLight(vec3 base, vec3 blend) {
    return vec3(blendPinLight(base.r, blend.r), blendPinLight(base.g, blend.g), blendPinLight(base.b, blend.b));
}
vec3 blendPinLight(vec3 base, vec3 blend, float opacity) {
    return (blendPinLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendReflect(float base, float blend) {
    return (blend == 1.0)?blend:min(base*base/(1.0-blend), 1.0);
}
vec3 blendReflect(vec3 base, vec3 blend) {
    return vec3(blendReflect(base.r, blend.r), blendReflect(base.g, blend.g), blendReflect(base.b, blend.b));
}
vec3 blendReflect(vec3 base, vec3 blend, float opacity) {
    return (blendReflect(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendGlow(vec3 base, vec3 blend) {
    return blendReflect(blend, base);
}
vec3 blendGlow(vec3 base, vec3 blend, float opacity) {
    return (blendGlow(base, blend) * opacity + base * (1.0 - opacity));
}
float blendOverlay(float base, float blend) {
    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
    return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
}
vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendHardLight(vec3 base, vec3 blend) {
    return blendOverlay(blend, base);
}
vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendPhoenix(vec3 base, vec3 blend) {
    return min(base, blend)-max(base, blend)+vec3(1.0);
}
vec3 blendPhoenix(vec3 base, vec3 blend, float opacity) {
    return (blendPhoenix(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
}
vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNegation(vec3 base, vec3 blend) {
    return vec3(1.0)-abs(vec3(1.0)-base-blend);
}
vec3 blendNegation(vec3 base, vec3 blend, float opacity) {
    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}
vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendAverage(vec3 base, vec3 blend) {
    return (base+blend)/2.0;
}
vec3 blendAverage(vec3 base, vec3 blend, float opacity) {
    return (blendAverage(base, blend) * opacity + base * (1.0 - opacity));
}
float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}
vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r, blend.r), blendScreen(base.g, blend.g), blendScreen(base.b, blend.b));
}
vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSoftLight(float base, float blend) {
    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}
vec3 blendSoftLight(vec3 base, vec3 blend) {
    return vec3(blendSoftLight(base.r, blend.r), blendSoftLight(base.g, blend.g), blendSoftLight(base.b, blend.b));
}
vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSubtract(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendSubtract(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendSubtract(vec3 base, vec3 blend, float opacity) {
    return (blendSubtract(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendExclusion(vec3 base, vec3 blend) {
    return base+blend-2.0*base*blend;
}
vec3 blendExclusion(vec3 base, vec3 blend, float opacity) {
    return (blendExclusion(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendDifference(vec3 base, vec3 blend) {
    return abs(base-blend);
}
vec3 blendDifference(vec3 base, vec3 blend, float opacity) {
    return (blendDifference(base, blend) * opacity + base * (1.0 - opacity));
}
float blendAdd(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendAdd(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
    return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}{@}BloomBlur.fs{@}uniform vec2 uResolution;
uniform vec2 uDir;
uniform float uStrength;

#require(gaussianblur.fs)

void main() {
    gl_FragColor = blur5(tDiffuse, vUv, uResolution, uDir) * uStrength;
}{@}BloomPass.fs{@}#require(bloom.fs)

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
    applyBloom(gl_FragColor, vUv);
}{@}BloomQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uBloomMinLuma;

#!VARYINGS
varying vec2 vUv;

#!SHADER: BloomQuad.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: BloomQuad.fs

#require(luma.fs)

void main() {
    gl_FragColor = texture2D(tMap, vUv);

    gl_FragColor *= step(uBloomMinLuma, luma(gl_FragColor));
}{@}bloom.fs{@}uniform sampler2D tBloom0;
uniform sampler2D tBloom1;
uniform sampler2D tBloom2;
uniform sampler2D tBloom3;
uniform float uBloomAddStrength;

void applyBloom(inout vec4 texel, vec2 uv) {
    vec3 c = vec3(0.0);
    c += texture2D(tBloom0, uv).rgb;
    c += texture2D(tBloom1, uv).rgb;
    c += texture2D(tBloom2, uv).rgb;
    c += texture2D(tBloom3, uv).rgb;

    c = clamp(c, 0.0, 1.0);

    texel.rgb += c * uBloomAddStrength;
}{@}conditionals.glsl{@}vec4 when_eq(vec4 x, vec4 y) {
  return 1.0 - abs(sign(x - y));
}

vec4 when_neq(vec4 x, vec4 y) {
  return abs(sign(x - y));
}

vec4 when_gt(vec4 x, vec4 y) {
  return max(sign(x - y), 0.0);
}

vec4 when_lt(vec4 x, vec4 y) {
  return max(sign(y - x), 0.0);
}

vec4 when_ge(vec4 x, vec4 y) {
  return 1.0 - when_lt(x, y);
}

vec4 when_le(vec4 x, vec4 y) {
  return 1.0 - when_gt(x, y);
}

vec3 when_eq(vec3 x, vec3 y) {
  return 1.0 - abs(sign(x - y));
}

vec3 when_neq(vec3 x, vec3 y) {
  return abs(sign(x - y));
}

vec3 when_gt(vec3 x, vec3 y) {
  return max(sign(x - y), 0.0);
}

vec3 when_lt(vec3 x, vec3 y) {
  return max(sign(y - x), 0.0);
}

vec3 when_ge(vec3 x, vec3 y) {
  return 1.0 - when_lt(x, y);
}

vec3 when_le(vec3 x, vec3 y) {
  return 1.0 - when_gt(x, y);
}

vec2 when_eq(vec2 x, vec2 y) {
  return 1.0 - abs(sign(x - y));
}

vec2 when_neq(vec2 x, vec2 y) {
  return abs(sign(x - y));
}

vec2 when_gt(vec2 x, vec2 y) {
  return max(sign(x - y), 0.0);
}

vec2 when_lt(vec2 x, vec2 y) {
  return max(sign(y - x), 0.0);
}

vec2 when_ge(vec2 x, vec2 y) {
  return 1.0 - when_lt(x, y);
}

vec2 when_le(vec2 x, vec2 y) {
  return 1.0 - when_gt(x, y);
}

float when_eq(float x, float y) {
  return 1.0 - abs(sign(x - y));
}

float when_neq(float x, float y) {
  return abs(sign(x - y));
}

float when_gt(float x, float y) {
  return max(sign(x - y), 0.0);
}

float when_lt(float x, float y) {
  return max(sign(y - x), 0.0);
}

float when_ge(float x, float y) {
  return 1.0 - when_lt(x, y);
}

float when_le(float x, float y) {
  return 1.0 - when_gt(x, y);
}

vec4 and(vec4 a, vec4 b) {
  return a * b;
}

vec4 or(vec4 a, vec4 b) {
  return min(a + b, 1.0);
}

vec4 Not(vec4 a) {
  return 1.0 - a;
}

vec3 and(vec3 a, vec3 b) {
  return a * b;
}

vec3 or(vec3 a, vec3 b) {
  return min(a + b, 1.0);
}

vec3 Not(vec3 a) {
  return 1.0 - a;
}

vec2 and(vec2 a, vec2 b) {
  return a * b;
}

vec2 or(vec2 a, vec2 b) {
  return min(a + b, 1.0);
}


vec2 Not(vec2 a) {
  return 1.0 - a;
}

float and(float a, float b) {
  return a * b;
}

float or(float a, float b) {
  return min(a + b, 1.0);
}

float Not(float a) {
  return 1.0 - a;
}{@}curl.glsl{@}float CNrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float CNnoise(vec3 v) {
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += CNrange(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += CNrange(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}

vec3 snoiseVec3( vec3 x ){
    
    float s  = CNnoise(vec3( x ));
    float s1 = CNnoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
    float s2 = CNnoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
    vec3 c = vec3( s , s1 , s2 );
    return c;
    
}

vec3 curlNoise( vec3 p ){
    
    const float e = 1e-1;
    vec3 dx = vec3( e   , 0.0 , 0.0 );
    vec3 dy = vec3( 0.0 , e   , 0.0 );
    vec3 dz = vec3( 0.0 , 0.0 , e   );
    
    vec3 p_x0 = snoiseVec3( p - dx );
    vec3 p_x1 = snoiseVec3( p + dx );
    vec3 p_y0 = snoiseVec3( p - dy );
    vec3 p_y1 = snoiseVec3( p + dy );
    vec3 p_z0 = snoiseVec3( p - dz );
    vec3 p_z1 = snoiseVec3( p + dz );
    
    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
    
    const float divisor = 1.0 / ( 2.0 * e );
    return normalize( vec3( x , y , z ) * divisor );
}{@}eases.glsl{@}#ifndef PI
#define PI 3.141592653589793
#endif

#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float backInOut(float t) {
  float f = t < 0.5
    ? 2.0 * t
    : 1.0 - (2.0 * t - 1.0);

  float g = pow(f, 3.0) - f * sin(f * PI);

  return t < 0.5
    ? 0.5 * g
    : 0.5 * (1.0 - g) + 0.5;
}

float backIn(float t) {
  return pow(t, 3.0) - t * sin(t * PI);
}

float backOut(float t) {
  float f = 1.0 - t;
  return 1.0 - (pow(f, 3.0) - f * sin(f * PI));
}

float bounceOut(float t) {
  const float a = 4.0 / 11.0;
  const float b = 8.0 / 11.0;
  const float c = 9.0 / 10.0;

  const float ca = 4356.0 / 361.0;
  const float cb = 35442.0 / 1805.0;
  const float cc = 16061.0 / 1805.0;

  float t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72;
}

float bounceIn(float t) {
  return 1.0 - bounceOut(1.0 - t);
}

float bounceInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}

float circularInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))
    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
}

float circularIn(float t) {
  return 1.0 - sqrt(1.0 - t * t);
}

float circularOut(float t) {
  return sqrt((2.0 - t) * t);
}

float cubicInOut(float t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

float cubicIn(float t) {
  return t * t * t;
}

float cubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

float elasticInOut(float t) {
  return t < 0.5
    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}

float elasticIn(float t) {
  return sin(13.0 * t * HALF_PI) * pow(2.0, 10.0 * (t - 1.0));
}

float elasticOut(float t) {
  return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;
}

float expoInOut(float t) {
  return t == 0.0 || t == 1.0
    ? t
    : t < 0.5
      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}

float expoIn(float t) {
  return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));
}

float expoOut(float t) {
  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);
}

float linear(float t) {
  return t;
}

float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

float quadraticIn(float t) {
  return t * t;
}

float quadraticOut(float t) {
  return -t * (t - 2.0);
}

float quarticInOut(float t) {
  return t < 0.5
    ? +8.0 * pow(t, 4.0)
    : -8.0 * pow(t - 1.0, 4.0) + 1.0;
}

float quarticIn(float t) {
  return pow(t, 4.0);
}

float quarticOut(float t) {
  return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

float qinticInOut(float t) {
  return t < 0.5
    ? +16.0 * pow(t, 5.0)
    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}

float qinticIn(float t) {
  return pow(t, 5.0);
}

float qinticOut(float t) {
  return 1.0 - (pow(t - 1.0, 5.0));
}

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

float sineIn(float t) {
  return sin((t - 1.0) * HALF_PI) + 1.0;
}

float sineOut(float t) {
  return sin(t * HALF_PI);
}
{@}ColorMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 color;

#!VARYINGS

#!SHADER: ColorMaterial.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: ColorMaterial.fs
void main() {
    gl_FragColor = vec4(color, 1.0);
}{@}DebugCamera.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
varying vec3 vColor;

#!SHADER: DebugCamera.vs
void main() {
    vColor = mix(uColor, vec3(1.0, 0.0, 0.0), step(position.z, -0.1));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: DebugCamera.fs
void main() {
    gl_FragColor = vec4(vColor, 1.0);
}{@}ScreenQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: ScreenQuad.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: ScreenQuad.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a = 1.0;
}{@}TestMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float alpha;

#!VARYINGS
varying vec3 vNormal;

#!SHADER: TestMaterial.vs
void main() {
    vec3 pos = position;
    vNormal = normalMatrix * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: TestMaterial.fs
void main() {
    gl_FragColor = vec4(vNormal, 1.0);
}{@}TextureMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: TextureMaterial.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: TextureMaterial.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}BlitPass.fs{@}void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
    gl_FragColor.a = 1.0;
}{@}NukePass.vs{@}varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}ShadowDepth.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: ShadowDepth.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: ShadowDepth.fs
void main() {
    gl_FragColor = vec4(vec3(gl_FragCoord.x), 1.0);
}{@}instance.vs{@}vec3 transformNormal(vec3 n, vec4 orientation) {
    vec3 nn = n + 2.0 * cross(orientation.xyz, cross(orientation.xyz, n) + orientation.w * n);
    return nn;
}

vec3 transformPosition(vec3 position, vec3 offset, vec3 scale, vec4 orientation) {
    vec3 _pos = position;
    _pos *= scale;

    _pos = _pos + 2.0 * cross(orientation.xyz, cross(orientation.xyz, _pos) + orientation.w * _pos);
    _pos += offset;
    return _pos;
}

vec3 transformPosition(vec3 position, vec3 offset, vec4 orientation) {
    vec3 _pos = position;

    _pos = _pos + 2.0 * cross(orientation.xyz, cross(orientation.xyz, _pos) + orientation.w * _pos);
    _pos += offset;
    return _pos;
}

vec3 transformPosition(vec3 position, vec3 offset, float scale, vec4 orientation) {
    return transformPosition(position, offset, vec3(scale), orientation);
}

vec3 transformPosition(vec3 position, vec3 offset) {
    return position + offset;
}

vec3 transformPosition(vec3 position, vec3 offset, float scale) {
    vec3 pos = position * scale;
    return pos + offset;
}

vec3 transformPosition(vec3 position, vec3 offset, vec3 scale) {
    vec3 pos = position * scale;
    return pos + offset;
}{@}lights.fs{@}vec3 worldLight(vec3 pos, vec3 vpos) {
    vec4 mvPos = modelViewMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}{@}lights.vs{@}vec3 worldLight(vec3 pos) {
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}

vec3 worldLight(vec3 lightPos, vec3 localPos) {
    vec4 mvPos = modelViewMatrix * vec4(localPos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(lightPos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}{@}shadows.fs{@}float shadowCompare(sampler2D map, vec2 coords, float compare) {
    return step(compare, texture2D(map, coords).r);
}

float shadowLerp(sampler2D map, vec2 coords, float compare, float size) {
    const vec2 offset = vec2(0.0, 1.0);

    vec2 texelSize = vec2(1.0) / size;
    vec2 centroidUV = floor(coords * size + 0.5) / size;

    float lb = shadowCompare(map, centroidUV + texelSize * offset.xx, compare);
    float lt = shadowCompare(map, centroidUV + texelSize * offset.xy, compare);
    float rb = shadowCompare(map, centroidUV + texelSize * offset.yx, compare);
    float rt = shadowCompare(map, centroidUV + texelSize * offset.yy, compare);

    vec2 f = fract( coords * size + 0.5 );

    float a = mix( lb, lt, f.y );
    float b = mix( rb, rt, f.y );
    float c = mix( a, b, f.x );

    return c;
}

float srange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float shadowrandom(vec3 vin) {
    vec3 v = vin * 0.1;
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += srange(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += srange(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}

float shadowLookup(sampler2D map, vec3 coords, float size, float compare, vec3 wpos) {
    float shadow = 1.0;

    #if defined(SHADOW_MAPS)
    bool frustumTest = coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0 && coords.z <= 1.0;
    if (frustumTest) {
        vec2 texelSize = vec2(1.0) / size;

        float dx0 = -texelSize.x;
        float dy0 = -texelSize.y;
        float dx1 = +texelSize.x;
        float dy1 = +texelSize.y;

        float rnoise = shadowrandom(wpos) * 0.00015;
        dx0 += rnoise;
        dy0 -= rnoise;
        dx1 += rnoise;
        dy1 -= rnoise;

        #if defined(SHADOWS_MED)
        shadow += shadowCompare(map, coords.xy + vec2(0.0, dy0), compare);
        //        shadow += shadowCompare(map, coords.xy + vec2(dx1, dy0), compare);
        shadow += shadowCompare(map, coords.xy + vec2(dx0, 0.0), compare);
        shadow += shadowCompare(map, coords.xy, compare);
        shadow += shadowCompare(map, coords.xy + vec2(dx1, 0.0), compare);
        //        shadow += shadowCompare(map, coords.xy + vec2(dx0, dy1), compare);
        shadow += shadowCompare(map, coords.xy + vec2(0.0, dy1), compare);
        shadow /= 5.0;

        #elif defined(SHADOWS_HIGH)
        shadow = shadowLerp(map, coords.xy + vec2(dx0, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(0.0, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx0, 0.0), compare, size);
        shadow += shadowLerp(map, coords.xy, compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, 0.0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx0, dy1), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(0.0, dy1), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, dy1), compare, size);
        shadow /= 9.0;

        #else
        shadow = shadowCompare(map, coords.xy, compare);
        #endif
    }

        #endif

    return clamp(shadow, 0.0, 1.0);
}

#test !!window.Metal
vec3 transformShadowLight(vec3 pos, vec3 vpos, mat4 mvMatrix, mat4 viewMatrix) {
    vec4 mvPos = mvMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return normalize(worldPosition.xyz - mvPos.xyz);
}

float getShadow(vec3 pos, vec3 normal, float bias, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = uniforms.shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);

        lookup = shadowLookup(shadowMap, coords, uniforms.shadowSize[i], coords.z - bias, pos);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(uniforms.shadowLightPos[i], pos, uniforms.modelViewMatrix, globalUniforms.viewMatrix), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }

    #endif
    return shadow;
}

float getShadow(vec3 pos, vec3 normal, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, normal, 0.0, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, float bias, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, vec3(99999.0), bias, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, vec3(99999.0), 0.0, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, vec3 normal) {
    return 1.0;
}

float getShadow(vec3 pos, float bias) {
    return 1.0;
}

float getShadow(vec3 pos) {
    return 1.0;
}
#endtest

#test !window.Metal
vec3 transformShadowLight(vec3 pos, vec3 vpos) {
    vec4 mvPos = modelViewMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return normalize(worldPosition.xyz - mvPos.xyz);
}

float getShadow(vec3 pos, vec3 normal, float bias) {
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    #pragma unroll_loop
    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);

        lookup = shadowLookup(shadowMap[i], coords, shadowSize[i], coords.z - bias, pos);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(shadowLightPos[i], pos), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }

    #endif
    return shadow;
}

float getShadow(vec3 pos, vec3 normal) {
    return getShadow(pos, normal, 0.0);
}

float getShadow(vec3 pos, float bias) {
    return getShadow(pos, vec3(99999.0), bias);
}

float getShadow(vec3 pos) {
    return getShadow(pos, vec3(99999.0), 0.0);
}
#endtest{@}FXAA.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS
varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

#!SHADER: FXAA.vs

varying vec2 vUv;

void main() {
    vUv = uv;

    vec2 fragCoord = uv * resolution;
    vec2 inverseVP = 1.0 / resolution.xy;
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);

    gl_Position = vec4(position, 1.0);
}

#!SHADER: FXAA.fs

#require(conditionals.glsl)

#ifndef FXAA_REDUCE_MIN
    #define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
    #define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
    #define FXAA_SPAN_MAX     8.0
#endif

vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,
            vec2 v_rgbNW, vec2 v_rgbNE,
            vec2 v_rgbSW, vec2 v_rgbSE,
            vec2 v_rgbM) {
    vec4 color;
    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
              dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);

    color = vec4(rgbB, texColor.a);
    color = mix(color, vec4(rgbA, texColor.a), when_lt(lumaB, lumaMin));
    color = mix(color, vec4(rgbA, texColor.a), when_gt(lumaB, lumaMax));

    return color;
}

void main() {
    vec2 fragCoord = vUv * resolution;
    gl_FragColor = fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
    gl_FragColor.a = 1.0;
}{@}gaussianblur.fs{@}vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.411764705882353) * direction;
  vec2 off2 = vec2(3.2941176470588234) * direction;
  vec2 off3 = vec2(5.176470588235294) * direction;
  color += texture2D(image, uv) * 0.1964825501511404;
  color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
  color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
  color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
  color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
  color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
  color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
  return color;
}

vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3333333333333333) * direction;
  color += texture2D(image, uv) * 0.29411764705882354;
  color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
  color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
  return color;
}

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}{@}glscreenprojection.glsl{@}vec2 frag_coord(vec4 glPos) {
    return ((glPos.xyz / glPos.w) * 0.5 + 0.5).xy;
}

vec2 getProjection(vec3 pos, mat4 projMatrix) {
    vec4 mvpPos = projMatrix * vec4(pos, 1.0);
    return frag_coord(mvpPos);
}

void applyNormal(inout vec3 pos, mat4 projNormalMatrix) {
    vec3 transformed = vec3(projNormalMatrix * vec4(pos, 0.0));
    pos = transformed;
}{@}DefaultText.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS

varying vec2 vUv;

#!SHADER: DefaultText.vs

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: DefaultText.fs

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha;
}
{@}msdf.glsl{@}float msdf(sampler2D tMap, vec2 uv) {
    vec3 tex = texture2D(tMap, uv).rgb;
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;

    // TODO: fallback for fwidth for webgl1 (need to enable ext)
    float d = fwidth(signedDist);
    float alpha = smoothstep(-d, d, signedDist);
    if (alpha < 0.01) discard;
    return alpha;
}

float strokemsdf(sampler2D tMap, vec2 uv, float stroke, float padding) {
    vec3 tex = texture2D(tMap, uv).rgb;
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
    float t = stroke;
    float alpha = smoothstep(-t, -t + padding, signedDist) * smoothstep(t, t - padding, signedDist);
    return alpha;
}{@}GLUIBatch.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec2 scale;
attribute float rotation;
//attributes

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
//varyings

#!SHADER: Vertex

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

void main() {
    vUv = uv;
    //vdefines

    vec3 pos = vec3(rotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));
    pos.xy *= scale;
    pos.xyz += offset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(1.0);
}{@}GLUIBatchText.glsl{@}#!ATTRIBUTES
attribute vec2 offset;
attribute vec2 scale;
attribute float rotation;
//attributes

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
//varyings

#!SHADER: Vertex

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

void main() {
    vUv = uv;
    //vdefines

    vec3 pos = vec3(rotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));
    pos.xy *= scale;
    pos.xy += offset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = v_uColor;
    gl_FragColor.a = alpha * v_uAlpha;
}
{@}GLUIColor.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: GLUIColor.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIColor.fs
void main() {
    vec2 uv = vUv;
    vec3 uvColor = vec3(uv, 1.0);
    gl_FragColor = vec4(mix(uColor, uvColor, 0.0), uAlpha);
}{@}GLUIObject.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: GLUIObject.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIObject.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;
}{@}GLUIObjectMask.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform vec4 mask;

#!VARYINGS
varying vec2 vUv;
varying vec2 vWorldPos;

#!SHADER: GLUIObjectMask.vs
void main() {
    vUv = uv;
    vWorldPos = (modelMatrix * vec4(position.xy, 0.0, 1.0)).xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIObjectMask.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;

    if (vWorldPos.x > mask.x + mask.z) discard;
    if (vWorldPos.x < mask.x) discard;
    if (vWorldPos.y > mask.y) discard;
    if (vWorldPos.y < mask.y - mask.w) discard;
}{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}MouseFlowMapBlend.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D uTexture;
uniform sampler2D uStamp;
uniform float uSpeed;
uniform float uFirstDraw;

#!VARYINGS

varying vec2 vUv;

#!SHADER: MouseFlowMapBlend.vs

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: MouseFlowMapBlend.fs

vec3 blend(vec3 base, vec3 blend, float opacity) {
    return blend + (base * (1.0 - opacity));
}

#require(range.glsl)

void main() {
    vec3 prev = texture2D(uTexture, vUv).rgb;
    prev = prev * 2.0 - 1.0;
    float amount = crange(length(prev.rg), 0.0, 0.4, 0.0, 1.0);
    amount = 0.5 + 0.48 * (1.0 - pow(1.0 - amount, 3.0));
    prev *= amount;
    prev = prev * 0.5 + 0.5;

    // blue not used
    prev.b = 0.5;

    vec4 tex = texture2D(uStamp, vUv);
    gl_FragColor.rgb = blend(prev, tex.rgb, tex.a);

    // Force a grey on first draw to have init values
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.5), uFirstDraw);
    gl_FragColor.a = 1.0;
}
{@}MouseFlowMapStamp.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform vec2 uVelocity;
uniform float uFalloff;
uniform float uAlpha;
uniform float uAspect;

#!VARYINGS

varying vec2 vUv;

#!SHADER: MouseFlowMapStamp.vs

void main() {
    vUv = uv;
    vec3 pos = position;
    pos.x *= 1.0 / uAspect;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

    #!SHADER: MouseFlowMapStamp.fs

void main() {
    gl_FragColor.rgb = vec3(uVelocity * 0.5 + 0.5, 1.0);
    gl_FragColor.a = smoothstep(0.5, 0.499 - (uFalloff * 0.499), length(vUv - 0.5)) * uAlpha;
}
{@}flowmap.fs{@}float getFlowMask(sampler2D map, vec2 uv) {
    vec2 flow = texture2D(map, uv).rg;
    return clamp(length(flow.rg * 2.0 - 1.0), 0.0, 1.0);
}

vec2 getFlow(sampler2D map, vec2 uv) {
    vec2 flow = texture2D(map, uv).rg * 2.0 - 1.0;
    flow.y *= -1.0;
    return flow;
}{@}normalmap.glsl{@}vec3 unpackNormal( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
    surf_norm = normalize(surf_norm);
    
    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );
    
    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( surf_norm );
    
    vec3 mapN = texture2D( normal_map, uv * scale ).xyz * 2.0 - 1.0;
    mapN.xy *= intensity;
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );
}

//mvPosition.xyz, normalMatrix * normal, normalMap, intensity, scale, uv{@}range.glsl{@}float range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float crange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));
}

vec2 crange(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    vec2 v;
    v.x = crange(oldValue.x, oldMin.x, oldMax.x, newMin.x, newMax.x);
    v.y = crange(oldValue.y, oldMin.y, oldMax.y, newMin.y, newMax.y);
    return v;
}

vec2 range(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    vec2 v;
    v.x = range(oldValue.x, oldMin.x, oldMax.x, newMin.x, newMax.x);
    v.y = range(oldValue.y, oldMin.y, oldMax.y, newMin.y, newMax.y);
    return v;
}

vec3 crange(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    vec3 v;
    v.x = crange(oldValue.x, oldMin.x, oldMax.x, newMin.x, newMax.x);
    v.y = crange(oldValue.y, oldMin.y, oldMax.y, newMin.y, newMax.y);
    v.z = crange(oldValue.z, oldMin.z, oldMax.z, newMin.z, newMax.z);
    return v;
}

vec3 range(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    vec3 v;
    v.x = range(oldValue.x, oldMin.x, oldMax.x, newMin.x, newMax.x);
    v.y = range(oldValue.y, oldMin.y, oldMax.y, newMin.y, newMax.y);
    v.z = range(oldValue.z, oldMin.z, oldMax.z, newMin.z, newMax.z);
    return v;
}{@}rgb2hsv.fs{@}vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}{@}rgbshift.fs{@}vec4 getRGB(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    vec4 r = texture2D(tDiffuse, uv + offset);
    vec4 g = texture2D(tDiffuse, uv);
    vec4 b = texture2D(tDiffuse, uv - offset);
    return vec4(r.r, g.g, b.b, g.a);
}{@}rotation.glsl{@}mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}{@}ScreenQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: ScreenQuad.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: ScreenQuad.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a = 1.0;
}{@}simplenoise.glsl{@}float getNoise(vec2 uv, float time) {
    float x = uv.x * uv.y * time * 1000.0;
    x = mod(x, 13.0) * mod(x, 123.0);
    float dx = mod(x, 0.01);
    float amount = clamp(0.1 + dx * 100.0, 0.0, 1.0);
    return amount;
}

highp float getRandom(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
}

float cnoise(vec3 v) {
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += range(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += range(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}

float cnoise(vec2 v) {
    float t = v.x * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += range(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += range(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}{@}transformUV.glsl{@}vec2 transformUV(vec2 uv, float a[9]) {

    // Convert UV to vec3 to apply matrices
	vec3 u = vec3(uv, 1.0);

    // Array consists of the following
    // 0 translate.x
    // 1 translate.y
    // 2 skew.x
    // 3 skew.y
    // 4 rotate
    // 5 scale.x
    // 6 scale.y
    // 7 origin.x
    // 8 origin.y

    // Origin before matrix
    mat3 mo1 = mat3(
        1, 0, -a[7],
        0, 1, -a[8],
        0, 0, 1);

    // Origin after matrix
    mat3 mo2 = mat3(
        1, 0, a[7],
        0, 1, a[8],
        0, 0, 1);

    // Translation matrix
    mat3 mt = mat3(
        1, 0, -a[0],
        0, 1, -a[1],
    	0, 0, 1);

    // Skew matrix
    mat3 mh = mat3(
        1, a[2], 0,
        a[3], 1, 0,
    	0, 0, 1);

    // Rotation matrix
    mat3 mr = mat3(
        cos(a[4]), sin(a[4]), 0,
        -sin(a[4]), cos(a[4]), 0,
    	0, 0, 1);

    // Scale matrix
    mat3 ms = mat3(
        1.0 / a[5], 0, 0,
        0, 1.0 / a[6], 0,
    	0, 0, 1);

	// apply translation
   	u = u * mt;

	// apply skew
   	u = u * mh;

    // apply rotation relative to origin
    u = u * mo1;
    u = u * mr;
    u = u * mo2;

    // apply scale relative to origin
    u = u * mo1;
    u = u * ms;
    u = u * mo2;

    // Return vec2 of new UVs
    return u.xy;
}

vec2 rotateUV(vec2 uv, float r, vec2 origin) {
    vec3 u = vec3(uv, 1.0);

    mat3 mo1 = mat3(
        1, 0, -origin.x,
        0, 1, -origin.y,
        0, 0, 1);

    mat3 mo2 = mat3(
        1, 0, origin.x,
        0, 1, origin.y,
        0, 0, 1);

    mat3 mr = mat3(
        cos(r), sin(r), 0,
        -sin(r), cos(r), 0,
        0, 0, 1);

    u = u * mo1;
    u = u * mr;
    u = u * mo2;

    return u.xy;
}

vec2 rotateUV(vec2 uv, float r) {
    return rotateUV(uv, r, vec2(0.5));
}

vec2 translateUV(vec2 uv, vec2 translate) {
    vec3 u = vec3(uv, 1.0);
    mat3 mt = mat3(
        1, 0, -translate.x,
        0, 1, -translate.y,
        0, 0, 1);

    u = u * mt;
    return u.xy;
}

vec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {
    vec3 u = vec3(uv, 1.0);

    mat3 mo1 = mat3(
        1, 0, -origin.x,
        0, 1, -origin.y,
        0, 0, 1);

    mat3 mo2 = mat3(
        1, 0, origin.x,
        0, 1, origin.y,
        0, 0, 1);

    mat3 ms = mat3(
        1.0 / scale.x, 0, 0,
        0, 1.0 / scale.y, 0,
        0, 0, 1);

    u = u * mo1;
    u = u * ms;
    u = u * mo2;
    return u.xy;
}

vec2 scaleUV(vec2 uv, vec2 scale) {
    return scaleUV(uv, scale, vec2(0.5));
}
{@}LightBlur.fs{@}uniform vec2 uDir;

#require(gaussianblur.fs)

void main() {
    gl_FragColor = blur9(tDiffuse, vUv, resolution, uDir);
}{@}VolumetricLight.fs{@}uniform vec2 lightPos;
uniform float fExposure;
uniform float fDecay;
uniform float fDensity;
uniform float fWeight;
uniform float fClamp;

const int iSamples = 20;

void main() {
    vec2 deltaTextCoord = vUv - lightPos;
    deltaTextCoord *= 1.0  / float(iSamples) * fDensity;
    vec2 coord = vUv;

    float illuminationDecay = 1.0;
    vec4 color = vec4(0.0);

    for (int i = 0; i < iSamples; i++) {
        coord -= deltaTextCoord;
        vec4 texel = texture2D(tDiffuse, coord);
        texel *= illuminationDecay * fWeight;

        color += texel;
        illuminationDecay *= fDecay;
    }

    color *= fExposure;
    color = clamp(color, 0.0, fClamp);
    gl_FragColor = color;
}{@}SpriteAnimation.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uDirection;
uniform float uTextureSize;
uniform float uFrameSize;
uniform float uAnimation;
uniform vec2 uInvincible;
uniform vec2 uJumping;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uRealColor;
uniform float uFrame;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(rgb2hsv.fs)
#require(range.glsl)
void main() {
    vec2 uv = vUv;
    uv.x = crange( uDirection, -1.0, 1.0, 1.0 - uv.x, uv.x );

    float frame = uFrameSize / uTextureSize;
    vec2 location = vec2( uFrame * frame, 1.0 - ( uAnimation + 1.0 ) * frame );
    vec2 spriteUV = uv * frame + location;
    vec4 sprite = texture2D( tMap, spriteUV );

    // apply coloring
    vec3 mixHue = rgb2hsv( sprite.rgb );
    vec3 mixColorA = uColor1;
    mixColorA = rgb2hsv( mixColorA );
    mixColorA.g = mixHue.g;
    mixColorA.b = mixHue.b;
    mixColorA = hsv2rgb( mixColorA );

    vec3 mixColorB = uColor2;
    mixColorB = rgb2hsv( mixColorB );
    mixColorB.g = mixHue.g;
    mixColorB.b = mixHue.b;
    mixColorB = hsv2rgb( mixColorB );

    vec3 mixColor = mix( mixColorA, mixColorB, 1.0 - mixHue.r * 2.0 );
    sprite.rgb = mix( mixColor, sprite.rgb, uRealColor );
    
    // rainbow effect on invincible
    float angle = vUv.x + vUv.y + time * 1.0;
    vec3 texhsv = rgb2hsv( sprite.rgb );
    vec3 color = hsv2rgb( vec3( floor( angle * 6.0 ) / 6.0, texhsv.g * ( 1.0 - uInvincible.y ), texhsv.b ));
    sprite.rgb = mix( sprite.rgb, color, uInvincible.x );

    // moving lines effect on jumping
    float progress = max( tan( vUv.y * 0.5 - time * 3.0 ), 0.0 );
    angle = vUv.x + vUv.y + time * -1.0;
    texhsv = rgb2hsv( sprite.rgb );
    color = hsv2rgb( vec3( texhsv.r, texhsv.g, texhsv.b + progress ));
    sprite.rgb = mix( sprite.rgb, color, uJumping.x * progress * ( 1.0 - uJumping.y ));
    
    gl_FragColor.rgb = sprite.rgb;
    gl_FragColor.a = sprite.a * uAlpha;
}{@}Billboard.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVidMap;
uniform sampler2D tImg1;
uniform sampler2D tImg2;
uniform sampler2D tImg3;
uniform float uType;
uniform float uImage;
uniform vec2 uCells;
uniform vec2 uCell;
uniform float uAspect;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(transformUV.glsl)
#require(range.glsl)

void main() {
    vec2 uv = scaleUV( vUv, uCells, vec2( 0.0, 1.0 ));
    uv = translateUV( uv, vec2( -uCell.x, uCell.y ) / uCells );
    vec4 vidText = texture2D( tVidMap, uv );

    vec2 uvAspect = scaleUV( vUv, vec2( 1.0, uAspect ));
    vec4 img1 = texture2D( tImg1, uvAspect );
    vec4 img2 = texture2D( tImg2, uvAspect );
    vec4 img3 = texture2D( tImg3, uvAspect );

    vec4 img = mix( img1, img2, uImage );
    img = mix( img, img3, uImage - 2.0 );
    vec4 tex = mix( vidText, img, uType );

    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = 1.0;
}{@}Boss.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D map;
uniform sampler2D tMapFrom;
uniform sampler2D tMapTo;
uniform sampler2D tRainbow;
uniform sampler2D tExtraGlow;
uniform vec2 uTransitionOrigin;
uniform vec3 uTransitionNoise;
uniform float uNoiseRate;
uniform float uProgress;
uniform float uScale;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uRainbowSpeed;
uniform float uRainbowStrength;
uniform float uExtraGlowStrength;
uniform float uExtraGlowSpeed;
uniform float uBlinkSpeed;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vUv.y = 1.0 - vUv.y;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)
#require(filters.glsl)

void main() {
    float distance = length( uTransitionOrigin * uScale - vPos.xy );
    float noise = cnoise( vec3( vPos.xy / uTransitionNoise.xy, time * uNoiseRate / 10.0 )) * uTransitionNoise.z;
    distance += abs( noise );
    float transition = crange( uProgress * uScale - distance, 0.0, 0.1, 0.0, 1.0 );

    vec4 tex = texture2D( tMapFrom, vUv );
    vec4 tex2 = texture2D( tMapTo, vUv );

    tex = mix( tex, tex2, transition );

    vec3 color = tex.rgb;

    color = saturation(color, uSaturation);
    color = color + vec3(uBrightness);
    color = hue(color, uHue);

    vec3 RainbowScroll = texture2D(tRainbow, vUv + vec2(time * uRainbowSpeed, time * uRainbowSpeed )).rgb;
    vec3 ExtraGlow = texture2D(tExtraGlow, vUv + vec2(time * uExtraGlowSpeed, 0.0)).rgb;

    if (transition == 1.0)
    {
    color = mix(color, RainbowScroll, uRainbowStrength * (0.2 + abs(sin(time * uBlinkSpeed) + sin(time * 0.534) + cos(time * 0.12))));
    color *= 1.0 + (0.1 * ExtraGlow * (uExtraGlowStrength * abs(cos(time * uBlinkSpeed))));
    }

    gl_FragColor = vec4(color, tex.a);
}{@}CoinCollection.glsl{@}#!ATTRIBUTES
attribute float sprite;
attribute float opacity;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uSprites;

#!VARYINGS
varying vec2 vUv;
varying float vSprite;
varying float vOpacity;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    vSprite = sprite;
    vOpacity = opacity;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(transformUV.glsl)
void main() {
    float frame = 1.0 / uSprites;
    vec2 location = vec2( frame * vSprite, 0.0 );
    vec2 uv = vUv * vec2( frame, 1.0 ) + location;
    vec4 tex = texture2D( tMap, uv );

    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = tex.a * vOpacity;
}{@}EnemyParticlesHexagon.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tPos;
uniform sampler2D tLife;
uniform float uColorSpeed;
uniform float uBackgroundAlpha;
uniform float uBorderAlpha;
uniform float uSize;

#!VARYINGS
varying vec3 vColor;
varying float vLife;
varying vec4 vRandom;
varying vec2 vUv;

#!SHADER: Vertex
#require(range.glsl)
#require(rgb2hsv.fs)

void main() {
    vLife = texture2D(tLife, position.xy).r;

    vec3 pos = texture2D(tPos, position.xy).xyz;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * crange(random.w, 0.0, 1.0, 0.5, 1.5) * vLife;
    gl_Position = projectionMatrix * mvPosition;
    
    vColor = hsv2rgb(vec3(random.w + time * uColorSpeed, 1.0, 1.0));
    vRandom = random;
}

#!SHADER: Fragment
#require(range.glsl)

void main() {
    vec4 transparent = vec4(0.0);

    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    vec4 mask = texture2D(tMap, uv);

    vec4 background = mix(transparent, vec4(vColor, uBackgroundAlpha), mask.g);
    vec4 border = mix(transparent, vec4(vColor, uBorderAlpha), mask.r);

    vec4 color = background + border;
    
    gl_FragColor = vec4(color);
}{@}BasicEnemy.glsl{@}#!ATTRIBUTES
attribute float direction;
attribute float disabled;
attribute float animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uTextureSize;
uniform float uFrameSize;
uniform float uFrame;

#!VARYINGS
varying vec2 vUv;
varying float vDirection;
varying float vDisabled;
varying float vAnimation;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vDirection = direction;
    vDisabled = disabled;
    vAnimation = animation;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(glitch.glsl)
void main() {
    vec2 uv = vUv;
    uv.x = crange( vDirection, -1.0, 1.0, uv.x, 1.0 - uv.x );

    float frame = uFrameSize / uTextureSize;
    vec2 location = vec2( uFrame * frame, 1.0 - ( vAnimation + 1.0 ) * frame );
    vec2 spriteUV = uv * frame + location;

    vec2 vUv2 = spriteUV;

    // Pulsate glitch amount
    float glitchAmount = sin(time * 8.0) / 2.0 + 0.5;

    // Spikey noise
    glitchAmount = (smoothstep(0.5, 1.0, getFractNoise(time * 6.0)) * 2.0 + 0.1) * vDisabled * 50.0;

    // Big chunks
    float offset = glitch(uv, 15.0, 0.2, 0.1 * glitchAmount);

    // Medium chunks
    offset += glitch(uv, 50.0, 0.1, 0.15 * glitchAmount);
    vUv2.x += offset;

    // Small chunks
    offset += glitch(uv, 150.0, 0.1, 0.25 * glitchAmount);
    vUv2.x += offset;

    vec4 color = texture2D(tMap, vUv2);

    float channelShiftAmount = 0.1 * glitchAmount;
    vec2 offsetR = vec2(getFractRandom(time), getFractRandom(time + 38513.3493)) * channelShiftAmount - channelShiftAmount / 2.0;

    vec4 offsetMap = texture2D(tMap, fract(vUv2 + offsetR));

    color.r = offsetMap.r;
    color.b = offsetMap.b;

    gl_FragColor = vec4(color.rgb, color.a );
}{@}GameEnvironment.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uFogColor;
uniform vec2 uFogDistance;
uniform vec2 uFogBrightness;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying float vDistance;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vDistance = length( gl_Position.xyz );
}

#!SHADER: Fragment
#require(range.glsl)
#require(rgb2hsv.fs)
void main() {
    vec4 color = texture2D(tMap, vUv);
    vec3 fog = mix( color.rgb, uFogColor, crange( vDistance, uFogDistance.x, uFogDistance.y, 0.0, 1.0 ));
    vec3 hsvColor = rgb2hsv( color.rgb );
    float mixBrightness = crange( hsvColor.b, uFogBrightness.x / 100.0, uFogBrightness.y / 100.0, 0.0, 0.9 );
    color.rgb = mix( fog, color.rgb, mixBrightness );

    gl_FragColor = color;
    gl_FragColor.a *= uAlpha;
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}SpaceShips.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uSpeed;
uniform float uDirection;
uniform float uMeshAspect;
uniform float uTextureAspect;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {

    vec2 uv = vUv;
    uv.x = crange( uDirection, -1.0, 1.0, 1.0 - uv.x, uv.x );
    uv = vec2( uMeshAspect / uTextureAspect * uv.x, uv.y );

    uv.x -= time * uSpeed * 0.01 * uDirection;

    vec4 color = texture2D( tMap, uv );
    gl_FragColor.rgb = color.rgb;
    gl_FragColor.a = color.a * uAlpha;
}{@}Fog.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform float uSeed;
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    float alpha = texture2D(tMap, vUv).r;

    gl_FragColor = vec4(vec3(alpha), alpha * uAlpha + (0.02 * sin(uSeed + time)));
}{@}GateShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tGateOpen;
uniform sampler2D tGateClosed;
uniform float uProgress;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec4 openTex = texture2D( tGateOpen, vUv );
    vec4 closedTex = texture2D( tGateClosed, vUv );
    vec4 tex = mix( closedTex, openTex, uProgress );
    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = tex.a;
}{@}HazardTile.glsl{@}#!ATTRIBUTES
attribute float type;
attribute float index;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform vec2 uFrameSize;
uniform vec2 uTextureSize;
uniform float uAnimationSize;
uniform float uAnimationSpeed;

#!VARYINGS
varying vec2 vUv;
varying float vType;
varying float vIndex;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    vType = type;
    vIndex = index;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    vec2 spriteScale = uFrameSize / uTextureSize;
    float animationPos = spriteScale.x * mod( floor(( time + vIndex ) * uAnimationSpeed ), uAnimationSize );
    vec2 spritePos = vec2( animationPos, 1.0 - ( vType + 1.0 ) * spriteScale.y );
    vec2 spriteUV = vUv * spriteScale + spritePos;
    vec4 tex = texture2D( tMap, spriteUV );

    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = tex.a * uAlpha;
}{@}IntroTextBox.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uBgColor;
uniform vec3 uBorderColor;
uniform float uBorderWidth;
uniform float uShadowGap;
uniform float uAspect;
uniform float uDotSize;
uniform float uDotAmount;
uniform float uDotRadius;
uniform float uFogFar;
uniform float uFogNear;
uniform float uOpacity;

#!VARYINGS
varying vec2 vUv;
varying float vDist;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vDist = length((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec2 innerUV = vec2(crange(vUv.x, 0.0, 1.0 - uShadowGap / uAspect, 0.0, 1.0), crange(vUv.y, uShadowGap, 1.0, 0.0, 1.0));

    vec3 bg = uBgColor*0.15;
    vec2 dotsUV = mod(vec2((innerUV.x + (1.0 / uDotSize) * step(1.0, mod(innerUV.y * uDotSize, 2.0))) * uAspect, innerUV.y) * uDotSize, 1.0) - 0.5;
    float dots = smoothstep(0.2 * uDotRadius, 0.3 * uDotRadius, length(dotsUV));

    bg = mix(bg, bg * dots, uDotAmount);

    float border = step(innerUV.y, uBorderWidth) + step(1.0 - innerUV.y, uBorderWidth); // y
    border += step(innerUV.x, uBorderWidth / uAspect) + step(1.0 - innerUV.x, uBorderWidth / uAspect); // x
    border = min(1.0, border);


    vec3 color = rgb2hsv(mix(bg, uBorderColor, border));
    color.x += cnoise(vUv*0.5 - time*0.1)*0.1;
    color = hsv2rgb(color);


    gl_FragColor.rgb = color;

    gl_FragColor.rgb += sin(time*30.0)*0.002 + sin(time*50.0)*0.002 + sin(time*80.0)*0.002;


    // let's get rid of 2 squares to fake a comic shadow
    float shadow = step(1.0 - uShadowGap / uAspect, vUv.x) * step(1.0 - uShadowGap, vUv.y);
    shadow += step(vUv.y, uShadowGap) * step(vUv.x, uShadowGap / uAspect);
    shadow = clamp(shadow, 0.0, 1.0);
    
    float fog = smoothstep(uFogFar, uFogNear, vDist);

    gl_FragColor.a = (1.0 - shadow) * fog * uAlpha * uOpacity;
}{@}IntroTextText.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform sampler2D tMap;
uniform float uFogFar;
uniform float uFogNear;
uniform float uOpacity;

#!VARYINGS
varying float vDist;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vDist = length((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition);

    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);
    float fog = smoothstep(uFogFar, uFogNear, vDist);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha * fog * uOpacity;
}
{@}IntroWindow.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D tScene;
uniform float uBorderWidth;
uniform float uAspect;
uniform float uAlpha;
uniform vec3 uBorderColor;
uniform float uFogFar;
uniform float uFogNear;

#!VARYINGS
varying vec2 vUv;
varying float vDist;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vDist = length((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 sceneColor = texture2D(tScene, vUv).rgb;


    sceneColor *= 1.0 + sin(time*5.0)*0.015 + sin(time*11.0)*0.015 + sin(time*7.0)*0.015;

    sceneColor = rgb2hsv(sceneColor);
    sceneColor.x += cnoise(vUv*0.5 - time*0.2)*0.03;
    sceneColor = hsv2rgb(sceneColor);



    float border = step(vUv.y, uBorderWidth) + step(1.0 - vUv.y, uBorderWidth); // y
    border += step(vUv.x, uBorderWidth / uAspect) + step(1.0 - vUv.x, uBorderWidth / uAspect); // x
    border = min(1.0, border);


    vec3 borderColor = rgb2hsv(uBorderColor);
    borderColor.x += cnoise(vUv*0.8+ time*0.3)*0.05;
    borderColor = hsv2rgb(borderColor);


    float fog = smoothstep(uFogFar, uFogNear, vDist);

    gl_FragColor.rgb = mix(sceneColor, borderColor, border);
    gl_FragColor.a = 1.0 * fog * uAlpha;
}{@}LevelLayout.glsl{@}#!ATTRIBUTES
attribute vec2 spriteCoord;
attribute vec2 spriteScale;
attribute float opacity;
attribute float excludeGradient;
attribute float bounces;
attribute float index;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tNormal;
uniform sampler2D tAnimation;
uniform sampler2D tGradientMap;
uniform sampler2D tLightsColor;
uniform sampler2D tLightsPosition;
uniform float uGradientMapMix;
uniform vec3 uPlayerLightColor;
uniform float uPlayerLightRange;
uniform float uPlayerLightBrightness;
uniform vec3 uUnderglowColor;

uniform float uNoiseScale;
uniform float uNoiseSpeed;

// TODO: make player position light up the scene
uniform vec3 uPlayerPos;

#!VARYINGS
varying vec2 vUv;
varying vec2 vSpriteCoord;
varying vec2 vSpriteScale;
varying float vOpacity;
varying float vExcludeGradient;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    vec3 pos = position;

    pos.y += sin(( time + random.x ) * 3.0 ) * 0.075 * bounces;

    vUv = uv;
    vSpriteCoord = spriteCoord;
    vSpriteScale = spriteScale;
    vOpacity = opacity;
    vExcludeGradient = excludeGradient;
    vPos = pos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)

void main() {
    vec2 spriteUV = vUv * vSpriteScale + vSpriteCoord;
    vec4 color = texture2D(tMap, spriteUV);

    color.a *= vOpacity;

    if ( color.a < 0.01 ) discard;

    #test Tests.LightingEnabled()
    vec3 norm = crange(texture2D(tNormal, spriteUV).rgb, vec3(0.0), vec3(1.0), vec3(-1.0), vec3(1.0));
    vec2 lightUV = gl_FragCoord.xy / resolution;
    vec4 lightColor = texture2D(tLightsColor, lightUV);
    vec4 lightPosition = texture2D(tLightsPosition, lightUV);

    vec3 lightPos = lightPosition.xyz;
    lightPos.z = 1.0;

    float directionalLight = clamp(dot(normalize(vec3(0.0, 0.0, 1.0)), norm), 0.0, 1.0);
    float volume = clamp(dot(normalize(lightPosition.xyz), norm), 0.0, 1.0);
    float falloff = clamp(crange(vec3(lightPosition.xyz - vPos).r, 0.0, lightPosition.w, 1.0, -1.0), 0.0, 1.0);

    color.rgb *= crange(directionalLight, 0.0, 1.0, 0.75, 1.0);
    color.rgb += lightColor.rgb * lightColor.a * volume * falloff;

    vec3 playerLight = uPlayerPos.xyz;
    playerLight.z = ( uPlayerPos.z + vPos.z * 9.0) / 10.0;

    float playerVolume = clamp(dot(normalize( playerLight - vPos.xyz ), norm), 0.0, 1.0);
    float playerFalloff = crange(length( vPos.xy - uPlayerPos.xy ), 0.0, pow( uPlayerLightRange, 2.0 ), 1.0, 0.0 );
    color.rgb += uPlayerLightColor * uPlayerLightBrightness * playerVolume * playerFalloff;

    // underglow
    color.rgb += uUnderglowColor * clamp(dot(norm, vec3(0.0, -1.0, 0.0)), 0.0, 1.0) * crange(cnoise(vPos.xy * uNoiseScale + vec2(uNoiseSpeed * 0.13 * time, uNoiseSpeed * time)), -1.0, 1.0, 0.0, 1.0) * 0.8;

    #endtest


    gl_FragColor = color;
}{@}LevelQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}LevelLightOverlayShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform float uRadius;
uniform float uDesktop;

uniform float uEffectFlicker;
uniform float uEffectRainbow;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)

void main() {
    vec3 color = uColor;
    float alpha = uAlpha;
    
    if (uEffectRainbow > 0.01 && uDesktop == 1.0) {
        color.rgb = rgb2hsv(color.rgb);
        color.r = color.r + mix(0.0, uEffectRainbow, sin(time));
        color.rgb = hsv2rgb(color.rgb);
    }

    if (uEffectRainbow > 0.01 && uDesktop == 0.0) {
        color.rgb = rgb2hsv(color.rgb);
        color.r = color.r + sin(time) * 0.1;
        color.rgb = hsv2rgb(color.rgb);
    }
    
    if (uEffectFlicker > 0.001) {
        alpha *= crange(cnoise(0.06 * time * uEffectFlicker + vec2(-0.786, 323.0)), -1.0, 1.0, 0.0, 1.0);
    }

    vec2 center = vec2(0.5, 0.5);
    float light = length(vUv - center);

    gl_FragColor = mix(vec4(color, alpha), vec4(0.0), light * 2.0);
}
{@}LevelLightShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uAlpha;
uniform vec3 uColor;
uniform float uRadius;
uniform float uStrength;

#!VARYINGS

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uColor, uStrength);
}
{@}LevelLightsShader.glsl{@}#!ATTRIBUTES
attribute vec3 color;
attribute float radius;
attribute vec3 pos;
attribute vec3 scale;
attribute float strength;

#!UNIFORMS

#!VARYINGS
varying vec3 vColor;
varying float vRadius;
varying vec3 vPosition;
varying vec3 vScale;
varying float vStrength;

#!SHADER: Vertex
void main() {
    vColor = color;
    vPosition = pos;
    vRadius = radius;
    vStrength = strength;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    #drawbuffer Color gl_FragColor = vec4(vColor, vStrength);
    #drawbuffer Position gl_FragColor = vec4(vPosition, vRadius);
}
{@}LightsBackground.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(vec3(1.0), 0.05);
}
{@}LightsFeedback.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(vec3(1.0, 0.0, 1.0), 1.0);
}
{@}NPCDialog.glsl{@}#!ATTRIBUTES
attribute vec3 animation;
attribute float letterCount;

#!UNIFORMS

uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uTransition;
uniform float uLetterCount;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying float vLetter;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vLetter = (animation.x + 1.0) / uLetterCount;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}


#!SHADER: Fragment
#require(msdf.glsl)
#require(range.glsl)

void main() {
    float alpha = msdf(tMap, vUv);
    alpha *= crange( uTransition, vLetter - 0.00001, vLetter, 0.0, 1.0 );

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha;
}
{@}Pet.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uIndex;
uniform float uDirection;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    vec2 uv = vUv;
    uv.x = crange( uDirection, -1.0, 1.0, uv.x, 1.0 - uv.x );

    float frame = 1.0 / 5.0;
    vec2 location = vec2( uIndex * frame, 0.0 );
    vec2 spriteUV = uv * vec2( frame, 1.0 ) + location;
    vec4 tex = texture2D( tMap, spriteUV );

    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = tex.a * 1.0;
}{@}UIMobileInput.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    float alpha = 1.0;
    alpha *= crange( length( vUv - vec2( 0.5 )), 0.3999, 0.4, 1.0, 0.0 );
    alpha *= uAlpha;

    gl_FragColor.rgb = vec3(1.0);
    gl_FragColor.a = alpha;
}{@}PlayerProjectiles.glsl{@}#!ATTRIBUTES
attribute vec3 color;
attribute float sprite;
attribute float enemyShot;

#!UNIFORMS
uniform sampler2D tSprite;
uniform sampler2D tEnemySprite;
uniform float uSpriteWidth;

#!VARYINGS
varying vec2 vUv;
varying vec3 vColor;
varying float vSprite;
varying float vEnemyShot;

#!SHADER: Vertex
void main() {
    vec3 pos = position;

    vUv = uv;
    vColor = color;
    vSprite = sprite;
    vEnemyShot = enemyShot;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)
void main() {
    vec2 uv = scaleUV( vUv, vec2( 0.75 ));
    vec4 text = texture2D( tSprite, uv );
    vec4 enemy = texture2D( tEnemySprite, uv );
    text.rgb = rgb2hsv( text.rgb );
    text.r += vSprite / 4.0;
    text.rgb = hsv2rgb( text.rgb );

    text = mix( text, enemy, vEnemyShot );

    gl_FragColor.rgb = text.rgb;
    gl_FragColor.a = text.a;
}{@}PlayerShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uInvincible;
uniform vec2 uJumping;
uniform vec2 uSpeedBoost;
uniform float uDirection;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(rgb2hsv.fs)
#require(range.glsl)
void main() {
    vec2 uv = vUv;
    uv.x = crange( uDirection, -1.0, 1.0, 1.0 - uv.x, uv.x );

    vec4 tex = texture2D( tMap, uv );
    vec3 color = tex.rgb;

    // rainbow effect on invincible
    float angle = vUv.x + vUv.y + time * 1.0;
    vec3 texhsv = rgb2hsv( tex.rgb );
    color = hsv2rgb( vec3( angle, texhsv.g * ( 1.0 - uInvincible.y ), texhsv.b ));
    tex.rgb = mix( tex.rgb, color, uInvincible.x );

    // moving lines effect on jumping
    float progress = max( tan( vUv.y * 3.0 - time * 5.0 ), 0.0 );
    texhsv = rgb2hsv( tex.rgb );
    color = hsv2rgb( vec3( texhsv.r, texhsv.g * 0.5 * ( 1.0 - uJumping.y ), texhsv.b * 1.5 ));
    tex.rgb = mix( tex.rgb, color, uJumping.x * progress * ( 1.0 - uJumping.y ));

    // moving lines effect on speedBoost
    float xprogress = max( tan( uv.x * 3.0 - time * 5.0 ), 0.0 );
    texhsv = rgb2hsv( tex.rgb );
    color = hsv2rgb( vec3( texhsv.r, texhsv.g * 0.5 * ( 1.0 - uSpeedBoost.y ), texhsv.b * 1.5 ));
    tex.rgb = mix( tex.rgb, color, uSpeedBoost.x * xprogress * ( 1.0 - uSpeedBoost.y ));

    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = tex.a * uAlpha;
}{@}PlayerVFXDisable.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    float dist = length( vUv - vec2( 0.5 )) * 2.0;
    float shield = 1.0;
    float radiation = 1.0;

    float noise = dist + cnoise(vec3(( vUv - 0.5 ) * vec2( 15.0 ), time )) * 0.005;
    shield *= crange( noise, 0.75, 0.72, 1.0, 0.125 );
    shield *= crange( noise, 0.775, 0.8, 1.0, 0.0 );

    noise = dist + cnoise(vec3(( vUv - 0.5 ) * vec2( 15.0 ), time )) * 0.0125;
    radiation = crange( sin(( noise - time * 0.25 ) * 60.0 ), 0.8, 1.0, 0.0, 1.0 );
    radiation *= crange( dist, 0.75, 0.8, 0.0, 1.0 );
    radiation *= crange( dist, 0.8, 1.0, 1.0, 0.0 );

    float alpha = max( shield, radiation );

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha;
}{@}PlayerVFXJumping.glsl{@}#!ATTRIBUTES
attribute float opacity;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;

#!VARYINGS
varying float vOpacity;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vOpacity = opacity;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    float alpha = uAlpha * vOpacity;
    vec4 tex = texture2D( tMap, vUv );
    alpha *= tex.a;

    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = alpha;
}{@}Composite.fs{@}uniform float uRGBStrength;
uniform sampler2D tClouds;
uniform float uCloudStrength;

#require(UnrealBloom.fs)
#require(rgbshift.fs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(rgb2hsv.fs)

void main() {
    vec4 color;

    #test Tests.renderRGBShift()
    color = getRGB(tDiffuse, vUv, 0.3, 0.002 * uRGBStrength);
    #endtest

    #test !Tests.renderRGBShift()
    color = texture2D(tDiffuse, vUv);
    #endtest

    #test Tests.vfxHueShift()
    vec3 hueShift = rgb2hsv(color.rgb);
    hueShift.x += cnoise(vUv*0.8 + time*0.2) * 0.05 * smoothstep(0.0, 0.3, length(vUv-0.5));
    color.rgb = hsv2rgb(hueShift);
    #endtest

    #test Tests.renderClouds();
    vec4 clouds = texture2D(tClouds, vUv);
    color.rgb = blendScreen(color.rgb, clouds.rgb, uCloudStrength);
    #endtest

    color += getNoise(vUv, 1.0) * 0.02;

    vec3 bloom = getUnrealBloom(vUv);
    color.rgb += bloom;
    gl_FragColor = color;
}{@}VFXUIShader.fs{@}uniform float uRGBStrength;

#require(UnrealBloom.fs)
#require(rgbshift.fs)

void main() {
    vec4 color = texture2D(tDiffuse, vUv);

    // #test Tests.renderRGBShift()
    //     color = getRGB(tDiffuse, vUv, 0.3, 0.002 * uRGBStrength);
    // #endtest

    vec3 bloom = getUnrealBloom(vUv);
    
    color.rgb += bloom;
    
    gl_FragColor = color;
}{@}ViewControllerShader.vs{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)

void main() {
    vec4 color = texture2D(tMap, vUv);

    gl_FragColor = color;
}{@}UIBounceTitleShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform float uGlyphCount;
uniform sampler2D tMap;
uniform float uTransition;

#!VARYINGS
varying vec3 vAnimation;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vAnimation = animation;
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha;
}
{@}UIButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uBackground;
uniform float uBackgroundOpacity;
uniform vec2 uSize;
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(border.glsl)
#require(range.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)

void main() {
    vec3 rainbow = rgb2hsv(vec3(1.0));
    rainbow.x = time * 0.2 + (-vUv.x/4.) + cnoise(vec3(vUv.x*2.5*0.7, vUv.y*0.7, time*0.2)) * 0.08;
    rainbow.y = 0.7;
    rainbow.z = 0.6;
    rainbow = hsv2rgb(rainbow);

    vec3 diffuse = mix(uBackground, rainbow, 1. - uTransition);

    vec4 transparent = vec4(0.0);
    vec4 background = vec4(diffuse, uBackgroundOpacity);
    float transition = 1.0-uTransition;

    float borderValue = border(2.0, vUv, uSize);

    float y = crange(vUv.y, 0.0, 1.0, 1.0, 0.0);

    float noise = cnoise(vec3(vUv.x*2.5, vUv.y, time*0.2+uTransition*0.2));
    float fill = smoothstep(transition+0.1, transition-0.1, abs(noise)) * smoothstep(0.0, 0.1, transition);
    fill = mix(fill, 1.0, smoothstep(0.6, 1.0, transition));

    vec4 colorBorder = mix(mix(vec4(diffuse, 1.0), background, borderValue), vec4(rainbow,0.3), 1. - uTransition);

    vec4 colorFill = mix(transparent, vec4(rainbow,1.), fill);
    vec4 color = colorBorder + colorFill;

    gl_FragColor = vec4(color.rgb, color.a * uAlpha);
}
{@}UIIconButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;

#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
void main() {
    vec4 color = texture2D(tMap, vUv);
    color.rgb *= uColor;
    gl_FragColor = color;
}{@}UIChatAvatar.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(1.0);
}{@}UIChatBackground.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uBackground;
uniform float uBackgroundOpacity;
uniform float uRadius;
uniform vec2 uSize;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uBackground, uBackgroundOpacity);
}{@}UICompleteText.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform float uGlyphCount;
uniform sampler2D tMap;
uniform float uTransition;
uniform float uRainbow;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 rainbow = uColor;

    if(uRainbow > .01) {
        rainbow = rgb2hsv(vec3(1.0));
        rainbow.x += time * 0.3 +(vUv.y*2.);
        rainbow.y = 0.75;
        rainbow.z = 0.9;
        rainbow = hsv2rgb(rainbow);
    }

    float alpha = msdf(tMap, vUv);
    gl_FragColor.rgb = rainbow;
    gl_FragColor.a = uAlpha * alpha;
}
{@}UIEndingImageShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;
#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
void main() {
    vec4 color = texture2D(tMap, vUv);
    color.rgb *= uColor;
    float alpha = color.a * uAlpha;
    gl_FragColor = vec4(color.rgb, alpha);
}{@}UILabelShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform float uGlyphCount;
uniform sampler2D tMap;
uniform float uTransition;

#!VARYINGS
varying vec3 vAnimation;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vAnimation = animation;
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;

    if (uTransition > vAnimation.x) {
        gl_FragColor.a = alpha * uAlpha;
    } else {
        gl_FragColor.a = 0.0;
    }
}
{@}UITitleShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform float uGlyphCount;
uniform sampler2D tMap;
uniform float uTransition;

#!VARYINGS
varying vec3 vAnimation;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vAnimation = animation;
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;

    if (uTransition > vAnimation.x) {
        gl_FragColor.a = alpha * uAlpha;
    } else {
        gl_FragColor.a = 0.0;
    }
}
{@}UIToggleButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;

#!VARYINGS
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    if(uAlpha < .01){
        discard;
    }
    gl_FragColor = vec4(vec3(1.0), .0);
}{@}ScreensBackgroundImage.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform float uHover;
uniform float uLineMod;
uniform float uLineStep;
uniform float uLineAlpha;
uniform float uLineSpeed;
uniform float uVisible;
uniform vec2 uPattern;
uniform sampler2D tVideo;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vUv = uv;

    vec3 pos = position;

    pos.xy += cnoise(pos*0.1+time*0.2+uHover+uPattern.x+uPattern.y)*(0.6 + (1.0-uVisible));


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(transformUV.glsl)
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec2 uv = translateUV(scaleUV(vUv, vec2(3.0, 3.0), vec2(0.0)), vec2(-(uPattern.x / 3.0), vec2(-(uPattern.y / 3.0))));
    vec3 color = texture2D(tVideo, uv).rgb;

    color *= 1.0+uHover*0.5;

    float alpha = uAlpha;

    #test Tests.ScreensBackgroundScanlines()
        alpha *= range(step(uLineStep, mod(uv.y + time * uLineSpeed, uLineMod)), 0.0, 1.0, uLineAlpha+uHover*0.2, 1.0);
    #endtest


    alpha *= mix(0.0, 1.0-smoothstep(uVisible, uVisible+0.1, vUv.y), smoothstep(0.0, 0.2, uVisible));
    
    gl_FragColor = vec4(color, alpha);
}
{@}ScreensBackgroundShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uGrain;
uniform float uScanlines;
uniform vec3 uLevelColor;
uniform float uTransition;
uniform float uLevelSelect;
uniform float uLevelSelectHover;

uniform float uFlip;
uniform sampler2D tScreens;

uniform vec2 fLightPos;
uniform float fExposure;
uniform float fDecay;
uniform float fDensity;
uniform float fWeight;
uniform float fClamp;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(gaussianblur.fs)
#require(simplenoise.glsl)
#require(grain.glsl)
#require(vhs-scanlines.glsl)
#require(mousefluid.fs)
#require(rgb2hsv.fs)

const int iSamples = 30;

void main() {
    vec2 uv = vUv;

    float noise1 = cnoise(vec3(vUv, time*0.1));
    float noise2 = cnoise(vUv*1.2- time*0.15 + uLevelColor.r + uLevelColor.b);


    vec3 levelColor = rgb2hsv(uLevelColor);
    levelColor.x += noise1 * mix(0.05, 0.4, uLevelSelectHover);
    levelColor.y = mix(levelColor.y, 0.5, uLevelSelectHover);
    levelColor.z = mix(levelColor.z, 1.0, uLevelSelectHover);
    levelColor = hsv2rgb(levelColor);

    float levelFade = mix(0.6, 0.02, smoothstep(1.0, 0.1, length(uv-0.5)));
    levelFade *= 0.7 + noise2 * 0.3;
    levelColor *= levelFade;

    vec3 baseColor = mix(uColor, levelColor, uLevelSelect);

    vec4 color = vec4(baseColor, 1.0);
    vec4 screens = vec4(baseColor, 1.0);

    float fluidMask = smoothstep(0.05, 1.0, texture2D(tFluidMask, vUv).r);
    fluidMask += cnoise(vec3(vUv*2.0, time*0.3)) * 0.1;

    float fluidOutline = smoothstep(0.0, 0.4, fluidMask) * smoothstep(1.0, 0.6, fluidMask);
    vec2 fluid = texture2D(tFluid, vUv).xy * fluidMask;
    uv += fluid * 0.0002;

    #test Tests.IntroScanlines()
        vec2 scanlinesUV = gl_FragCoord.xy / resolution.xy;
        float y = resolution.y / 150.0;
        
        scanlinesUV = floor(scanlinesUV * resolution.xy / y) * y;
        color += getScanlines(scanlinesUV, 0.3) * uScanlines;
        screens += getScanlines(scanlinesUV, 0.3) * uScanlines;
    #endtest

    #test Tests.ScreensBackgroundVolumetricLight()
        vec2 deltaTextCoord = uv - fLightPos;
        deltaTextCoord *= 1.0 / float(iSamples) * (fDensity + fluidMask*0.2);
        float illuminationDecay = 1.0;

        for (int i = 0; i < iSamples; i++) {
            uv -= deltaTextCoord;

            uv.x = mix(uv.x, 1.0-uv.x, uFlip);

            vec4 texel = texture2D(tScreens, uv);
            texel *= illuminationDecay * (fWeight + fluidMask*0.12);
            screens += texel;
            illuminationDecay *= fDecay + fluidMask*0.12;
        }

        screens *= fExposure;
        screens = clamp(screens, 0.0, fClamp);
    #endtest

    #test !Tests.ScreensBackgroundVolumetricLight();
        uv.x = mix(uv.x, 1.0-uv.x, uFlip);
        screens += texture2D(tScreens, uv);
    #endtest

    color = mix(color, screens, uTransition);
    
    #test Tests.ScreensBackgroundGrain()
        color.rgb += vec3(getGrain(gl_FragCoord.xy)) * uGrain;
    #endtest

    vec3 hueShift = rgb2hsv(color.rgb);
    hueShift.x += noise1 * 0.05;
    hueShift.z *= 1.0 + fluidOutline * 0.1;
    color.rgb = hsv2rgb(hueShift);
    
    gl_FragColor = vec4(color.rgb, color.a);
}{@}City.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec2 uFogRange;
uniform vec2 uVerticalFogRange;
uniform vec3 uVerticalFogColor;
uniform vec2 uTile;
uniform float uSpeed;
uniform vec2 uCloudsRange;
uniform float uTrippy;
uniform float uTrippyRange;
uniform float uIdleBounce;
uniform vec3 uTransitionOrigin;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vMvPos;
varying float vTrippy;
varying float vProgress;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    vec3 pos = position;
    vUv = uv;

    float edge = 3.0;
    float border = 15.0;
    float start = crange( uTrippy, 0.0, 1.0, -edge, uTrippyRange );
    float dist = length(pos * vec3(1.5, 1.5, 0.125) + uTransitionOrigin);
    vTrippy = crange( dist, start, start + edge, 1.0, 0.0 );
    vProgress = crange( dist, start - border, start + border, 1.0, 0.0 );
    vProgress *= crange( dist, start + border, start - border, 1.0, 0.0 );

    pos.x += sin( time + pos.y * 0.20 + pos.z * 0.3 + pos.y *  2.0 ) * 0.1 * max( vTrippy, uIdleBounce );
    pos.y += cos( time + pos.y * 0.05 + pos.z * 0.1 + pos.x * -0.1 ) * 3.0 * max( vTrippy, uIdleBounce );

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vPos = pos;
    vMvPos = vec3(modelMatrix * vec4(pos, 1.0));
}

#!SHADER: Fragment
#require(range.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)
void main() {
    vec4 clouds = texture2D(tMap, vMvPos.xy * uTile + vec2(0.0, vMvPos.z * 0.01) + vec2(time * uSpeed * 0.1, time * uSpeed * 0.2));
    clouds *= texture2D(tMap, vMvPos.xy * uTile + vec2(0.0, vMvPos.z * 0.01) + vec2(time * uSpeed * 0.132, time * uSpeed * 0.05));

    float fog = crange(vPos.z, uFogRange.x, uFogRange.y, 0.0, 1.0);
    vec3 color = mix(uColor1, uColor2, fog);

    float height = crange(vPos.y, uVerticalFogRange.x, uVerticalFogRange.y, 0.0, 1.0);
    height += crange(clouds.r, uCloudsRange.x, uCloudsRange.y, 0.0, 1.0) * (1.0 - height);
    color += mix(uVerticalFogColor, vec3(0.0), height);

    vec3 color2 = rgb2hsv( color );
    color2.r += ( -time + length( vPos ) * 0.075 + cnoise( vMvPos * 0.015 )) * 0.25;
    color2.g *= 0.850;
    color2.b += crange( fog + height, 0.0, 1.0, 0.25, 0.650 );
    color2.b += vProgress * 15.0;
    color2 = hsv2rgb( color2 );
    color = mix( color, color2, vTrippy );

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}Rain.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform vec2 uRange;
uniform vec2 uFogRange;
uniform float uSpeed;
uniform float uAlphaCutoff;
uniform float uTile1;
uniform float uTile2;
uniform float uTile3;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uFogColor;
uniform float uTrippy;

#!VARYINGS
varying vec3 vPos;
varying vec2 vUv;
varying vec4 vRandom;
varying vec3 vMvPos;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vPos = pos;
    vUv = uv;
    vRandom = random;
    vMvPos = vec3(modelViewMatrix * vec4(pos, 1.0));
}

#!SHADER: Fragment
#require(range.glsl)
#require(rgb2hsv.fs)

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    float t = time * uSpeed;
    vec2 iUv = floor(vUv * vec2(1.0, uTile2) - vec2(0.0, t));

    float raindrop = mod(-vUv.y - t, uTile1);
    raindrop = crange(raindrop, uRange.x, uRange.y, 0.0, 1.0);
    raindrop *= random(iUv);
    raindrop *= sin((vUv.y + vRandom.x + t) * uTile3);
    raindrop *= sin((vUv.y + vRandom.y + t * vRandom.z) * uTile3);
    raindrop *= sin((vUv.y + vRandom.z + t * vRandom.w) * uTile3 * 0.2);
    raindrop *= sin((vUv.y + vRandom.y + t * 2.0 * vRandom.x) * uTile3 * 0.15);
    if (raindrop < uAlphaCutoff) discard;

    vec3 color = mix(uColor1, uColor2, raindrop);
    color = mix(color, uFogColor, crange(vMvPos.z, uFogRange.x, uFogRange.y, 0.0, 1.0));

    vec3 color2 = rgb2hsv( color );
    color2.r += ( time + length( vPos ) * 0.025 ) * 0.25;
    color2.g *= 0.850;
    color2.b += 0.90;
    color2 = hsv2rgb( color2 );
    color = mix( color, color2, uTrippy );

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}RainParticle.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform float uSize;
uniform vec2 uSizeRand;
uniform float uAlpha;
uniform vec2 uCameraFade;
uniform vec2 uAlphaRand;
uniform vec2 uDistFade;
uniform sampler2D tMap;
uniform sampler2D tPrevPos;
uniform vec3 uColor;
uniform float DPR;

#!VARYINGS
varying float vAlpha;
varying vec4 vRandom;
varying float vAngle;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 prevPos = texture2D(tPrevPos, position.xy).xyz;
    vec3 pos = decodedPos.xyz;
    vec3 velocity = pos - prevPos;
//    velocity = vec3(uCameraMatrix * vec4(velocity, 1.0));

    vAngle = -atan(velocity.y, velocity.x);

    float dist = length(pos - cameraPosition);
    vRandom = random;

    vAlpha = uAlpha * crange(random.y, 0.0, 1.0, uAlphaRand.x, uAlphaRand.y);
    vAlpha *= crange(dist, uCameraFade.x, uCameraFade.x + uCameraFade.y, 0.0, 1.0);
    vAlpha *= crange(dist, uDistFade.x, uDistFade.x + uCameraFade.y, 1.0, 0.0);
    vAlpha *= crange(pos.y, 0.3, 0.15, 1.0, 0.0);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * DPR * uSize * crange(random.x, 0.0, 1.0, uSizeRand.x, uSizeRand.y) * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}

#!SHADER: Fragment

#require(transformUV.glsl)

void main() {
    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    uv = rotateUV(uv, vAngle);

    vec2 map = texture2D(tMap, uv).rg;
    float mask = mix(map.r, map.g, vRandom.w);

    float alpha = vAlpha * mask;
    if (alpha < 0.002) discard;

    gl_FragColor = vec4(uColor, alpha);
}{@}Sky.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec2 uRange;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec2 uTile;
uniform float uNoiseSpeed;
uniform float uNoiseStrength;
uniform float uTrippy;

#!VARYINGS
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vPos = position;
}

#!SHADER: Fragment
#require(rgb2hsv.fs)
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    float t = time * uNoiseSpeed;
    float noise = cnoise(vPos.xy * uTile + vec2(t * 0.1, -t * 0.5));
    // float n2 = cnoise(vPos.xy * uNoiseTile + vec2(t * 0.43, -t * 0.2));
    noise = crange(noise, -1.0, 1.0, 0.0, 1.0);
    vec3 rainbow = hsv2rgb(vec3(noise, 1.0, 0.7));

    float gradient = crange(vPos.y, uRange.x, uRange.y, 0.0, 1.0);
    vec3 color = mix(uColor1, uColor2, gradient);
    color += rainbow * uNoiseStrength * gradient;

    vec3 color2 = rgb2hsv( color );
    color2.r += ( time + length( vPos ) * 0.025 ) * 0.05;
    color2.g *= 0.350;
    color2.b += 0.45;
    color2 = hsv2rgb( color2 );
    color = mix( color, color2, uTrippy );

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}SugarRoadGlitch.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tGlitchMap;
uniform vec3 uColor;
uniform float uSurface;
uniform float uWaveFrequency;
uniform float uWaveHeight;
uniform float uWaveSpeed;
uniform vec2 uNoiseScale;
uniform float uGlitchAmount;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(glitch.glsl)

float wave( float baseSurface, float direction, float frequency, float speed, float height ) {
    float mult = 1000.0;
    float surface = baseSurface + uSurface * ( 1.0 / mult );
    float alpha = 1.0;

    frequency *= uWaveFrequency;
    speed *= uWaveSpeed;
    height *= uWaveHeight;

    surface += sin( vUv.x * ( mult * frequency ) + time * direction * speed ) * ( 1.0 / mult ) * height;
    surface += sin( vUv.x * ( mult * frequency * 10.0 ) + time * direction * speed * 0.5 ) * ( 1.0 / mult ) * height * 0.01;
    alpha *= crange( 1.0 - vUv.y, surface, surface + 3.0 / mult, 0.0, 1.0 );
    alpha *= 1.0 + cnoise( vec3(( vUv + vec2( time * 0.001 * speed * direction, time * -0.01 * speed )) * uNoiseScale * vec2( speed, height ), time * frequency )) * 0.45;
    alpha *= 1.0 + getNoise( vUv, time ) * 0.1;

    return alpha;
}

float waves() {
    float alpha = 0.0;

    float frequency = uWaveFrequency * 350.0;
    float speed = uWaveSpeed * 0.25;
    float height = uWaveHeight * 0.0025;
    float surface = sin( vUv.x * frequency + time * speed ) * height;
    float mixMult = 0.15;

    alpha += wave( surface, 1.25, 1.0, 1.0, 1.7 ) * mixMult;
    alpha += wave( surface, 0.25, 1.2, 0.9, 0.7 ) * mixMult;
    alpha += wave( surface, -1.15, 2.2, 1.2, 0.8 ) * mixMult;
    alpha += wave( surface, -0.25, 1.8, 1.1, 0.9 ) * mixMult;
    alpha += wave( surface, -1.5, 0.8, 0.75, 1.2 ) * mixMult;
    alpha += wave( surface, -0.75, 1.4, 1.05, 0.85 ) * mixMult;
    alpha += wave( surface, 0.55, 1.2, 0.6, 0.9 ) * mixMult;

    alpha = min( 1.0, alpha );

    return alpha;
}

vec3 getGlitch() {
    vec3 color = uColor;
    vec2 vUv2 = ( vUv + vec2( 0.0, time * -0.0035 + sin( vUv.x * 50.0 + time * 2.0 ) * 0.001 )) * 9.0;
    vec2 uv = vUv2;

    // Pulsate glitch amount
    float glitchAmount = sin(time * 8.0) / 2.0 + 0.5;

    // Spikey noise
    glitchAmount = (smoothstep(0.5, 1.0, getFractNoise(time * 6.0)) * 2.0 + 0.1) * uGlitchAmount * 50.0;

    // Big chunks
    float offset = glitch(uv, 15.0, 0.2, 0.1 * glitchAmount);

    // Medium chunks
    offset += glitch(uv, 50.0, 0.1, 0.15 * glitchAmount);
    vUv2.x += offset;

    // Small chunks
    offset += glitch(uv, 150.0, 0.1, 0.25 * glitchAmount);
    vUv2.x += offset;

    float channelShiftAmount = 0.1 * glitchAmount;
    vec2 offsetR = vec2(getFractRandom(time), getFractRandom(time + 38513.3493)) * channelShiftAmount - channelShiftAmount / 2.0;

    vec4 offsetMap = texture2D(tGlitchMap, fract(vUv2 + offsetR));

    color.r = offsetMap.r * 1.0;
    color.b = offsetMap.b * 1.0;

    return color;
}

float bubbles() {
    float alpha = 1.0;
    vec2 noiseScale = vec2( 450.0 + cos( vUv.y * 30.0 + vUv.x * 60.0 + time * 0.5 ) * 5.0, 900.0 );
    vec2 offset = vec2( cos( vUv.x * 350.0 + time * 2.5 ) * 0.0005, -time * 0.01 + sin( vUv.x * 3.0 + time * 0.1 ) * 0.05 );
    float noise = cnoise( vec2(( vUv + offset ) * noiseScale ));

    float mult = 1000.0;
    float frequency = uWaveFrequency * 350.0;
    float speed = uWaveSpeed * 0.25;
    float height = uWaveHeight * 0.0025;
    float surface = sin( vUv.x * frequency + time * speed ) * height;
    float edge = surface + uSurface * ( 1.0 / mult ) * 0.75;

    float cap = 1.0 + crange( vUv.y, 1.0 - edge * 0.5, 1.0 - edge, 2.0, 0.5 );
    float size = 0.025;
    alpha -= crange( noise, cap - size + 0.05, cap - size, 0.0, 1.0 );
    return alpha;
}

void main() {
    float alpha = 0.0;

    alpha += waves();
    alpha += bubbles();
    alpha *= uAlpha;

    vec3 color = getGlitch();

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}AntimatterSpawn.fs{@}uniform float uMaxCount;
uniform float uSetup;
uniform float decay;
uniform vec2 decayRandom;
uniform sampler2D tLife;
uniform sampler2D tAttribs;

#require(range.glsl)

void main() {
    vec2 uv = vUv;
    #test !window.Metal
    uv = gl_FragCoord.xy / fSize;
    #endtest

    vec4 data = texture2D(tInput, uv);

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    vec4 life = texture2D(tLife, uv);
    vec4 random = texture2D(tAttribs, uv);
    if (life.x > 0.5) {
        data.xyz = life.yzw;
        data.x -= 999.0;
    } else {
        if (data.x < -500.0) {
            data.x = 1.0;
        } else {
            data.x -= 0.005 * decay * crange(random.w, 0.0, 1.0, decayRandom.x, decayRandom.y);
        }
    }

    if (uSetup > 0.5) {
        data = vec4(0.0);
    }

    gl_FragColor = data;
}{@}CloudFogShader.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec4 uQuaternion;
uniform float uScale;
uniform float uAlpha;
uniform float uCullDistance;
uniform float uSpeed;
uniform float uNoiseScale;
uniform float uNoiseStrength;
uniform float uNoiseTime;

#!VARYINGS
varying vec2 vUv;
varying float vAlpha;
varying vec3 vPos;


#!SHADER: Vertex

#require(instance.vs)
#require(range.glsl)
#require(rotation.glsl)

void main() {
    vUv = uv;
    vAlpha = uAlpha * crange(random.y, 0.0, 1.0, 0.5, 1.0) * 0.1;

    vec3 inPos = position;
    float rotation = radians((360.0 * random.z) + time*crange(random.w, 0.0, 1.0, -1.0, 1.0)*10.0*uSpeed);
    inPos = vec3(rotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(inPos, 1.0));

    float scale = uScale * crange(random.x, 0.0, 1.0, 0.5, 1.5);
    vec3 pos = transformPosition(inPos, offset, scale, uQuaternion);
    float mDist = length(cameraPosition - vec3(modelMatrix * vec4(pos, 1.0)));

    vAlpha *= crange(mDist, uCullDistance*0.8, uCullDistance, 1.0, 0.0);
    vPos = pos;
    vAlpha *= crange(mDist, 2.0, 8.0, 0.0, 1.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)

vec2 getUV() {
    float noise = cnoise((vPos * uNoiseScale) + time*uNoiseTime);
    float scale = 1.0 + (noise * uNoiseStrength * 0.1);

    return scaleUV(vUv, vec2(scale));
}

void main() {
    if (vAlpha < 0.01) {
        discard;
        return;
    }
    vec2 uv = uNoiseStrength > 0.0 ? getUV() : vUv;
    float mask = texture2D(tMap, uv).r;
    float padding = 0.3;
    mask *= crange(vUv.x, 0.0, padding, 0.0, 1.0) * crange(vUv.x, 1.0 - padding, 1.0, 1.0, 0.0);
    mask *= crange(vUv.y, 0.0, padding, 0.0, 1.0) * crange(vUv.y, 1.0 - padding, 1.0, 1.0, 0.0);

    gl_FragColor = vec4(uColor, mask * vAlpha);
}{@}advectionManualFilteringShader.fs{@}varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;
vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
    vec2 st = uv / tsize - 0.5;
    vec2 iuv = floor(st);
    vec2 fuv = fract(st);
    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}
void main () {
    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
    gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
    gl_FragColor.a = 1.0;
}{@}advectionShader.fs{@}varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;
void main () {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    gl_FragColor = dissipation * texture2D(uSource, coord);
    gl_FragColor.a = 1.0;
}{@}backgroundShader.fs{@}varying vec2 vUv;
uniform sampler2D uTexture;
uniform float aspectRatio;
#define SCALE 25.0
void main () {
    vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
    float v = mod(uv.x + uv.y, 2.0);
    v = v * 0.1 + 0.8;
    gl_FragColor = vec4(vec3(v), 1.0);
}{@}clearShader.fs{@}varying vec2 vUv;
uniform sampler2D uTexture;
uniform float value;
void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}{@}colorShader.fs{@}uniform vec4 color;
void main () {
    gl_FragColor = color;
}{@}curlShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;
void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}{@}displayShader.fs{@}varying vec2 vUv;
uniform sampler2D uTexture;
void main () {
    vec3 C = texture2D(uTexture, vUv).rgb;
    float a = max(C.r, max(C.g, C.b));
    gl_FragColor = vec4(C, a);
}{@}divergenceShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;
void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    vec2 C = texture2D(uVelocity, vUv).xy;
//    if (vL.x < 0.0) { L = -C.x; }
//    if (vR.x > 1.0) { R = -C.x; }
//    if (vT.y > 1.0) { T = -C.y; }
//    if (vB.y < 0.0) { B = -C.y; }
    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}{@}fluidBase.vs{@}varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;

void main () {
    vUv = uv;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(position, 1.0);
}{@}gradientSubtractShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
vec2 boundary (vec2 uv) {
    return uv;
    // uv = min(max(uv, 0.0), 1.0);
    // return uv;
}
void main () {
    float L = texture2D(uPressure, boundary(vL)).x;
    float R = texture2D(uPressure, boundary(vR)).x;
    float T = texture2D(uPressure, boundary(vT)).x;
    float B = texture2D(uPressure, boundary(vB)).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
}{@}pressureShader.fs{@}varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
vec2 boundary (vec2 uv) {
    return uv;
    // uncomment if you use wrap or repeat texture mode
    // uv = min(max(uv, 0.0), 1.0);
    // return uv;
}
void main () {
    float L = texture2D(uPressure, boundary(vL)).x;
    float R = texture2D(uPressure, boundary(vR)).x;
    float T = texture2D(uPressure, boundary(vT)).x;
    float B = texture2D(uPressure, boundary(vB)).x;
    float C = texture2D(uPressure, vUv).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}{@}splatShader.fs{@}varying vec2 vUv;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec3 bgColor;
uniform vec2 point;
uniform vec2 prevPoint;
uniform float radius;
uniform float canRender;
uniform float uAdd;

float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r, blend.r), blendScreen(base.g, blend.g), blendScreen(base.b, blend.b));
}

float l(vec2 uv, vec2 point1, vec2 point2) {
    vec2 pa = uv - point1, ba = point2 - point1;
    pa.x *= aspectRatio;
    ba.x *= aspectRatio;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
}

float cubicOut(float t) {
    float f = t - 1.0;
    return f * f * f + 1.0;
}

void main () {
    vec3 splat = (1.0 - cubicOut(clamp(l(vUv, prevPoint.xy, point.xy) / radius, 0.0, 1.0))) * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    base *= canRender;

    vec3 outColor = mix(blendScreen(base, splat), base + splat, uAdd);
    gl_FragColor = vec4(outColor, 1.0);
}{@}vorticityShader.fs{@}varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;
void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;
    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;
//    force.y += 400.3;
    vec2 vel = texture2D(uVelocity, vUv).xy;
    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}{@}mousefluid.fs{@}uniform sampler2D tFluid;
uniform sampler2D tFluidMask;

vec2 getFluidVelocity() {
    float fluidMask = smoothstep(0.1, 0.7, texture2D(tFluidMask, vUv).r);
    return texture2D(tFluid, vUv).xy * fluidMask;
}

vec3 getFluidVelocityMask() {
    float fluidMask = smoothstep(0.1, 0.7, texture2D(tFluidMask, vUv).r);
    return vec3(texture2D(tFluid, vUv).xy * fluidMask, fluidMask);
}{@}ProtonAntimatter.fs{@}uniform sampler2D tOrigin;
uniform sampler2D tAttribs;
uniform float uMaxCount;
//uniforms

#require(range.glsl)
//requires

void main() {
    vec2 uv = vUv;
    #test !window.Metal
    uv = gl_FragCoord.xy / fSize;
    #endtest

    vec3 origin = texture2D(tOrigin, uv).xyz;
    vec4 inputData = texture2D(tInput, uv);
    vec3 pos = inputData.xyz;
    vec4 random = texture2D(tAttribs, uv);
    float data = inputData.w;

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    //code

    gl_FragColor = vec4(pos, data);
}{@}ProtonAntimatterLifecycle.fs{@}uniform sampler2D tOrigin;
uniform sampler2D tAttribs;
uniform sampler2D tSpawn;
uniform float uMaxCount;
//uniforms

#require(range.glsl)
//requires

void main() {
    vec3 origin = texture2D(tOrigin, vUv).rgb;
    vec4 inputData = texture2D(tInput, vUv);
    vec3 pos = inputData.xyz;
    vec4 random = texture2D(tAttribs, vUv);
    float data = inputData.w;

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    vec4 spawn = texture2D(tSpawn, vUv);
    float life = spawn.x;

    if (spawn.x < -500.0) {
        pos = spawn.xyz;
        pos.x += 999.0;
        spawn.x = 1.0;
        gl_FragColor = vec4(pos, data);
        return;
    }

    //abovespawn
    if (spawn.x <= 0.0) {
        pos.x = 9999.0;
        gl_FragColor = vec4(pos, data);
        return;
    }

    //abovecode
    //code

    gl_FragColor = vec4(pos, data);
}{@}ProtonNeutrino.fs{@}//uniforms

#require(range.glsl)
//requires

void main() {
    //code
}{@}SceneLayout.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}Spine.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D map;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vUv.y = 1.0 - vUv.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec4 tex = texture2D( map, vUv );
    gl_FragColor = tex;
}{@}Text3D.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec3 uTranslate;
uniform vec3 uRotate;
uniform float uTransition;
uniform float uWordCount;
uniform float uLineCount;
uniform float uLetterCount;
uniform float uByWord;
uniform float uByLine;
uniform float uPadding;
uniform vec3 uBoundingMin;
uniform vec3 uBoundingMax;

#!VARYINGS
varying float vTrans;
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

#require(range.glsl)
#require(eases.glsl)
#require(rotation.glsl)
#require(conditionals.glsl)

void main() {
    vUv = uv;
    vTrans = 1.0;

    vec3 pos = position;

    if (uTransition < 5.0) {
        float padding = uPadding;
        float letter = (animation.x + 1.0) / uLetterCount;
        float word = (animation.y + 1.0) / uWordCount;
        float line = (animation.z + 1.0) / uLineCount;

        float letterTrans = crange(uTransition, letter - padding, letter + padding, 0.0, 1.0);
        float wordTrans = crange(uTransition, word - padding, word + padding, 0.0, 1.0);
        float lineTrans = crange(uTransition, line - padding, line + padding, 0.0, 1.0);

        vTrans = mix(cubicOut(letterTrans), cubicOut(wordTrans), uByWord);
        vTrans = mix(vTrans, cubicOut(lineTrans), uByLine);

        float invTrans = (1.0 - vTrans);
        vec3 nRotate = normalize(uRotate);
        vec3 axisX = vec3(1.0, 0.0, 0.0);
        vec3 axisY = vec3(0.0, 1.0, 0.0);
        vec3 axisZ = vec3(0.0, 0.0, 1.0);
        vec3 axis = mix(axisX, axisY, when_gt(nRotate.y, nRotate.x));
        axis = mix(axis, axisZ, when_gt(nRotate.z, nRotate.x));
        pos = vec3(vec4(position, 1.0) * rotationMatrix(axis, radians(max(max(uRotate.x, uRotate.y), uRotate.z) * invTrans)));
        pos += uTranslate * invTrans;
    }

    vPos = pos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(msdf.glsl)
#require(simplenoise.glsl)

vec2 getBoundingUV() {
    vec2 uv;
    uv.x = crange(vPos.x, uBoundingMin.x, uBoundingMax.x, 0.0, 1.0);
    uv.y = crange(vPos.y, uBoundingMin.y, uBoundingMax.y, 0.0, 1.0);
    return uv;
}

void main() {
    float alpha = msdf(tMap, vUv);

    //float noise = 0.5 + smoothstep(-1.0, 1.0, cnoise(vec3(vUv*50.0, time* 0.3))) * 0.5;

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha * vTrans;
}
{@}UnrealBloom.fs{@}uniform sampler2D tUnrealBloom;

vec3 getUnrealBloom(vec2 uv) {
    return texture2D(tUnrealBloom, uv).rgb;
}{@}UnrealBloomComposite.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D blurTexture1;
uniform float bloomStrength;
uniform float bloomRadius;
uniform vec3 bloomTintColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float lerpBloomFactor(const in float factor) {
    float mirrorFactor = 1.2 - factor;
    return mix(factor, mirrorFactor, bloomRadius);
}

void main() {
    gl_FragColor = bloomStrength * (lerpBloomFactor(1.0) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture1, vUv));
}{@}UnrealBloomGaussian.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D colorTexture;
uniform vec2 texSize;
uniform vec2 direction;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float gaussianPdf(in float x, in float sigma) {
    return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;
}

void main() {
    vec2 invSize = 1.0 / texSize;
    float fSigma = float(SIGMA);
    float weightSum = gaussianPdf(0.0, fSigma);
    vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
    for(int i = 1; i < KERNEL_RADIUS; i ++) {
        float x = float(i);
        float w = gaussianPdf(x, fSigma);
        vec2 uvOffset = direction * invSize * x;
        vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
        vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
        diffuseSum += (sample1 + sample2) * w;
        weightSum += 2.0 * w;
    }
    gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
}{@}UnrealBloomLuminosity.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tDiffuse;
uniform vec3 defaultColor;
uniform float defaultOpacity;
uniform float luminosityThreshold;
uniform float smoothWidth;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

#require(luma.fs)

void main() {
    vec4 texel = texture2D(tDiffuse, vUv);
    float v = luma(texel.xyz);
    vec4 outputColor = vec4(defaultColor.rgb, defaultOpacity);
    float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
    gl_FragColor = mix(outputColor, texel, alpha);
}{@}UnrealBloomPass.fs{@}#require(UnrealBloom.fs)

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    color.rgb += getUnrealBloom(vUv);
    gl_FragColor = color;
}{@}border.glsl{@}float border(float size, vec2 uv, vec2 resolution) {
    float height = size / resolution.y;
    float width = size / resolution.x;

    float left = step(width, uv.x);
    float bottom = step(height, uv.y);
    float right = step(uv.x, 1.0 - width);
    float top = step(uv.y, 1.0 - height);

    if (left < width && top < height) discard;
    if (right < uv.x - width && top < height) discard;
    if (right < uv.x - width && bottom - height < uv.y) discard;
    if (left < width && bottom - height < uv.y) discard;

    return left * bottom * right * top;
}{@}filters.glsl{@}vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}
{@}glitch.glsl{@}float getFractRandom(float n) {
	return fract(sin(n) * 43758.5453);
}

float getFractNoise(float p) {
	float fl = floor(p);
	float fc = fract(p);
	return mix(getFractRandom(fl), getFractRandom(fl + 1.0), fc);
}

float glitch(vec2 uv, float strips, float amount, float shift) {
    float speed = 20.0;
    float t = time * speed;
    float stepT = floor(t); // Every second
    float seed = getFractRandom(stepT); // Rand every second

    // Rand y offset
    uv.y += seed * strips;

    float stripId = floor(uv.y * strips) / strips;
    float xOffset = (getFractRandom(stripId) * 2.0 - 1.0) * shift ; // -shift <-> shift

    // Only apply x offset to small chunks of x range
    float xn = getFractNoise((seed + uv.x + stripId * 20.0) * strips / 4.0);
    float showOffset  = step(1.0 - amount, xn);

    return showOffset * xOffset;
}{@}grain.glsl{@}float getGrain(vec2 coords) {
    return getRandom(coords * time);
}
{@}scanlines.glsl{@}vec3 scanlines(vec3 color, vec2 uv, float radius, float speed, float multiplier) {
    color.rgb -= abs(sin(uv.y * radius + time * speed)) * multiplier;

    return color;
}{@}vhs-scanlines.glsl{@}float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

float get3DNoise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);

    f = f * f * (3.0 - 2.0 * f);

    float n = p.x + p.y * 57.0 + 113.0 * p.z;

    float res = mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
                        mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
                    mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                        mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);

    return res;
}

float getScanlines(vec2 p, float threshold) {
    float y = p.y;
    float s = time * 2.0;
    
    float v = (get3DNoise(vec3(y * 0.01  + s, 			1., 1.0)) + 0.0)
          	* (get3DNoise(vec3(y * 0.011 + 1000.0 + s, 	1., 1.0)) + 0.0) 
          	* (get3DNoise(vec3(y * 0.51  + 421.0  + s, 	1., 1.0)) + 0.0);

   	v *= getRandom(vec2(p.x + time * 0.01, p.y)) + 0.2;
    v = pow(v + 0.2, 1.0);

    if (v < threshold) v = 0.0;

    return v;
}{@}UIStars.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tOn;
uniform sampler2D tOff;
uniform float uFill;
uniform vec3 uBorderColor;


#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    vec4 on  = texture2D( tOn, vUv );
    vec4 off = texture2D( tOff, vUv );


    
    vec4 tex = mix( off, on, crange( uFill - vUv.x, 0.0, 0.001, 0.0, 1.0 ));

    if(tex.b > .4 && tex.r < .01){
        tex = vec4(vec3(0.),1.);
        tex = mix(vec4(0.), vec4(uBorderColor, 1.), smoothstep(0.,1.,uFill));
    }

    gl_FragColor = tex;
}{@}GlitchEffect.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uGlitch;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(glitch.glsl)
#require(rgb2hsv.fs)

void main() {
    vec2 vUv2 = vUv;

    // Pulsate glitch amount
    float glitchAmount = sin(time * 8.0) / 2.0 + 0.5;

    // Spikey noise
    glitchAmount = (smoothstep(0.5, 1.0, getFractNoise(time)) * 2.0 + 0.1) * uGlitch;

    // Big chunks
    float offset = glitch(vUv, 15.0, 0.2, 0.1  * glitchAmount);

    // Medium chunks
    offset += glitch(vUv, 50.0, 0.1, 0.053 * glitchAmount);
    vUv2.x += offset;

    // Small chunks
    offset += glitch(vUv, 150.0, 0.1, 0.03 * glitchAmount);
    vUv2.x += offset;

    vec4 color = texture2D(tMap, vUv2);

    float channelShiftAmount = 0.001 * glitchAmount;
    vec2 offsetR = vec2(getFractRandom(time), getFractRandom(time + 38513.3493)) * channelShiftAmount - channelShiftAmount / 2.0;
    vec4 offsetMap = texture2D(tMap, fract(vUv2 + offsetR));

//    vec3 hueShift = rgb2hsv(offsetMap.rgb);
//    hueShift.x += cnoise(vUv2*0.5+time)*0.5*uGlitch;
//    offsetMap.rgb = hsv2rgb(hueShift);

    color.r = offsetMap.r;
    color.b = offsetMap.b;

    gl_FragColor = color;
    gl_FragColor.a = 1.0;
}{@}IntroEffect.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tGlitch;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec4 color = texture2D(tMap, vUv);
    vec4 glitch = texture2D(tGlitch, vUv);

    color += glitch;
    
    gl_FragColor = color;
    gl_FragColor.a = 1.0;
}{@}FeedbackViewShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform float uGrain;
uniform sampler2D tText;
uniform vec2 uResolution;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(grain.glsl)

void main() {
    vec3 color = uColor;
    
    vec2 ratio = vec2(
        min((resolution.x / resolution.y) / (750.0 / 1334.0), 1.0),
        min((resolution.y / resolution.x) / (1334.0 / 750.0), 1.0)
    );

    vec2 vUvScaled = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    vec2 uv = vec2(vUvScaled.x, vUvScaled.y - time * 0.1);
    vec4 map = texture2D(tText, uv);

    color += map.rgb;
    
    #test Tests.ScreensBackgroundGrain()
        color += vec3(getGrain(gl_FragCoord.xy)) * uGrain;
    #endtest
    
    gl_FragColor = vec4(color, uAlpha);
}
{@}IntroAccessShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uGrain;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(grain.glsl)
#require(vhs-scanlines.glsl)

void main() {
    vec3 color = uColor;
        
    // Scanlines.    
    vec3 scanlines = uColor;

    #test Tests.IntroScanlines()
        vec2 scanlinesUV = gl_FragCoord.xy / resolution.xy;
        float y = resolution.y / 150.0;
        
        scanlinesUV = floor(scanlinesUV * resolution.xy / y) * y;
        scanlines += getScanlines(scanlinesUV, 0.3) * 0.05;
    #endtest
    
    #test Tests.IntroGrain()
        scanlines += vec3(getGrain(gl_FragCoord.xy)) * uGrain;
    #endtest
    
	gl_FragColor = vec4(scanlines, 1.0);
}
{@}IntroComicBG.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform vec3 uBase;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 color = uColor*0.08;

    float noise = cnoise(vPos*0.7+time*0.05);
    noise = mix(noise, cnoise(vPos*1.5-time*0.05), 0.2);

    vec3 mixColor = rgb2hsv(uColor);
    mixColor.x += cnoise(vPos*1.5-time*0.1)*0.1;
    color = mix(color, hsv2rgb(mixColor), smoothstep(0.1, 1.0, abs(noise))*0.2);

    color += getNoise(vUv, time)*0.05;

    color = mix(uBase, color, uAlpha);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}IntroParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tPos;
uniform vec3 uColor;
uniform float uSize;

#!VARYINGS
varying float vAlpha;

#!SHADER: Vertex
#require(range.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 pos = texture2D(tPos, position.xy).xyz;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * crange(random.w, 0.0, 1.0, 0.5, 1.5);
    gl_Position = projectionMatrix * mvPosition;

    vAlpha = crange(random.w, 0.0, 1.0, 0.0, 0.2);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uColor, vAlpha);
}{@}IntroScreenShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform sampler2D tScreens;
uniform vec2 uPattern;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(gaussianblur.fs)
#require(grain.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)

void main() {
    vec2 uv = translateUV(scaleUV(vUv, vec2(2.0, 3.0), vec2(0.0)), vec2(-(uPattern.x / 2.0), vec2(-(uPattern.y / 3.0))));

    uv += cnoise(vec3(vUv, time*0.2)) * 0.1;


    vec3 color = texture2D(tScreens, uv).rgb;

    color.rgb *= uAlpha;
    
    gl_FragColor = vec4(color, 1.0);
}
{@}IntroTitleShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uOpacity;

#!VARYINGS

#!SHADER: Vertex

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)


void main() {

    vec2 uv = vUv;
    uv += cnoise(uv*5.0+time)*2.0*smoothstep(0.0, 0.5, uAlpha * uOpacity)*smoothstep(1.0, 0.5, uAlpha * uOpacity);

    float alpha = msdf(tMap, uv);

	gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha * uOpacity;
}
{@}IntroWelcomeShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uPixelation;
uniform float uVelocity;
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(transformUV.glsl)
#require(mousefluid.fs)

void main() {
    vec3 color = uColor;

    // Wormhole.
    vec2 wormholePoint = (-resolution.xy + 2.0 * gl_FragCoord.xy) / resolution.y;
    vec2 fluidPoint = vUv;

    float fluidMask = smoothstep(0.1, 1.0, texture2D(tFluidMask, fluidPoint).r);
    fluidMask += cnoise(vec3(vUv*2.0, time*0.3)) * 0.2;

    float fluidOutline = smoothstep(0.0, 0.4, fluidMask) * smoothstep(1.0, 0.6, fluidMask);
    vec2 fluid = texture2D(tFluid, fluidPoint).xy;

    wormholePoint += fluid*0.001*fluidOutline;

    float pixellation = uPixelation * (1.0 - fluidMask*0.5);
    pixellation *= mix(0.2, 1.0, uTransition);

    vec2 wormholePixel = floor(wormholePoint * pixellation) / pixellation;
    
    float wormholeAtan = atan(wormholePixel.y, wormholePixel.x);
    float wormholeLength = length(wormholePixel);

    vec2 wormholeUV = vec2(0.05 / wormholeLength + time * uVelocity * 0.5, wormholeAtan / 3.14);
    vec2 wormholeUV2 = vec2(wormholeUV.x, atan(wormholePixel.y, abs(wormholePixel.x)) / 3.14);

    //wormholeUV = rotateUV(wormholeUV, -time*0.1);
    wormholeUV2 = rotateUV(wormholeUV2, sin(time*0.15)*0.8);


    #test Tests.textureGrad()
    vec3 wormhole = textureGrad(tMap, wormholeUV, dFdx(wormholeUV2), dFdy(wormholeUV2)).xyz * wormholeLength;
    #endtest

    #test !Tests.textureGrad()
    vec3 wormhole = texture2D(tMap, wormholeUV).xyz * wormholeLength;
    #endtest

    wormhole = rgb2hsv(wormhole);
    wormhole.x += cnoise(wormholeUV2*(0.4)+time*0.2 + uTransition*0.5) * mix(0.3, 0.4, fluidMask) * 0.5;
    wormhole.x -= (1.0-uTransition) * 0.2;
    wormhole.x += fluidOutline*cnoise(wormholeUV2*2.5+time)*0.1;
    wormhole.z *= 1.5;
    wormhole.y *= 0.8;
    wormhole.z += 0.05 + fluidMask * 0.2;
    wormhole = hsv2rgb(wormhole);

	gl_FragColor = vec4(wormhole, uAlpha);
}
{@}LandingLogo.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uVisible;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(rgbshift.fs)
#require(transformUV.glsl)
#require(glitch.glsl)

void main() {
    vec2 uv = scaleUV(vUv, vec2(0.9));

    uv *= 1.0+cnoise(vec3(vUv*2.0,time*0.1))*0.015;

    // Pulsate glitch amount
    float glitchAmount = sin(time * 8.0) / 2.0 + 0.5;

    // Spikey noise
    glitchAmount = (smoothstep(0.5, 1.0, getFractNoise(time * 0.07)) * 2.0 + 0.1);
    float fadeGlitch = 0.01+smoothstep(0.3, 1.0, cnoise(vUv*0.2+time*0.6))*0.5;
    glitchAmount *= mix(fadeGlitch, 2.0, 1.0-smoothstep(0.5, 1.0, uVisible));

    // Big chunks
    float offset = glitch(vUv, 15.0, 0.2, 0.1  * glitchAmount);

    // Medium chunks
    offset += glitch(vUv, 50.0, 0.1, 0.053 * glitchAmount);
    uv.x += offset;

    // Small chunks
    offset += glitch(vUv, 150.0, 0.1, 0.03 * glitchAmount);
    uv.x += offset;

    vec4 color = getRGB(tMap, uv, 0.1, 0.002);

    vec3 hueShift = rgb2hsv(color.rgb);
    hueShift.x += cnoise(vUv+time*0.1)*0.2;
    color.rgb = hsv2rgb(hueShift);

    float channelShiftAmount = 0.001 * glitchAmount;
    vec2 offsetR = vec2(getFractRandom(time), getFractRandom(time + 38513.3493)) * channelShiftAmount - channelShiftAmount / 2.0;
    vec4 offsetMap = texture2D(tMap, fract(uv + offsetR));

    //    vec3 hueShift = rgb2hsv(offsetMap.rgb);
    //    hueShift.x += cnoise(vUv2*0.5+time)*0.5*uGlitch;
    //    offsetMap.rgb = hsv2rgb(hueShift);

    color.r = offsetMap.r;
    color.b = offsetMap.b;

    gl_FragColor = color;

    gl_FragColor.a *= smoothstep(0.0, 0.3, uVisible);
}{@}LevelViewHacksTimer.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMask;
uniform float uWarning;
uniform float uProgress;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(rgb2hsv.fs)
void main() {
    vec3 mask = texture2D( tMask, vUv ).rgb;
    vec3 outline = vec3( 1.0 );

    float hue = floor((time + ( vUv.x * 350.0 / 16.0 + vUv.y ) / 10.0) * 7.0) / 7.0;
    vec3 rainbow = hsv2rgb( vec3( hue, 0.7, 0.9 ));

    float alpha = mask.r;
    float wobbleEdge = cos( vUv.y * 6.75 + time * 5.0 ) * 0.002;
    float progress = crange(vUv.x, uProgress + wobbleEdge, uProgress + wobbleEdge + 0.001, mask.g, 0.0 );
    vec3 color = mix( outline, rainbow, progress );

    float rate = 3.0 * time;
    float flash = uWarning * floor(( rate - floor( rate )) * 2.0 ) * mask.g;

    color = mix( color, vec3( 1.0 ), flash );

    alpha += progress + flash;
    alpha *= uAlpha;

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}LevelHealthBarShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tIcon;
uniform float uAlpha;
uniform float uHealth;
uniform float uCritical;

#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    vec4 tex = texture2D( tIcon, vUv );
    tex.rgb *= crange( uHealth - vUv.x, 0.0, 0.01, 0.3, 1.0 );
    float alpha = uAlpha * tex.a;
    float critAlpha = alpha * crange( cos( time * 3.1415 * 2.0 ), -1.0, 1.0, 1.0, 0.25 );
    alpha = mix( alpha, critAlpha, uCritical );
    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = alpha;
}{@}LevelViewHealth.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tIcon;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec4 tex = texture2D( tIcon, vUv );
    float alpha = uAlpha * tex.a;

    gl_FragColor.rgb = tex.rgb;
    gl_FragColor.a = alpha;
}{@}SelectionViewLevelShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uPattern;
uniform vec2 uSize;
uniform float uRainbow;
uniform float uSkip;
uniform sampler2D tVideo;

#!VARYINGS
varying vec2 vUv;

#!SHADER: SelectionViewLevelShader.vs
void main() {
    vUv = uv;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: SelectionViewLevelShader.fs
#require(transformUV.glsl)
#require(border.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
 
    vec3 rainbow = rgb2hsv(vec3(1.0));
    rainbow.x += time * 0.3 +(-vUv.x/3.);
    rainbow.y = 0.75;
    rainbow.z = 0.9;
    rainbow = hsv2rgb(rainbow);


    vec2 uv = translateUV(scaleUV(vUv, vec2(2.0, 3.0)*mix(1.0, 1.15, uRainbow), vec2(0.0)), vec2(-(uPattern.x / 2.0)-mix(0.0, 0.03, uRainbow), vec2(-(uPattern.y / 3.0)-mix(0.0, 0.02, uRainbow))));
    vec4 map = texture2D(tVideo, uv);

    map.rgb = mix(map.rgb, blendLinearBurn(map.rgb, uColor, 0.6), 1.0-uRainbow);

    float borderValue = border(2.5, vUv, uSize);    
    vec3 diffuse = mix(uColor, rainbow, uRainbow);

    float alpha = uAlpha;


    vec3 color = mix(diffuse, mix(map.rgb, vec3(0.), uSkip), borderValue);

    vec3 hueShift = rgb2hsv(color);
    hueShift.x += cnoise(vUv + time*0.2)*0.06;
    color = hsv2rgb(hueShift);

    color += getNoise(vUv, time)*0.03;

    gl_FragColor = vec4(color, alpha);
}
{@}SelectionViewPaginationSquareShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uBackground;
uniform float uBackgroundOpacity;
uniform vec2 uSize;
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(border.glsl)
#require(range.glsl)

void main() {
    vec4 transparent = vec4(0.0);
    vec4 background = vec4(uBackground, uBackgroundOpacity);
    float borderValue = border(2.0, vUv, uSize);
    
    float y = crange(vUv.y, 0.0, 1.0, 1.0, 0.0);
    float transition = uTransition;
    float fill = smoothstep(transition - 0.01, transition + 0.01, y);

    vec4 colorBorder = mix(vec4(uBackground, 1.0), vec4(0.), borderValue);
    vec4 colorFill = mix(transparent, vec4(uBackground, 1.0), fill);
    vec4 color = mix(colorBorder,colorFill, 1. - uTransition);

    gl_FragColor = vec4(color.rgb, color.a * uAlpha);
}
{@}BasicTransition.fs{@}uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform float uTransition;

varying vec2 vUv;

void main() {
    vec4 from = texture2D(tFrom, vUv);
    vec4 to = texture2D(tTo, vUv);
    
    gl_FragColor = mix(from, to, uTransition);
    gl_FragColor.a = 1.0;
}{@}GlitchTransition.fs{@}uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform float uTransition;

varying vec2 vUv;

#require(glitch.glsl)

void main() {
    vec2 vUv2 = vUv;
    
    // Pulsate glitch amount
    float glitchAmount = sin(time * 8.0) / 2.0 + 0.5;
    
    // Spikey noise
    glitchAmount = smoothstep(0.5, 1.0, getFractNoise(time * 6.0)) * 2.0 + 0.1;
    
    // Big chunks
    float offset = glitch(vUv, 15.0, 0.2, 0.1  * glitchAmount);
    
    // Medium chunks
    offset += glitch(vUv, 50.0, 0.1, 0.05 * glitchAmount);
    vUv2.x += offset;
    
    // Small chunks
    offset += glitch(vUv, 150.0, 0.1, 0.05 * glitchAmount);
    vUv2.x += offset;
    
    vec4 from = texture2D(tFrom, vUv2);
    vec4 to = texture2D(tTo, vUv2);
    
    vec4 color = mix(from, to, uTransition);
    
    float channelShiftAmount = 0.01 * glitchAmount;
    vec2 offsetR = vec2(getFractRandom(time), getFractRandom(time + 38513.3493)) * channelShiftAmount - channelShiftAmount / 2.0;
    
    vec4 offsetFrom = texture2D(tFrom, fract(vUv2 + offsetR));
    vec4 offsetTo = texture2D(tTo, fract(vUv2 + offsetR));
    
    color.r = mix(offsetFrom, offsetTo, uTransition).r;
    color.b = mix(offsetFrom, offsetTo, uTransition).b;
    
    gl_FragColor = color;
    gl_FragColor.a = 1.0;
}{@}GlitchVideoTransition.fs{@}uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform float uTransition;
uniform sampler2D tGlitch;

varying vec2 vUv;

void main() {
    vec4 from = texture2D(tFrom, vUv);
    vec4 to = texture2D(tTo, vUv);
    vec4 glitch = texture2D(tGlitch, vUv);

    vec4 color = mix(from, to, uTransition);

    color += glitch;
    
    gl_FragColor = color;
    gl_FragColor.a = 1.0;
}{@}IntroTransition.fs{@}#require(transformUV.glsl)

uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform float uTransition;
uniform float uZoom;

varying vec2 vUv;

void main() {
    vec2 fromUV = scaleUV(vUv, vec2(uZoom));
    vec4 from = texture2D(tFrom, fromUV);

    vec4 to = texture2D(tTo, vUv);
    
    gl_FragColor = mix(from, to, uTransition);
    gl_FragColor.a = 1.0;
}{@}Transition.vs{@}varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}