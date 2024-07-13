#version 300 es
#ifdef GL_ES // this is true for phone or tablet
precision mediump float;
#endif
out vec4 outFrag;

void main(){
    outFrag = vec4(1.0, 0.0, 0.0, 1.0);
}