{@}contrast.glsl{@}vec3 adjustContrast(vec3 color, float c, float m) {
	float t = 0.5 - c * 0.5;
	color.rgb = color.rgb * c + t;
	return color * m;
}{@}aastep.glsl{@}float aastep(float threshold, float value, float padding) {
    return smoothstep(threshold - padding, threshold + padding, value);
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
}{@}curl.glsl{@}#test Device.mobile
float sinf2(float x) {
    x*=0.159155;
    x-=floor(x);
    float xx=x*x;
    float y=-6.87897;
    y=y*xx+33.7755;
    y=y*xx-72.5257;
    y=y*xx+80.5874;
    y=y*xx-41.2408;
    y=y*xx+6.28077;
    return x*y;
}

float cosf2(float x) {
    return sinf2(x+1.5708);
}
#endtest

#test !Device.mobile
    #define sinf2 sin
    #define cosf2 cos
#endtest

float potential1(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.x * 1.8 + v.z * 3.) + sinf2(v.x * 4.8 + v.z * 4.5) + sinf2(v.x * -7.0 + v.z * 1.2) + sinf2(v.x * -5.0 + v.z * 2.13);
    noise += sinf2(v.y * -0.48 + v.z * 5.4) + sinf2(v.y * 2.56 + v.z * 5.4) + sinf2(v.y * 4.16 + v.z * 2.4) + sinf2(v.y * -4.16 + v.z * 1.35);
    return noise;
}

float potential2(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.y * 1.8 + v.x * 3. - 2.82) + sinf2(v.y * 4.8 + v.x * 4.5 + 74.37) + sinf2(v.y * -7.0 + v.x * 1.2 - 256.72) + sinf2(v.y * -5.0 + v.x * 2.13 - 207.683);
    noise += sinf2(v.z * -0.48 + v.x * 5.4 -125.796) + sinf2(v.z * 2.56 + v.x * 5.4 + 17.692) + sinf2(v.z * 4.16 + v.x * 2.4 + 150.512) + sinf2(v.z * -4.16 + v.x * 1.35 - 222.137);
    return noise;
}

float potential3(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.z * 1.8 + v.y * 3. - 194.58) + sinf2(v.z * 4.8 + v.y * 4.5 - 83.13) + sinf2(v.z * -7.0 + v.y * 1.2 -845.2) + sinf2(v.z * -5.0 + v.y * 2.13 - 762.185);
    noise += sinf2(v.x * -0.48 + v.y * 5.4 - 707.916) + sinf2(v.x * 2.56 + v.y * 5.4 + -482.348) + sinf2(v.x * 4.16 + v.y * 2.4 + 9.872) + sinf2(v.x * -4.16 + v.y * 1.35 - 476.747);
    return noise;
}

vec3 snoiseVec3( vec3 x ) {
    float s  = potential1(x);
    float s1 = potential2(x);
    float s2 = potential3(x);
    return vec3( s , s1 , s2 );
}

//Analitic derivatives of the potentials for the curl noise, based on: http://weber.itn.liu.se/~stegu/TNM084-2019/bridson-siggraph2007-curlnoise.pdf

float dP3dY(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.z * 1.8 + v.y * 3. - 194.58) + 4.5 * cosf2(v.z * 4.8 + v.y * 4.5 - 83.13) + 1.2 * cosf2(v.z * -7.0 + v.y * 1.2 -845.2) + 2.13 * cosf2(v.z * -5.0 + v.y * 2.13 - 762.185);
    noise += 5.4 * cosf2(v.x * -0.48 + v.y * 5.4 - 707.916) + 5.4 * cosf2(v.x * 2.56 + v.y * 5.4 + -482.348) + 2.4 * cosf2(v.x * 4.16 + v.y * 2.4 + 9.872) + 1.35 * cosf2(v.x * -4.16 + v.y * 1.35 - 476.747);
    return noise;
}

float dP2dZ(vec3 v) {
    return -0.48 * cosf2(v.z * -0.48 + v.x * 5.4 -125.796) + 2.56 * cosf2(v.z * 2.56 + v.x * 5.4 + 17.692) + 4.16 * cosf2(v.z * 4.16 + v.x * 2.4 + 150.512) -4.16 * cosf2(v.z * -4.16 + v.x * 1.35 - 222.137);
}

float dP1dZ(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.x * 1.8 + v.z * 3.) + 4.5 * cosf2(v.x * 4.8 + v.z * 4.5) + 1.2 * cosf2(v.x * -7.0 + v.z * 1.2) + 2.13 * cosf2(v.x * -5.0 + v.z * 2.13);
    noise += 5.4 * cosf2(v.y * -0.48 + v.z * 5.4) + 5.4 * cosf2(v.y * 2.56 + v.z * 5.4) + 2.4 * cosf2(v.y * 4.16 + v.z * 2.4) + 1.35 * cosf2(v.y * -4.16 + v.z * 1.35);
    return noise;
}

float dP3dX(vec3 v) {
    return -0.48 * cosf2(v.x * -0.48 + v.y * 5.4 - 707.916) + 2.56 * cosf2(v.x * 2.56 + v.y * 5.4 + -482.348) + 4.16 * cosf2(v.x * 4.16 + v.y * 2.4 + 9.872) -4.16 * cosf2(v.x * -4.16 + v.y * 1.35 - 476.747);
}

float dP2dX(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.y * 1.8 + v.x * 3. - 2.82) + 4.5 * cosf2(v.y * 4.8 + v.x * 4.5 + 74.37) + 1.2 * cosf2(v.y * -7.0 + v.x * 1.2 - 256.72) + 2.13 * cosf2(v.y * -5.0 + v.x * 2.13 - 207.683);
    noise += 5.4 * cosf2(v.z * -0.48 + v.x * 5.4 -125.796) + 5.4 * cosf2(v.z * 2.56 + v.x * 5.4 + 17.692) + 2.4 * cosf2(v.z * 4.16 + v.x * 2.4 + 150.512) + 1.35 * cosf2(v.z * -4.16 + v.x * 1.35 - 222.137);
    return noise;
}

float dP1dY(vec3 v) {
    return -0.48 * cosf2(v.y * -0.48 + v.z * 5.4) + 2.56 * cosf2(v.y * 2.56 + v.z * 5.4) +  4.16 * cosf2(v.y * 4.16 + v.z * 2.4) -4.16 * cosf2(v.y * -4.16 + v.z * 1.35);
}


vec3 curlNoise( vec3 p ) {

    //A sinf2 or cosf2 call is a trigonometric function, these functions are expensive in the GPU
    //the partial derivatives with approximations require to calculate the snoiseVec3 function 4 times.
    //The previous function evaluate the potentials that include 8 trigonometric functions each.
    //
    //This means that the potentials are evaluated 12 times (4 calls to snoiseVec3 that make 3 potential calls).
    //The whole process call 12 * 8 trigonometric functions, a total of 96 times.


    /*
    const float e = 1e-1;
    vec3 dx = vec3( e   , 0.0 , 0.0 );
    vec3 dy = vec3( 0.0 , e   , 0.0 );
    vec3 dz = vec3( 0.0 , 0.0 , e   );
    vec3 p0 = snoiseVec3(p);
    vec3 p_x1 = snoiseVec3( p + dx );
    vec3 p_y1 = snoiseVec3( p + dy );
    vec3 p_z1 = snoiseVec3( p + dz );
    float x = p_y1.z - p0.z - p_z1.y + p0.y;
    float y = p_z1.x - p0.x - p_x1.z + p0.z;
    float z = p_x1.y - p0.y - p_y1.x + p0.x;
    return normalize( vec3( x , y , z ));
    */


    //The noise that is used to define the potentials is based on analitic functions that are easy to derivate,
    //meaning that the analitic solution would provide a much faster approach with the same visual results.
    //
    //Usinf2g the analitic derivatives the algorithm does not require to evaluate snoiseVec3, instead it uses the
    //analitic partial derivatives from each potential on the corresponding axis, providing a total of
    //36 calls to trigonometric functions, making the analytic evaluation almost 3 times faster than the aproximation method.


    float x = dP3dY(p) - dP2dZ(p);
    float y = dP1dZ(p) - dP3dX(p);
    float z = dP2dX(p) - dP1dY(p);


    return normalize( vec3( x , y , z ));



}{@}desaturate.fs{@}vec3 desaturate(vec3 color, float amount) {
    vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), color));
    return vec3(mix(color, gray, amount));
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
uniform float alpha;

#!VARYINGS

#!SHADER: ColorMaterial.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: ColorMaterial.fs
void main() {
    gl_FragColor = vec4(color, alpha);
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
}{@}OcclusionMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 bbMin;
uniform vec3 bbMax;

#!VARYINGS

#!SHADER: Vertex.vs
void main() {
    vec3 pos = position;
    pos *= bbMax - bbMin;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment.fs
void main() {
    gl_FragColor = vec4(1.0);
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
}{@}shadows.fs{@}#define PI2 6.2831853072
#define PI 3.141592653589793

#define MAX_PCSS_SAMPLES 17
vec2 poissonDisk[MAX_PCSS_SAMPLES];

struct PCSShadowConfig {
    int sampleCount;
    int ringCount;
    float lightWorldSize;
    float lightFrustumWidth;
    float nearPlane;
};

PCSShadowConfig defaultPCSSShadowConfig() {
    PCSShadowConfig config;
    config.sampleCount = 10;
    config.ringCount = 11;
    config.lightWorldSize = 0.3;
    config.lightFrustumWidth = 6.75;
    config.nearPlane = 6.5;
    return config;
}

bool frustumTest(vec3 coords) {
    return coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0 && coords.z <= 1.0;
}

float rand(float n){return fract(sin(n) * 43758.5453123);}
highp float rand( const in vec2 uv ) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot( uv.xy, vec2( a, b ) ), sn = mod( dt, PI );
    return fract( sin( sn ) * c );
}

void initPoissonSamples(const in vec2 randomSeed, PCSShadowConfig config) {
    float angleStep = PI2 * float(config.ringCount) / float(config.sampleCount);
    float invSampleCount = 1.0 / float(config.sampleCount);
    float angle = rand(randomSeed) * PI2;
    float radius = invSampleCount;
    float radiusStep = radius;
    
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > config.sampleCount ) {
            break;
        }
        poissonDisk[i] = vec2(cos(angle), sin(angle)) * pow(radius, 0.75);
        radius += radiusStep;
        angle += angleStep;
    }
}

float penumbraSize(const in float zReceiver, const in float zBlocker) {
    return (zReceiver - zBlocker) / zBlocker;
}

float findBlocker(sampler2D shadowMap, const in vec2 uv, const in float zReceiver, PCSShadowConfig config) {
    // This uses similar triangles to compute what
    // area of the shadow map we should search
    float lightSizeUV = config.lightWorldSize / config.lightFrustumWidth;
    float searchRadius = lightSizeUV * (zReceiver - config.nearPlane) / zReceiver;
    float blockerDepthSum = 0.0;
    int numBlockers = 0;
    
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > config.sampleCount ) {
            break;
        }
        float shadowMapDepth = texture2D(shadowMap, uv + poissonDisk[i] * searchRadius).r;
        if (shadowMapDepth < zReceiver) {
            blockerDepthSum += shadowMapDepth;
            numBlockers ++ ;
        }
    }
    
    if (numBlockers == 0)return -1.0;
    
    return blockerDepthSum / float(numBlockers);
}

float pcfFilter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius, PCSShadowConfig config) {
    float sum = 0.0;
    float depth;
    int numSamples = config.sampleCount;
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > numSamples ) {
            break;
        }
        depth = texture2D(shadowMap, uv + poissonDisk[i] * filterRadius).r;
        if (zReceiver <= depth) sum += 1.0;
    }
    for(int i = 0; i < MAX_PCSS_SAMPLES; i ++ ) {
        if( i > numSamples ) {
            break;
        }
        depth = texture2D(shadowMap, uv + -poissonDisk[i].yx * filterRadius).r;
        if (zReceiver <= depth) sum += 1.0;
    }
    return sum / (2.0 * float(numSamples));
}

float PCSS(sampler2D shadowMap, vec3 coords, PCSShadowConfig config) {
    vec2 uv = coords.xy;
    float zReceiver = coords.z; // Assumed to be eye-space z in this code
    
    initPoissonSamples(uv, config);
    
    float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, config);
    if (avgBlockerDepth == -1.0)return 1.0; 

    float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
    float lightSizeUV = config.lightWorldSize / config.lightFrustumWidth;
    float filterRadius = penumbraRatio * lightSizeUV * config.nearPlane / zReceiver;    

    return pcfFilter(shadowMap, uv, zReceiver, filterRadius, config);
}

float shadowLookupPCSS(sampler2D map, vec3 coords, float size, float compare, vec3 wpos, PCSShadowConfig config) {
    float shadow = 1.0;
    bool frustumTest = frustumTest(coords);
    if (frustumTest) {
        shadow = PCSS(map, coords, config);
    }
    return clamp(shadow, 0.0, 1.0);
}

float shadowCompare(sampler2D map, vec2 coords, float compare) {
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

float getShadowPCSS(vec3 pos, vec3 normal, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap, PCSShadowConfig config) {
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = uniforms.shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);
        lookup = shadowLookupPCSS(shadowMap, coords, uniforms.shadowSize[i], coords.z - bias, pos);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(uniforms.shadowLightPos[i], pos, uniforms.modelViewMatrix, globalUniforms.viewMatrix), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }

    #endif
    return shadow;
}

float getShadowPCSS(vec3 pos, vec3 normal, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    PCSShadowConfig config = defaultPCSSShadowConfig();
    return getShadowPCSS(pos, normal, bias, config);
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

float getShadowPCSS(vec3 pos, vec3 normal, float bias, PCSShadowConfig config) {    
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    #pragma unroll_loop
    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);
        lookup = shadowLookupPCSS(shadowMap[i], coords, shadowSize[i], coords.z - bias, pos, config);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(shadowLightPos[i], pos), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }
    #endif
    
    return shadow;
}

float getShadowPCSS(vec3 pos, vec3 normal, float bias) {
    PCSShadowConfig config = defaultPCSSShadowConfig();
    return getShadowPCSS(pos, normal, bias, config);
}
#endtest{@}fresnel.glsl{@}float getFresnel(vec3 normal, vec3 viewDir, float power) {
    float d = dot(normalize(normal), normalize(viewDir));
    return 1.0 - pow(abs(d), power);
}

float getFresnel(float inIOR, float outIOR, vec3 normal, vec3 viewDir) {
    float ro = (inIOR - outIOR) / (inIOR + outIOR);
    float d = dot(normalize(normal), normalize(viewDir));
    return ro + (1. - ro) * pow((1. - d), 5.);
}


//viewDir = -vec3(modelViewMatrix * vec4(position, 1.0));{@}FXAA.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMask;

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
    float mask = texture2D(tMask, vUv).r;
    if (mask < 0.5) {
        gl_FragColor = fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
    } else {
        gl_FragColor = texture2D(tDiffuse, vUv);
    }
    gl_FragColor.a = 1.0;
}
{@}glscreenprojection.glsl{@}vec2 frag_coord(vec4 glPos) {
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
{@}msdf.glsl{@}float msdf(vec3 tex, vec2 uv) {
    // TODO: fallback for fwidth for webgl1 (need to enable ext)
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
    float d = fwidth(signedDist);
    float alpha = smoothstep(-d, d, signedDist);
    if (alpha < 0.01) discard;
    return alpha;
}

float msdf(sampler2D tMap, vec2 uv) {
    vec3 tex = texture2D(tMap, uv).rgb;
    return msdf( tex, uv );
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

mat4 lrotationMatrix(vec3 axis, float angle) {
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

    vec3 pos = vec3(lrotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));

    //custommain

    pos.xy *= scale;
    pos += offset;

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
}{@}gluimask.fs{@}uniform vec4 uMaskValues;

#require(range.glsl)

vec2 getMaskUV() {
    vec2 ores = gl_FragCoord.xy / resolution;
    vec2 uv;
    uv.x = range(ores.x, uMaskValues.x, uMaskValues.z, 0.0, 1.0);
    uv.y = 1.0 - range(1.0 - ores.y, uMaskValues.y, uMaskValues.w, 0.0, 1.0);
    return uv;
}{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}matcap.vs{@}vec2 reflectMatcap(vec3 position, mat4 modelViewMatrix, mat3 normalMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);
    
    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normalMatrix * normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
        pow(r.x, 2.0) +
        pow(r.y, 2.0) +
        pow(r.z + 1.0, 2.0)
    );
    
    vec2 uv = r.xy / m + .5;
    
    return uv;
}

vec2 reflectMatcap(vec3 position, mat4 modelViewMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);
    
    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
                         pow(r.x, 2.0) +
                         pow(r.y, 2.0) +
                         pow(r.z + 1.0, 2.0)
                         );
    
    vec2 uv = r.xy / m + .5;
    
    return uv;
}

vec2 reflectMatcap(vec4 mvPos, vec3 normal) {
    vec3 e = normalize(vec3(mvPos));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
                         pow(r.x, 2.0) +
                         pow(r.y, 2.0) +
                         pow(r.z + 1.0, 2.0)
                         );

    vec2 uv = r.xy / m + .5;

    return uv;
}{@}BasicMirror.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMirrorReflection;
uniform mat4 uMirrorMatrix;

#!VARYINGS
varying vec4 vMirrorCoord;

#!SHADER: BasicMirror.vs
void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vMirrorCoord = uMirrorMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: BasicMirror.fs
void main() {
    gl_FragColor.rgb = vec3(texture2D(tMirrorReflection, vMirrorCoord.xy / vMirrorCoord.w));
    gl_FragColor.a = 1.0;
}{@}PBR.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: Vertex

#require(pbr.vs)

