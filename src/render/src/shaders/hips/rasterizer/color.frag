#version 300 es
precision highp float;
precision lowp sampler2DArray;
precision lowp isampler2DArray;
precision highp int;

in vec3 frag_uv_start;
in vec3 frag_uv_end;
in float frag_blending_factor;

out vec4 out_frag_color;

@import ../color;

void main() {
    vec4 color_start = get_color_from_texture(frag_uv_start);
    vec4 color_end = get_color_from_texture(frag_uv_end);

    out_frag_color = mix(color_start, color_end, frag_blending_factor);
}