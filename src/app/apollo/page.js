'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function Apollo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.classList.add('smooth-scroll');
    
    // Initialize animations
    initAnimations();
    
    // Setup scroll observer for animation triggers
    setupScrollObservers();
    
    // Cleanup function
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
      
      // Clear any event listeners or animation controllers
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Function to handle scroll events for animation triggers
  const handleScroll = () => {
    if (typeof window === 'undefined') return;
    
    // Update scroll progress indicator
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
  };
  
  // Setup IntersectionObserver to trigger animations when elements enter viewport
  const setupScrollObservers = () => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;
    
    // Add scroll event listener for progress bar
    window.addEventListener('scroll', handleScroll);
    
    // Add smooth scroll class to HTML element
    document.documentElement.classList.add('smooth-scroll');
    
    // Create observer for fade-in animations
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Only unobserve elements that should animate once
            if (!entry.target.classList.contains('testimonial-card') && 
                !entry.target.classList.contains('testimonial-cta') &&
                !entry.target.classList.contains('testimonials-title') &&
                !entry.target.classList.contains('testimonials-description') &&
                !entry.target.classList.contains('scroll-indicator')) {
              animationObserver.unobserve(entry.target);
            }
          } else {
            // For testimonials section, remove the visible class when not in view
            // This creates the effect of elements re-animating when scrolling back
            if (entry.target.classList.contains('testimonial-card') || 
                entry.target.classList.contains('testimonial-cta') ||
                entry.target.classList.contains('testimonials-title') ||
                entry.target.classList.contains('testimonials-description')) {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      { 
        threshold: 0.15,  // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -10% 0px' // Trigger slightly before element enters viewport
      }
    );
    
    // Create a separate observer for scroll indicators with a higher threshold
    const scrollIndicatorObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { 
        threshold: 0.9,  // Only show when section is almost fully visible
        rootMargin: '0px 0px 0px 0px'
      }
    );
    
    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .testimonial-card, .testimonial-cta, .testimonials-title, .testimonials-description').forEach(el => {
      animationObserver.observe(el);
    });
    
    // Observe scroll indicators
    document.querySelectorAll('.scroll-indicator').forEach(el => {
      scrollIndicatorObserver.observe(el);
    });
  };

  function initAnimations() {
    if (typeof window !== 'undefined') {
      if (window.ScrollMagic && window.gsap) {
        // Create ScrollMagic controller
        const controller = new window.ScrollMagic.Controller();

        // Enhanced Testimonials Section Animation with pin and scroll control
        const testimonialsTween = window.gsap.timeline();
        
        // Create a scene that pins the testimonials section while scrolling through its animation sequence
        new window.ScrollMagic.Scene({
          triggerElement: "#testimonials",
          triggerHook: 0,      // Start at the top of the viewport
          duration: '100%'     // Reduced from 150% to create a more focused, single-screen animation
        })
        .setPin("#testimonials", {pushFollowers: true})  // Pin the section
        .setClassToggle('#testimonials', 'is-pinned') // Add pinned class for additional styling
        .on('enter', function() {
          // Immediately reveal the heading and description
          document.querySelector('.testimonials-title').classList.add('visible');
          document.querySelector('.testimonials-description').classList.add('visible');
          
          // After a brief delay, show all cards at once
          setTimeout(() => {
            const cards = document.querySelectorAll('#testimonials .testimonial-card');
            cards.forEach(card => card.classList.add('visible'));
            
            // Then show the CTA
            setTimeout(() => {
              document.querySelector('.testimonial-cta').classList.add('visible');
            }, 500);
          }, 800);
        })
        .on('leave', function() {
          // Optional: hide elements when scrolling away completely
          // This is commented out to keep elements visible after animation
          /*
          document.querySelector('.testimonials-title').classList.remove('visible');
          document.querySelector('.testimonials-description').classList.remove('visible');
          document.querySelectorAll('#testimonials .testimonial-card').forEach(card => {
            card.classList.remove('visible');
          });
          document.querySelector('.testimonial-cta').classList.remove('visible');
          */
        })
        .addTo(controller);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Scroll Progress Indicator */}
      <div id="scroll-progress" className="scroll-progress"></div>
      
      {/* Scripts for GSAP and ScrollMagic */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" strategy="beforeInteractive" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold">
              Abraxas
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/greenprint" className="hover:text-blue-400 transition-colors">
                Greenprint
              </Link>
              <Link href="/apollo" className="text-blue-400">
                Apollo
              </Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
                <Link href="/greenprint" className="hover:text-blue-400 transition-colors">
                  Greenprint
                </Link>
                <Link href="/apollo" className="text-blue-400">
                  Apollo
                </Link>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-400">Apollo</span> Security
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security consulting to protect your digital assets and infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Vulnerability Assessment</h2>
              <p className="text-gray-300 mb-6">
                Our comprehensive vulnerability assessment service identifies potential security weaknesses in your systems and infrastructure.
              </p>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Penetration Testing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Code Security Review
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Infrastructure Analysis
                </li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Security Solutions</h2>
              <p className="text-gray-300 mb-6">
                We provide custom security implementations to fortify your digital presence and protect against emerging threats.
              </p>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Security Architecture
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Threat Prevention
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Incident Response
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="fullscreen-section testimonial-section section-transition" style={{ 
        backgroundImage: "url('/images/testimonials-bg.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay for better text readability with reduced opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 scroll-animation-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center testimonials-title">
            <span className="text-white">Hear From</span>
            <span className="ml-3 text-white">Our Clients</span>
          </h2>
          <p className="text-center mb-16 text-gray-300 max-w-2xl mx-auto testimonials-description">
            We pride ourselves on delivering exceptional value and results. Here's what our clients have to say about their experience working with Abraxas Innovations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8 relative testimonial-card">
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">James Danforth</h3>
                  <p className="text-sm text-gray-400">GreenPrint Funding Bot</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                </div>
              </div>
              <p className="text-gray-300 italic relative z-10 leading-relaxed">
                "The Greenprint Funding Bot has been a game-changer for our operations. The consistent returns and hands-off approach have allowed us to focus on other aspects of our business while generating steady revenue."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8 relative testimonial-card">
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">SE</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Sarah Evans</h3>
                  <p className="text-sm text-gray-400">GreenPrint Funding Bot</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                </div>
              </div>
              <p className="text-gray-300 italic relative z-10 leading-relaxed">
                "As a retail trader, I never had access to institutional-grade tools until I found Abraxas. Their Greenprint solutions have leveled the playing field and significantly improved my trading performance."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8 relative testimonial-card">
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">MR</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Michael Rodriguez</h3>
                  <p className="text-sm text-gray-400">Consulting Services</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                </div>
              </div>
              <p className="text-gray-300 italic relative z-10 leading-relaxed">
                "Abraxas' team doesn't just deliver software—they deliver expertise. Their consultative approach and deep understanding of DeFi markets made our collaboration incredibly valuable."
              </p>
            </div>
          </div>
          
          {/* Testimonial Call-to-Action */}
          <div className="text-center mt-16 testimonial-cta">
            <p className="text-gray-300 mb-6 italic">"Join Abraxas Innovations and experience the difference."</p>
            <a href="#contact" className="inline-block bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg">
              Work With Us
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator"></div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Security Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-400">
                Comprehensive analysis of your current security posture
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-400">
                Development of custom security solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-400">
                Deployment and ongoing security monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a comprehensive security assessment
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
} 