void main() {
    setupPBR(position);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(pbr.fs)

void main() {
    gl_FragColor = getPBR();
}
{@}pbr.fs{@}uniform sampler2D tBaseColor;
uniform sampler2D tMRO;
uniform sampler2D tNormal;
uniform sampler2D tLUT;

uniform sampler2D tEnvDiffuse;
uniform sampler2D tEnvSpecular;

uniform sampler2D tLightmap;
uniform float uUseLightmap;
uniform float uLightmapIntensity;
uniform float uUseLinearOutput;

uniform vec3 uTint;
uniform vec2 uTiling;
uniform vec2 uOffset;
uniform vec4 uMRON;
uniform vec2 uEnv;

uniform float uHDR;

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vV;
varying vec3 vWorldNormal;

vec3 unpackNormalPBR( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
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

const vec2 INV_ATAN = vec2(0.1591, 0.3183);
const float LN2 = 0.6931472;
const float ENV_LODS = 7.0;

struct PBRConfig {
    float reflection;
    float clearcoat;
    vec3 color;
    vec3 lightColor;
    vec3 envReflection;
    bool overrideMRO;
    vec3 mro;
};

vec3 fresnelSphericalGaussianRoughness(float cosTheta, vec3 F0, float roughness) {
    return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(2.0, (-5.55473 * cosTheta - 6.98316) * cosTheta);
}

vec2 sampleSphericalMap(vec3 v)
{
    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
    uv *= INV_ATAN;
    uv += 0.5;

    // match default C4D baked HDRI
    uv.x = fract(uv.x + 0.25);

    return uv;
}

vec4 SRGBtoLinear(vec4 srgb) {
    vec3 linOut = pow(srgb.xyz, vec3(2.2));
    return vec4(linOut, srgb.w);
}

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(0.4545454545454545));
}

vec4 linearToSRGB(vec4 color) {
    return vec4(pow(color.rgb, vec3(0.4545454545454545)), 1.0);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec4 autoToLinear(vec4 texel, float uHDR) {
    vec4 color = RGBMToLinear(texel);
    if (uHDR < 0.001) { color = SRGBtoLinear(texel); }
    return color;
}

vec3 uncharted2Tonemap(vec3 x) {
    float A = 0.15;
    float B = 0.50;
    float C = 0.10;
    float D = 0.20;
    float E = 0.02;
    float F = 0.30;
    return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

vec3 uncharted2(vec3 color) {
    const float W = 11.2;
    float exposureBias = 2.0;
    vec3 curr = uncharted2Tonemap(exposureBias * color);
    vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W));
    return curr * whiteScale;
}

vec4 getIBLContribution(float NdV, vec4 baseColor, vec4 MRO, vec3 R, vec3 V, vec3 N, sampler2D tLUT, sampler2D tEnvDiffuse, sampler2D tEnvSpecular, PBRConfig config) {
    float metallic = clamp(MRO.x + uMRON.x - 1.0, 0.0, 1.0);
    float roughness = clamp(MRO.y + uMRON.y - 1.0, 0.0, 1.0);
    float ao = mix(1.0, MRO.z, uMRON.z);

    if (config.overrideMRO) {
        metallic = config.mro.x;
        roughness = config.mro.y;
        ao *= config.mro.z;
    }

    vec2 lutUV = vec2(NdV, roughness);
    vec2 diffuseUV = sampleSphericalMap(N);

    vec3 brdf = SRGBtoLinear(texture2D(tLUT, lutUV)).rgb;
    vec3 diffuse = autoToLinear( texture2D(tEnvDiffuse, diffuseUV ), uHDR).rgb;

    vec3 lightmap = vec3(1.0);

    if (uUseLightmap > 0.0) {
        lightmap = texture2D(tLightmap, vUv2).rgb;
        lightmap.rgb = pow(lightmap.rgb, vec3(2.2));
        diffuse.rgb *= lightmap.rgb;
    }

    diffuse *= baseColor.rgb;

    float level = floor(roughness * ENV_LODS);
    vec2 specUV = sampleSphericalMap(R);

    specUV.y /= 2.0;
    specUV /= pow(2.0, level);
    specUV.y += 1.0 - exp(-LN2 * level);

    vec3 specular = autoToLinear(texture2D(tEnvSpecular, specUV), uHDR).rgb;

    // fake stronger specular highlight
    specular += pow(specular, vec3(2.2)) * uEnv.y;

    if (uUseLightmap > 0.0) {
        specular *= lightmap;
    }

    vec3 F0 = vec3(0.04);
    F0 = mix(F0, baseColor.rgb, metallic);

    vec3 F = fresnelSphericalGaussianRoughness(NdV, F0, roughness);

    vec3 diffuseContrib = 1.0 - F;
    specular = specular.rgb * (F * brdf.x + brdf.y);

    diffuseContrib *= 1.0 - metallic;

    float alpha = baseColor.a;

    return vec4((diffuseContrib * diffuse + specular + (config.envReflection*0.01)) * ao * uEnv.x, alpha);
}

vec3 getNormal() {
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    return unpackNormalPBR(V, N, tNormal, uMRON.w, 1.0, vUv).xyz;
}

vec4 getPBR(vec3 baseColor, PBRConfig config) {
    vec3 N = vWorldNormal;
    vec3 V = normalize(vV);
    vec3 worldNormal = getNormal();
    vec3 R = reflect(V, worldNormal);
    float NdV = abs(dot(worldNormal, V));
    vec4 baseColor4 = SRGBtoLinear(vec4(baseColor, 1.0));

    vec4 MRO = texture2D(tMRO, vUv);
    vec4 color = getIBLContribution(NdV, baseColor4, MRO, R, V, worldNormal, tLUT, tEnvDiffuse, tEnvSpecular, config);

    if (uUseLinearOutput < 0.5) {
        color.rgb = uncharted2(color.rgb);
        color = linearToSRGB(color);
    }

    return color;
}

vec4 getPBR(vec3 baseColor) {
    PBRConfig config;
    return getPBR(baseColor, config);
}

vec4 getPBR() {
    vec3 baseColor = texture2D(tBaseColor, vUv).rgb;
    baseColor *= uTint;
    return getPBR(baseColor);
}
{@}pbr.vs{@}attribute vec2 uv2;

uniform sampler2D tBaseColor;
uniform vec2 uTiling;
uniform vec2 uOffset;

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec3 vWorldNormal;
varying vec3 vV;

void setupPBR(vec3 p0) { //inlinemain
    vUv = uv * uTiling + uOffset;
    vUv2 = uv2;
    vec4 worldPos = modelMatrix * vec4(p0, 1.0);
    vV = worldPos.xyz - cameraPosition;
    vNormal = normalMatrix * normal;
    vWorldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal;
}

void setupPBR(vec3 p0, vec3 n) {
    vUv = uv * uTiling + uOffset;
    vUv2 = uv2;
    vec4 worldPos = modelMatrix * vec4(p0, 1.0);
    vV = worldPos.xyz - cameraPosition;
    vNormal = normalMatrix * n;
    vWorldNormal = mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * n;
}
{@}phong.fs{@}#define saturate(a) clamp( a, 0.0, 1.0 )

float dPhong(float shininess, float dotNH) {
    return (shininess * 0.5 + 1.0) * pow(dotNH, shininess);
}

vec3 schlick(vec3 specularColor, float dotLH) {
    float fresnel = exp2((-5.55437 * dotLH - 6.98316) * dotLH);
    return (1.0 - specularColor) * fresnel + specularColor;
}

vec3 calcBlinnPhong(vec3 specularColor, float shininess, vec3 normal, vec3 lightDir, vec3 viewDir) {
    vec3 halfDir = normalize(lightDir + viewDir);
    
    float dotNH = saturate(dot(normal, halfDir));
    float dotLH = saturate(dot(lightDir, halfDir));

    vec3 F = schlick(specularColor, dotLH);
    float G = 0.85;
    float D = dPhong(shininess, dotNH);
    
    return F * G * D;
}

vec3 calcBlinnPhong(vec3 specularColor, float shininess, vec3 normal, vec3 lightDir, vec3 viewDir, float minTreshold) {
    vec3 halfDir = normalize(lightDir + viewDir);

    float dotNH = saturate(dot(normal, halfDir));
    float dotLH = saturate(dot(lightDir, halfDir));

    dotNH = range(dotNH, 0.0, 1.0, minTreshold, 1.0);
    dotLH = range(dotLH, 0.0, 1.0, minTreshold, 1.0);

    vec3 F = schlick(specularColor, dotLH);
    float G = 0.85;
    float D = dPhong(shininess, dotNH);

    return F * G * D;
}

vec3 phong(float amount, vec3 diffuse, vec3 specular, float shininess, float attenuation, vec3 normal, vec3 lightDir, vec3 viewDir) {
    float cosineTerm = saturate(dot(normal, lightDir));
    vec3 brdf = calcBlinnPhong(specular, shininess, normal, lightDir, viewDir);
    return brdf * amount * diffuse * attenuation * cosineTerm;
}

vec3 phong(float amount, vec3 diffuse, vec3 specular, float shininess, float attenuation, vec3 normal, vec3 lightDir, vec3 viewDir, float minThreshold) {
    float cosineTerm = saturate(range(dot(normal, lightDir), 0.0, 1.0, minThreshold, 1.0));
    vec3 brdf = calcBlinnPhong(specular, shininess, normal, lightDir, viewDir, minThreshold);
    return brdf * amount * diffuse * attenuation * cosineTerm;
}

//viewDir = -mvPosition.xyz
//lightDir = normalize(lightPos){@}radialblur.fs{@}vec3 radialBlur( sampler2D map, vec2 uv, float size, vec2 resolution, float quality ) {
    vec3 color = vec3(0.);

    const float pi2 = 3.141596 * 2.0;
    const float direction = 8.0;

    vec2 radius = size / resolution;
    float test = 1.0;

    for ( float d = 0.0; d < pi2 ; d += pi2 / direction ) {
        vec2 t = radius * vec2( cos(d), sin(d));
        for ( float i = 1.0; i <= 100.0; i += 1.0 ) {
            if (i >= quality) break;
            color += texture2D( map, uv + t * i / quality ).rgb ;
        }
    }

    return color / ( quality * direction);
}

vec3 radialBlur( sampler2D map, vec2 uv, float size, float quality ) {
    vec3 color = vec3(0.);

    const float pi2 = 3.141596 * 2.0;
    const float direction = 8.0;

    vec2 radius = size / vec2(1024.0);
    float test = 1.0;

    for ( float d = 0.0; d < pi2 ; d += pi2 / direction ) {
        vec2 t = radius * vec2( cos(d), sin(d));
        for ( float i = 1.0; i <= 100.0; i += 1.0 ) {
            if (i >= quality) break;
            color += texture2D( map, uv + t * i / quality ).rgb ;
        }
    }

    return color / ( quality * direction);
}
{@}range.glsl{@}

float range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    vec3 sub = vec3(oldValue, newMax, oldMax) - vec3(oldMin, newMin, oldMin);
    return sub.x * sub.y / sub.z + newMin;
}

