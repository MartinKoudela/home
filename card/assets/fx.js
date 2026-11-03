(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const R = Math.random;

  const noise = document.createElement("canvas");
  noise.width = noise.height = 220;
  const ng = noise.getContext("2d");
  const nimg = ng.createImageData(220, 220);
  for (let i = 0; i < nimg.data.length; i += 4) {
    const v = (R() * 255) | 0;
    nimg.data[i] = nimg.data[i + 1] = nimg.data[i + 2] = v;
    nimg.data[i + 3] = 255;
  }
  ng.putImageData(nimg, 0, 0);
  document.documentElement.style.setProperty("--grain", `url(${noise.toDataURL()})`);

  const name = document.querySelector("h1");
  let glitchTimer = 0;
  let glitches = 0;
  function scheduleGlitch() {
    clearTimeout(glitchTimer);
    if (!name || reduce.matches || document.hidden) return;
    const delay = Math.min(120000, (5000 + R() * 5000) * Math.pow(1.55, glitches));
    glitchTimer = setTimeout(() => {
      glitches++;
      name.classList.remove("jolt");
      void name.offsetWidth;
      name.classList.add("jolt");
      setTimeout(() => name.classList.remove("jolt"), 320);
      scheduleGlitch();
    }, delay);
  }

  const canvas = document.getElementById("noise");
  const gl = canvas && canvas.getContext("webgl", {
    antialias: false,
    depth: false,
    stencil: false,
    alpha: false,
    preserveDrawingBuffer: false,
    powerPreference: "low-power"
  });

  let raf = 0, last = 0, time = 40, acc = 1, seed = 0, scale = 0.5, slow = 0, frames = 0, uRes = null, uTime = null, uSeed = null;

  function setup() {
    const vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
    const fs = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 r;
uniform float t;
uniform float k;
float h(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),u.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),u.x),u.y);}
void main(){
  vec2 px=gl_FragCoord.xy;
  vec2 uv=px/r;
  float wob=(n(vec2(uv.y*36.,t*1.7))-.5)*.006;
  vec2 q=vec2(uv.x+wob,uv.y);
  float band=smoothstep(.94,1.,sin((uv.y+t*.04)*8.1))*.028;
  float smear=(n(q*vec2(3.,2.)+vec2(t*.05,0.))*.6+n(q*vec2(9.,6.)-vec2(0.,t*.03))*.4)*.022;
  float grain=h(px+vec2(k*157.3,k*91.7))-.5;
  float dust=step(.9994,h(floor(px/2.)+k*31.7))*.32;
  float scratch=step(.9985,h(vec2(floor(px.x/1.5),floor(k*7.))))*step(.45,h(vec2(floor(k*7.),floor(px.y/60.))))*.07;
  float flick=(h(vec2(k,3.7))-.5)*.008;
  float v=.02+grain*.11+smear+band+dust+scratch+flick;
  vec2 c=uv-.5;
  v*=clamp(1.-dot(c,c)*1.5,0.,1.);
  gl_FragColor=vec4(vec3(max(v,0.)),1.);
}`;
    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
    };
    const v = compile(gl.VERTEX_SHADER, vs), f = compile(gl.FRAGMENT_SHADER, fs);
    if (!v || !f) return false;
    const prog = gl.createProgram();
    gl.attachShader(prog, v);
    gl.attachShader(prog, f);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    uRes = gl.getUniformLocation(prog, "r");
    uTime = gl.getUniformLocation(prog, "t");
    uSeed = gl.getUniformLocation(prog, "k");
    return true;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr * scale));
    const h = Math.max(1, Math.round(canvas.clientHeight * dpr * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  }

  function render() {
    resize();
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, time);
    gl.uniform1f(uSeed, seed);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function frame(now) {
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    time += dt;
    acc += dt;
    if (dt > 0 && frames < 90) {
      frames++;
      if (dt > 0.045) slow++;
      if (frames === 90 && slow > 45 && scale > 0.3) scale = 0.3;
    }
    if (acc >= 1 / 24) {
      acc = 0;
      seed = R();
    }
    render();
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (!uRes || raf || reduce.matches || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  function refresh() {
    if (document.hidden) {
      stop();
      clearTimeout(glitchTimer);
      return;
    }
    if (reduce.matches) {
      stop();
      if (uRes) render();
    } else {
      start();
    }
    scheduleGlitch();
  }

  if (gl && setup()) {
    render();
    window.addEventListener("resize", () => {
      if (!raf && uRes) render();
    }, { passive: true });
  } else if (canvas) {
    canvas.classList.add("off");
  }

  window.addEventListener("enter", () => {
    if (!name || reduce.matches) return;
    setTimeout(() => {
      name.classList.remove("jolt");
      void name.offsetWidth;
      name.classList.add("jolt");
      setTimeout(() => name.classList.remove("jolt"), 320);
    }, 700);
  });

  document.addEventListener("visibilitychange", refresh);
  reduce.addEventListener("change", refresh);
  refresh();
})();
