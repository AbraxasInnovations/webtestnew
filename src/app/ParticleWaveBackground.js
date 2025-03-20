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
    let particles = [];
    let count = 0;
    let container;
    let camera, scene, renderer;
    
    // Init function
    const init = () => {
      container = containerRef.current;
      
      camera = new THREE.PerspectiveCamera(120, container.clientWidth / container.clientHeight, 1, 10000);
      camera.position.y = 200; // Changes how far back you can see the particles
      camera.position.z = 350; // How close or far the particles are seen
      camera.rotation.x = 0.45;
      
      scene = new THREE.Scene();
      
      // Create a circle texture for particles
      const textureLoader = new THREE.TextureLoader();
      const circleTexture = createCircleTexture();
      
      // Create a sprite material with the circle texture
      const material = new THREE.SpriteMaterial({
        color: 0x22cc55, // Green color
        map: circleTexture,
        transparent: true,
        blending: THREE.AdditiveBlending
      });
      
      let i = 0;
      
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const sprite = new THREE.Sprite(material);
          sprite.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          sprite.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) - 10);
          sprite.scale.set(4, 4, 1);
          scene.add(sprite);
          particles.push(sprite);
        }
      }
      
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x0a0a0a, 0); // Dark background with transparency
      container.appendChild(renderer.domElement);
      
      window.addEventListener('resize', onWindowResize, false);
    };
    
    // Create a circle texture for the particles
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      
      const context = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 30;
      
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'white';
      context.fill();
      
      // Create gradient for a softer look
      const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      context.globalCompositeOperation = 'source-atop';
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };
    
    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
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
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const ix = Math.floor(i / AMOUNTY);
        const iy = i % AMOUNTY;
        
        particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
        particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1.5) * 4 + (Math.sin((iy + count) * 0.5) + 1.5) * 4;
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
      if (particles.length) {
        particles.forEach(particle => {
          scene.remove(particle);
          if (particle.material) {
            if (particle.material.map) {
              particle.material.map.dispose();
            }
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