vec2 range(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    vec2 oldRange = oldMax - oldMin;
    vec2 newRange = newMax - newMin;
    vec2 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

vec3 range(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    vec3 oldRange = oldMax - oldMin;
    vec3 newRange = newMax - newMin;
    vec3 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

float crange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec2 crange(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec3 crange(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

float rangeTransition(float t, float x, float padding) {
    float transition = crange(t, 0.0, 1.0, -padding, 1.0 + padding);
    return crange(x, transition - padding, transition + padding, 1.0, 0.0);
}
{@}refl.fs{@}vec3 reflection(vec3 worldPosition, vec3 normal) {
    vec3 cameraToVertex = normalize(worldPosition - cameraPosition);
    
    return reflect(cameraToVertex, normal);
}

vec3 refraction(vec3 worldPosition, vec3 normal, float rRatio) {
    vec3 cameraToVertex = normalize(worldPosition - cameraPosition);
    
    return refract(cameraToVertex, normal, rRatio);
}

vec4 envColor(samplerCube map, vec3 vec) {
    float flipNormal = 1.0;
    return textureCube(map, flipNormal * vec3(-1.0 * vec.x, vec.yz));
}

vec4 envColorEqui(sampler2D map, vec3 direction) {
    vec2 uv;
    uv.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * 0.31830988618 + 0.5;
    uv.x = atan( direction.z, direction.x ) * 0.15915494 + 0.5;
    return texture2D(map, uv);
}{@}refl.vs{@}vec3 inverseTransformDirection(in vec3 normal, in mat4 matrix) {
    return normalize((matrix * vec4(normal, 0.0) * matrix).xyz);
}

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
    return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}

vec3 reflection(vec4 worldPosition) {
    vec3 transformedNormal = normalMatrix * normal;
    vec3 cameraToVertex = normalize(worldPosition.xyz - cameraPosition);
    vec3 worldNormal = inverseTransformDirection(transformedNormal, viewMatrix);
    
    return reflect(cameraToVertex, worldNormal);
}

vec3 refraction(vec4 worldPosition, float refractionRatio) {
    vec3 transformedNormal = normalMatrix * normal;
    vec3 cameraToVertex = normalize(worldPosition.xyz - cameraPosition);
    vec3 worldNormal = inverseTransformDirection(transformedNormal, viewMatrix);
    
    return refract(cameraToVertex, worldNormal, refractionRatio);
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
}


mat2 rotationMatrix(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}{@}roundedBorder.glsl{@}float roundedBorder(float thickness, float radius, vec2 uv, vec2 resolution, out float inside) {
    // Get square-pixel coordinates in range -1.0 .. 1.0 on the y axis
    float aspect = resolution.x / resolution.y;
    vec2 ratio = vec2(aspect, 1.0);
    vec2 squareUv = (2.0 * uv - 1.0) * ratio; // -1.0 .. 1.0

    float squareThickness = (thickness / resolution.y);
    float squareRadius = 2.0 * (radius / resolution.y);
    vec2 size = ratio - vec2(squareRadius + squareThickness);

    float d = length(max(abs(squareUv),size) - size) - squareRadius;
    float dist = abs(d);
    float delta = fwidth(dist);
    float border = 1.0 - smoothstep(-delta, delta, dist - squareThickness);

    delta = fwidth(d);
    float limit = squareThickness * 0.5;
    inside = 1.0 - smoothstep(-delta, delta, d - limit);

    return border;
}

float roundedBorder(float thickness, float radius, vec2 uv, vec2 resolution) {
    float inside;
    return roundedBorder(thickness, radius, uv, resolution, inside);
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
    noise += (sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
}

float cnoise(vec2 v) {
    float t = v.x * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += (sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
}{@}transformUV.glsl{@}vec2 translateUV(vec2 uv, vec2 translate) {
    return uv - translate;
}

vec2 rotateUV(vec2 uv, float r, vec2 origin) {
    float c = cos(r);
    float s = sin(r);
    mat2 m = mat2(c, -s,
                  s, c);
    vec2 st = uv - origin;
    st = m * st;
    return st + origin;
}

vec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {
    vec2 st = uv - origin;
    st /= scale;
    return st + origin;
}

vec2 rotateUV(vec2 uv, float r) {
    return rotateUV(uv, r, vec2(0.5));
}

vec2 scaleUV(vec2 uv, vec2 scale) {
    return scaleUV(uv, scale, vec2(0.5));
}

vec2 skewUV(vec2 st, vec2 skew) {
    return st + st.gr * skew;
}

vec2 transformUV(vec2 uv, float a[9]) {

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

    vec2 st = uv;

    //Translate
    st -= vec2(a[0], a[1]);

    //Skew
    st = st + st.gr * vec2(a[2], a[3]);

    //Rotate
    st = rotateUV(st, a[4], vec2(a[7], a[8]));

    //Scale
    st = scaleUV(st, vec2(a[5], a[6]), vec2(a[7], a[8]));

    return st;
}{@}module.json{@}{
  "gl": ["transformUV"]
}{@}uvgrid.glsl{@}#require(transformUV.glsl)

vec2 getUVForGrid(vec2 uv, float xr, float yr, float x, float y) {
    return translateUV(scaleUV(uv, vec2(xr, yr), vec2(0.0)), -vec2(x / xr, y / yr));
}
{@}InstancedCarPart.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(1.0);
}
{@}PBRCarClipShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uNoiseStrength;
uniform float uWheelSpeed;
uniform vec4 uWiggle;
uniform vec3 uClearCoat;
uniform vec3 uScaleOut;
uniform vec3 uOffsetOut;
uniform float uTime;
uniform float uSaturation;
uniform float uSide;
uniform float uProgress;
uniform int uEase;
uniform float uWheel;

#!VARYINGS
varying vec3 vPos;
varying float vProgress;
varying float vTransition;
varying float vNormal2;

#!SHADER: Vertex
#require(pbr.vs)
#require(simplenoise.glsl)
#require(eases.glsl)
#require(range.glsl)

mat4 rotationX( in float angle ) {
    return mat4(	1.0,		0,			0,			0,
    0, 	cos(angle),	-sin(angle),		0,
    0, 	sin(angle),	 cos(angle),		0,
    0, 			0,			  0, 		1);
}

mat4 rotationY( in float angle ) {
    return mat4(	cos(angle),		0,		sin(angle),	0,
    0,		1.0,			 0,	0,
    -sin(angle),	0,		cos(angle),	0,
    0, 		0,				0,	1);
}

mat4 rotationZ( in float angle ) {
    return mat4(	cos(angle),		-sin(angle),	0,	0,
    sin(angle),		cos(angle),		0,	0,
    0,				0,		1,	0,
    0,				0,		0,	1);
}

void main() {
    vec3 pos = position;
    vProgress = crange( uSide, 1.0, -1.0, uProgress - 0.25, uProgress - 0.25 );

    vec3 n = (rotationX(time * uWheelSpeed) * vec4(normal, 1.0)).xyz;
    float t1 = cubicIn( crange( length( pos.z * uSide - vProgress ), 0.0, 0.5, 0.0, 1.0 ));
    float t2 = cubicIn( crange( length( pos.z * uSide - vProgress ), 0.0, 0.5, 0.0, 1.0 ));
    float transition = crange( uSide, -1.0, 1.0, t2, t1 );
    transition = crange( uWheelSpeed, 0.01, 0.012, transition, 1.0 );

    vTransition = transition;

    vNormal2 = dot( normalize( normal ), cameraPosition );

    float mult = crange( uSide, -1.0, 1.0, 0.3, 1.1 );

    vec3 noiseSettings = vec3(1.5, 1.5, 0) + vec3( 0.0, 0.0, time );
    pos *= mix( vec3(mult, mult, 1.0) + cnoise( position * noiseSettings ) * vec3( 0.03, 0.03, 0.0 ), vec3(1.0), sineOut( transition ));
    pos.z -= mix( 0.1 * uSide, 0.0, transition );
    vPos = pos;
    setupPBR(pos, n);
    gl_Position = projectionMatrix * modelViewMatrix * rotationX(time * uWheelSpeed) * rotationX(sin(uTime * 5.0) * uWiggle.x + sin(uTime * 8.0) * uWiggle.x) * rotationY(sin(uTime * 6.0) * uWiggle.y + sin(time * 7.0) * uWiggle.y) * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(pbr.fs)
#require(desaturate.fs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(eases.glsl)

vec3 saturation(vec3 rgb, float adjustment)
{
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

void main() {
    if (( mix(vPos.z, vPos.x, uWheel) - 0.05 ) * uSide < vProgress ) discard;
    float t = time;
    t = floor(time * 12.0) / 12.0;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t) * uNoiseStrength;

    vec3 pbr = getPBR().rgb;

    pbr += smoothstep(vec3(uClearCoat.x), vec3(uClearCoat.y), desaturate(pbr * 5.0, 1.0)) * uClearCoat.z;
    pbr += (noise*0.5);

    pbr = saturation(pbr, uSaturation);

    float t1 = cubicIn( vTransition );
    float t2 = cubicOut( vTransition );
    float transition = crange( uSide, -1.0, 1.0, t1, t2 );

    vec3 color = mix( pbr, mix(pbr*5.0, vec3(1.0), 0.2), 1.0 - quarticIn( transition ));
    float alpha = crange( uSide, 1.0, -1.0, transition, 1.0 );

//    alpha += crange( transition, 0.0, 0.25, cnoise( vPos.xy + vec2(0.0, time * 3.0)) + cnoise( vPos.xy * vec2(5.0) + vec2(0.0, time * 3.0)), 0.0);

    gl_FragColor = vec4(color, alpha);
}
{@}pTransition.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uSide;
uniform float uProgress;
uniform vec3 uColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vTransition;
varying float vNormal;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(eases.glsl)
#require(range.glsl)
void main() {
    vUv = uv;
    vec3 pos = position;
    float t1 = cubicIn( crange( length( pos.z * uSide - uProgress ), 0.0, 0.5, 0.0, 1.0 ));
    float t2 = cubicOut( crange( length( pos.z * uSide - uProgress ), 0.0, 0.5, 0.0, 1.0 ));
    float transition = crange( uSide, -1.0, 1.0, t2, t1 );
    vTransition = transition;

    vNormal = dot( normalize( normal ), cameraPosition );

    float mult = crange( uSide, -1.0, 1.0, 1.0, 1.2 );
    pos.z -= mix( 0.2, 0.0, transition );
    pos *= mix( vec3(mult, mult, 1.0) + cnoise( position * vec3(12.0) + time ) * vec3( 0.1, 0.1, 0.0 ), vec3(1.0), transition );
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    if ( vPos.z * uSide < uProgress ) discard;
    vec3 color = mix( uColor, vec3(1.0), 1.0 - vTransition );
    float alpha = vTransition;
    color = mix( vec3(1.0), color, crange( vNormal, -0.5, 0.01, 0.0, 1.0 ));
    gl_FragColor = vec4(color, alpha);
}
{@}SceneComposite.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform sampler2D tNoise;
uniform vec2 uDimensions;
uniform vec2 uStageDimensions;
uniform float uTransition0;
uniform float uTransition;
uniform float uUVScale;
uniform float uRotation;
uniform float uFlipped;
uniform vec3 uTransitionColor;
uniform float uRGBShift;
uniform float uBloomAdd;
uniform float uBloomExtra;
uniform float uNoise;
uniform float uVignette;
uniform sampler2D tGrunge;
uniform float uGrunge;
uniform float uSpeed;
uniform float uMobile;


#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment

#require(UnrealBloom.fs)
#require(range.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)
#require(rgbshift.fs)
#require(blendmodes.glsl)

vec2 aspectRatioUV(vec2 uv, vec2 textureResolution, vec2 containerDimensions) {
    vec2 ratioX = vec2(1., textureResolution.x/textureResolution.y * containerDimensions.y/containerDimensions.x);
    vec2 ratioY = vec2(textureResolution.y/textureResolution.x * containerDimensions.x/containerDimensions.y, 1.);
    float which = step(ratioX.y , 1.);
    vec2 aspectRatio = mix(ratioY, ratioX, which);
    vec2 rUV =  (uv - vec2(0.5)) * aspectRatio + vec2(0.5);
    return rUV;
}

void main() {
    vec2 baseUV = scaleUV(vUv, vec2(1.0+uSpeed*0.01));

    vec2 transitionUV = aspectRatioUV(baseUV, uDimensions, uStageDimensions);
    transitionUV = mix(transitionUV, vec2(transitionUV.x, 1.0-transitionUV.y), uFlipped);

    vec2 tuv = baseUV;

    vec2 fUV = rotateUV(transitionUV, radians(uRotation));
    vec2 uv = fUV * (1.0 / uUVScale);
    //uv += cnoise(fUV * 3.0 + time*uTimeScale) * 0.02;

    vec3 noise = texture2D(tNoise, uv).rgb;
    noise *= fUV.y;

    float t0 = crange(uTransition0, 0.0, 1.0, 0.0, 1.0);
    float mix0 = step(0.5, rangeTransition(t0, 1.0 -noise.r, 0.05));

    float t1 = crange(uTransition, 0.0, 1.0, 0.0, 1.0);
    float mix1 = step(0.5, rangeTransition(t1, 1.0 -noise.g, 0.05));

    float fadeEdges = smoothstep(1.0, 0.1, length(scaleUV(vUv, vec2(1.0, resolution.x/resolution.y))-0.5));
    vec3 fromColor = getRGB(tFrom, tuv, 0.3, 0.0005*uSpeed*fadeEdges+0.001*uRGBShift*fadeEdges).rgb;//texture2D(tFrom, tuv).rgb;
        
    vec3 toColor = getRGB(tTo, tuv, 0.3, 0.0005*uSpeed*fadeEdges+0.001*uRGBShift*fadeEdges).rgb;//texture2D(tTo, tuv).rgb;\

    //fromColor *= mix(1.0, smoothstep(1.0, 0.0, uTransition0), 0.6);

    vec3 color = mix(fromColor, uTransitionColor, mix0);
    color = mix(color, toColor, mix1);

    color += getUnrealBloom(vUv) * uBloomAdd;
    color += crange(getNoise(vUv, 10.0), 0.0, 1.0, -1.0, 1.0) * uNoise * 0.03;
    color *= 1.0 + uSpeed * 0.15;

    if (uGrunge > 0.0) {
        vec3 grunge = texture2D(tGrunge, vUv*2.0).rgb;

        float grungeMix = uGrunge * smoothstep(-0.1, 0.8, length(scaleUV(vUv, vec2(1.0, resolution.x/resolution.y))-0.5));
        grungeMix += uSpeed * 0.2;
        color = blendScreen(color, grunge, grungeMix);

        vec3 grunge2 = texture2D(tGrunge, vUv*2.2+0.5).rgb;
        color = blendMultiply(color, vec3(1.0-grunge2.r), grungeMix);
    }

    
    color *= mix(1.0, smoothstep(mix(1.0, 2.0, uMobile)-uSpeed*0.4, mix(0.25, 0.5, uMobile)-uSpeed*0.1, length(scaleUV(vUv, vec2(1.0, resolution.x/resolution.y))-0.5)), uVignette * 0.5);

    gl_FragColor = vec4(color, 1.0);
}{@}SceneTransition.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform float uTransition;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
vec2 offset(float progress, float x, float theta) {
  float phase = progress*progress + progress + theta;
  float shifty = 0.03*progress*cos(10.0*(progress+x));
  return vec2(0, shifty);
}

vec3 transition(sampler2D from, sampler2D to, vec2 uv, float progress) {
  return mix(texture2D(from, uv + offset(progress, uv.x, 0.0)).rgb, texture2D(to, uv + offset(1.0-progress, uv.x, 3.14)).rgb, progress);
}

void main() {
    vec2 fuv = vUv;
    vec2 tuv = vUv;

    vec3 fromColor = texture2D(tFrom, fuv).rgb;
    vec3 toColor = texture2D(tTo, tuv).rgb;

    float trans = uTransition * 2.0;
    vec3 outColor = transition(tFrom, tTo, vUv, uTransition);

    gl_FragColor = vec4(outColor, 1.0);
}{@}ViewControllerTransition.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap1;
uniform sampler2D tMap2;
uniform float uTransition;
uniform float uRatio;
uniform float uIndex;
uniform float uScrollDelta;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;

    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(aastep.glsl)

void main() {
    vec2 uv = vUv;

    vec3 color1 = texture2D(tMap1, uv).rgb;
    vec3 color2 = texture2D(tMap2, uv).rgb;

    float inclination = -0.15 * uRatio * uScrollDelta;

    // no inclination for hero section
    if (uIndex == 0.0) {
        //inclination = 0.0;
    }

    float cut = aastep(uv.y + uv.x * inclination, crange(uTransition, 0.0, 1.0, 0.0 + inclination, 1.0), 0.001);

    color1 *= mix(1.0, 0.5, smoothstep(0.5, 1.0, abs(uTransition)));
    color2 *= mix(1.0, 0.5, smoothstep(0.5, 0.0, abs(uTransition)));

    vec3 color = mix(color1, color2, cut);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}WaveSceneTransition.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform sampler2D tNoise;
uniform float uTransition0;
uniform float uTransition;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uFlipped;
uniform vec3 uColor0;


#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)

void main() {
    vec2 transitionUV = scaleUV(vUv, vec2(1.0, resolution.x/resolution.y));
    transitionUV = mix(transitionUV, vec2(transitionUV.x, 1.0-transitionUV.y), uFlipped);

    vec2 tuv = vUv;

    vec2 fUV = rotateUV(transitionUV, radians(uRotation));
    vec2 uv = fUV * (1.0 / uUVScale);
    //uv += cnoise(fUV * 3.0 + time*uTimeScale) * 0.02;

    vec3 noise = texture2D(tNoise, uv).rgb;
    noise *= fUV.y;

    float t0 = crange(uTransition0, 0.0, 1.0, 0.0, 1.0);
    float mix0 = step(0.5, rangeTransition(t0, 1.0 -noise.r, 0.05));

    float t1 = crange(uTransition, 0.0, 1.0, 0.0, 1.0);
    float mix1 = step(0.5, rangeTransition(t1, 1.0 -noise.g, 0.05));

    vec3 fromColor = texture2D(tFrom, tuv).rgb;
    vec3 toColor = texture2D(tTo, tuv).rgb;

    vec3 color = mix(fromColor, uColor0, mix0);
    color = mix(color, toColor, mix1);

    gl_FragColor = vec4(color, 1.0);
}{@}AnimatedFuelForgeShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform vec3 uDirection;
uniform vec3 uOffset;
uniform float uDistance;
uniform vec4 uParams;
uniform float uFlip;

uniform sampler2D tMatcap;
uniform sampler2D tAo;
uniform sampler2D tLightmap;
uniform sampler2D tMask;
uniform float uNoiseStrength;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uLightmapPower;
uniform float uBrightness;
uniform float uPosterizeTime;
uniform float uPosterizeNoise;
uniform float uFanSpeed;
uniform vec3 uAxis;
uniform vec4 uOrientation;

#!VARYINGS
varying vec3 vPos;
varying vec3 vOffset;
varying vec3 vNormal;
varying vec3 vLocalNormal;
varying vec2 vUv;
varying vec2 vMuv;
varying vec2 vUv2;
varying vec3 vViewDir;

#!SHADER: Vertex
#require(matcap.vs)
void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;
    vec3 pos = position;

    #ifdef INSTANCED
    vec3 newoffset = offset;
    newoffset += uDirection * t;
    newoffset = mod(newoffset, uParams.z) + uOffset;

    float yoffset = pow(clamp(-newoffset.x * 0.25 + 1.0, 0.0, 1.0), 2.0) * uParams.w;
    if (uFlip > 0.0) yoffset = pow(clamp(newoffset.x * 0.25, 0.0, 1.0), 2.0) * uParams.w;
    newoffset.y -= yoffset;
    newoffset.x += uParams.y;

    pos = transformPosition(position, newoffset, scale, uOrientation).xyz;
    #endif

    vMuv = reflectMatcap(position, modelViewMatrix, normalMatrix, normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vPos = pos;
    vOffset = offset;
    vLocalNormal = normal;
    vNormal = normalMatrix * normal;
    vUv = uv;
    vUv2 = uv2;
    vViewDir = -(modelViewMatrix * vec4(pos, 1.0)).xyz;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(phong.fs)
void main() {
    vec4 mask = texture2D(tMask, vUv);
    float towerMask = step(0.0, vUv.y);
    float t = floor(time * uPosterizeNoise) / uPosterizeNoise;
    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);
    vec4 color = texture2D(tMatcap, vMuv);
    color.rgb *= mix(uColor2, vec3(1.0), towerMask);
    color += noise * uNoiseStrength;
    color.rgb = color.rgb * mix(vec3(1.0), texture2D(tLightmap, vUv).rgb, uLightmapPower) * texture2D(tAo, vUv2).rgb * uColor1 * uBrightness;
    color.rgb = mix(color.rgb, color.rgb * uColor3, mask.g);
    gl_FragColor.rgb = color.rgb;
    gl_FragColor.a = 1.0;
}{@}AnimatedInstanceShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uDirection;
uniform vec3 uOffset;
uniform float uDistance;
uniform float uPosterizeTime;
uniform vec4 uParams;

uniform vec3 uKeyLightDir;
uniform vec3 uRimLightDir;
uniform vec3 uBounceLightDir;
uniform float uKeyLightStep;
uniform float uBounceStep;
uniform float uRimStep;
uniform float uBounceStrength;
uniform float uGrain;
uniform vec3 uShadowColor;
uniform vec3 uColor;
uniform vec3 uBounceColor;
uniform vec3 uRimColor;

uniform float uFlip;

#!VARYINGS
varying vec3 vPos;
varying vec3 vOffset;
varying vec3 vNormal;
varying vec3 vLocalNormal;

#!SHADER: Vertex
void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;
    vec3 pos = position;
    // pos += uDirection * t;
    // pos.x = mod(pos.x, 200.0);

    #ifdef INSTANCED
    vec3 newoffset = offset;
    newoffset += uDirection * t;
    newoffset = mod(newoffset, uParams.z) + uOffset;

    float yoffset = pow(clamp(-newoffset.x * 0.25 + 1.0, 0.0, 1.0), 2.0) * uParams.w;
    if (uFlip > 0.0) yoffset = pow(clamp(newoffset.x * 0.25, 0.0, 1.0), 2.0) * uParams.w;
    newoffset.y -= yoffset;
    newoffset.x += uParams.y;

    pos = transformPosition(position, newoffset, scale, orientation).xyz;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vPos = pos;
    vOffset = offset;
    vLocalNormal = normal;
    vNormal = normalMatrix * normal;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;
    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    float keylight = clamp(dot(normalize(vLocalNormal), uKeyLightDir), 0.0, 1.0);
    float bounce = clamp(dot(normalize(vLocalNormal), uBounceLightDir), 0.0, 1.0);
    float rim = clamp(dot(normalize(vNormal), uRimLightDir), 0.0, 1.0);

    keylight += noise;
    bounce += noise;
    rim += noise * 0.5;

    float value = step(uKeyLightStep, keylight);
    float bounceValue = step(uBounceStep, bounce);
    float rimvalue = step(uRimStep, rim);

    vec3 color = mix(uShadowColor, uColor, value);
    color = mix(color, uBounceColor, bounceValue);
    color = mix(color, uRimColor, rimvalue);

    gl_FragColor = vec4(color, 1.0);
}{@}BonfireShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap0;
uniform sampler2D tMap1;
uniform float uStep;
uniform float uGrain;
uniform float uDiscard;
uniform vec2 uDirection;
uniform vec4 uParams;
uniform vec3 uColor0;
uniform vec3 uColor1;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    float t = floor(-time * 12.0) / 12.0;
    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);
    vec4 color = texture2D(tMap0, vUv);
    vec4 animated = texture2D(tMap1, vUv + uDirection * t);

    float mask = color.g * (animated.r + (1.0 - vUv.y) * uParams.x);
    if (mask < uDiscard) discard;

    float value = color.r * (animated.r + (1.0 - vUv.y) * uParams.x);
    value += noise * uGrain;
    value = step(uStep, value);

    vec3 final = mix(uColor0, uColor1, value);

    gl_FragColor = vec4(final, 1.0);
}{@}CloudDistanceShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tStaticTexture;
uniform sampler2D tAnimatedTexture;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform vec2 uForegroundRange;
uniform float uGrain;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uGradient1;
uniform vec3 uGradient2;
uniform float uGradientRotation;
uniform float uDiscard;
uniform float uPosterizeTime;
uniform float uPosterizeTimeNoise;
uniform float uTime;
uniform float uAlpha;
uniform vec2 uOther;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vMask;
varying vec2 vGradientUv;
varying float vZ;
varying float vZ2;

#!SHADER: Vertex
#require(range.glsl)

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPos;
    vUv = uv;
    vUv2 = uv2;
    vMask = 1.0 - step(0.5, vUv2.y);

    vGradientUv = uv - 0.5;
    vGradientUv = rotate2d(uGradientRotation) * vGradientUv;
    vGradientUv += 0.5;

    vZ = clamp(crange(cameraPosition.y, uGradient1.x, uGradient1.y, 0.0, 1.0), 0.0, 1.0);
    vZ2 = clamp(crange(cameraPosition.y, uGradient2.x, uGradient2.y, 1.0, 0.0), 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    // animate based on camera height

    float t = floor(-uTime * uPosterizeTime) / uPosterizeTime;
    float tnoise = floor(-time * uPosterizeTimeNoise) / uPosterizeTimeNoise;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, tnoise);

    float value = texture2D(tAnimatedTexture, vUv * uTile + uDirection * t).r;
    value += noise * uGrain;

    float originalValue = value;
    // value = 1.0 - step(vZ - clamp(vZ2, 0.0, 1.0), originalValue);
    value = 1.0 - step(vZ + vZ2, originalValue);
    float see = value;

    // float mask = vMask;
    // value *= mask;
    // value += texture2D(tStaticTexture, vUv).r * (1.0 - mask);

    // float grad1 = smoothstep(uGradient1.x, uGradient1.y, vGradientUv.x);
    // grad1 += noise;
    // grad1 = step(uGradient1.z, grad1);

    // float grad2 = smoothstep(uGradient2.x, uGradient2.y, vGradientUv.x);
    // grad2 += noise;
    // grad2 = step(uGradient2.z, grad2);
    
    vec3 color = mix(uColor1, uColor2, value);
    // color = mix(uColor3, color, grad1);
    // color = mix(uColor4, color, grad2);
    if (color.r < uDiscard) discard;

    

    gl_FragColor = vec4(color, 1.0);
    gl_FragColor.a = uAlpha;
}{@}CutoutShader.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec3 scale;
attribute vec4 orientation;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uDirection;
uniform vec2 uTile;
uniform vec2 uOffset;
uniform float uMix;
uniform float uPosterizeTime;
uniform float uNoiseStrength;
uniform vec3 uColor;
uniform vec3 uColor1;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uHueAdjust;
uniform float uBrightness;
uniform float uBillboard;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;


#!VARYINGS
varying vec2 vUv;
varying float vFog;

#!SHADER: Vertex
#require(instance.vs)
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;

    if ( uBillboard > 0.0 ) pos = transformPosition( position, offset, scale, cameraQuaternion );

    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)

