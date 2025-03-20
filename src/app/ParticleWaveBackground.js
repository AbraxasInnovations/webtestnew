'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleWaveBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Make sure we have access to the container before initializing
    if (!containerRef.current) return;
    
    // Variables
    const SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;
    let particles, particle, count = 0;
    let container;
    let camera, scene, renderer;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    
    // Init function
    const init = () => {
      container = containerRef.current;
      
      camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.y = 200; // Changes how far back you can see the particles
      camera.position.z = 350; // How close or far the particles are seen
      camera.rotation.x = 0.45;
      
      scene = new THREE.Scene();
      
      particles = [];
      
      const PI2 = Math.PI * 2;
      const material = new THREE.SpriteCanvasMaterial({
        color: 0x22cc55, // Green color for particles (changed from purple)
        program: (context) => {
          context.beginPath();
          context.arc(0, 0, 0.1, 0, PI2, true);
          context.fill();
        }
      });
      
      let i = 0;
      
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) - 10);
          scene.add(particle);
        }
      }
      
      // Check for WebGL support
      if (window.WebGLRenderingContext) {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      } else {
        renderer = new THREE.CanvasRenderer();
      }
      
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x0a0a0a, 0); // Dark background with transparency
      container.appendChild(renderer.domElement);
      
      window.addEventListener('resize', onWindowResize, false);
    };
    
    // Handle window resize
    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };
    
    // Render function
    const render = () => {
      let i = 0;
      
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y = (Math.cos((ix + count) * 0.5) * 20) + (Math.cos((iy + count) * 0.5) * 20);
          particle.scale.x = particle.scale.y = (Math.cos((ix + count) * 0.3) + 2) * 4 + (Math.cos((iy + count) * 0.5) + 1) * 4;
        }
      }
      
      renderer.render(scene, camera);
      
      // Controls animation speed
      count += 0.1;
    };
    
    // Initialize and start animation
    init();
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      if (particles) {
        particles.forEach(particle => {
          scene.remove(particle);
          if (particle.material) {
            particle.material.dispose();
          }
        });
      }
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default ParticleWaveBackground; 