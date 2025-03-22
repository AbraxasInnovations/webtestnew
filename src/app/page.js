'use client';
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Globe, Cpu, Lightbulb } from 'lucide-react';
import PipelineBackground from './PipelineBackground';
import Link from 'next/link';
import GreenprintBackground from './GreenprintBackground';
import Script from 'next/script';
import CircularZoomBackground from './CircularZoomBackground';
import ParticleWaveBackground from './ParticleWaveBackground';

export default function Home() {
  // References for animations
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const greenprintRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // We'll use this to initialize animations after the page loads
    const initAnimations = () => {
      // Make sure GSAP and ScrollMagic are loaded
      if (typeof window !== 'undefined' && window.gsap && window.ScrollMagic) {
        const gsap = window.gsap;
        
        // Initial animations (like the AirPods example)
        gsap.from('.hero-title', {opacity: 0, duration: 1.5, delay: 0.5, y: 50});
        gsap.from('.hero-description', {opacity: 0, duration: 1.5, delay: 0.8, y: 50});
        gsap.from('.nav-logo', {opacity: 0, duration: 1.5, delay: 1, y: 25});
        gsap.from('.nav-items', {opacity: 0, duration: 1.5, delay: 1.2, y: 25, stagger: 0.2});
        gsap.from('.scroll-indicator', {opacity: 0, duration: 1.5, delay: 1.5, y: 30});
        
        // ScrollMagic Controller
        const controller = new ScrollMagic.Controller();
        
        // About Section Animation
        const aboutTimeline = gsap.timeline();
        aboutTimeline.from('.about-content', {opacity: 0, y: 50, duration: 1});
        aboutTimeline.from('.about-vision', {opacity: 0, y: 50, duration: 1}, "-=0.5");
        
        // Add trigger for the about section animations
        new ScrollMagic.Scene({
          triggerElement: "#about",
          triggerHook: 0.9,
          reverse: false
        })
        .setTween(aboutTimeline)
        .addTo(controller);
        
        // Services Section Animation
        const servicesTimeline = gsap.timeline();
        servicesTimeline.from('.services-title', {opacity: 0, y: 30, duration: 1});
        servicesTimeline.from('.service-card', {opacity: 0, y: 50, duration: 1, stagger: 0.3}, "-=0.5");
        
        // Add trigger for animations in services section
        new ScrollMagic.Scene({
          triggerElement: "#services",
          triggerHook: 0.9,
          reverse: false
        })
        .on('enter', function() {
          // Activate animated cards with a staggered delay
          const cards = document.querySelectorAll('.animated-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('active');
            }, 400 * index);
          });
        })
        .setTween(servicesTimeline)
        .addTo(controller);
        
        // Greenprint Section Animation
        const greenprintTimeline = gsap.timeline();
        greenprintTimeline.from('.greenprint-title', {opacity: 0, y: 30, duration: 1});
        greenprintTimeline.from('.greenprint-content', {opacity: 0, y: 50, duration: 1}, "-=0.5");
        greenprintTimeline.from('.product-card', {opacity: 0, y: 30, duration: 1, stagger: 0.3}, "-=0.5");
        greenprintTimeline.from('.greenprint-benefits', {opacity: 0, x: 50, duration: 1}, "-=1");
        
        new ScrollMagic.Scene({
          triggerElement: "#greenprint",
          triggerHook: 0.7,
          reverse: false
        })
        .setTween(greenprintTimeline)
        .addTo(controller);
        
        // Contact Section Animation
        const contactTimeline = gsap.timeline();
        contactTimeline.from('.contact-title', {opacity: 0, y: 30, duration: 1});
        contactTimeline.from('.contact-form', {opacity: 0, y: 50, duration: 1}, "-=0.5");
        
        new ScrollMagic.Scene({
          triggerElement: "#contact",
          triggerHook: 0.8,
          reverse: false
        })
        .setTween(contactTimeline)
        .addTo(controller);
      }
    };

    // Initialize animations
    if (document.readyState === 'complete') {
      initAnimations();
    } else {
      window.addEventListener('load', initAnimations);
      return () => window.removeEventListener('load', initAnimations);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Scripts for GSAP and ScrollMagic */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" strategy="beforeInteractive" />

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
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-gray-300 transition-colors nav-items">About</a>
              <a href="#services" className="hover:text-gray-300 transition-colors nav-items">Services</a>
              <a href="#greenprint" className="hover:text-gray-300 transition-colors nav-items">Greenprint</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors nav-items">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with updated class names for animations */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" ref={homeRef}>
        <CircularZoomBackground />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-title">
            <span className="text-white">Innovating</span> <span className="silver-text">Decentralized Finance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 hero-description">
            Pushing boundaries. Breaking limits. Creating tomorrow.
          </p>
          <a href="#about" className="inline-flex items-center scroll-indicator">
            <ChevronDown className="animate-bounce w-12 h-12" />
          </a>
        </div>
      </section>

      {/* About Section - add classes for animations */}
      <section id="about" className="py-20" ref={aboutRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center about-title">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-content">
              <p className="text-lg text-gray-300 leading-relaxed">
                At Abraxas Innovations, we're dedicated to leveling the playing field in a nebulous space, and providing value to our clients. 
                Our team of experts works tirelessly to develop cutting-edge solutions that transform 
                the fabric of DeFi.
              </p>
              <button className="mt-8 flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <span>Learn more about our mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="sparkle-card rounded-lg p-0.5 about-vision">
              <div className="bg-gray-900 rounded-lg p-8 h-full w-full">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be at the forefront of technological advancement, creating solutions 
                  that define the future of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - add classes for animations */}
      <section id="services" className="py-20 relative overflow-hidden bg-gray-900" ref={servicesRef}>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center services-title">
            Our Services
          </h2>
          <p className="text-center mb-12 text-gray-300">
            Pushing boundaries. Breaking limits. Creating tomorrow.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-gray-300" />,
                title: "Global Solutions",
                description: "Delivering solutions across borders and industries."
              },
              {
                icon: <Cpu className="w-12 h-12 text-gray-300" />,
                title: "Non Custodial AM",
                description: "Offering a revolutionary alternative to traditional custody-based asset management.",
                link: "/asset-management"
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-gray-300" />,
                title: "Innovative Software",
                description: "Developing institutional-grade financial software."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="sparkle-card rounded-lg p-0.5 service-card animated-card cursor-pointer"
                onClick={() => {
                  if (service.link) {
                    window.location.href = service.link;
                  }
                }}
              >
                <div className="card-borders">
                  <div className="border-top"></div>
                  <div className="border-right"></div>
                  <div className="border-bottom"></div>
                  <div className="border-left"></div>
                </div>
                <div className="bg-gray-900 rounded-lg p-8 h-full w-full flex flex-col items-center text-center card-content">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greenprint Section - add classes for animations */}
      <section id="greenprint" className="py-20 relative" ref={greenprintRef}>
        <ParticleWaveBackground />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center greenprint-title">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Green</span>print
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="greenprint-content">
              <h3 className="text-2xl font-bold mb-4">Institutional-Grade Trading Tools for Retail Traders</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Access powerful algorithmic trading solutions that work while you sleep. Our suite of tools helps you capitalize on market inefficiencies in the crypto space with institutional-level infrastructure.
              </p>
              <div className="space-y-4">
                <div className="greenprint-product-card bg-gray-800/50 p-6 rounded-lg product-card">
                  <h4 className="text-xl font-bold mb-2 text-emerald-300">Greenprint Funding Bot</h4>
                  <p className="text-gray-300 mb-4">
                    Automatically capture funding rate opportunities across exchanges. Ready for deployment.
                  </p>
                  <a 
                    href="https://t.me/AbraxasInnovations" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-gradient-to-r from-emerald-800 to-cyan-800 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Download Now - $50
                  </a>
                </div>
                <div className="greenprint-product-card bg-gray-800/50 p-6 rounded-lg opacity-75 product-card">
                  <h4 className="text-xl font-bold mb-2 text-emerald-300">Greenprint CLMM Bot</h4>
                  <p className="text-gray-300">Coming soon - Advanced concentrated liquidity management for maximum yields.</p>
                </div>
                <div className="greenprint-product-card bg-gray-800/50 p-6 rounded-lg opacity-75 product-card">
                  <h4 className="text-xl font-bold mb-2 text-emerald-300">Greenprint Data Analysis Tool</h4>
                  <p className="text-gray-300">Coming soon - Deep market analysis and opportunity detection.</p>
                </div>
              </div>
            </div>
            <div className="relative greenprint-benefits">
              <div className="bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-lg p-1 greenprint-card">
                <div className="bg-gray-900 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Greenprint?</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      Automated 24/7 trading strategies
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      Institutional-grade technology
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      Market inefficiency exploitation
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      Set-and-forget automation
                    </li>
                  </ul>
                  <Link 
                    href="/greenprint" 
                    className="mt-8 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Learn more about Greenprint
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - add classes for animations */}
      <section id="contact" className="py-20" ref={contactRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center contact-title">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-8 contact-form">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                © 2025 Abraxas Innovations. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4">Connect With Us</h3>
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.98 1.26-5.61 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.24.27-.49.71-.74C7.19 11.73 8.87 11 11.2 9.6c3.71-2.21 4.48-2.6 4.98-2.61.11 0 .35.03.51.14.13.09.17.21.18.27-.01.06-.01.24-.02.27l-.21 1.13z"/>
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
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