void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    vec4 color = texture2D(tMap, vUv * uTile + uOffset + uDirection * t);
    if (color.a < 0.8) discard;
    color.rgb = mix(color.rgb, uColor, uMix);
    color.rgb += noise * uNoiseStrength;
    // color.rgb = mix(color.rgb, uColor1, step(uNoise, noise));

    vec3 hueadjust = rgb2hsv(color.rgb);
    hueadjust.x += uHueAdjust*0.1;
    color.rgb = hsv2rgb(hueadjust);

    color.rgb = mix(color.rgb, uFogColor, vFog * uFogMix);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color.rgb = blendOverlay(color.rgb, brush, uBrushBlend);
    }


    gl_FragColor = color * uBrightness;
}
{@}FlatColorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

void main() {
    gl_FragColor.rgb = uColor;
    gl_FragColor.a = 1.0;
}{@}GreyboxShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec4 uFresnelParams;

#!VARYINGS
varying vec3 vMvPos;
varying vec3 vWorldNormal;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vMvPos = vec3(modelViewMatrix * vec4(pos, 1.0));
    vWorldNormal = normalMatrix * normal;
    vUv = uv;
}

#!SHADER: Fragment
void main() {
    vec4 color = texture2D(tMap, vUv);
    float fresnel = uFresnelParams.x + uFresnelParams.y * pow(1.0 + dot(normalize(vMvPos), normalize(vWorldNormal)), uFresnelParams.z);
    fresnel *= (1.0 - color.r);
    gl_FragColor = vec4(fresnel);
}{@}HueShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uHueAdjust;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(rgb2hsv.fs)
void main() {
    vec4 color = texture2D(tMap, vUv);
    color.rgb = rgb2hsv(color.rgb);
    color.x += uHueAdjust*0.1;
    color.rgb = hsv2rgb(color.rgb);

    gl_FragColor = color;
    
    gl_FragColor.rgb /= gl_FragColor.a;
    gl_FragColor.a *= uAlpha;
}{@}MatcapShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMatcap;
uniform sampler2D tAo;
uniform sampler2D tLightmap;
uniform sampler2D tMask;
uniform float uNoiseStrength;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uLightmapPower;
uniform float uBrightness;
uniform float uPosterizeTime;
uniform float uPosterizeNoise;
uniform float uFanSpeed;
uniform vec3 uAxis;
uniform vec3 uOffset;
uniform vec4 uLightDir;

#!VARYINGS
varying vec2 vMuv;
varying vec2 vUv;
varying vec2 vUv2;
varying float vMask;
varying vec3 vNormal;
varying vec3 vViewDir;

#!SHADER: Vertex
#require(matcap.vs)
#require(rotation.glsl)
void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;
    float mask = 1.0 - step(0.0, uv.x);
    vec3 pos = position;
    mat4 rotmatrix = rotationMatrix(uAxis, (t * uFanSpeed) * mask);
    pos = position - uOffset;
    pos = (rotmatrix * vec4(pos, 1.0)).xyz;
    pos += uOffset;

    #ifdef INSTANCED
    // vec3 newpos = (rotmatrix * vec4(pos, 1.0)).xyz;

    pos = transformPosition(pos, offset, scale, orientation).xyz;
    #endif

    vMuv = reflectMatcap(position, modelViewMatrix, normalMatrix, normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vUv2 = uv2;
    vMask = mask;
    vNormal = normalMatrix * normal;
    vViewDir = -(modelViewMatrix * vec4(pos, 1.0)).xyz;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(phong.fs)
void main() {
    vec4 mask = texture2D(tMask, vUv);
    float towerMask = step(0.0, vUv.y);
    float t = floor(time * uPosterizeNoise) / uPosterizeNoise;
    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);
    vec4 color = texture2D(tMatcap, vMuv);
    color.rgb *= mix(uColor2, vec3(1.0), towerMask);
    color += noise * uNoiseStrength;
    color.rgb = color.rgb * mix(vec3(1.0), texture2D(tLightmap, vUv).rgb, uLightmapPower) * texture2D(tAo, vUv2).rgb * uColor1 * uBrightness;
    color.rgb = mix(color.rgb, color.rgb * uColor3, mask.g);
    gl_FragColor.rgb = color.rgb;
    gl_FragColor.a = 1.0;
}{@}ModifiedGlassShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tInside;
uniform float uTransparent;
uniform float uDistortStrength;
uniform sampler2D tMap;
uniform vec4 uAlphaRange;

uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec4 uColorParams;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
#require(glass.vs)

void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    setupGlass(pos);
}

#!SHADER: Fragment
#require(glass.fs)

void main() {
    vec3 normal = normalMatrix * (gl_FrontFacing == false ? -vNormal : vNormal);
    vec4 label =  texture2D(tMap, vUv);
    float labelBlend = 1.0 - label.a;

    vec4 color = getGlass(normal);
    color.rgb += mix(uColor0, vec3(0.0), gFresnel);
    color.rgb *= mix(vec3(1.0), uColor1, gFresnel);

    color.rgb = mix(label.rgb, color.rgb, labelBlend);
    color.a = mix(1.0, mix(color.a, 1.0, uColorParams.y), labelBlend);

    gl_FragColor = color;


    // if (uTransparent < 0.5) {
    //     vec2 uv = gl_FragCoord.xy / resolution;
    //     uv += 0.1 * vNormal.xy * gFresnel * uDistortStrength;
    //     vec3 color = texture2D(tInside, uv).rgb;
    //     gl_FragColor.rgb = mix(gl_FragColor.rgb, color, 1.0 - gl_FragColor.a);
    // }
}{@}ShadowShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec3 uColor1;
uniform float uStep;
uniform float uMaskStep;
uniform float uNoise;
uniform float uNoiseReduce;
uniform float uMaskNoise;
uniform float uPosterizeTime;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;
    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    float value = texture2D(tMap, vUv).r;

    float mask = value;
    mask = step(uMaskStep, mask + noise * uMaskNoise);

    if (mask > 0.1) discard;

    value = mix(step(uStep, value + noise * uNoise), value, uNoiseReduce);

    vec3 color = mix(uColor, uColor1, value);
    gl_FragColor = vec4(color, 1.0);
}{@}SkyGradientShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uDirection;
uniform vec2 uTile;
uniform vec2 uOffset;
uniform float uMix;
uniform float uPosterizeTime;
uniform float uNoiseStrength;
uniform vec3 uColor;
uniform vec3 uColor1;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uHueAdjust;
uniform float uBrightness;


#!VARYINGS
varying vec2 vUv;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)

void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);
    
    vec4 color = texture2D(tMap, vUv * uTile + uOffset);
    if (color.a < 1.0) discard;
    

    vec3 hueadjust = rgb2hsv(color.rgb);
    hueadjust.x += uHueAdjust*0.1;
    color.rgb = hsv2rgb(hueadjust);

    color.rgb = mix(color.rgb, uFogColor, vFog * uFogMix);

    color.rgb = mix(color.rgb, uColor1, smoothstep(uDirection.x, uDirection.y, vUv.y));
    color.rgb = mix(color.rgb, uColor, uMix);
    color.rgb += noise * uNoiseStrength;

    gl_FragColor = color * uBrightness;
}{@}SpeedlineShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec4 uParams;
uniform float uPosterizeTime;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
    vPos = position;
}

#!SHADER: Fragments
void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;
    t *= uParams.y;
    float value = mod(vUv.y + t, uParams.x);
    // value *= sin(vUv.y * uParams.x * 0.42 + time * uParams.y * 0.1);
    if (value < uParams.z) discard;

    gl_FragColor = vec4(1.0);
    gl_FragColor.a = uParams.w;
}{@}SpinningFanShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uKeyLightDir;
uniform vec3 uRimLightDir;
uniform vec3 uBounceLightDir;
uniform float uKeyLightStep;
uniform float uBounceStep;
uniform float uRimStep;
uniform float uBounceStrength;
uniform float uGrain;
uniform vec3 uShadowColor;
uniform vec3 uColor;
uniform vec3 uBounceColor;
uniform vec3 uRimColor;
uniform vec2 uWobble;
uniform float uWobbleSpeed;
uniform float uSpeed;
uniform float uPosterizeTime;
uniform vec3 uAxis;

#!VARYINGS
varying vec3 vLocalNormal;
varying vec3 vNormal;
varying vec2 vUv;

#!SHADER: Vertex

#require(rotation.glsl)

mat4 rotationX( in float angle ) {
	return mat4(	1.0,		0,			0,			0,
			 		0, 	cos(angle),	-sin(angle),		0,
					0, 	sin(angle),	 cos(angle),		0,
					0, 			0,			  0, 		1);
}

mat4 rotationY( in float angle ) {
	return mat4(	cos(angle),		0,		sin(angle),	0,
			 				0,		1.0,			 0,	0,
					-sin(angle),	0,		cos(angle),	0,
							0, 		0,				0,	1);
}

mat4 rotationZ( in float angle ) {
	return mat4(	cos(angle),		-sin(angle),	0,	0,
			 		sin(angle),		cos(angle),		0,	0,
							0,				0,		1,	0,
							0,				0,		0,	1);
}

void main() {
    float t = time * uWobbleSpeed;
    vec3 pos = position;

    float posterizeTime = floor(time * uPosterizeTime) / uPosterizeTime;

    float rotation = radians((360.0) + posterizeTime * 20.0 * uSpeed); 
    mat4 rotMatrix = rotationMatrix(uAxis, rotation);
    pos = vec3(rotMatrix * vec4(pos, 1.0));

    float phase1 = sin(t);
    float phase2 = cos(t);
    gl_Position = projectionMatrix * modelViewMatrix * rotationX(phase1 * uWobble.x) * rotationZ(phase2 * uWobble.y) * vec4(pos, 1.0);
    vLocalNormal = vec3(rotMatrix * vec4(normal, 1.0));
    vNormal = normalMatrix * vLocalNormal;
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    float t = time;
    t = floor(time * 12.0) / 12.0;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t) * uGrain;

    float keylight = clamp(dot(normalize(vLocalNormal), uKeyLightDir), 0.0, 1.0);
    float bounce = clamp(dot(normalize(vLocalNormal), uBounceLightDir), 0.0, 1.0);
    float rim = clamp(dot(normalize(vNormal), uRimLightDir), 0.0, 1.0);

    keylight += noise;
    bounce += noise;
    rim += noise * 0.5;

    float value = step(uKeyLightStep, keylight);
    float bounceValue = step(uBounceStep, bounce);
    float rimvalue = step(uRimStep, rim);

    vec3 color = mix(uShadowColor, uColor, value);
    color = mix(color, uBounceColor, bounceValue);
    color = mix(color, uRimColor, rimvalue);

    gl_FragColor = vec4(color, 1.0);
}{@}StylizedBuildingShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tLightMap;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform float uGrain;
uniform float uGrainReduce;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uShadowColor;
uniform float uPosterizeTime;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform float uLightMix;
uniform vec3 uLightColor;
uniform float uHueAdjust;

#!VARYINGS
varying vec2 vUv;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 white = vec3(1.0);

    float t = floor(-time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    vec3 tex = texture2D(tMap, vUv * uTile + uDirection * t).rgb;
    float extraLight = texture2D(tLightMap, vUv * uTile + uDirection * t).r;

    float value = tex.r;
    float noisegrain = noise * uGrain;
    value = mix(step(uStep, value+noisegrain), value, uGrainReduce);

    vec3 shadowcolor = mix(uShadowColor, white, value);

    vec3 color = mix(uColor1, uColor2, tex.g);
    color = mix(color, uColor3, tex.b);
    color *= shadowcolor;
    color = mix(color, uLightColor, extraLight * uLightMix);

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);

    color = mix(color, uFogColor, vFog * uFogMix);

    gl_FragColor = vec4(color, 1.0);
}{@}StylizedCloudShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tStaticTexture;
uniform sampler2D tAnimatedTexture;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform vec2 uForegroundRange;
uniform float uGrain;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uGradient1;
uniform vec3 uGradient2;
uniform float uGradientRotation;
uniform float uDiscard;
uniform float uPosterizeTime;
uniform float uPosterizeTimeNoise;
uniform float uTime;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vMask;
varying vec2 vGradientUv;

#!SHADER: Vertex

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vUv2 = uv2;
    vMask = 1.0 - step(0.5, vUv2.y);
    vGradientUv = uv - 0.5;
    vGradientUv = rotate2d(uGradientRotation) * vGradientUv;
    vGradientUv += 0.5;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)



void main() {
    float t = floor(-uTime * uPosterizeTime) / uPosterizeTime;
    float tnoise = floor(-time * uPosterizeTimeNoise) / uPosterizeTimeNoise;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, tnoise);

    float value = texture2D(tAnimatedTexture, vUv * uTile + uDirection * t).r;
    value += noise * uGrain;
    value = step(uStep, value);

    float mask = vMask;
    value *= mask;
    value += texture2D(tStaticTexture, vUv).r * (1.0 - mask);


    float grad1 = smoothstep(uGradient1.x, uGradient1.y, vGradientUv.x);
    grad1 += noise;
    grad1 = step(uGradient1.z, grad1);

    float grad2 = smoothstep(uGradient2.x, uGradient2.y, vGradientUv.x);
    grad2 += noise;
    grad2 = step(uGradient2.z, grad2);
    
    vec3 color = mix(uColor1, uColor2, value);
    color = mix(uColor3, color, grad1);
    color = mix(uColor4, color, grad2);
    if (color.r < uDiscard) discard;

    gl_FragColor = vec4(color, 1.0);
    gl_FragColor.a = uAlpha;
}{@}StylizedDiffuseShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uKeyLightDir;
uniform vec3 uRimLightDir;
uniform vec3 uBounceLightDir;
uniform float uKeyLightStep;
uniform float uBounceStep;
uniform float uRimStep;
uniform float uBounceStrength;
uniform float uGrain;
uniform float uGrainReduce;
uniform float uHueAdjust;

uniform vec3 uShadowColor;
uniform vec3 uColor;
uniform vec3 uBounceColor;
uniform vec3 uRimColor;
uniform vec2 uWobble;
uniform float uWobbleSpeed;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;

#!VARYINGS
varying vec3 vLocalNormal;
varying vec3 vNormal;
varying vec2 vUv;

#!SHADER: Vertex

mat4 rotationX( in float angle ) {
	return mat4(	1.0,		0,			0,			0,
			 		0, 	cos(angle),	-sin(angle),		0,
					0, 	sin(angle),	 cos(angle),		0,
					0, 			0,			  0, 		1);
}

mat4 rotationY( in float angle ) {
	return mat4(	cos(angle),		0,		sin(angle),	0,
			 				0,		1.0,			 0,	0,
					-sin(angle),	0,		cos(angle),	0,
							0, 		0,				0,	1);
}

