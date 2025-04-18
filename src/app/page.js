'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, Globe, Cpu, Lightbulb, Menu, X, Building, Wallet } from 'lucide-react';
import PipelineBackground from './PipelineBackground';
import Link from 'next/link';
import Image from 'next/image';
import GreenprintBackground from './GreenprintBackground';
import Script from 'next/script';
import CircularZoomBackground from './CircularZoomBackground';
import ParticleWaveBackground from './ParticleWaveBackground';

export default function Home() {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Add state for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  // References for animations
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const greenprintRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close menu when clicking a navigation link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Sending your message...'
    });
    
    try {
      // Prepare the form data
      const formToSend = new FormData();
      formToSend.append('name', formData.name);
      formToSend.append('email', formData.email);
      formToSend.append('message', formData.message);
      formToSend.append('_recipient', 'derekp@abxinnovate.com');
      
      // Send the form using formsubmit.co service
      const response = await fetch('https://formsubmit.co/derekp@abxinnovate.com', {
        method: 'POST',
        body: formToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Form submitted successfully
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent.'
        });
        
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error sending your message. Please try again later.'
      });
    }
  };

  useEffect(() => {
    // Add smooth scrolling class to HTML element
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
  
        // Hero Section Animation - updated to animate title as one unit and faster timing
        const heroTimeline = window.gsap.timeline();
        heroTimeline.from('.hero-title', {opacity: 0, y: 30, duration: 0.7, delay: 0.2});
        heroTimeline.from('.hero-description', {opacity: 0, y: 30, duration: 0.7}, "-=0.4");
        heroTimeline.from('.nav-logo', {opacity: 0, duration: 0.7, y: 25}, "-=0.5");
        heroTimeline.from('.nav-items', {opacity: 0, duration: 0.7, y: 25, stagger: 0.1}, "-=0.6");
  
        // About Section Animation - simplified
        const aboutTimeline = window.gsap.timeline();
        aboutTimeline.from('#about .bubble-container', {opacity: 0.5, scale: 0.95, duration: 1});
        aboutTimeline.from('.about-title', {opacity: 0, y: 30, duration: 0.8}, "-=0.5");
        aboutTimeline.from('.about-content p', {
          opacity: 0, 
          y: 30, 
          duration: 0.8, 
          stagger: 0.2
        }, "-=0.5");
        aboutTimeline.from('.about-content button', {opacity: 0, y: 20, duration: 0.6}, "-=0.3");
        
        // Set the vision-image-container to already be visible before animation
        const visionContainers = document.querySelectorAll('.vision-image-container');
        visionContainers.forEach(container => {
          container.style.opacity = "1";
          container.style.visibility = "visible";
          container.style.transform = "none";
        });
        
        // Only animate subtle properties of the vision image container 
        aboutTimeline.from('.vision-image-container', {
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          scale: 0.98,
          duration: 1.2,
          ease: "power3.out",
        }, "-=0.8");
        
        aboutTimeline.from('#about .bubble-glow', {
          opacity: 0, 
          scale: 0.5, 
          stagger: 0.3, 
          duration: 1.5,
          ease: "power2.out"
        }, "-=1.2");
  
        new window.ScrollMagic.Scene({
          triggerElement: "#about",
          triggerHook: 0.8,
          reverse: false
        })
        .setTween(aboutTimeline)
        .addTo(controller);

        // Enhanced Testimonials Section Animation with pin and scroll control
        const testimonialsTween = window.gsap.timeline();
        
        // Create a scene for testimonials section animation without pinning
        new window.ScrollMagic.Scene({
          triggerElement: "#testimonials",
          triggerHook: 0.2,      // Start when 20% of the element is visible
          reverse: true
        })
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
          // Hide elements when scrolling away
          document.querySelector('.testimonials-title').classList.remove('visible');
          document.querySelector('.testimonials-description').classList.remove('visible');
          document.querySelectorAll('#testimonials .testimonial-card').forEach(card => {
            card.classList.remove('visible');
          });
          document.querySelector('.testimonial-cta').classList.remove('visible');
        })
        .addTo(controller);
  
        // Services Section Animation
        new window.ScrollMagic.Scene({
          triggerElement: "#services",
          triggerHook: 0.2,      // Start when 20% of the element is visible
          duration: '100%'     // Duration for animations
        })
        .setClassToggle('#services', 'is-pinned') // Add pinned class for additional styling
        .on('enter', function() {
          // Show section title and description immediately
          document.querySelector('#services .services-title').classList.add('visible');
          document.querySelector('#services .testimonials-description').classList.add('visible');
          
          // Creative 3D animation for service cards
          const cards = document.querySelectorAll('#services .testimonial-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              // Apply a creative 3D entrance animation
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) rotateX(0deg)';
              
              // Add a subtle bounce effect
              setTimeout(() => {
                card.style.transform = 'translateY(-15px) rotateX(-2deg)';
                setTimeout(() => {
                  card.style.transform = 'translateY(0) rotateX(0deg)';
                }, 150);
              }, 600);
            }, 1000 + (index * 300)); // Longer delay between cards for more noticeable staggering
          });
        })
        .on('leave', function() {
          // Optional: reset animations when scrolling away completely
          // This is commented out to keep elements visible after animation
          /*
          document.querySelector('#services .services-title').classList.remove('visible');
          document.querySelector('#services .testimonials-description').classList.remove('visible');
          document.querySelectorAll('#services .testimonial-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(80px) rotateX(10deg)';
          });
          */
        })
        .addTo(controller);
        
        // Greenprint Section Animation
        const greenprintTimeline = window.gsap.timeline();
        greenprintTimeline.from('.greenprint-title', {opacity: 0, y: 30, duration: 1});
        greenprintTimeline.from('.greenprint-content', {opacity: 0, y: 50, duration: 1}, "-=0.5");
        greenprintTimeline.from('.product-card', {opacity: 0.5, y: 30, duration: 1, stagger: 0.3}, "-=0.5");
        greenprintTimeline.from('.greenprint-benefits', {opacity: 0, x: 50, duration: 1}, "-=1");
        
        new window.ScrollMagic.Scene({
          triggerElement: "#greenprint",
          triggerHook: 0.7,
          reverse: false
        })
        .setTween(greenprintTimeline)
        .addTo(controller);
        
        // Contact Section Animation
        const contactTimeline = window.gsap.timeline();
        contactTimeline.from('.contact-title', {opacity: 0, y: 30, duration: 1});
        contactTimeline.from('.contact-form', {opacity: 0, y: 50, duration: 1}, "-=0.5");
        
        new window.ScrollMagic.Scene({
          triggerElement: "#contact",
          triggerHook: 0.8,
          reverse: false
        })
        .setTween(contactTimeline)
        .addTo(controller);
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Scroll Progress Indicator */}
      <div id="scroll-progress" className="scroll-progress"></div>
      
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-gray-300 transition-colors nav-items">About</a>
              <a href="#services" className="hover:text-gray-300 transition-colors nav-items">Services</a>
              <a href="#greenprint" className="hover:text-gray-300 transition-colors nav-items">Greenprint</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors nav-items">Contact</a>
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
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Services
                </a>
                <a 
                  href="#greenprint" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Greenprint
                </a>
                <a 
                  href="#contact" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
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

      {/* About Vision Section - Simple and Compact */}
      <section id="about" className="pt-8 bg-black text-white relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-white">About</span>
            <span className="ml-3 text-white">Us</span>
          </h2>
          
          <div className="flex flex-col-reverse md:flex-row md:items-end" style={{ marginBottom: 0 }}>
            {/* About Content - aligned at bottom with image */}
            <div className="md:w-2/3 md:pr-8">
              <div className="md:pb-8">
                <h3 className="text-2xl font-semibold mb-3 text-white">Our Vision</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-3">
                  At Abraxas Innovations, we're pioneering the future of decentralized finance by creating sophisticated, 
                  accessible trading solutions for both institutional and individual investors.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe in creating transparent, accessible financial tools that empower users of all experience levels.
                  By combining advanced technology with intuitive design, we're making the complex world of decentralized finance
                  more approachable and profitable for everyone.
                </p>
              </div>
            </div>
            
            {/* Vision Image - precisely aligned at bottom */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img
                src="/images/vision-test.jpeg"
                alt="Abraxas Vision"
                className="rounded-lg"
                style={{ 
                  height: '350px', 
                  width: 'auto', 
                  maxWidth: '100%',
                  objectFit: 'cover',
                  marginBottom: 0
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="fullscreen-section testimonial-section" ref={testimonialsRef} style={{ 
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

      {/* Services Section - tall cards with image top and text bottom */}
      <section id="services" className="fullscreen-section relative overflow-hidden bg-black section-transition" ref={servicesRef}>
        <div className="container mx-auto px-6 scroll-animation-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center services-title">
            Our Services
          </h2>
          <p className="text-center mb-12 text-gray-300 max-w-2xl mx-auto testimonials-description">
            Pushing boundaries. Breaking limits. Creating tomorrow.
          </p>
          <div className="grid md:grid-cols-3 gap-8 service-card-container">
            {[
              {
                image: "/images/global-solutions-icon.jpg", // Replace with your actual icon image
                title: "Consulting",
                description: "Delivering expert advice across borders and industries."
              },
              {
                image: "/images/non-custodial-icon.jpg?v=2", // Added version parameter to bust cache
                title: "Non Custodial AM",
                description: "Offering a revolutionary alternative to traditional custody-based asset management.",
                link: "/asset-management"
              },
              {
                image: "/images/innovative-software-icon.jpg", // Replace with your actual icon image
                title: "Innovative Software",
                description: "Developing institutional-grade financial software."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="tall-service-card rounded-lg overflow-hidden shadow-lg cursor-pointer h-[550px] flex flex-col testimonial-card"
                onClick={() => {
                  if (service.link) {
                    window.location.href = service.link;
                  }
                }}
                style={{ 
                  transitionDelay: `${0.3 + index * 0.3}s`,
                  opacity: 0,
                  transform: 'translateY(80px) rotateX(10deg)'
                }}
              >
                {/* Top 40% image portion */}
                <div className="service-image-container h-[45%] overflow-hidden bg-gradient-to-b from-gray-800 to-black">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Bottom 60% black portion with text */}
                <div className="bg-black p-6 flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">{service.title}</h3>
                  <p className="text-gray-300 text-center text-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator"></div>
      </section>

      {/* Greenprint Section - add classes for animations */}
      <section id="greenprint" className="py-20 relative" ref={greenprintRef}>
        <ParticleWaveBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="greenprint-logo-container">
            <h2 className="greenprint-logo">
              <span className="green-text">GREEN</span><span className="print-text">PRINT</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="greenprint-content">
              <h3 className="text-2xl font-bold mb-4">Institutional-Grade Trading Tools for Retail Traders</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Access powerful algorithmic trading solutions that work while you sleep. Our suite of tools helps you capitalize on market inefficiencies in the crypto space with institutional-level infrastructure.
              </p>
              <div className="space-y-4">
                <div className="greenprint-product-card bg-gray-800/50 p-6 rounded-lg product-card relative z-10" style={{opacity: 1}}>
                  <h4 className="text-xl font-bold mb-2 text-emerald-300">Greenprint Funding Bot</h4>
                  <p className="text-gray-300 mb-4">
                    Automatically capture funding rate opportunities across exchanges. Ready for deployment.
                  </p>
                  <a 
                    href="https://t.me/AbraxasInnovations" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-gradient-to-r from-green-800 to-emerald-700 hover:from-green-700 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Download Now - $50
                  </a>
                </div>
                <div className="greenprint-product-card bg-gray-800/50 p-6 rounded-lg product-card relative z-10" style={{opacity: 1}}>
                  <h4 className="text-xl font-bold mb-2 text-emerald-300">Greenprint CLMM Bot</h4>
                  <p className="text-gray-300">Coming soon - Advanced concentrated liquidity management for maximum yields.</p>
                </div>
                <div className="greenprint-product-card bg-gray-800/50 p-6 rounded-lg product-card relative z-10" style={{opacity: 1}}>
                  <h4 className="text-xl font-bold mb-2 text-emerald-300">Greenprint Data Analysis Tool</h4>
                  <p className="text-gray-300">Coming soon - Deep market analysis and opportunity detection.</p>
                </div>
              </div>
            </div>
            <div className="relative greenprint-benefits">
              <div className="bg-gradient-to-r from-green-500/30 to-emerald-600/30 rounded-lg p-1 greenprint-card">
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
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.error ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
                  {formStatus.message}
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={formStatus.submitted && !formStatus.error}
                  className={`w-full font-bold py-2 px-4 rounded-lg transition-colors ${
                    formStatus.submitted && !formStatus.error 
                      ? 'bg-green-700 hover:bg-green-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {formStatus.submitted && !formStatus.error ? 'Message Sent' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
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
