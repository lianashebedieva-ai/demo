(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22688,e=>{"use strict";var t=e.i(43476),o=e.i(75056),a=e.i(98903),i=e.i(71645),l=e.i(90072),n=e.i(74183);let r=`
uniform float uTime; uniform float uLevel; uniform float uPixel; uniform vec2 uMouse;
attribute float aSeed; attribute float aSize; varying float vA; varying float vT;
vec3 flow(vec3 p,float t){ return vec3(sin(p.y*1.3+t*.35+aSeed*6.)*.35, cos(p.x*1.1+t*.27)*.22+.18, sin(p.x*.7+p.y*.9+t*.2)*.3); }
void main(){
  vec3 p = position; float t = uTime*.6;
  p += flow(p,t); p.y = mod(p.y + t*(.15+aSeed*.25) + 6., 12.) - 6.;
  p.xy += uMouse * (.25 + aSeed*.5);
  vec4 mv = modelViewMatrix * vec4(p,1.);
  float tw = .55 + .45*sin(uTime*(1.5+aSeed*4.) + aSeed*40.);
  vT = tw; vA = smoothstep(-14.,-2.,mv.z) * (.35+.65*aSeed);
  gl_PointSize = aSize * uPixel * (1. + uLevel*2.2) * tw * (9. / -mv.z);
  gl_Position = projectionMatrix * mv;
}`,u=`
varying float vA; varying float vT; uniform float uOpacity;
void main(){ vec2 c = gl_PointCoord-.5; float d = length(c); float core = smoothstep(.5,0.,d); float glow = exp(-d*9.);
  vec3 col = mix(vec3(1.,.72,.28), vec3(1.,.95,.78), core*vT);
  gl_FragColor = vec4(col, (glow*.9+core*.4)*vA*uOpacity); }`;function v({count:e=5200,opacity:o=1}){let s=(0,i.useRef)(null),c=(0,i.useMemo)(()=>{let t=new l.ld,o=new Float32Array(3*e),a=new Float32Array(e),i=new Float32Array(e);for(let t=0;t<e;t++)o[3*t]=(Math.random()-.5)*16,o[3*t+1]=(Math.random()-.5)*12,o[3*t+2]=-(12*Math.random()),a[t]=Math.random(),i[t]=.06>Math.random()?3.2+3*Math.random():.6+1.6*Math.random();return t.setAttribute("position",new l.f5(o,3)),t.setAttribute("aSeed",new l.f5(a,1)),t.setAttribute("aSize",new l.f5(i,1)),t},[e]),f=(0,i.useMemo)(()=>({uTime:{value:0},uLevel:{value:0},uPixel:{value:1},uMouse:{value:new l.wq},uOpacity:{value:o}}),[o]);return(0,a.f)(e=>{let t=s.current.uniforms;t.uTime.value=e.clock.elapsedTime,t.uLevel.value=n.H.level,t.uPixel.value=e.gl.getPixelRatio(),t.uMouse.value.lerp(new l.wq(.6*e.pointer.x,.4*e.pointer.y),.04)}),(0,t.jsx)("points",{geometry:c,children:(0,t.jsx)("shaderMaterial",{ref:s,vertexShader:r,fragmentShader:u,uniforms:f,transparent:!0,depthWrite:!1,blending:l.tq})})}e.s(["default",0,function({count:e,opacity:a,className:i}){return(0,t.jsx)("div",{className:i??"pointer-events-none absolute inset-0",children:(0,t.jsx)(o.f,{dpr:[1,2],camera:{position:[0,0,6],fov:60},gl:{alpha:!0,antialias:!1},children:(0,t.jsx)(v,{count:e,opacity:a})})})}])},10691,function(e){e.n(e.i(22688))}]);