'use client';
import React, { useEffect, useRef, useState } from 'react';

const CircularZoomBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const verticesRef = useRef(null);
  const bufferRef = useRef(null);
  const offsetRef = useRef(0);
  const fadeRef = useRef(0);
  const [webglError, setWebglError] = useState(false);
  
  // Vertex shader
  const vertexShaderSource = `#version 300 es
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  in vec2 position;

  void main(void) {
    gl_Position = vec4(position, 0, 1);
  }`;
  
  // Fragment shader - this is the cool circular zoom animation
  const fragmentShaderSource = `#version 300 es
  /*********
  * made by Matthias Hurrle (@atzedent)
  * adapted for Abraxas Innovations
  */

  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  out vec4 fragColor;

  uniform vec2 resolution;
  uniform float time;
  uniform float fade;

  #define T time
  #define S smoothstep

  #define TAU 6.2831853

  float rnd(vec2 p) {
    return fract(sin(dot(p, p.yx + vec2(1234, 2345))) * 345678.);
  }

  vec3 grid(vec2 uv) {
    vec3 col = vec3(0);

    float n = 1.2;
    vec2 g = abs(mod(uv, n) - .5 * n);

    col = mix(vec3(1), vec3(0), S(.08, .0, min(g.x, g.y)));
    col = min(col, mix(vec3(1), vec3(0), .125));

    return col;
  }

  void main(void) {
    vec2 uv = (
      gl_FragCoord.xy - .5 * resolution
    ) / min(resolution.x, resolution.y);
    uv *= 48.7;
    vec3 col = grid(uv);

    float
    d = length(vec2(log(length(uv)) - T * .5, atan(abs(uv.y), abs(uv.y)) / TAU));
    d = sin(d * dot(col, col)) - .05;
    d = abs(d);
    d = pow(.3 / d, .75);

    d = max(.0, d * mix(.75, 1., rnd(uv)));

    // Use colors more aligned with your site's theme (dark with blue/green accents)
    col *= mix(d, 1., 1. - min(1., S(.7, .8, T * .4)));
    col = mix(col, vec3(.01, .05, .052), .75);
    
    // Add a slight blue/green tint to match your site theme
    col = mix(col, vec3(0.0, 0.4, 0.5), 0.1);
    
    col = mix(col, vec3(1), S(.9, 1., fade * fade));
    col = mix(col, vec3(0), 1. - min(1., S(.5, .8, T * .4)));

    fragColor = vec4(col, 1);
  }`;
  
  const compile = (gl, shader, source) => {
    try {
      if (!shader) {
        console.error('Shader is null');
        return false;
      }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation failed:', gl.getShaderInfoLog(shader));
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error compiling shader:', error);
      return false;
    }
  };
  
  const setup = (canvas) => {
    try {
    const dpr = window.devicePixelRatio || 1;
    const gl = canvas.getContext('webgl2');
    
    if (!gl) {
      console.error('WebGL 2 not supported');
        setWebglError(true);
      return null;
    }
    
    const vs = gl.createShader(gl.VERTEX_SHADER);
      if (!vs) {
        console.error('Failed to create vertex shader');
        setWebglError(true);
        return null;
      }
      
      if (!compile(gl, vs, vertexShaderSource)) {
        setWebglError(true);
        return null;
      }
    
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
      if (!fs) {
        console.error('Failed to create fragment shader');
        setWebglError(true);
        return null;
      }
      
      if (!compile(gl, fs, fragmentShaderSource)) {
        setWebglError(true);
        return null;
      }
    
    const program = gl.createProgram();
      if (!program) {
        console.error('Failed to create program');
        setWebglError(true);
        return null;
      }
      
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking failed:', gl.getProgramInfoLog(program));
        setWebglError(true);
      return null;
    }
    
    const vertices = [
      -1, -1, 1,
      -1, -1, 1,
      -1, 1, 1,
      -1, 1, 1,
    ];
    
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    
    program.resolution = gl.getUniformLocation(program, 'resolution');
    program.time = gl.getUniformLocation(program, 'time');
    program.fade = gl.getUniformLocation(program, 'fade');
    
    // Resize canvas to match display
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, width * dpr, height * dpr);
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    return { gl, program, vertices, buffer };
    } catch (error) {
      console.error('Error in WebGL setup:', error);
      setWebglError(true);
      return null;
    }
  };
  
  const draw = (gl, program, vertices, now, fade) => {
    try {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    
    gl.uniform2f(program.resolution, gl.canvas.width, gl.canvas.height);
    gl.uniform1f(program.time, now * 1e-3);
    gl.uniform1f(program.fade, fade);
    
    gl.drawArrays(gl.TRIANGLES, 0, vertices.length * 0.5);
    } catch (error) {
      console.error('Error in WebGL draw:', error);
      setWebglError(true);
    }
  };
  
  const loop = (timestamp) => {
    if (!glRef.current || !programRef.current || !verticesRef.current) return;
    
    try {
    const now = timestamp - offsetRef.current;
    
    // Calculate fade (simplified from the original code)
    fadeRef.current = (now % 10000) / 10000;
    
    draw(glRef.current, programRef.current, verticesRef.current, now, fadeRef.current);
    
    if (fadeRef.current >= 1) {
      offsetRef.current += now;
      fadeRef.current = 0;
    }
    
    animationRef.current = requestAnimationFrame(loop);
    } catch (error) {
      console.error('Error in animation loop:', error);
      setWebglError(true);
    }
  };
  
  useEffect(() => {
    if (!canvasRef.current) return;

    try {
    const { gl, program, vertices, buffer } = setup(canvasRef.current) || {};
    
      if (!gl || !program) {
        setWebglError(true);
        return;
      }
    
    glRef.current = gl;
    programRef.current = program;
    verticesRef.current = vertices;
    bufferRef.current = buffer;
    
    animationRef.current = requestAnimationFrame(loop);
    } catch (error) {
      console.error('Error in useEffect:', error);
      setWebglError(true);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (glRef.current) {
        try {
        const ext = glRef.current.getExtension('WEBGL_lose_context');
        if (ext) ext.loseContext();
        } catch (error) {
          console.error('Error losing WebGL context:', error);
        }
        glRef.current = null;
      }
    };
  }, []);
  
  // If WebGL fails, show a fallback gradient background
  if (webglError) {
    return (
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease infinite'
        }}
      >
        <style jsx>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>
    );
  }
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
      style={{ objectFit: 'contain' }}
    />
  );
};

export default CircularZoomBackground; 