mat4 rotationZ( in float angle ) {
	return mat4(	cos(angle),		-sin(angle),	0,	0,
			 		sin(angle),		cos(angle),		0,	0,
							0,				0,		1,	0,
							0,				0,		0,	1);
}

void main() {
    float t = time * uWobbleSpeed;
    vec3 pos = position;
    float phase1 = sin(t);
    float phase2 = cos(t);
    gl_Position = projectionMatrix * modelViewMatrix * rotationX(phase1 * uWobble.x) * rotationZ(phase2 * uWobble.y) * vec4(pos, 1.0);
    vLocalNormal = normal;
    vNormal = normalMatrix * normal;
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)

void main() {
    float t = time;
    t = floor(time * 12.0) / 12.0;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t) * uGrain;
    noise = mix(noise, 1.0, uGrainReduce);

    float keylight = clamp(dot(normalize(vLocalNormal), uKeyLightDir), 0.0, 1.0);
    float bounce = clamp(dot(normalize(vLocalNormal), uBounceLightDir), 0.0, 1.0);
    float rim = clamp(dot(normalize(vNormal), uRimLightDir), 0.0, 1.0);

    keylight += noise;
    bounce += noise;
    rim += noise * 0.5;

    float value = step(uKeyLightStep, keylight);
    float bounceValue = step(uBounceStep, bounce);
    float rimvalue = step(uRimStep, rim);

    vec3 color = mix(uShadowColor, uColor, value);
    color = mix(color, uBounceColor, bounceValue);
    color = mix(color, uRimColor, rimvalue);

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    gl_FragColor = vec4(color, 1.0);
}{@}StylizedDustShader.glsl{@}{@}StylizedFieldShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tAnimatedTexture;
uniform sampler2D tLightmap;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform vec2 uForegroundRange;
uniform float uGrain;
uniform float uGrainReduce;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform float uPosterizeTime;

uniform vec3 uGradient1;
uniform vec3 uGradient2;
uniform float uGradientRotation;
uniform float uGradientApply;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vMask;
varying vec2 vGradientUv;

#!SHADER: Vertex

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vUv2 = uv2;
    vGradientUv = uv - 0.5;
    vGradientUv = rotate2d(uGradientRotation) * vGradientUv;
    vGradientUv += 0.5;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)


void main() {
    float t = floor(-time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    float value = texture2D(tAnimatedTexture, vUv * uTile + uDirection * t).r;
    float noisegrain = noise * uGrain;
    value = mix(step(uStep, value+noisegrain), value, uGrainReduce);

    vec4 lightmap = texture2D(tLightmap, vUv);
    lightmap += noisegrain;

    vec3 color = mix(uColor1, uColor2, value);

    float gradient1 = smoothstep(uGradient1.x, uGradient1.y, vGradientUv.x);
    float grad1 = mix(step(uGradient1.z, gradient1+noisegrain), gradient1, uGrainReduce);

    float gradient2 = smoothstep(uGradient2.x, uGradient2.y, vGradientUv.x);
    float grad2 = mix(step(uGradient2.z, gradient2+noisegrain), gradient2, uGrainReduce);

    color = mix(uColor3, color, grad1 * ( 1.0 - uGradientApply ));
    color = mix(uColor4, color, grad2 * ( 1.0 - uGradientApply ));

    color.rgb = mix(uColor3, color.rgb, lightmap.r);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    gl_FragColor = vec4(color, 1.0);
}
{@}StylizedGrassShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec4 uWind;
uniform float uCutoff;
uniform vec3 uTint;
uniform vec3 uGrassColor1;
uniform vec3 uGrassColor2;
uniform vec3 uEnv;
uniform vec3 uFogColor;
uniform vec2 uFogDepth;
uniform float uFogNoise;


uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform float uFogNoise;

#!VARYINGS
varying vec3 vColor;
varying vec3 vData;
varying float vTipHighlight;
varying vec2 vUv;
varying float vFog;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vDist;
varying vec3 vPos;
varying float vNoise;
varying float vRandColor;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    vNormal = normalize(normalMatrix * normal);

    float largeScaleMotion = 0.0;
    float smallScaleMotion = 0.0;
    float t = 0.0;

    #ifdef INSTANCED
    pos = position;
    pos = transformPosition(pos, offset, scale, orientation);
    t = time * uWind.x;
    pos = position;

    vRandColor = crange(sin(orientation.x * 2.1 - orientation.y * 5.2 + orientation.z *2.5), -1.0, 1.0, -0.05, 0.04);

    vNormal = transformPosition(normal, vec3(0.0), 1.0, orientation);

    // grass animation
    float offsetFactor = (offset.x + offset.y + offset.z) * uWind.y + t;
    float heightFactor = crange(vdata.r, 1.0, 1.0, 0.0, 1.0) * uWind.z;
    vData = vdata;

    // large scale motion
    largeScaleMotion = sin(offsetFactor) * heightFactor;

    // small scale motion
    smallScaleMotion = sin(2.65 * (offsetFactor)) * heightFactor * 0.5;

    pos = transformPosition(pos, offset, scale, orientation);
    #endif

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    worldPos.z += largeScaleMotion;
    worldPos.z += smallScaleMotion;
    worldPos.x += smallScaleMotion;
    //worldPos.y *= clamp(uHeight, 0.0, 1.0);
    vec4 modelViewPos = viewMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewPos;

    vColor = mix(uGrassColor1, uGrassColor2, vdata.r);
    vUv = uv;
    vTipHighlight = (largeScaleMotion + smallScaleMotion) * 0.25 * uWind.w;

    vWorldPos = worldPos.xyz;
    vDist = length(cameraPosition - vec3(modelMatrix * vec4(pos, 1.0)));
}

#!SHADER: Fragment
#require(range.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

void main() {
    float alpha = texture2D(tMap, vUv).r;
    if (alpha < uCutoff) discard;
    alpha = crange(vData.r, 0.0, 0.1, 0.2, 1.0);

    vec3 color = vColor;
    color += vec3(vRandColor);
    color.rgb += vTipHighlight;
    color *= uEnv;

    //color.rgb = pow(color.rgb, vec3(0.45454545));

    float fogDepth = crange(vDist, uFogDepth.x, uFogDepth.x + uFogDepth.y, 0.0, 1.0);
    color = mix(color, uFogColor, fogDepth);

    gl_FragColor = vec4(color, alpha);
}
{@}StylizedPBRTextureShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform float uGrain;
uniform float uGrainReduce;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform float uApplyPBR;
uniform vec3 uShadowColor;
uniform float uPosterizeTime;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uHueAdjust;
uniform vec3 uClearCoat;
uniform float uSaturation;
uniform float uNoiseStrength;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;

#!VARYINGS
varying vec2 vUv;
varying float vFog;

#!SHADER: Vertex
#require(pbr.vs)
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    setupPBR(pos);
    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;
    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(pbr.fs)
#require(desaturate.fs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)

vec3 saturation(vec3 rgb, float adjustment)
{
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W)) * 0.0;
    return mix(intensity, rgb, adjustment);
}

void main() {
    vec3 white = vec3(1.0);

    float t = floor(-time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    vec3 tex = texture2D(tBaseColor, vUv * uTile + uDirection * t).rgb;

    float value = tex.r;
    value = mix(step(uStep, value + noise * uGrain), value, uGrainReduce);

    vec3 shadowcolor = mix(uShadowColor, white, value);

    vec3 color = mix(uColor1, uColor2, tex.g);

    //standard blue, uColor3
    if (tex.b < 0.7) {
        color = mix(color, uColor3, tex.b);
    }

    //extra color for logo, uColor4
    if (tex.b > 0.7) {
        color = mix(color, uColor4, tex.b);
    }

    vec3 pbr = getPBR(color).rgb;

    pbr += smoothstep(vec3(uClearCoat.x), vec3(uClearCoat.y), desaturate(pbr * 5.0, 1.0)) * uClearCoat.z * 0.1;
    pbr += (noise*0.5)* uNoiseStrength;

//    pbr = saturation(pbr, uSaturation);

    color = mix( color, pbr, uApplyPBR );

    color *= shadowcolor;

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    color = mix(color, uFogColor, vFog * uFogMix);



    gl_FragColor = vec4(color, 1.0);
}
{@}StylizedRoadShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tAnimatedTexture;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform vec2 uForegroundRange;
uniform float uGrain;
uniform float uGrainReduce;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uGradient1;
uniform vec3 uGradient2;
uniform float uGradientRotation;
uniform float uPosterizeTime;
uniform float uHueAdjust;
uniform float uTime;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;


#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying float vMask;
varying vec2 vGradientUv;

#!SHADER: Vertex

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vUv2 = uv2;
    vGradientUv = uv - 0.5;
    vGradientUv = rotate2d(uGradientRotation) * vGradientUv;
    vGradientUv += 0.5;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)


void main() {
    float t = floor(-uTime * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    float value = texture2D(tAnimatedTexture, vUv * uTile + uDirection * t).r;
    float noisegrain = noise * uGrain;
    value = mix(step(uStep, value+noisegrain), value, uGrainReduce);

    float gradient1 = smoothstep(uGradient1.x, uGradient1.y, vGradientUv.x);
    float grad1 = mix(step(uGradient1.z, gradient1+noisegrain), gradient1, uGrainReduce);

    float gradient2 = smoothstep(uGradient2.x, uGradient2.y, vGradientUv.x);
    float grad2 = mix(step(uGradient2.z, gradient2+noisegrain), gradient2, uGrainReduce);

    vec3 color = mix(uColor1, uColor2, value);
    color = mix(uColor3, color, grad1);
    color = mix(uColor4, color, grad2);

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);


    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    gl_FragColor = vec4(color, 1.0);
}{@}StylizedSmokeShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uStep;
uniform float uGradientStep;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform vec2 uTile;
uniform float uHeight;
uniform float uSpeed;
uniform float uGrain;
uniform vec2 uGradientRange;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uTime;
uniform vec2 uFade;


#!VARYINGS
varying vec3 vWorldPos;
varying vec2 vUv;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)


void main() {
    float t = (floor(-uTime * 12.0) / 12.0) * uSpeed;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    float color = texture2D(tMap, vUv * uTile + vec2(t, 0.0)).r;
    float grad = color;
    color *= vUv.x;
    color = mix(color, 1.0 - abs((vUv.y - 0.5) * uHeight), 0.3);
    color *= smoothstep(-0.4, 0.2, vUv.y);
    color *= smoothstep(0.0, 0.1, vUv.x);
    color = step(uStep, color);
    
    if (color < 0.5) discard;

    float gradient = smoothstep(uGradientRange.x, uGradientRange.y, vUv.y);
    gradient += (1.0 - grad);
    gradient += noise * uGrain;
    gradient = step(uGradientStep, gradient);

    vec3 final = mix(uColor2, uColor, gradient);
    float alpha = smoothstep(uFade.x, uFade.y, vUv.x);


    gl_FragColor = vec4(final, alpha);
}{@}StylizedTextureShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform float uGrain;
uniform float uGrainReduce;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uShadowColor;
uniform float uPosterizeTime;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uHueAdjust;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;

#!VARYINGS
varying vec2 vUv;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;
    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)

void main() {
    vec3 white = vec3(1.0);

    float t = floor(-time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    vec3 tex = texture2D(tMap, vUv * uTile + uDirection * t).rgb;

    float value = tex.r;
    value = mix(step(uStep, value + noise * uGrain), value, uGrainReduce);

    vec3 shadowcolor = mix(uShadowColor, white, value);

    vec3 color = mix(uColor1, uColor2, tex.g);
    color = mix(color, uColor3, tex.b);
    color *= shadowcolor;

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    color = mix(color, uFogColor, vFog * uFogMix);

    gl_FragColor = vec4(color, 1.0);
}
{@}StylizedTextureShaderExtra.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform float uGrain;
uniform float uGrainReduce;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uShadowColor;
uniform float uPosterizeTime;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uHueAdjust;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;

#!VARYINGS
varying vec2 vUv;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;
    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)

void main() {
    vec3 white = vec3(1.0);

    float t = floor(-time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    vec3 tex = texture2D(tMap, vUv * uTile + uDirection * t).rgb;

    float value = tex.r;
    value = mix(step(uStep, value + noise * uGrain), value, uGrainReduce);

    vec3 shadowcolor = mix(uShadowColor, white, value);

    vec3 color = mix(uColor1, uColor2, tex.g);

    //standard blue, uColor3
    if (tex.b < 0.7) {
        color = mix(color, uColor3, tex.b);
    }

    //extra color for logo, uColor4
    if (tex.b > 0.7) {
        color = mix(color, uColor4, tex.b);
    }
    color *= shadowcolor;

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    color = mix(color, uFogColor, vFog * uFogMix);

    

    gl_FragColor = vec4(color, 1.0);
}{@}StylizedWaterShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tData;
uniform sampler2D tMirrorReflection;
uniform mat4 uMirrorMatrix;
uniform vec3 uMirrorDiffuse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uSpecular;
uniform vec3 uLight;
uniform vec3 uWave;
uniform float uDirection;
uniform vec4 uNoise;
uniform float uScale;
uniform float uStep;
uniform float uGrain;
uniform float uGrainReduce;
uniform float uTime;
uniform float uPosterizeTime;

#!VARYINGS
varying vec2 vUv;
varying float vAltitude;
varying float vNormal;
varying float vMaxAlt;
varying vec4 vWorldPos;
varying vec4 vMirrorCoord;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
void main() {
    float pi = 3.141596;
    float t = floor(-uTime * uPosterizeTime) / uPosterizeTime;

    vec3 pos = position;
    vec2 waveUV = scaleUV( rotateUV( uv, uDirection * ( 180.0 / pi )), vec2( uScale ));

    float altitude = sin( waveUV.x * uWave.x + t * uWave.z ) * uWave.y * uScale;
    altitude += sin( waveUV.x + waveUV.y * uWave.x + t * 0.8 * -uWave.z ) * uWave.y * uScale * 0.25;

    pos.z += altitude;

    vAltitude = altitude;
    vNormal = dot( normalize( vec3( uLight.x, altitude, uLight.z )), cameraPosition );
    vMaxAlt = uWave.y * uScale + uWave.y * uScale * 0.25;

    vUv = uv;

    vWorldPos = modelMatrix * vec4( pos, 1.0 );
    vMirrorCoord = uMirrorMatrix * vWorldPos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(eases.glsl)
#require(blendmodes.glsl)
#require(transformUV.glsl)

vec3 blur( sampler2D map, vec2 uv, float size, vec2 resolution ) {
    vec3 color = vec3(0.0);

    const float pi2 = 3.141596 * 2.0;
    const float direction = 8.0;
    const float quality = 2.0;

    vec2 radius = size / resolution;

    for ( float d = 0.0; d < pi2 ; d += pi2 / direction ) {
        for ( float i = 1.0 / quality; i <= 1.0; i += 1.0 / quality ) {
            color += texture2D( map, uv + vec2( cos( d ), sin( d )) * radius * i ).rgb / ( quality * direction );
        }
    }

    return color;
}

void main() {
    float t = floor(uTime * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    float value = crange( vAltitude, -1.0, 1.0, 1.0, 0.0 );
    float noisegrain = noise * uGrain;
    value = mix(step(uStep, value+noisegrain), value, uGrainReduce);

    vec3 color = mix( uColor1, uColor2, value);

    vec3 data = texture2D( tData, vUv ).rgb;

    float fill = crange( cos( t + vUv.x * 25.0 + vUv.y * 16.0 ), -1.0, 1.0, 0.35, 0.45 );
    fill += crange( sin( t * 2.0 + vUv.x * 455.0 + vUv.y * 336.0 ), -1.0, 1.0, -0.01, 0.025 );
    fill += crange( cos( t * 3.0 - vUv.x * 155.0 + vUv.y * 236.0 ), -1.0, 1.0, 0.0, 0.05 );
    fill += crange( cos( t * -2.0 + rotateUV( vUv, 0.5 ).x * 4550.0 - rotateUV( vUv, -0.25 ).y * 4236.0 ), -1.0, 1.0, -0.01, 0.02 );
    fill += crange( cos( t * -1.5 - rotateUV( vUv, -0.5 ).x * 4250.0 + rotateUV( vUv, 0.25 ).y * 4336.0 ), -1.0, 1.0, -0.01, 0.01 );
    fill *= crange( vAltitude, -1.0, 1.0, 0.75, 1.25 );

    float foam = expoOut( crange( data.g, fill - 0.05, fill + 0.05, 0.0, 1.0 ));


    vec2 mirrorCoords = vMirrorCoord.xy / vMirrorCoord.w;
    vec3 reflection = blur( tMirrorReflection, mirrorCoords, uMirrorDiffuse.z / 1000.0, uMirrorDiffuse.xy * vec2( 0.5 )).rgb;
    color += reflection * vec3( 0.2 );

    color = mix( color, uColor3, foam * value );


    color.rgb = rgb2hsv( color.rgb );
    color.b *= 1.0 - data.r;
    color.rgb = hsv2rgb( color.rgb );


    gl_FragColor = vec4(color, 1.0);
}
{@}TextureShader.glsl{@}#!ATTRIBUTES

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
}
{@}TilingSkyShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec4 uTile;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
void main() {
    vec2 uv = vUv * uTile.xy + uTile.zw;
    gl_FragColor = texture2D(tMap, uv);
}{@}WaterShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec2 uDirection;
uniform vec2 uTile;
uniform vec4 uParams;
uniform float uStep;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
    vUv2 = uv2;
    vPos = position;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    float t = floor(time * 12.0) / 12.0;
    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t) * 0.025;

    vec4 tex = texture2D(tMap, vUv * uTile + uDirection * t);
    float mask = step(0.5, vUv.y);
    // mask = mix(1.0, mask, 0.4);
    mask *= smoothstep(uParams.x, uParams.y, vUv2.y);
    mask *= tex.r;
    // mask += vUv.y;
    // mask += noise * 0.01;
    mask += noise;
    mask = step(uStep, mask);


    // mask -= (1.0 - step(0.5, vUv.y)) * tex.r;
    // mask = clamp(mask, 0.0, 1.0);
    vec3 color = mix(uColor0, uColor1, mask);
    gl_FragColor = vec4(color.rgb, 1.0);
}{@}AnimatedBird.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tAnimation;

