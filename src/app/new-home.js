'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, Globe, Cpu, Lightbulb, Menu, X, Building, Wallet } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function NewHome() {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close menu when clicking a navigation link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Initialize the hover disclosure cards functionality
    const list = document.querySelector('ul');
    if (!list) return;

    const items = list.querySelectorAll('li');
    
    const setIndex = (event) => {
      const closest = event.target.closest('li');
      if (closest) {
        const index = [...items].indexOf(closest);
        const cols = new Array(list.children.length)
          .fill()
          .map((_, i) => {
            items[i].dataset.active = (index === i).toString();
            return index === i ? '10fr' : '1fr';
          })
          .join(' ');
        list.style.setProperty('grid-template-columns', cols);
      }
    };

    const resync = () => {
      const w = Math.max(
        ...[...items].map((i) => {
          return i.offsetWidth;
        })
      );
      list.style.setProperty('--article-width', w);
    };

    // Circle Animation Functions
    function setupOrbitalPulse(canvasId) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      canvas.width = 75;
      canvas.height = 75;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = 31;
      let time = 0;
      let lastTime = 0;
      
      const orbits = [
        { radius: 6, dotCount: 4 },
        { radius: 11, dotCount: 6 },
        { radius: 16, dotCount: 8 },
        { radius: 21, dotCount: 10 },
        { radius: 26, dotCount: 12 },
        { radius: 31, dotCount: 14 }
      ];
      
      const pulseFrequency = 0.5;
      const pulseAmplitude = 1;
      
      function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        time += deltaTime * 0.001;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw center
        ctx.beginPath();
        ctx.arc(centerX, centerY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
        
        // Draw orbit circles
        orbits.forEach((orbit, orbitIndex) => {
          ctx.beginPath();
          ctx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
          ctx.lineWidth = 1;
          ctx.stroke();
          
          const normalizedRadius = orbit.radius / maxRadius;
          const pulseDelay = normalizedRadius * 1.5;
          const pulsePhase = (time * pulseFrequency - pulseDelay) % 1;
          const pulseEffect = Math.sin(pulsePhase * Math.PI) * pulseAmplitude;
          const finalPulseEffect = pulseEffect > 0 ? pulseEffect : 0;
          
          for (let i = 0; i < orbit.dotCount; i++) {
            const angle = (i / orbit.dotCount) * Math.PI * 2;
            const pulsedRadius = orbit.radius + finalPulseEffect;
            const x = centerX + Math.cos(angle) * pulsedRadius;
            const y = centerY + Math.sin(angle) * pulsedRadius;
            const dotSize = 1.2 + (finalPulseEffect / pulseAmplitude) * 0.8;
            const opacity = 0.7 + (finalPulseEffect / pulseAmplitude) * 0.3;
            
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
          }
        });
        
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }

    function setupPulseWave(canvasId) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      canvas.width = 75;
      canvas.height = 75;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      let time = 0;
      let lastTime = 0;
      
      const dotRings = [
        { radius: 6, count: 4 },
        { radius: 12, count: 6 },
        { radius: 18, count: 8 },
        { radius: 24, count: 10 },
        { radius: 30, count: 12 }
      ];

      function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        time += deltaTime * 0.001;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw center
        ctx.beginPath();
        ctx.arc(centerX, centerY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
        
        // Draw dots in concentric circles with wave effect
        dotRings.forEach((ring, ringIndex) => {
          for (let i = 0; i < ring.count; i++) {
            const angle = (i / ring.count) * Math.PI * 2;
            const radiusPulse = Math.sin(time * 2 - ringIndex * 0.4) * 1.2;
            const x = centerX + Math.cos(angle) * (ring.radius + radiusPulse);
            const y = centerY + Math.sin(angle) * (ring.radius + radiusPulse);
            const opacityWave = 0.4 + Math.sin(time * 2 - ringIndex * 0.4 + i * 0.2) * 0.6;
            
            ctx.beginPath();
            ctx.arc(x, y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacityWave})`;
            ctx.fill();
          }
        });
        
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }

    function setupConcentricRings(canvasId) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      canvas.width = 75;
      canvas.height = 75;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      let time = 0;
      let lastTime = 0;
      
      const ringCount = 5;
      const maxRadius = 31;

      function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        time += deltaTime * 0.001;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw center dot
        ctx.beginPath();
        ctx.arc(centerX, centerY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
        
        // Draw concentric rings of dots
        for (let r = 0; r < ringCount; r++) {
          const radius = ((r + 1) / ringCount) * maxRadius;
          const dotCount = 4 + r * 3;
          const phaseOffset = r % 2 === 0 ? time * 0.2 : -time * 0.2;
          const ringPhase = time + r * 0.7;
          
          for (let i = 0; i < dotCount; i++) {
            const angle = (i / dotCount) * Math.PI * 2 + phaseOffset;
            const radiusPulse = Math.sin(ringPhase) * 1.2;
            const finalRadius = radius + radiusPulse;
            const x = centerX + Math.cos(angle) * finalRadius;
            const y = centerY + Math.sin(angle) * finalRadius;
            const baseSize = 1 + r / (ringCount - 1);
            const sizePulse = Math.sin(ringPhase) * baseSize * 0.4 + baseSize;
            const opacityPulse = 0.6 + Math.sin(ringPhase) * 0.4;
            
            ctx.beginPath();
            ctx.arc(x, y, sizePulse, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacityPulse})`;
            ctx.fill();
          }
        }
        
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }

    function setupSequentialPulse(canvasId) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      canvas.width = 75;
      canvas.height = 75;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      let time = 0;
      let lastTime = 0;
      
      const radius = 27;
      const dotCount = 8;

      function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        time += deltaTime * 0.001;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw center dot
        ctx.beginPath();
        ctx.arc(centerX, centerY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
        
        // Draw reference circle (very faint)
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw dots with sequential pulsing
        for (let i = 0; i < dotCount; i++) {
          const angle = (i / dotCount) * Math.PI * 2;
          const pulsePhase = (time * 0.5 + i / dotCount) % 1;
          const pulseFactor = Math.sin(pulsePhase * Math.PI * 2);
          const size = 1 + pulseFactor * 1;
          const finalRadius = radius + pulseFactor * 2;
          const x = centerX + Math.cos(angle) * finalRadius;
          const y = centerY + Math.sin(angle) * finalRadius;
          
          // Draw connecting line to center
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + pulseFactor * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.fill();
        }
        
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }

    // Initialize animations
    setupOrbitalPulse('orbital-pulse-1');
    setupPulseWave('pulse-wave-1');
    setupConcentricRings('concentric-rings-1');
    setupSequentialPulse('sequential-pulse-1');
    setupOrbitalPulse('orbital-pulse-2');

    list.addEventListener('focus', setIndex, true);
    list.addEventListener('click', setIndex);
    list.addEventListener('pointermove', setIndex);
    window.addEventListener('resize', resync);
    resync();

    return () => {
      list.removeEventListener('focus', setIndex, true);
      list.removeEventListener('click', setIndex);
      list.removeEventListener('pointermove', setIndex);
      window.removeEventListener('resize', resync);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-12 nav-logo">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas"
                className="h-full w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-gray-300 transition-colors nav-items font-mono">About</a>
              <a href="#services" className="hover:text-gray-300 transition-colors nav-items font-mono">Services</a>
              <a href="#greenprint" className="hover:text-gray-300 transition-colors nav-items font-mono">Greenprint</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors nav-items font-mono">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu} 
                className="text-white focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-4 items-center">
                <a 
                  href="#about" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  Services
                </a>
                <a 
                  href="#greenprint" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  Greenprint
                </a>
                <a 
                  href="#contact" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Hover Disclosure Cards Section */}
      <section id="disclosure-cards" className="py-32 px-4 relative overflow-hidden" style={{
        backgroundImage: "url('/images/unsplash.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-6xl mx-auto relative text-center z-10">
          <h1 className="mb-8 text-white text-6xl md:text-8xl font-black font-mono">Multi-Strategy Innovation</h1>
          <p className="mb-16 text-gray-300 max-w-4xl mx-auto text-base font-mono">
            A multi-strategy firm delivering institutional-grade software solutions, 
            strategic investment opportunities, and comprehensive security services. 
            We leverage technology and market expertise to create value across diverse sectors.
          </p>
          
          <ul className="disclosure-cards-grid">
            <li data-active="true">
              <article>
                <div className="animation-container">
                  <canvas id="orbital-pulse-1" className="animation-canvas"></canvas>
                </div>
                <div className="text-content">
                  <h3>Special Situations</h3>
                  <p>
                    Strategic opportunities in unique market situations. 
                    Access to specialized deals and structured transactions for qualified participants.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div className="animation-container">
                  <canvas id="pulse-wave-1" className="animation-canvas"></canvas>
                </div>
                <div className="text-content">
                  <h3>Software Development</h3>
                  <p>
                    GreenPrint funding rate arbitrage, CLMM strategies, and backtesting software. 
                    Professional-grade tools for institutional and retail traders.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div className="animation-container">
                  <canvas id="concentric-rings-1" className="animation-canvas"></canvas>
                </div>
                <div className="text-content">
                  <h3>Website Security</h3>
                  <p>
                    Apollo Security protects your digital assets. 
                    Comprehensive security solutions to prevent hacks and data breaches.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div className="animation-container">
                  <canvas id="sequential-pulse-1" className="animation-canvas"></canvas>
                </div>
                <div className="text-content">
                  <h3>Education</h3>
                  <p>
                    Traditional and decentralized finance education. 
                    In-depth articles and insights published on Medium.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article>
                <div className="animation-container">
                  <canvas id="orbital-pulse-2" className="animation-canvas"></canvas>
                </div>
                <div className="text-content">
                  <h3>Strategy Backtesting</h3>
                  <p>
                    Advanced backtesting software for quantitative strategies. 
                    Test and optimize your trading algorithms with institutional-grade tools.
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm font-mono">
                © 2025 Abraxas Innovations. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4 font-mono">Connect With Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/AbraxasInnovations" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.98 1.26-5.61 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.24.27-.49.71-.74C7.19 11.73 8.87 11 11.2 9.6c3.71-2.21 4.48-2.6 4.98-2.61.11 0 .35.03.51.14.13.09.17.21.18.27-.01.06-.01.24-.02.27l-.21 1.13z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4 font-mono">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-white transition-colors font-mono"
                >
                  Terms & Conditions
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors font-mono"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for the disclosure cards */}
      <style jsx>{`
        .fluid {
          --font-size-min: 32;
          --font-level: 6;
        }

        .disclosure-cards-grid {
          display: grid;
          container-type: inline-size;
          grid-template-columns: 10fr 1fr 1fr 1fr 1fr;
          gap: 8px;
          list-style-type: none;
          justify-content: center;
          padding: 0;
          height: clamp(300px, 40dvh, 474px);
          margin: 0 auto;
          width: 600px;
          max-width: calc(100% - 4rem);
          transition: grid-template-columns 0.6s linear(0 0%, 0.1538 4.09%, 0.2926 8.29%, 0.4173 12.63%, 0.5282 17.12%, 0.6255 21.77%, 0.7099 26.61%, 0.782 31.67%, 0.8425 37%, 0.8887 42.23%, 0.9257 47.79%, 0.9543 53.78%, 0.9752 60.32%, 0.9883 67.11%, 0.9961 75%, 1 100%);
        }

        .disclosure-cards-grid li {
          background: #1a1a1a;
          position: relative;
          overflow: hidden;
          min-width: clamp(2rem, 8cqi, 80px);
          border-radius: 8px;
          border: 1px solid #333;
          cursor: pointer;
        }

        .disclosure-cards-grid li::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 25%;
          background-image: url('/images/ububbles.jpg');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.6s linear(0 0%, 0.1538 4.09%, 0.2926 8.29%, 0.4173 12.63%, 0.5282 17.12%, 0.6255 21.77%, 0.7099 26.61%, 0.782 31.67%, 0.8425 37%, 0.8887 42.23%, 0.9257 47.79%, 0.9543 53.78%, 0.9752 60.32%, 0.9883 67.11%, 0.9961 75%, 1 100%);
        }

        .disclosure-cards-grid [data-active='true']::after {
          opacity: 1;
        }

        .disclosure-cards-grid li:hover {
          border-color: #ffffff;
        }

        .disclosure-cards-grid li :is(svg, h3) {
          opacity: 0.6;
          transition: opacity 0.72s linear(0 0%, 0.1538 4.09%, 0.2926 8.29%, 0.4173 12.63%, 0.5282 17.12%, 0.6255 21.77%, 0.7099 26.61%, 0.782 31.67%, 0.8425 37%, 0.8887 42.23%, 0.9257 47.79%, 0.9543 53.78%, 0.9752 60.32%, 0.9883 67.11%, 0.9961 75%, 1 100%);
        }

        .disclosure-cards-grid li :is(a, p) {
          opacity: 0;
          transition: opacity 0.72s linear(0 0%, 0.1538 4.09%, 0.2926 8.29%, 0.4173 12.63%, 0.5282 17.12%, 0.6255 21.77%, 0.7099 26.61%, 0.782 31.67%, 0.8425 37%, 0.8887 42.23%, 0.9257 47.79%, 0.9543 53.78%, 0.9752 60.32%, 0.9883 67.11%, 0.9961 75%, 1 100%);
          width: fit-content;
        }

        .disclosure-cards-grid li img {
          filter: grayscale(1) brightness(1.5);
          scale: 1.1;
          transition-property: filter, scale;
          transition-duration: 0.72s;
          transition-timing-function: linear(0 0%, 0.1538 4.09%, 0.2926 8.29%, 0.4173 12.63%, 0.5282 17.12%, 0.6255 21.77%, 0.7099 26.61%, 0.782 31.67%, 0.8425 37%, 0.8887 42.23%, 0.9257 47.79%, 0.9543 53.78%, 0.9752 60.32%, 0.9883 67.11%, 0.9961 75%, 1 100%);
        }

        .disclosure-cards-grid [data-active='true'] :is(a, p, h3, svg) {
          opacity: 1;
        }

        .disclosure-cards-grid [data-active='true'] :is(a, p) {
          transition-delay: 0.15s;
        }

        .disclosure-cards-grid [data-active='true'] img {
          filter: grayscale(0) brightness(1);
          scale: 1;
          transition-delay: 0.15s;
        }

        .disclosure-cards-grid article {
          width: calc(var(--article-width) * 1px);
          height: 100%;
          position: absolute;
          font-family: monospace;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          overflow: hidden;
          z-index: 2;
        }

        .disclosure-cards-grid article .animation-container {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 100px;
          margin-bottom: 1rem;
        }

        .disclosure-cards-grid article .animation-canvas {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 75px;
          height: 75px;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .disclosure-cards-grid article .text-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 0.5rem;
        }

        .disclosure-cards-grid article h3 {
          position: absolute;
          top: 1rem;
          left: calc(var(--base) * 0.5);
          transform-origin: 0 50%;
          rotate: 90deg;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          font-family: monospace;
          white-space: nowrap;
          margin: 0;
          color: #ffffff;
        }

        .disclosure-cards-grid article svg {
          width: 18px;
          fill: none;
          display: none;
        }

        .disclosure-cards-grid article p {
          font-size: 12px;
          text-wrap: balance;
          line-height: 1.25;
          --opacity: 0.8;
          margin: 0;
          color: #e5e7eb;
        }

        .disclosure-cards-grid article a {
          position: static;
          height: auto;
          line-height: 1;
          color: inherit;
          margin-top: 1rem;
        }

        .disclosure-cards-grid article a:is(:focus-visible, :hover) {
          outline: none;
        }

        .disclosure-cards-grid article a:is(:focus-visible, :hover) span {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .disclosure-cards-grid article a span {
          display: inline-block;
          line-height: 18px;
          translate: 0;
          font-weight: 500;
          color: #ffffff;
        }

        .disclosure-cards-grid article img {
          position: absolute;
          pointer-events: none;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          mask: radial-gradient(100% 100% at 100% 0, #fff, #0000);
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
        }

        /* Fallback for when images fail to load */
        .disclosure-cards-grid article img:not([src]), 
        .disclosure-cards-grid article img[src=""],
        .disclosure-cards-grid article img[src*="error"] {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .disclosure-cards-grid {
            grid-template-columns: 1fr;
            height: auto;
            width: 100%;
            max-width: 100%;
            gap: 1rem;
          }

          .disclosure-cards-grid li {
            height: 300px;
            min-width: auto;
          }

          .disclosure-cards-grid article {
            position: relative;
            width: 100%;
            padding: 1rem;
            height: 100%;
          }

          .disclosure-cards-grid article .animation-container {
            min-height: 50%;
            margin-bottom: 1rem;
          }

          .disclosure-cards-grid article .text-content {
            min-height: 50%;
          }

          .disclosure-cards-grid article h3 {
            position: static;
            rotate: 0deg;
            transform: none;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .disclosure-cards-grid li :is(svg, h3, a, p) {
            opacity: 1;
            position: relative;
            z-index: 1;
          }

          .disclosure-cards-grid li :is(a, p) {
            transition-delay: 0s;
          }
        }

        /* Fluid typography */
        .fluid {
          --fluid-min: calc(
            var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0))
          );
          --fluid-max: calc(
            var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0))
          );
          --fluid-preferred: calc(
            (var(--fluid-max) - var(--fluid-min)) /
              (var(--font-width-max) - var(--font-width-min))
          );
          --fluid-type: clamp(
            (var(--fluid-min) / 16) * 1rem,
            ((var(--fluid-min) / 16) * 1rem) -
              (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
              (var(--fluid-preferred) * var(--variable-unit, 100vi)),
            (var(--fluid-max) / 16) * 1rem
          );
          font-size: var(--fluid-type);
        }

        :root {
          --font-size-min: 32;
          --font-size-max: 40;
          --font-ratio-min: 1.2;
          --font-ratio-max: 1.33;
          --font-width-min: 375;
          --font-width-max: 1500;
          --base: clamp(2rem, 8cqi, 80px);
        }
      `}</style>
    </div>
  );
} 