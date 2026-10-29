(function () {
  'use strict';

  var VERTEX = '#version 300 es\n' +
    'in vec2 aPosition;\n' +
    'void main(){gl_Position=vec4(aPosition,0.0,1.0);}';

  var FRAGMENT = '#version 300 es\n' +
    'precision highp float;\n' +
    'uniform vec2 uResolution; uniform float uTime; uniform float uScale;\n' +
    'uniform float uDetail; uniform float uGlow; uniform float uThickness;\n' +
    'uniform float uSwirl; uniform float uFold; uniform float uBlackPoint;\n' +
    'uniform float uBrightness; uniform float uGrain; uniform float uOpacity;\n' +
    'uniform vec2 uOffset; uniform vec2 uRotation; uniform vec2 uDrift; uniform vec4 uRipples[8]; uniform int uRippleCount; uniform vec3 uColors[5];\n' +
    'uniform float uBalance; out vec4 outColor;\n' +
    'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}\n' +
    'vec3 palette(float g){float t=g<uBalance?.5*g/uBalance:.5+.5*(g-uBalance)/(1.-uBalance);' +
      'float s=t*4.;int i=int(min(floor(s),3.));return mix(uColors[i],uColors[i+1],smoothstep(0.,1.,s-float(i)));}\n' +
    'void main(){\n' +
      'vec2 uv=(gl_FragCoord.xy-.5*uResolution)/uResolution.y;vec2 rippleOffset=vec2(0.);\n' +
      'for(int k=0;k<8;k++){if(k>=uRippleCount)break;vec4 ripple=uRipples[k];vec2 delta=uv-ripple.xy;float distanceToDrop=length(delta);' +
        'float envelope=exp(-distanceToDrop*11.)*exp(-ripple.z*2.2);float wave=sin(distanceToDrop*62.-ripple.z*11.)*envelope*ripple.w;' +
        'rippleOffset+=normalize(delta+vec2(.00001))*wave;}\n' +
      'vec2 q=uv-uOffset+rippleOffset;\n' +
      'vec2 view=vec2(q.x*uRotation.x-q.y*uRotation.y,q.x*uRotation.y+q.y*uRotation.x);\n' +
      'vec2 p=uScale*view-.5+uDrift;vec2 i=p;float c=0.;float r=length(p+vec2(sin(uTime),sin(uTime*.3+5.))*.5);\n' +
      'float d=length(p);float rot=d+uTime+p.x*uSwirl;float cr=cos(rot);\n' +
      'mat2 warp=mat2(cos(rot-sin(uTime/5.)),sin(rot),-sin(cr-uTime),cr)*uFold;\n' +
      'for(float n=0.;n<8.;n++){if(n>=ceil(uDetail))break;p*=warp;float t=r-uTime/(n+3.);\n' +
        'i-=p+vec2(cos(t-i.x-r)+sin(t+i.y),sin(t-i.y)+cos(t+i.x)+r);\n' +
        'float l=length(vec2(sin(i.x+t),cos(i.y+t)));float fp=.5*length(vec2(dFdx(l),dFdy(l)));\n' +
        'l=sqrt(l*l+fp*fp);float w=clamp(uDetail-n,0.,1.);c+=w*uGlow/pow(max(l,1e-6),uThickness);}\n' +
      'c/=6.;float g=clamp(max(c-uBlackPoint,0.)*uBrightness,0.,1.);vec3 col=palette(g);\n' +
      'float noise=(hash(gl_FragCoord.xy+fract(uTime)*97.)-.5)*uGrain;float a=clamp(g+noise,0.,1.)*uOpacity;\n' +
      'outColor=vec4(col*a,a);\n' +
    '}';

  var PALETTES = {
    surface: {
      colors: ['#001f1c', '#004d40', '#71411d', '#a14000', '#f5f5dc'],
      speed: 0.1, scale: 2.8, detail: 3.35, glow: 0.52, thickness: 0.72,
      swirl: 0.42, fold: -0.18, blackPoint: 0.018, brightness: 1.02,
      balance: 0.66, grain: 0.01, opacity: 0.86, rotation: -8, offset: [0.06, -0.02]
    },
    filaments: {
      colors: ['#001f1c', '#004d40', '#8b6900', '#ffd700', '#f5f5dc'],
      speed: 0.17, scale: 3.5, detail: 3.25, glow: 0.2, thickness: 1.02,
      swirl: 0.82, fold: -0.2, blackPoint: 0.018, brightness: 1.18,
      balance: 0.48, grain: 0.018, opacity: 0.92, rotation: 6, offset: [0.1, 0], interactive: false
    },
    interactive: {
      colors: ['#001f1c', '#004d40', '#8d5d00', '#e5ad00', '#fff0a8'],
      speed: 0.14, scale: 3.15, detail: 3.55, glow: 0.22, thickness: 0.9,
      swirl: 0.68, fold: -0.235, blackPoint: 0.012, brightness: 1.12,
      balance: 0.52, grain: 0.012, opacity: 0.9, rotation: 3, offset: [0.08, 0], interactive: true
    },
    work: {
      colors: ['#001f1c', '#004d40', '#704718', '#c58a1c', '#fff0a8'],
      speed: 0.14, scale: 3.05, detail: 3.7, glow: 0.22, thickness: 0.9,
      swirl: 0.68, fold: -0.235, blackPoint: 0.012, brightness: 1.1,
      balance: 0.54, grain: 0.012, opacity: 0.92, rotation: 3, offset: [0.025, 0], interactive: true,
      ripples: true, clickRipple: true, dpr: 1.35, maxFps: 60
    },
    workMobile: {
      colors: ['#001f1c', '#004d40', '#704718', '#c58a1c', '#fff0a8'],
      speed: 0.075, scale: 2.85, detail: 2.35, glow: 0.19, thickness: 0.92,
      swirl: 0.58, fold: -0.19, blackPoint: 0.016, brightness: 1.02,
      balance: 0.56, grain: 0, opacity: 0.78, rotation: 3, offset: [0.02, 0], interactive: false,
      ripples: false, clickRipple: false, dpr: 0.7, maxFps: 24
    },
    about: {
      colors: ['#001f1c', '#004d40', '#79501a', '#d4972c', '#fff0b5'],
      speed: 0.095, scale: 3.45, detail: 3.65, glow: 0.25, thickness: 0.84,
      swirl: 0.56, fold: -0.205, blackPoint: 0.008, brightness: 1.18,
      balance: 0.51, grain: 0.008, opacity: 0.9, rotation: -4, offset: [0.2, -0.02], interactive: true,
      ripples: false, clickRipple: false, dpr: 1, maxFps: 30
    },
    contact: {
      colors: ['#001f1c', '#004d40', '#714819', '#c88923', '#fff0b5'],
      speed: 0.1, scale: 5.7, detail: 5.3, glow: 0.3, thickness: 0.78,
      swirl: 0.64, fold: -0.225, blackPoint: 0.005, brightness: 1.3,
      balance: 0.5, grain: 0.008, opacity: 0.96, rotation: -10, offset: [0, 0], interactive: false,
      ripples: false, clickRipple: false, dpr: 1, maxFps: 30
    }
  };

  function rgb(hex) {
    var value = parseInt(hex.slice(1), 16);
    return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
  }

  function compile(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn('Liquid lab shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function mount(host) {
    var isWorkHero = host.hasAttribute('data-work-liquid');
    var isAboutHero = host.hasAttribute('data-about-liquid');
    var isContactLiquid = host.hasAttribute('data-contact-liquid');
    var compactPointer = window.matchMedia('(max-width: 760px)').matches ||
      window.matchMedia('(hover: none), (pointer: coarse)').matches;
    var settings = PALETTES[host.dataset.variant] || PALETTES.surface;
    if (isWorkHero && compactPointer) {
      settings = PALETTES.workMobile;
      host.dataset.liquidMode = 'mobile';
    }
    var staticAbout = isAboutHero && (
      window.matchMedia('(max-width: 760px)').matches ||
      window.matchMedia('(hover: none), (pointer: coarse)').matches
    );
    if (staticAbout) {
      host.dataset.liquidMode = 'static';
      return function () {};
    }
    if (isContactLiquid && compactPointer) {
      host.dataset.liquidMode = 'static';
      return function () {};
    }
    var canvas = document.createElement('canvas');
    canvas.className = 'liquid-lab-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    host.appendChild(canvas);

    var gl = canvas.getContext('webgl2', {
      alpha: true, antialias: false, depth: false, stencil: false,
      premultipliedAlpha: true, powerPreference: compactPointer ? 'low-power' : 'high-performance'
    });
    if (!gl) {
      host.dataset.fallback = 'true';
      canvas.remove();
      return function () {};
    }

    var vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
    var fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vertex || !fragment) {
      host.dataset.fallback = 'true';
      canvas.remove();
      return function () {};
    }
    var program = gl.createProgram();
    gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.bindAttribLocation(program, 0, 'aPosition');
    gl.linkProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      host.dataset.fallback = 'true';
      gl.deleteProgram(program); canvas.remove();
      return function () {};
    }

    var vao = gl.createVertexArray();
    var buffer = gl.createBuffer();
    gl.bindVertexArray(vao); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0); gl.useProgram(program);

    var names = ['uResolution','uTime','uScale','uDetail','uGlow','uThickness','uSwirl','uFold','uBlackPoint','uBrightness','uGrain','uOpacity','uOffset','uRotation','uDrift','uRipples','uRippleCount','uColors','uBalance'];
    var u = {};
    names.forEach(function (name) { u[name] = gl.getUniformLocation(program, name); });
    var palette = new Float32Array(15);
    var rippleData = new Float32Array(32);
    settings.colors.forEach(function (color, index) { palette.set(rgb(color), index * 3); });

    var visible = false; var contextLost = false;
    var canInteract = !!settings.interactive && window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    var drift = [0, 0]; var driftTarget = [0, 0];
    var ripples = []; var clock = 0; var lastRippleAt = 0; var lastRipplePoint = null;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var width = 0; var height = 0; var time = 0.4; var last = 0; var lastDraw = 0; var frame = 0;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, settings.dpr || 1.35);
      var nextWidth = Math.max(1, Math.round(host.clientWidth * dpr));
      var nextHeight = Math.max(1, Math.round(host.clientHeight * dpr));
      if (nextWidth === width && nextHeight === height) return;
      width = canvas.width = nextWidth; height = canvas.height = nextHeight;
    }

    function draw() {
      if (contextLost) return;
      resize(); gl.viewport(0, 0, width, height); gl.useProgram(program);
      gl.uniform2f(u.uResolution, width, height); gl.uniform1f(u.uTime, time); gl.uniform1f(u.uScale, settings.scale);
      gl.uniform1f(u.uDetail, settings.detail); gl.uniform1f(u.uGlow, settings.glow); gl.uniform1f(u.uThickness, settings.thickness);
      gl.uniform1f(u.uSwirl, settings.swirl); gl.uniform1f(u.uFold, settings.fold); gl.uniform1f(u.uBlackPoint, settings.blackPoint);
      gl.uniform1f(u.uBrightness, settings.brightness); gl.uniform1f(u.uGrain, settings.grain); gl.uniform1f(u.uOpacity, settings.opacity);
      gl.uniform1f(u.uBalance, settings.balance); gl.uniform2f(u.uOffset, settings.offset[0] * width / Math.max(height, 1), settings.offset[1]);
      var angle = settings.rotation * Math.PI / 180;
      gl.uniform2f(u.uRotation, Math.cos(angle), Math.sin(angle));
      gl.uniform2f(u.uDrift, drift[0], drift[1]);
      rippleData.fill(0);
      ripples.forEach(function (ripple, index) {
        rippleData.set([ripple.x, ripple.y, Math.max(0, clock - ripple.born), ripple.strength], index * 4);
      });
      gl.uniform4fv(u.uRipples, rippleData);
      gl.uniform1i(u.uRippleCount, ripples.length);
      gl.uniform3fv(u.uColors, palette);
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    function tick(now) {
      frame = requestAnimationFrame(tick);
      if (!visible || document.hidden || contextLost) { last = now; return; }
      if (reduced.matches) {
        if (last !== -1) { draw(); last = -1; }
        return;
      }
      var frameInterval = settings.maxFps ? 1000 / settings.maxFps : 0;
      if (frameInterval && lastDraw && now - lastDraw < frameInterval) return;
      lastDraw = now;
      if (last === -1) last = now;
      var delta = last ? Math.min((now - last) / 1000, 0.1) : 0;
      last = now;
      var ease = 1 - Math.exp(-delta / 0.3);
      drift[0] += (driftTarget[0] - drift[0]) * ease;
      drift[1] += (driftTarget[1] - drift[1]) * ease;
      clock += delta;
      ripples = ripples.filter(function (ripple) { return clock - ripple.born < 1.7; });
      time += delta * settings.speed;
      draw();
    }

    var intersection = new IntersectionObserver(function (entries) { visible = entries.some(function (entry) { return entry.isIntersecting; }); });
    var sizes = new ResizeObserver(draw);
    function onContextLost(event) { event.preventDefault(); contextLost = true; host.dataset.fallback = 'true'; }
    function onMotionChange() {
      drift[0] = 0; drift[1] = 0; driftTarget[0] = 0; driftTarget[1] = 0;
      ripples = [];
      last = 0; draw();
    }
    function pointerPoint(event) {
      var rect = host.getBoundingClientRect();
      var nx = (event.clientX - rect.left) / Math.max(rect.width, 1);
      var ny = (event.clientY - rect.top) / Math.max(rect.height, 1);
      return {
        x: (nx - 0.5) * rect.width / Math.max(rect.height, 1),
        y: 0.5 - ny,
        nx: nx,
        ny: ny
      };
    }
    function addRipple(point, strength) {
      ripples.unshift({ x: point.x, y: point.y, born: clock, strength: strength });
      if (ripples.length > 8) ripples.length = 8;
    }
    function onPointerMove(event) {
      if (!canInteract || reduced.matches || event.pointerType !== 'mouse') return;
      var point = pointerPoint(event);
      driftTarget[0] = (point.nx - 0.5) * 0.036;
      driftTarget[1] = (0.5 - point.ny) * 0.028;
      var stamp = event.timeStamp / 1000;
      var moved = !lastRipplePoint || Math.hypot(point.nx - lastRipplePoint.nx, point.ny - lastRipplePoint.ny) > 0.018;
      if (settings.ripples !== false && moved && stamp - lastRippleAt > 0.045) {
        addRipple(point, 0.036);
        lastRippleAt = stamp;
        lastRipplePoint = point;
      }
    }
    function onPointerDown(event) {
      if (!canInteract || settings.clickRipple === false || reduced.matches || event.pointerType !== 'mouse' || event.button !== 0) return;
      addRipple(pointerPoint(event), 0.085);
    }
    function onPointerLeave() { driftTarget[0] = 0; driftTarget[1] = 0; lastRipplePoint = null; }
    canvas.addEventListener('webglcontextlost', onContextLost);
    host.addEventListener('pointermove', onPointerMove, { passive: true });
    host.addEventListener('pointerdown', onPointerDown);
    host.addEventListener('pointerleave', onPointerLeave);
    reduced.addEventListener?.('change', onMotionChange);
    intersection.observe(host); sizes.observe(host); draw(); frame = requestAnimationFrame(tick);

    return function () {
      cancelAnimationFrame(frame); intersection.disconnect(); sizes.disconnect();
      canvas.removeEventListener('webglcontextlost', onContextLost);
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerdown', onPointerDown);
      host.removeEventListener('pointerleave', onPointerLeave);
      reduced.removeEventListener?.('change', onMotionChange);
      gl.deleteProgram(program); gl.deleteBuffer(buffer); gl.deleteVertexArray(vao);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }

  function init() {
    var cleanups = Array.prototype.map.call(document.querySelectorAll('[data-liquid-lab], [data-work-liquid], [data-about-liquid]'), mount);
    window.addEventListener('pagehide', function (event) {
      if (!event.persisted) cleanups.forEach(function (cleanup) { cleanup(); });
    }, { once: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