#!VARYINGS
varying vec2 vUv;
varying vec3 vNormal;

#!SHADER: Vertex
#require(range.glsl)

vec3 getAnimationPos(sampler2D tAnimation, float frameCount, float speed) {
    float t = time * speed;

    vec2 frameOffset = vec2(1.0 / frameCount, 0.0) * floor(fract(t) * frameCount);
    vec2 nextFrameOffset = mod(frameOffset + vec2(1.0 / frameCount, 0.0), vec2(1.0, 0.0));

    vec3 frame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + frameOffset).rgb;
    vec3 nextFrame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + nextFrameOffset).rgb;

    frame = mix(frame, nextFrame, fract(t * frameCount));

    vec3 res = vec3(0.0);

    res.x += crange(frame.r, 0.0, 1.0, -1.0, 1.0);
    res.y += crange(frame.g, 0.0, 1.0, -1.0, 1.0);
    res.z += crange(frame.b, 0.0, 1.0, -1.0, 1.0);

    return res;
}

void main() {
    float flapStrength = pow((sin(time) + 1.0) / 2.0, 2.0);
    float glideStrength = 0.3;

    float speed = 2.6;
    float frameCount = 12.0;
    vec3 flapAnimation = getAnimationPos(tAnimation, frameCount, speed);
    vec3 glideAnimation = vec3(0.0, cos(position.x + time * speed) * (1.0 - flapStrength), 0.0);
    vec3 changedPos = position
    + flapAnimation * flapStrength
    + glideAnimation * glideStrength;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(changedPos, 1.0);
    vUv = uv;
    vNormal = normal;
}

#!SHADER: Fragment
#require(range.glsl)
void main() {
    gl_FragColor.rgb = vec3(1.0) * (1.0 + dot(vec3(0.2, 1.0, 0.8), vNormal.xyz)) / 2.0 + vec3(0.0, 0.0, 0.3);
    gl_FragColor.a = 1.0;
}
{@}InstancedBirdParticles.glsl{@}#!ATTRIBUTES
attribute vec3 lookup;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tPos;
uniform sampler2D tPrevPos;
uniform sampler2D tAnimation;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uAltColor1;
uniform vec3 uAltColor2;
uniform float uEnabled;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vVel;
// varying vec3 vPrevPos;

#!SHADER: Vertex
#require(range.glsl)
#require(instance.vs)

vec3 getAnimationPos(sampler2D tAnimation, float frameCount, float speed, float offset) {
    float t = time * speed + offset;

    vec2 frameOffset = vec2(1.0 / frameCount, 0.0) * floor(fract(t) * frameCount);
    vec2 nextFrameOffset = mod(frameOffset + vec2(1.0 / frameCount, 0.0), vec2(1.0, 0.0));

    vec3 frame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + frameOffset).rgb;
    vec3 nextFrame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + nextFrameOffset).rgb;

    frame = mix(frame, nextFrame, fract(t * frameCount));

    vec3 res = frame * 2.0 - 1.0;

    return res;
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

void main() {
    float scale = 0.2 + random.y * 0.05;
    vec3 offset = texture2D(tPos, lookup.xy).xyz;
    vec3 prevpos = texture2D(tPrevPos, lookup.xy).xyz;
    vec3 velocity = offset - prevpos;

    // Flap wings
    float upwardDirection = dot(vec3(0.0, 1.0, 0.0), velocity);
    vec3 localpos = position;
    float speed = 2.6;
    float frameCount = 12.0;
    float animationOffset = random.x * 400.0;

    float flapStrength = pow((sin(time + animationOffset) + 1.0) / 2.0, 2.0);
    float glideStrength = 0.3;

    vec3 flapAnimation = getAnimationPos(tAnimation, frameCount, speed, animationOffset);
    vec3 glideAnimation = vec3(0.0, cos(position.x + time * speed + animationOffset) * (1.0 - flapStrength) * glideStrength + cos(offset.x + time * speed), 0.0);

    float flapFactor = clamp(pow(length(velocity), 2.0) * 2000.0, 0.0, 1.0);
    flapFactor = crange(flapFactor, 0.5, 1.0, 0.0, 1.0);

    localpos = localpos
    + mix(glideAnimation, flapAnimation, flapFactor);

    // Rotate in direction of flight
    float angle = atan(velocity.x, velocity.z);
    localpos.xz = rotate(localpos.xz, angle);

    vec3 pos = transformPosition(localpos, offset, scale);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv;
    vPos = pos;
    vNormal = normal;
    vVel = velocity;
}

#!SHADER: Fragment
void main() {
    vec3 lightDir = vec3(0.5, 0.5, 0.5);
    float dp = dot(lightDir, vNormal);

    vec3 color = vec3(1.0);
    color = mix(uColor1, uColor2, dp);
    vec3 altColor = mix(uAltColor1, uAltColor2, dp);

    color = mix(color, altColor, uEnabled);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}
{@}InteractiveSectionCover.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec3 diffuse = texture2D(tMap, vUv).rgb;
    gl_FragColor.rgb = vec3(diffuse);
    gl_FragColor.a = uAlpha;
}{@}InteractiveScrollPageBgShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec2 uRange;
uniform float uTransition;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uVelocity;
uniform float uBias;
uniform float uAliasFactor;
uniform float uDirection;
uniform float uVelocityMultiplier;

#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(aastep.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#define NUM_OCTAVES 3

float fbm(vec2 x) {
	float v = 0.0;
	float a = 0.5;
	vec2 shift = vec2(100);
	for (int i = 0; i < NUM_OCTAVES; ++i) {
		v += a * cnoise(x);
		x = x * 2.0 + shift;
		a *= 0.5;
	}
	return v;
}


void main() {
    vec2 uv = vUv;
    vec2 cUv = uv * 2. - 1.;
    vec3 color1 = uColor1;
    vec3 color2 = uColor2;  

    float ang = 3.1415963 * length(uv) * uBias * crange(sin(.75 * time), -1., 1., uRange.x, uRange.y);
    float noise = uDirection * fbm((vec2(uv.x, 1. - uv.y) +  ang) * uNoiseScale + (uNoiseSpeed * time));
    noise *= (uVelocity  * uVelocityMultiplier) * (uBias);      

    float cut = 0.;
    if(uDirection <  0.) {
        cut = aastep(uTransition, uv.y - noise, uAliasFactor);
    }else{
        cut = aastep(uTransition + noise, uv.y, uAliasFactor);
    }

    cut = aastep(uTransition, mix(uv.y, uv.x, -0.1 + uVelocity  * uVelocityMultiplier * 0.1), uAliasFactor);
    
    vec3 color = mix(color1, color2, 1. - cut);

    gl_FragColor.rgb = vec3(color);
    gl_FragColor.a = 1.0;
}{@}InteractiveScrollSectionHitShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(vec3(0.), .01);
}   {@}InteractiveScrollSectionVideoShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tNoise;
uniform sampler2D tMap;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;
#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv =  uv;
}


#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)  
#require(waveDissolve.glsl)
void main() {
    float mix = waveDissolve(vUv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    vec4 color = texture2D(tMap, vUv);

	gl_FragColor = vec4(color.rgb, mix * color.a);
}   {@}PBRCarShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uNoiseStrength;
uniform float uWheelSpeed;
uniform vec4 uWiggle;
uniform vec3 uClearCoat;
uniform float uTime;
uniform float uSaturation;

#!VARYINGS

#!SHADER: Vertex
#require(pbr.vs)

mat4 rotationX( in float angle ) {
	return mat4(	1.0,		0,			0,			0,
			 		0, 	cos(angle),	-sin(angle),		0,
					0, 	sin(angle),	 cos(angle),		0,
					0, 			0,			  0, 		1);
}

mat4 rotationY( in float angle ) {
	return mat4(	cos(angle),		0,		sin(angle),	0,
			 				0,		1.0,			 0,	0,
					-sin(angle),	0,		cos(angle),	0,
							0, 		0,				0,	1);
}

mat4 rotationZ( in float angle ) {
	return mat4(	cos(angle),		-sin(angle),	0,	0,
			 		sin(angle),		cos(angle),		0,	0,
							0,				0,		1,	0,
							0,				0,		0,	1);
}

void main() {
    vec3 pos = position;
    vec3 n = (rotationX(time * uWheelSpeed) * vec4(normal, 1.0)).xyz;
    setupPBR(pos, n);
    gl_Position = projectionMatrix * modelViewMatrix * rotationX(time * uWheelSpeed) * rotationX(sin(uTime * 5.0) * uWiggle.x + sin(uTime * 8.0) * uWiggle.x) * rotationY(sin(uTime * 6.0) * uWiggle.y + sin(time * 7.0) * uWiggle.y) * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(pbr.fs)
#require(desaturate.fs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

vec3 saturation(vec3 rgb, float adjustment)
{
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W)) * 0.0;
    return mix(intensity, rgb, adjustment);
}

void main() {
    float t = time;
    t = floor(time * 12.0) / 12.0;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t) * uNoiseStrength;

    vec3 pbr = getPBR().rgb;

	pbr += smoothstep(vec3(uClearCoat.x), vec3(uClearCoat.y), desaturate(pbr * 5.0, 1.0)) * uClearCoat.z * 0.1;
	pbr += (noise*0.5);

	pbr = saturation(pbr, uSaturation);

	gl_FragColor = vec4(pbr, 1.0);
}
{@}CloudCover.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS

#!SHADER: Vertex

void main() {
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 color = uColor;

    float alpha = uAlpha;

    gl_FragColor = vec4(color, uAlpha);
}{@}ForgeShadows.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uFeather;
uniform float uProgress1;
uniform float uProgress2;
uniform float uProgress3;
uniform float uProgress4;
uniform float uOpacity;

#!VARYINGS
varying vec2 vUv;
varying float vProgress;

#!SHADER: Vertex
#require(range.glsl)
void main() {
    vec3 pos = position;
    vUv = uv;

    vProgress = 0.0;
    vProgress += crange( length( random.w - 0.0 ), 0.0, 1.0, uProgress1, 0.0 );
    vProgress += crange( length( random.w - 1.0 ), 0.0, 1.0, uProgress2, 0.0 );
    vProgress += crange( length( random.w - 2.0 ), 0.0, 1.0, uProgress3, 0.0 );
    vProgress += crange( length( random.w - 3.0 ), 0.0, 1.0, uProgress4, 0.0 );

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(eases.glsl)
void main() {
    vec3 mask = texture2D( tMap, vUv ).rgb;
    float shadow = ( vProgress + mask.r ) * mask.g;
    float alpha = expoOut( crange( shadow, 0.94 - uFeather, 0.95 + uFeather, 0.0, 1.0 ));
    alpha *= crange( mask.r, 1.0, 0.99, 0.0, 1.0 );
    alpha *= crange( vProgress, 0.00, 0.1, 0.0, 1.0 );

    gl_FragColor = vec4( uColor, alpha * uOpacity );
}
{@}StylizedEndingRoad.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform float uGrain;
uniform float uGrainReduce;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uShadowColor;
uniform float uPosterizeTime;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uHueAdjust;
uniform vec2 uOrigin1;
uniform vec2 uOrigin2;
uniform vec2 uOrigin3;
uniform vec2 uOrigin4;
uniform float uProgress1;
uniform float uProgress2;
uniform float uProgress3;
uniform float uProgress4;
uniform vec2 uScaleAdjust;
uniform vec4 uTransitionNoise;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;

#!VARYINGS
varying vec2 vUv;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
    sin(_angle),cos(_angle));
}

void main() {
    vec3 pos = position;
    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;
    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)
void main() {

    float t2 = floor( -( time + uTransitionNoise.w ) * uTransitionNoise.z * uPosterizeTime ) / uPosterizeTime;
    float tnoise = crange( cnoise( vec3( scaleUV( vUv, vec2( 1.0 ) / uTransitionNoise.xy ), t2 )) * 0.1, -1.0, 1.0, 0.05, 0.1 );


    float distA = length( scaleUV( vUv, uScaleAdjust ) - uOrigin1 ) + tnoise;
    float distB = length( scaleUV( vUv, uScaleAdjust ) - uOrigin2 ) + tnoise;
    float distC = length( scaleUV( vUv, uScaleAdjust ) - uOrigin3 ) + tnoise;
    float distD = length( scaleUV( vUv, uScaleAdjust ) - uOrigin4 ) + tnoise;

    float alpha = crange( distA - uProgress1, 0.0, 0.0001, 1.0, 0.0 );
    alpha += crange( distB - uProgress2, 0.0, 0.0001, 1.0, 0.0 );
    alpha += crange( distC - uProgress3, 0.0, 0.0001, 1.0, 0.0 );
    alpha += crange( distD - uProgress4, 0.0, 0.0001, 1.0, 0.0 );

    alpha = min( 1.0, alpha );
    if ( alpha <= 0.002 ) discard;

    vec3 white = vec3(1.0);

    float t = floor(-time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    vec3 tex = texture2D(tMap, vUv * uTile + uDirection * t).rgb;

    float value = tex.r;
    value = mix(step(uStep, value + noise * uGrain), value, uGrainReduce);

    vec3 shadowcolor = mix(uShadowColor, white, value);

    vec3 color = mix(uColor1, uColor2, tex.g);
    color = mix(color, uColor3, tex.b);
    color *= shadowcolor;

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    color = mix(color, uFogColor, vFog * uFogMix);

    gl_FragColor = vec4(color, 1.0);
}
{@}StylizedForgeShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform float uStep;
uniform vec2 uTile;
uniform vec2 uDirection;
uniform float uGrain;
uniform float uGrainReduce;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;

uniform vec3 uColor5;
uniform vec3 uColor6;
uniform vec3 uColor7;
uniform vec3 uColor8;

uniform float uApplyPBR;
uniform vec3 uShadowColor;
uniform float uPosterizeTime;
uniform vec2 uFogParams;
uniform float uFogMix;
uniform vec3 uFogColor;
uniform vec3 uWiggle;
uniform float uWiggleSpeed;
uniform float uHueAdjust;
uniform vec3 uClearCoat;
uniform float uSaturation;
uniform float uNoiseStrength;

uniform float uOffsetHeight;
uniform float uProgress1;
uniform float uProgress2;
uniform float uProgress3;
uniform float uProgress4;

uniform vec2 uIndexRange1;
uniform vec2 uIndexRange2;
uniform vec2 uIndexRange3;
uniform vec2 uIndexRange4;

uniform sampler2D tBrush;
uniform float uBrushBlend;
uniform vec2 uBrushScale;
uniform float uBrushRotate;

#!VARYINGS
varying vec2 vUv;
varying float vFog;
varying float vProgress;
varying float vIndex;

#!SHADER: Vertex
#require(pbr.vs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(eases.glsl)

void main() {
    vec3 pos = position;

    float progress = 0.0;
    float index = -1.0;

    if ( random.w >= uIndexRange1.x && random.w <= uIndexRange1.y ) index = 0.0;
    if ( random.w >= uIndexRange2.x && random.w <= uIndexRange2.y ) index = 1.0;
    if ( random.w >= uIndexRange3.x && random.w <= uIndexRange3.y ) index = 2.0;
    if ( random.w >= uIndexRange4.x && random.w <= uIndexRange4.y ) index = 3.0;

    progress += crange( length( index - 0.0 ), 0.0, 1.0, 1.0 - uProgress1, 0.0 );
    progress += crange( length( index - 1.0 ), 0.0, 1.0, 1.0 - uProgress2, 0.0 );
    progress += crange( length( index - 2.0 ), 0.0, 1.0, 1.0 - uProgress3, 0.0 );
    progress += crange( length( index - 3.0 ), 0.0, 1.0, 1.0 - uProgress4, 0.0 );

    progress *= crange( index, -1.0, 0.0, 0.0, 1.0 );

    pos.y += crange( progress, 0.0, 1.0, 0.0, uOffsetHeight );
    setupPBR(pos);

    pos += cnoise(vec3(0.0) + time * uWiggleSpeed) * uWiggle;
    vec4 mvpos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvpos;
    vUv = uv;
    vFog = crange(mvpos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vProgress = max( 0.0, min( 1.0, progress ));
    vIndex = index;
}

#!SHADER: Fragment
#require(pbr.fs)
#require(desaturate.fs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)
#require(transformUV.glsl)
void main() {
    vec3 white = vec3(1.0);

    float t = floor(-time * uPosterizeTime) / uPosterizeTime;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);

    vec3 tex = texture2D(tBaseColor, vUv * uTile + uDirection * t).rgb;

    float value = tex.r;
    value = mix(step(uStep, value + noise * uGrain), value, uGrainReduce);

    vec3 shadowcolor = mix(uShadowColor, white, value);

    float mixProgress = crange( vProgress, 0.65, 0.75, 0.0, 1.0 );
    vec3 color1 = mix( uColor1, uColor5, mixProgress );
    vec3 color2 = mix( uColor2, uColor6, mixProgress );
    vec3 color3 = mix( uColor3, uColor7, mixProgress );
    vec3 color4 = mix( uColor4, uColor8, mixProgress );

    vec3 color = mix(color1, color2, tex.g);

    //standard blue, uColor3
    if (tex.b < 0.7) {
        color = mix(color, color3, tex.b);
    }

    //extra color for logo, uColor4
    if (tex.b > 0.7) {
        color = mix(color, color4, tex.b);
    }

    vec3 pbr = getPBR(color).rgb;

    pbr += smoothstep(vec3(uClearCoat.x), vec3(uClearCoat.y), desaturate(pbr * 5.0, 1.0)) * uClearCoat.z * 0.1;
    pbr += (noise*0.5)* uNoiseStrength;

    //    pbr = saturation(pbr, uSaturation);

    color = mix( color, pbr, uApplyPBR * ( 1.0 - mixProgress ));

    color *= shadowcolor;

    color = rgb2hsv(color);
    color.x += uHueAdjust*0.1;
    color = hsv2rgb(color);

    if (uBrushBlend > 0.0) {
        vec2 brushUV = rotateUV(vUv, uBrushRotate);
        brushUV = scaleUV(brushUV, uBrushScale);
        vec3 brush = texture2D(tBrush, brushUV*10.0).rgb;
        color = blendOverlay(color, brush, uBrushBlend);
    }

    color = mix(color, uFogColor, vFog * uFogMix);

    gl_FragColor = vec4(color, 1.0);
}
{@}ElectricityShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uGrain;
uniform float uStep;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform float uPosterizeTime;
uniform float uScale;
uniform float uNoise;
uniform vec2 uRange;

#!VARYINGS
varying vec2 vUv;
varying vec4 vRandom;
varying vec3 vOffset;
varying float vDist;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)
#require(rotation.glsl)

