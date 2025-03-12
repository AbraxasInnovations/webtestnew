'use client';
import React, { useEffect, useRef } from 'react';

const PipelineBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Constants
    const TO_RAD = Math.PI / 180;
    const TAU = Math.PI * 2;
    const HALF_PI = Math.PI / 0.5;
    
    // Animation settings
    const pipeCount = 50;
    const pipePropCount = 8;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 8;
    const turnAmount = (360 / turnCount) * TO_RAD;
    const turnChanceRange = 48;
    const baseSpeed = 1;
    const rangeSpeed = 2;
    const baseTTL = 100;
    const rangeTTL = 300;
    const baseWidth = 2;
    const rangeWidth = 4;
    const baseHue = 180;
    const rangeHue = 60;
    const backgroundColor = 'hsla(150,80%,1%,1)';

    // Animation duration (20 seconds)
    const ANIMATION_DURATION = 20000;
    let startTime = Date.now();
    let isAnimating = true;

    // Create canvases
    const canvas = {
      a: document.createElement('canvas'),
      b: document.createElement('canvas')
    };
    
    const ctx = {
      a: canvas.a.getContext('2d'),
      b: canvas.b.getContext('2d')
    };

    // Setup canvas B (visible canvas)
    canvas.b.style.position = 'absolute';
    canvas.b.style.top = '0';
    canvas.b.style.left = '0';
    canvas.b.style.width = '100%';
    canvas.b.style.height = '100%';
    containerRef.current.appendChild(canvas.b);

    let center = [];
    let tick = 0;
    let pipeProps;

    // Utility functions
    const rand = n => n * Math.random();
    const round = n => Math.round(n);
    const cos = n => Math.cos(n);
    const sin = n => Math.sin(n);

    function initPipes() {
      pipeProps = new Float32Array(pipePropsLength);
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        initPipe(i);
      }
    }

    function initPipe(i) {
      let x, y, direction, speed, life, ttl, width, hue;
      x = rand(canvas.a.width);
      y = rand(canvas.a.height);
      direction = (round(rand(1)) ? HALF_PI : TAU - HALF_PI);
      speed = baseSpeed + rand(rangeSpeed);
      life = 0;
      ttl = baseTTL + rand(rangeTTL);
      width = baseWidth + rand(rangeWidth);
      hue = baseHue + rand(rangeHue);
      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
    }

    function updatePipes() {
      tick++;
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        updatePipe(i);
      }
    }

    function updatePipe(i) {
      let i2=1+i, i3=2+i, i4=3+i, i5=4+i, i6=5+i, i7=6+i, i8=7+i;
      let x, y, direction, speed, life, ttl, width, hue, turnChance, turnBias;
      
      x = pipeProps[i];
      y = pipeProps[i2];
      direction = pipeProps[i3];
      speed = pipeProps[i4];
      life = pipeProps[i5];
      ttl = pipeProps[i6];
      width = pipeProps[i7];
      hue = pipeProps[i8];

      drawPipe(x, y, life, ttl, width, hue);
      
      life++;
      x += cos(direction) * speed;
      y += sin(direction) * speed;
      
      turnChance = !(tick % round(rand(turnChanceRange))) && (!(round(x) % 6) || !(round(y) % 6));
      turnBias = round(rand(1)) ? -1 : 1;
      direction += turnChance ? turnAmount * turnBias : 0;

      pipeProps[i] = x;
      pipeProps[i2] = y;
      pipeProps[i3] = direction;
      pipeProps[i5] = life;

      checkBounds(x, y);
      if (life > ttl) initPipe(i);
    }

    function drawPipe(x, y, life, ttl, width, hue) {
      ctx.a.save();
      ctx.a.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`;
      ctx.a.beginPath();
      ctx.a.arc(x, y, width, 0, TAU);
      ctx.a.stroke();
      ctx.a.closePath();
      ctx.a.restore();
    }

    function checkBounds(x, y) {
      if (x > canvas.a.width) x = 0;
      if (x < 0) x = canvas.a.width;
      if (y > canvas.a.height) y = 0;
      if (y < 0) y = canvas.a.height;
    }

    function resize() {
      const { innerWidth, innerHeight } = window;
      
      canvas.a.width = innerWidth;
      canvas.a.height = innerHeight;
      ctx.a.drawImage(canvas.b, 0, 0);

      canvas.b.width = innerWidth;
      canvas.b.height = innerHeight;
      ctx.b.drawImage(canvas.a, 0, 0);

      center[0] = 0.5 * canvas.a.width;
      center[1] = 0.5 * canvas.a.height;
    }

    function render() {
      ctx.b.save();
      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
      ctx.b.restore();

      ctx.b.save();
      ctx.b.filter = 'blur(12px)';
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();

      ctx.b.save();
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    }

    function fadeInOut(t, m) {
      let hm = 0.5 * m;
      return Math.abs((t + hm) % m - hm) / hm;
    }

    function animate() {
      if (!isAnimating) return;

      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      // Stop animation after duration without fading
      if (elapsedTime >= ANIMATION_DURATION) {
        isAnimating = false;
        // Draw one final frame to ensure everything is visible
        updatePipes();
        render();
        return;
      }

      updatePipes();
      render();
      requestAnimationFrame(animate);
    }

    // Initialize
    resize();
    initPipes();
    animate();

    // Event listeners
    window.addEventListener('resize', resize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (containerRef.current?.contains(canvas.b)) {
        containerRef.current.removeChild(canvas.b);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default PipelineBackground;