void main() {
    float t = time;
    t = floor(time * uPosterizeTime) / uPosterizeTime;
    vec3 pos = position;

    #ifdef INSTANCED
    pos = transformPosition(position, offset, max(uScale + sin(t * 32.0 + offset.x) * 0.1, 0.0), orientation).xyz;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    float t = floor(time * uPosterizeTime) / uPosterizeTime;
    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t);
    
    float mask = smoothstep(uRange.x, uRange.y, noise * uNoise + distance(vUv, vec2(0.5)));

    gl_FragColor = vec4(uColor0, mask);
}{@}MoleculeShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform vec3 uKeyLightDir;
uniform vec3 uRimLightDir;
uniform vec3 uBounceLightDir;
uniform float uKeyLightStep;
uniform float uBounceStep;
uniform float uRimStep;
uniform float uBounceStrength;
uniform float uGrain;
uniform vec3 uShadowColor;
uniform vec3 uColor;
uniform vec3 uBounceColor;
uniform vec3 uRimColor;
uniform vec2 uWobble;
uniform float uWobbleSpeed;
uniform float uRotationSpeed;
uniform float uExplode;
uniform vec4 uBounds;
uniform float uSign;
uniform float uHover;

#!VARYINGS
varying vec3 vLocalNormal;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vColor;
varying float vBbox;

#!SHADER: Vertex

mat4 rotationX( in float angle ) {
	return mat4(	1.0,		0,			0,			0,
			 		0, 	cos(angle),	-sin(angle),		0,
					0, 	sin(angle),	 cos(angle),		0,
					0, 			0,			  0, 		1);
}

mat4 rotationY( in float angle ) {
	return mat4(	cos(angle),		0,		sin(angle),	0,
			 				0,		1.0,			 0,	0,
					-sin(angle),	0,		cos(angle),	0,
							0, 		0,				0,	1);
}

mat4 rotationZ( in float angle ) {
	return mat4(	cos(angle),		-sin(angle),	0,	0,
			 		sin(angle),		cos(angle),		0,	0,
							0,				0,		1,	0,
							0,				0,		0,	1);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float sdBox( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}

void main() {
    float t = time;
    vec3 pos = position;
    
    #ifdef INSTANCED
    vec3 newoffset = offset;
    vec3 newscale = scale;
    newoffset = mix(offset, random.yzw, max(uExplode - offset.x * uSign, 0.0));
    newoffset.y += sin(time * 0.1 + offset.x) * 0.2 * uHover;
    vBbox = sdBox(newoffset + vec3(uBounds.w, 0.0, 0.0), uBounds.xyz);
    newscale *= 1.0 - clamp(smoothstep(0.4, 0.6, vBbox), 0.0, 1.0);
    pos = transformPosition(position, newoffset, newscale, orientation).xyz;

    #endif
    mat4 rotation_matrix = rotationX(time * uWobbleSpeed);
    gl_Position = projectionMatrix * modelViewMatrix * rotation_matrix * vec4(pos, 1.0);
    vNormal = (rotation_matrix * vec4(normal, 1.0)).xyz;
    vUv = uv;
    
    vColor = vec3(1.0);
    if (random.x == 1.0) vColor = vec3(0.6, 0.64, 0.69);
    if (random.x == 0.0) vColor = vec3(230., 98., 80.) / 255.;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    float t = time;
    t = floor(time * 12.0) / 12.0;

    vec2 screenuv = gl_FragCoord.xy / resolution;
    float noise = getNoise(screenuv, t) * uGrain;

    float keylight = clamp(dot(normalize(vNormal), uKeyLightDir), 0.0, 1.0);
    float bounce = clamp(dot(normalize(vNormal), uBounceLightDir), 0.0, 1.0);
    float rim = clamp(dot(normalize(vNormal), uRimLightDir), 0.0, 1.0);

    keylight += noise;
    bounce += noise;
    rim += noise * 0.5;

    float value = step(uKeyLightStep, keylight);
    float bounceValue = step(uBounceStep, bounce);
    float rimvalue = step(uRimStep, rim);

    vec3 color = mix(uShadowColor, uColor, value);
    color = mix(color, uBounceColor, bounceValue);
    color = mix(color * vColor, uRimColor, rimvalue);

    gl_FragColor = vec4(color, 1.0);
    gl_FragColor.a = 1.0;
}{@}StrikeShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform float uScale;
uniform float uPosterizeTime;
uniform sampler2D tAnimation;
uniform vec3 uOffset;
uniform vec3 uColor;
uniform float uStep;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;

    #ifdef INSTANCED
    float t = floor(fract(time * 2.0 + offset.x) * uPosterizeTime) / uPosterizeTime;

    vec3 newpos = texture2D(tAnimation, uv2 - vec2(0.0, t)).rgb;
    newpos *= vec3(2.0, 5.0, 2.0);
    newpos += uOffset;
    // newpos -= vec3(0.0, 2.5, 0.0);
    // newpos = pos;

    pos = transformPosition(newpos, offset, uScale, orientation).xyz;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
void main() {
    if (step(uStep, vUv.x) < 0.5) discard;
    gl_FragColor = vec4(uColor, 0.0);
}{@}AntimatterSpawn.fs{@}uniform float uMaxCount;
uniform float uSetup;
uniform float decay;
uniform vec2 decayRandom;
uniform sampler2D tLife;
uniform sampler2D tAttribs;
uniform float HZ;

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
            data.x -= 0.005 * decay * crange(random.w, 0.0, 1.0, decayRandom.x, decayRandom.y) * HZ;
        }
    }

    if (uSetup > 0.5) {
        data = vec4(0.0);
    }

    gl_FragColor = data;
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
}{@}GlassShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tInside;
uniform float uTransparent;
uniform float uDistortStrength;

#!VARYINGS

#!SHADER: Vertex

#require(glass.vs)

void main() {
    setupGlass(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(glass.fs)

void main() {
    vec3 normal = normalMatrix * (gl_FrontFacing == false ? -vNormal : vNormal);

    gl_FragColor = getGlass(normal);

    if (uTransparent < 0.5) {
        vec2 uv = gl_FragCoord.xy / resolution;
        uv += 0.1 * vNormal.xy * gFresnel * uDistortStrength;
        vec3 color = texture2D(tInside, uv).rgb;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, color, 1.0 - gl_FragColor.a);
    }
}{@}glass.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tEnv;
uniform float uRefractionRatio;
uniform float uReflectScale;
uniform float uRatio;
uniform float uAttenuation;
uniform float uAlpha;
uniform float uShininess;
uniform float uFresnelPow;
uniform float uFresnelAlpha;
uniform float uEnvBlend;
uniform vec2 uSpecAdd;
uniform vec3 uPhongColor;
uniform vec3 uFresnelColor;
uniform vec3 uLightDir;

#!VARYINGS
varying vec3 vReflect;
varying vec3 vRefract;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vLightDir;

#!SHADER: Vertex

#require(refl.vs)
#require(lights.vs)

void setupGlass(vec3 pos) {
    vec4 worldPos = modelMatrix * vec4(pos * uReflectScale, 1.0);
    vWorldPos = worldPos.xyz;
    vNormal = normal;
    vViewDir = -vec3(modelViewMatrix * vec4(pos, 1.0));
    vReflect = reflection(worldPos);
    vRefract = refraction(worldPos, uRefractionRatio);
    vLightDir = normalize(worldLight(uLightDir));
}

#!SHADER: Fragment

#require(refl.fs)
#require(range.glsl)
#require(phong.fs)
#require(fresnel.glsl)

float gFresnel;

vec4 getGlass(vec3 normal) {
    vec3 specLight = phong(1.0, vec3(1.0), uPhongColor, uShininess, uAttenuation, normal, vLightDir, vViewDir);
    gFresnel = getFresnel(normal, vViewDir, uFresnelPow);

    vec3 reflected = envColorEqui(tEnv, vReflect).rgb;
    vec3 refracted = envColorEqui(tEnv, vRefract).rgb;
    vec4 color = vec4(mix(reflected, refracted, uRatio) * uEnvBlend, uAlpha);
    color.rgb += specLight * uSpecAdd.x;
    color.rgb *= mix(vec3(1.0), uFresnelColor, gFresnel);
    color.a += specLight.r * uSpecAdd.y;
    color.a += uFresnelAlpha * gFresnel;

    return color;
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
}
{@}Text3D.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uOpacity;
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
varying vec3 vWorldPos;

#!SHADER: Vertex

#require(range.glsl)
#require(eases.glsl)
#require(rotation.glsl)
#require(conditionals.glsl)

void main() {
    vUv = uv;
    vTrans = 1.0;

    vec3 pos = position;

    if (uTransition > 0.0 && uTransition < 1.0) {
        float padding = uPadding;
        float letter = (animation.x + 1.0) / uLetterCount;
        float word = (animation.y + 1.0) / uWordCount;
        float line = (animation.z + 1.0) / uLineCount;

        float letterTrans = rangeTransition(uTransition, letter, padding);
        float wordTrans = rangeTransition(uTransition, word, padding);
        float lineTrans = rangeTransition(uTransition, line, padding);

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
	vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

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
    gl_FragColor.a = alpha * uAlpha * uOpacity * vTrans;
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
}{@}AboutSpaceBG.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tStars;
uniform vec2 uScale2;
uniform vec2 uNoiseScale2;
uniform float uTimeScale;
uniform vec2 uMap;

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
    vec3 tex = texture2D(tMap, vUv * uScale2).rgb;
    vec3 stars = texture2D(tStars, vUv * uScale2 * 1.5).rgb;

    float noise = cnoise((vUv * uNoiseScale2 + (time*uTimeScale)));
    noise = mix(noise, cnoise(vUv * uNoiseScale2 * 5.0 -(time*uTimeScale)), 0.15);

    tex += stars * crange(noise, 0.0, 1.0, uMap.x, uMap.y);

    gl_FragColor = vec4(tex, 1.0);
}{@}AboutTopLayerShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAngle;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(transformUV.glsl)

void main() {
    vec2 ruv = skewUV(vUv, vec2(1.0, radians(uAngle)));
    gl_FragColor = texture2D(tMap, vUv);
    if (ruv.y < 0.0) discard;
}{@}CustomText3D.glsl{@}#!ATTRIBUTES
attribute float weight;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uNormalColor;
uniform vec3 uBoldColor;
uniform float uColor;
uniform float uAlpha;
uniform sampler2D tNoise;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;
uniform vec3 uBoundingMin;
uniform vec3 uBoundingMax;
#!VARYINGS
varying vec3 vPos;
varying vec2 vUv;
varying float vWeight;

#!SHADER: Vertex
void main() {
    vPos = position;
    vUv = uv;
    vWeight = weight;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(msdf.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)
#require(waveDissolve.glsl)

vec2 getBoundingUV() {
    vec2 uv;
    uv.x = crange(vPos.x, uBoundingMin.x, uBoundingMax.x, 0.0, 1.0);
    uv.y = crange(vPos.y, uBoundingMin.y, uBoundingMax.y, 0.0, 1.0);
    return uv;
}

void main() {
    vec2 tuv = getBoundingUV();
    float wave = waveDissolve(tuv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    float alpha = msdf(tMap, vUv);
    vec3 color = mix( uNormalColor, uBoldColor, vWeight );

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha * wave;
}{@}SolidColorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
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
void main() {
    gl_FragColor = vec4(uColor,uAlpha);
}
{@}ChapterCopyShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uTransition;
uniform sampler2D tNoise;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;
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
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vPos = pos;
}

#!SHADER: Fragment

#require(range.glsl)
#require(msdf.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(waveDissolve.glsl)

vec2 getBoundingUV() {
    vec2 uv;
    uv.x = crange(vPos.x, uBoundingMin.x, uBoundingMax.x, 0.0, 1.0);
    uv.y = crange(vPos.y, uBoundingMin.y, uBoundingMax.y, 0.0, 1.0);
    return uv;
}

void main() {
    vec2 tuv = getBoundingUV();
    float mix = waveDissolve(tuv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    float alpha = msdf(tMap, vUv);
    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * mix * uAlpha;
}
{@}LoaderCoverShader.glsl{@}
#!ATTRIBUTES

#!UNIFORMS
#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}


#!SHADER: Fragment
#require(aastep.glsl)
float circle(vec2 uv, vec2 pos, float rad) {
	return 1.0 - smoothstep(rad,rad+0.005,length(uv-pos));
}

float ring(vec2 uv, vec2 pos, float innerRad, float outerRad) {
	return (1.0 - aastep(outerRad, length(uv-pos), .005)) * aastep(innerRad, length(uv-pos), .03);
}

void main() {
    vec2 uv = vUv - vec2(.5);
    float geo = 0.0;
    geo += ring(uv,vec2(0.0),.3-.02,.3);
    float rot = -time * 4.;
     uv *= mat2(cos(rot), sin(rot), -sin(rot), cos(rot));
    float a = atan(uv.x,uv.y)*3.14159*0.05 + 0.5;
    a = max(a,circle(uv,vec2(0.0,-.2+.003/2.0),.003/2.0));
    gl_FragColor = vec4(a * geo);
}{@}ParticleShader.glsl{@}#!ATTRIBUTES
attribute vec3 random;

#!UNIFORMS
uniform sampler2D tPos;
uniform sampler2D tMap;
uniform vec2 uRandomAlpha;
uniform float uSize;
uniform float DPR;
uniform float uAlpha;
uniform vec2 uRandomScale;
uniform vec3 uColor;

#!VARYINGS
varying float vAlpha;
varying float vRotation;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;

    vAlpha = uAlpha * crange(random.x, 0.0, 1.0, uRandomAlpha.x, uRandomAlpha.y);
    float scale = crange(random.y, 0.0, 1.0, uRandomScale.x, uRandomScale.y);

    vRotation = radians(360.0 * random.z);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * uSize * DPR * scale * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}

#!SHADER: Fragment

#require(transformUV.glsl)

void main() {
    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    uv = rotateUV(uv, vRotation);
    float mask = texture2D(tMap, uv).r;
    gl_FragColor = vec4(uColor, vAlpha * mask);
}{@}MenuBG.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uColor, 1.0);
}{@}MenuItemShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uTransition;
uniform sampler2D tNoise;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;
uniform vec3 uBoundingMin;
uniform vec3 uBoundingMax;
uniform vec3 uHoverColor;


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
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vPos = pos;
}

#!SHADER: Fragment

#require(range.glsl)
#require(msdf.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(waveDissolve.glsl)

vec2 getBoundingUV() {
    vec2 uv;
    uv.x = crange(vPos.x, uBoundingMin.x, uBoundingMax.x, 0.0, 1.0);
    uv.y = crange(vPos.y, uBoundingMin.y, uBoundingMax.y, 0.0, 1.0);
    return uv;
}

void main() {
    vec2 tuv = getBoundingUV();
    tuv = scaleUV(tuv, vec2(1.0, 4.0));

    float m = waveDissolve(tuv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    m = mix(m, uTransition0, uTransition0*0.6);

    float alpha = msdf(tMap, vUv);
    gl_FragColor.rgb = mix(uColor, uHoverColor, m);
    gl_FragColor.a = alpha * uAlpha;
}
{@}MenuCarouselIndicatorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
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
#require(aastep.glsl)
void main() {
    float dist = length(vUv - vec2(.5));
    float alpha = 1. - aastep(.45, dist, .05);
    gl_FragColor = vec4(1.0);
    gl_FragColor.a = alpha * uAlpha;
}{@}MenuCarouselItemShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uSize;
uniform float uAlpha;
uniform float uAlpha2;

#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(roundedBorder.glsl)
#require(featheredSlider.fs)

void main() {
    vec2 uv = vUv;
    float inside;
    float border = roundedBorder(.1, .001, vUv, uSize, inside);

    vec3 diffuse = texture2D(tMap, uv).rgb;
    gl_FragColor = vec4(diffuse, featheredSliderAlpha() * uAlpha * uAlpha2 * border);
}{@}MenuCarouselItemTextShader.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uAlpha2;
uniform float uTransition;

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
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
    vPos = pos;
}

#!SHADER: Fragment

#require(featheredSlider.fs)
#require(msdf.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)

void main() {
    float alpha = msdf(tMap, vUv);
    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha2 * uAlpha * featheredSliderAlpha();
}
{@}featheredSlider.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uFeatherWidth;
uniform vec2 uFeatherDirection;
uniform vec2 uFeatherBounds;

#!VARYINGS

#!SHADER: Vertex

#!SHADER: Fragment
#require(range.glsl)

float featheredSliderAlpha() {

    if(uFeatherDirection.x > 0.01) {
        float width = uFeatherWidth / resolution.x;
        float x = gl_FragCoord.x / resolution.x;
        float left = crange(x, uFeatherBounds.x, uFeatherBounds.x + width, 0.0, 1.0);
        float right = crange(x, uFeatherBounds.y - width, uFeatherBounds.y, 1.0, 0.0);
        float feather = left * right;
        if (feather < 0.01) {
            discard;
        }
        return feather;
    }

    if(uFeatherDirection.y > .01) {
        float height = uFeatherWidth / resolution.y;
        float y = 1. - gl_FragCoord.y / resolution.y;
        float top = crange(y, uFeatherBounds.x, uFeatherBounds.x + height, 0.0, 1.0);
        float bottom = crange(y, uFeatherBounds.y - height, uFeatherBounds.y, 1.0, 0.0);
        float feather = top * bottom;
        if (feather < 0.01) {
            discard;
        }
        return feather;
    }

    return 1.;
}{@}MenuStackBackground.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tNoise;
uniform vec2 uSize;
uniform vec2 uSize2;
uniform vec2 uMouse;
uniform vec3 uColor;
uniform vec3 uBorder;
uniform float uAlpha;
uniform float uTreatment;
uniform float uHover;

#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment

#require(roundedBorder.glsl)
#require(desaturate.fs)
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(waveDissolve.glsl)
#require(contrast.glsl)

void main() {
    vec2 uv = vUv;
    uv.y += .002;
    float inside;
    float border = roundedBorder(.1, .001, vUv, uSize, inside);

    float inside2;
    float border2 = roundedBorder(.1, .001, scaleUV(vUv, vec2(mix(0.98, 1.0, smoothstep(0.0, 0.7, uHover)), mix(0.95, 1.0, smoothstep(0.0, 0.7, uHover)))), uSize2, inside2);

    float dissolve = 1.0 - waveDissolve(vUv, -5.0, 1.0, 5.0, tNoise, uHover);
    //dissolve = mix(1.0, dissolve, uHover);

    uv = scaleUV(uv, vec2(1.3 - uHover*0.3));

        uv = scaleUV(uv, vec2(1.0, 1.2));

    vec3 diffuse = texture2D(tMap, uv).rgb;

    vec3 contrasted = adjustContrast(diffuse, 0.5, 1.1);
    diffuse = mix(diffuse, contrasted, 1.0-uHover);

    vec3 da = mix(diffuse, desaturate(diffuse, 1.0) * uColor, 0.3);
    vec3 treated = mix(da, desaturate(diffuse, 1.0) * uColor, uTreatment * dissolve);

    treated = mix(treated, diffuse*0.65, uHover);
    treated = mix(treated, mix(uBorder, uColor, uHover), border-border2);

    gl_FragColor = vec4(treated, uAlpha * border);
}
{@}SceneParticlesShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform vec2 uSizeRange;
uniform float uAlpha;
uniform float uAlpha2;
uniform vec2 uFadeRange;
uniform vec2 uSpriteIndex;
uniform vec3 uColor;
uniform sampler2D uPrevFrame;
uniform sampler2D tSpritesheet;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vMvPos;
varying float vRandom;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;
            
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    float size = 1000.0 / length(mvPosition.xyz) * 0.01;

    size *= crange(random.x, 0., 1., uSizeRange.x, uSizeRange.y);
 
    gl_PointSize = size;
    gl_Position = projectionMatrix * mvPosition;

    vPos = pos;
    vMvPos = mvPosition.xyz;
    vUv = uv;
    vRandom = random.y;
}

#!SHADER: Fragment
#require(range.glsl)
#require(uvgrid.glsl)
#require(rgb2hsv.fs)

void main() {
    // if (transitionDiscard()) discard;
    vec3 prevColor = texture2D(uPrevFrame, vUv).rgb;
    vec2 pUv = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y);
    vec2 uv = getUVForGrid(pUv, 10.0, 10.0, uSpriteIndex.x, uSpriteIndex.y);
    vec3 mask = texture2D(tSpritesheet, uv).rgb;
    if(mask.r < .01) {
        discard;
    }

    vec3 inverse = vec3(1. - prevColor);
    vec3 iHSV = rgb2hsv(inverse);
    
    iHSV.r = crange(vRandom, 0., 1., iHSV.r - .1, iHSV.r);
    iHSV.b = .6;

    vec3 color = hsv2rgb(iHSV);

    gl_FragColor.rgb = color;

    gl_FragColor.a = crange(vPos.z, -1., 1., uAlpha, uAlpha2);
}   {@}PartnersHeroBGShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uScale2;
uniform vec2 uTranslate;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec3 tex = texture2D(tMap, vUv * uScale2 + uTranslate).rgb;
    gl_FragColor = vec4(tex, 1.0);
}
{@}PartnersHeroLayerShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAngle;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(transformUV.glsl)

void main() {
    vec2 ruv = skewUV(vUv, vec2(1.0, radians(uAngle)));
    gl_FragColor = texture2D(tMap, vUv);
    if (ruv.y < 0.0) discard;
}{@}PartnersLine.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uScale;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(transformUV.glsl)
void main() {
    vec4 color = texture2D( tMap, scaleUV( vUv, uScale ));
    color.a *= 0.5;
    gl_FragColor.rgba = color;
}
{@}PartnersLogoShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tNoise;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;
uniform vec3 uBoundingMin;
uniform vec3 uBoundingMax;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vPos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
#require(transformUV.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(waveDissolve.glsl)

vec2 getBoundingUV() {
    vec2 uv;
    uv.x = crange(vPos.x, uBoundingMin.x, uBoundingMax.x, 0.0, 1.0);
    uv.y = crange(vPos.y, uBoundingMin.y, uBoundingMax.y, 0.0, 1.0);
    return uv;
}

void main() {
    vec2 tuv = getBoundingUV();
    float mix = waveDissolve(tuv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    vec4 texel = texture2D(tMap, vUv);

    gl_FragColor.rgb = texel.rgb;
    gl_FragColor.a = texel.a * mix * uAlpha;
}{@}PartnersSpaceBG.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uScale2;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    vec3 tex = texture2D(tMap, vUv).rgb;
    gl_FragColor = vec4(tex, 1.0);
}
{@}ScrollHintItemShader.glsl{@}#!ATTRIBUTES

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
    vec4 tex = texture2D(tMap, vUv);
    gl_FragColor = vec4(uColor, tex.a * uAlpha);
}{@}ScrollProgressShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha0;
uniform float uSectionAmount;
uniform float uIndex;
#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
void main() {
    float y = 1. - vUv.y;
    float height = 1./uSectionAmount;

    float cut1 = 1. - step(height * uIndex, y);
    float cut2 = step(height * (uIndex - 1.), y);
    float cut3 = max(cut1 * cut2, 0.15);

    gl_FragColor = vec4(uColor, uAlpha0 * cut3);
}{@}TechnologyBGShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uApplyTilt;

#!VARYINGS

#!SHADER: Vertex
#require(range.glsl)
void main() {
    vec3 pos = position;
    pos.y += crange(uv.x, 0.0, 1.0, -1.0, 1.0) * 0.3 * uApplyTilt;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uColor, 1.0);
}{@}TechnologyGraphicShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tNoise;
uniform sampler2D tMap;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;
#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv =  uv;
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)  
#require(waveDissolve.glsl)
void main() {
    float mix = waveDissolve(vUv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    vec4 color = texture2D(tMap, vUv);

	gl_FragColor = vec4(color.rgb, mix * color.a);
}   {@}TechnologyPlayBtnScriptClass.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec3 uBgColor;
uniform float uIsText;
uniform sampler2D tNoise;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;

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
#require(transformUV.glsl)  
#require(waveDissolve.glsl)

void main() {
    vec4 texel;
    vec2 uvs;
    float alpha;

    // Do button logic
    float aspectWidth = 1.28125;
    float aspectHeight = 1.098;
    // uvs = vUv;
    uvs = (vUv * aspectWidth) - (fract(aspectWidth) / 2.);
    uvs.y -= fract(aspectWidth) / 2.;
    uvs = vec2(
        uvs.x,
        (uvs.y * aspectHeight) - fract(aspectHeight)
    );
    // (vUv.y * aspectHeight) - fract(aspectHeight)
    texel = texture2D(tMap, uvs);
    vec3 icon = texel.ggg * uColor;
    vec3 bg = texel.rrr * uBgColor;
    alpha = texel.r;

    texel.rgb = mix(bg, icon, texel.g);
    
    // Do text logic
    vec2 textUvs = vec2(vUv.x, vUv.y * aspectHeight);
    // textUvs.y *= 0.155832 * aspectHeight;
    vec4 textTexel = texture2D(tMap, textUvs).bbbb;
    textTexel.rgb *= uColor;

    texel += textTexel;
    alpha += textTexel.a;

    
    // Texture animation/transition
    float transitionMix = waveDissolve(vUv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    gl_FragColor = vec4(texel.rgb, transitionMix * alpha);
}{@}TechnologyPlayButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec3 uBgColor;
uniform float uIsText;
uniform sampler2D tNoise;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;

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
#require(transformUV.glsl)  
#require(waveDissolve.glsl)

void main() {
    vec4 texel;
    vec2 uvs;
    float alpha;

    if (uIsText < 0.5) {
        // Do button logic
        uvs = vUv;
        texel = texture2D(tMap, uvs);
        vec3 icon = texel.ggg * uColor;
        vec3 bg = texel.rrr * uBgColor;
        alpha = texel.r;

        texel.rgb = mix(bg, icon, texel.g);
    } else {
        // Do text logic
        uvs = vec2(vUv.x, vUv.y * 0.155832);
        texel = texture2D(tMap, uvs).bbbb;
        alpha = texel.a;
        texel.rgb *= uColor;
    }

    float transitionMix = waveDissolve(uvs, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);

    gl_FragColor = vec4(texel.rgb, transitionMix * alpha);
}{@}TechnologyVideoBGShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uWindowSize;
uniform vec2 tDimensions;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment

void main() {
    float wAspect = uWindowSize.x / uWindowSize.y;
    float tAspect = tDimensions.x / tDimensions.y; // 1
    float aspectRatio = wAspect / tAspect;
    vec2 coverUV = vUv;
    
    if (aspectRatio < 1.) {
        coverUV.x = vUv.x * aspectRatio;
        coverUV.x += 0.5;
        coverUV.x -= aspectRatio * .5;
    } else {
        coverUV.y = vUv.y * (1. / aspectRatio);
        coverUV.y += 0.5;
        coverUV.y -= (1. / aspectRatio) * .5;
    }

    vec3 color = texture2D(tMap, coverUV).rgb;
    color *= 0.5;

	gl_FragColor = vec4(color, 1.);
}   {@}ColorBlockShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D uDustTexture;
uniform vec3 uColor;
uniform vec2 uRange;
uniform float uSubtract;
#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
}


#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(luma.fs)

void main() {
    vec2 uv = vUv;
    //uv += cnoise(vec2(time*10.0)) * 0.03;
    vec3 noise = 1. - texture2D(uDustTexture, uv * 3.0).rgb;
    vec3 color = blendSubtract(uColor, noise);
    float luminance = luma(color);
    float response = smoothstep(uRange.x, uRange.y, luminance);
    color = mix(color, uColor, response);
    gl_FragColor = vec4(vec3(color), 1.0);
}{@}ColorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uColor, 1.0);
}   {@}ShaderExample.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform vec3 uColor;

#!VARYINGS
varying vec2 uVu;

#!SHADER: Vertex
void main() {
    vec2 vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.rgb += sin(time) * 0.5;
    gl_FragColor.rgb *= uColor;
    gl_FragColor.a = uAlpha;
    // gl_FragColor = vec4(1.0);
}{@}TestMaskShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#require(gluimask.fs)

#!SHADER: Fragment
void main() {
    vec2 uv = getMaskUV();
    if (uv.x < 1) discard;
    gl_FragColor = vec4(uv, 1.0, 1.0);
}{@}TransitionTestShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tFrom;
uniform sampler2D tTo;
uniform sampler2D tNoise;
uniform float uTransition0;
uniform float uTransition;
uniform float uUVScale;
uniform float uRotation;
uniform float uFlipped;
uniform vec3 uTransitionColor;
uniform float uRGBShift;
uniform float uBloomAdd;
uniform float uBloomExtra;
uniform float uNoise;
uniform float uVignette;
uniform sampler2D tGrunge;
uniform float uGrunge;
uniform float uSpeed;
uniform float uMobile;
uniform vec2 uDimensions;
uniform vec2 uStageDimensions;


#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment

#require(UnrealBloom.fs)
#require(range.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)
#require(rgbshift.fs)
#require(blendmodes.glsl)

vec2 aspectRatioUV(vec2 uv, vec2 textureResolution, vec2 containerDimensions) {
    vec2 ratioX = vec2(1., textureResolution.x/textureResolution.y * containerDimensions.y/containerDimensions.x);
    vec2 ratioY = vec2(textureResolution.y/textureResolution.x * containerDimensions.x/containerDimensions.y, 1.);
    float which = step(ratioX.y , 1.);
    vec2 aspectRatio = mix(ratioY, ratioX, which);
    vec2 rUV =  (uv - vec2(0.5)) * aspectRatio + vec2(0.5);
    return rUV;
}

void main() {
    vec2 baseUV = scaleUV(vUv, vec2(1.0+uSpeed*0.01));

    vec2 transitionUV = aspectRatioUV(baseUV, uDimensions, uStageDimensions);
    transitionUV = mix(transitionUV, vec2(transitionUV.x, 1.0-transitionUV.y), uFlipped);

    vec2 tuv = baseUV;

    vec2 fUV = rotateUV(transitionUV, radians(uRotation));
    vec2 uv = fUV * (1.0 / uUVScale);
    //uv += cnoise(fUV * 3.0 + time*uTimeScale) * 0.02;

    vec3 noise = texture2D(tNoise, uv).rgb;
    noise *= fUV.y;

    float t0 = crange(uTransition0, 0.0, 1.0, 0.0, 1.0);
    float mix0 = step(0.5, rangeTransition(t0, 1.0 -noise.r, 0.05));

    float t1 = crange(uTransition, 0.0, 1.0, 0.0, 1.0);
    float mix1 = step(0.5, rangeTransition(t1, 1.0 -noise.g, 0.05));

    float fadeEdges = smoothstep(1.0, 0.1, length(scaleUV(vUv, vec2(1.0, resolution.x/resolution.y))-0.5));
    vec3 fromColor = getRGB(tFrom, tuv, 0.3, 0.001*uSpeed*fadeEdges+0.001*uRGBShift*fadeEdges).rgb;//texture2D(tFrom, tuv).rgb;
    vec3 toColor = getRGB(tTo, tuv, 0.3, 0.001*uSpeed*fadeEdges+0.001*uRGBShift*fadeEdges).rgb;//texture2D(tTo, tuv).rgb;\

    fromColor *= mix(1.0, smoothstep(1.0, 0.0, uTransition0), 0.6);

    vec3 color = mix(fromColor, uTransitionColor, mix0);
    color = mix(color, toColor, mix1);

    color *= 1.0 + crange(getNoise(vUv, 10.0), 0.0, 1.0, -1.0, 1.0) * uNoise * 0.1;
    color *= 1.0 + uSpeed * 0.15;

    if (uGrunge > 0.0) {
        vec3 grunge = texture2D(tGrunge, vUv*2.0).rgb;

        float grungeMix = uGrunge * smoothstep(-0.1, 0.8, length(scaleUV(vUv, vec2(1.0, resolution.x/resolution.y))-0.5));
        grungeMix += uSpeed * 0.2;
        color = blendScreen(color, grunge, grungeMix);

        vec3 grunge2 = texture2D(tGrunge, vUv*2.2+0.5).rgb;
        color = blendMultiply(color, vec3(1.0-grunge2.r), grungeMix);
    }

    
    color *= mix(1.0, smoothstep(mix(1.0, 2.0, uMobile)-uSpeed*0.4, mix(0.25, 0.5, uMobile)-uSpeed*0.1, length(scaleUV(vUv, vec2(1.0, resolution.x/resolution.y))-0.5)), uVignette * 0.5);

    gl_FragColor = vec4(color, 1.0);
}{@}WaveTextShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tNoise;
uniform float uTimeScale;
uniform float uUVScale;
uniform float uRotation;
uniform float uTransition0;
#!VARYINGS

#!SHADER: Vertex

#!SHADER: Fragment
#require(transformUV.glsl)
#require(waveDissolve.glsl)

void main() {
    vec2 tuv = getBoundingUV();
    float mix = waveDissolve(tuv, uRotation, uUVScale, uTimeScale, tNoise, uTransition0);
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * mix;
}{@}waveDissolve.glsl{@}float waveDissolve(vec2 tUv, float rotation, float scale, float timeScale, sampler2D noiseTexture, float transitionAmount) {
    vec2 fUV = rotateUV(tUv , radians(rotation));
    vec2 uv = fUV * (1.0 / scale);
    uv += cnoise(fUV * 3.0 + time*timeScale) * 0.01;

    vec3 noise = texture2D(noiseTexture, uv).rgb;
    noise *= fUV.y;

    float transition = crange(transitionAmount, 0.0, 1.0, 0.0, 1.0);
    float mix = step(0.5, rangeTransition(transition, 1.0 -noise.r, 0.05));
    return mix;                 
}
