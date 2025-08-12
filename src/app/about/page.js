'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Menu, X, MapPin, Building, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
    
    // Set up Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      });
    }, observerOptions);

    const missionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (missionRef.current) {
      missionObserver.observe(missionRef.current);
    }
    
    let isMounted = true;
    
    // Load Leaflet CSS and JS for free OpenStreetMap
    const loadLeaflet = async () => {
      try {
        // Load Leaflet CSS
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
          link.crossOrigin = '';
          document.head.appendChild(link);
        }

        // Load Leaflet JS
        if (!window.L) {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
          script.crossOrigin = '';
          script.onload = () => {
            if (isMounted) {
              setTimeout(() => {
                initMap();
              }, 200);
            }
          };
          script.onerror = () => {
            console.error('Failed to load Leaflet');
          };
          document.head.appendChild(script);
        } else {
          if (isMounted) {
            setTimeout(() => {
              initMap();
            }, 200);
          }
        }
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    };

    // Wait for component to mount and DOM to be ready
    const timer = setTimeout(() => {
      if (isMounted) {
        loadLeaflet();
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      
      // Cleanup observers
      heroObserver.disconnect();
      missionObserver.disconnect();
      
      // Cleanup map instance
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        } catch (error) {
          console.log('Map cleanup error:', error);
        }
      }
    };
  }, []);

  const initMap = () => {
    try {
      // Check if map container exists
      const mapContainer = document.getElementById('map');
      if (!mapContainer) {
        console.error('Map container not found');
        return;
      }

      // Check if Leaflet is loaded
      if (!window.L) {
        console.error('Leaflet not loaded');
        return;
      }

      // Check if map is already initialized
      if (mapInstanceRef.current) {
        console.log('Map already initialized');
        return;
      }

      // Clear container and add a fresh div
      mapContainer.innerHTML = '';
      const mapDiv = document.createElement('div');
      mapDiv.style.width = '100%';
      mapDiv.style.height = '320px';
      mapContainer.appendChild(mapDiv);

      // Dayton, OH coordinates
      const daytonLocation = [39.7589, -84.1916];
      
      // Create map
      const map = window.L.map(mapDiv, {
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true
      }).setView(daytonLocation, 15);

      // Store map instance
      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 10
      }).addTo(map);

      // Force map to refresh
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 300);

      // Add custom marker
      const customIcon = window.L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background: #10b981;
            border: 3px solid #ffffff;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            <div style="
              background: #ffffff;
              width: 12px;
              height: 12px;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });

      // Add marker to map
      window.L.marker(daytonLocation, { icon: customIcon })
        .addTo(map)
        .bindPopup('<strong>Abraxas Innovations</strong><br>Dayton, Ohio')
        .openPopup();

      setMapLoaded(true);

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-12 nav-logo">
              <Link href="/">
                <img 
                  src="/images/abaraxaslogo.jpeg"
                  alt="Abraxas"
                  className="h-full w-auto cursor-pointer"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="hover:text-gray-300 transition-colors nav-items font-mono">About</a>
              <a href="/#greenprint" className="hover:text-gray-300 transition-colors nav-items font-mono">Greenprint</a>
              <a href="/contact" className="hover:text-gray-300 transition-colors nav-items font-mono">Contact</a>
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
                  href="/about" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  About
                </a>
                <a 
                  href="/#greenprint" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  Greenprint
                </a>
                <a 
                  href="/contact" 
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

      {/* Hero Section */}
      <section ref={heroRef} className={`pt-32 pb-0 px-6 relative overflow-hidden transition-all duration-1000 ease-out min-h-screen ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Collage Grid Background */}
        <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 opacity-40">
          <div className="col-span-2 row-span-1">
            <img src="/images/showcase1.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2">
            <img src="/images/abxcoins.PNG" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxposter.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2">
            <img src="/images/abxstreet.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxpromoreal.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxbillboard.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/showcase2.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2">
            <img src="/images/abxcoins.PNG" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-1">
            <img src="/images/abxposter.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2">
            <img src="/images/showcase1.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxstreet.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxpromoreal.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxbillboard.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/showcase2.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxcoins.PNG" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxposter.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/showcase1.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxstreet.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxpromoreal.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxbillboard.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/showcase2.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxcoins.PNG" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxposter.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/showcase1.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxstreet.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxpromoreal.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/images/abxbillboard.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-5xl px-6">
          {/* About Logo */}
          <div className="w-full max-w-4xl mx-auto">
            <img 
              src="/images/aboutlogo.png" 
              alt="Abraxas Innovations" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Combined Mission and Operations Section */}
      <section ref={missionRef} id="mission-section" className={`py-20 px-6 relative scroll-smooth transition-all duration-1000 ease-out ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
        backgroundImage: "url('/images/aboutheader.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Mission Section */}
          <div className="text-center mb-16">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-3xl mx-auto">
              <div className="mb-6">
                <img 
                  src="/images/abaraxaslogowords.png" 
                  alt="Abraxas Innovations" 
                  className="h-12 w-auto mx-auto"
                />
              </div>
              <p className="text-lg text-white mb-6 leading-relaxed">
                We leverage deep industry expertise across finance, technology, and strategic consulting 
                to deliver world-class solutions that drive exceptional results for institutions and individuals.
              </p>
              <p className="text-base text-gray-300 mb-8">
                Our integrated approach combines cutting-edge technology with proven financial strategies, 
                enabling clients to navigate complex markets and achieve sustainable growth in an evolving global landscape.
              </p>
            </div>
          </div>

          {/* Global Operations and Dayton Combined */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Global Operations */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 mr-3 rainbow-glow" />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Phonic, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif', letterSpacing: '-1px' }}>Global Operations</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 rainbow-glow" />
                  <span className="text-gray-300 text-sm">St. Petersburg, Florida</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 rainbow-glow" />
                  <span className="text-gray-300 text-sm">Dayton, Ohio, USA</span>
                </div>
              </div>
            </div>

            {/* Dayton Operations */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Phonic, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif', letterSpacing: '-1px' }}>Dayton Operations</h3>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                Our Dayton facility serves as a strategic hub for North American operations, 
                connecting with emerging markets and unexplored opportunities across the region.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 rainbow-glow" />
                  <span className="text-gray-300 text-sm">Dayton, Ohio, United States</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 rainbow-glow" />
                  <span className="text-gray-300 text-sm">North American Operations Hub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dayton Map Section */}
          <div className="mt-12">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Phonic, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif', letterSpacing: '-1px' }}>Strategic Location</h3>
              <p className="text-base text-gray-300 max-w-2xl mx-auto">
                Located in the heart of Dayton, Ohio, our facility provides strategic access to 
                emerging technology corridors and unexplored addressable markets across the United States.
              </p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden max-w-3xl mx-auto">
              <div id="map" className="w-full h-64">
                {/* Fallback content when map is not available */}
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-white font-mono mb-2">Dayton, Ohio</h3>
                    <p className="text-gray-400 font-mono text-xs">
                      {mapLoaded ? 'Map loaded successfully!' : 'Loading free OpenStreetMap...'}
                    </p>
                  </div>
                </div>
              </div>
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
              <p className="text-gray-400 text-sm font-mono">
                © 2025 Abraxas Innovations. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4 font-mono">Connect With Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://twitter.com/abxinnovations" 
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
                  href="https://t.me/greenprintfundingbot" 
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
                  href="https://medium.com/@derekpethel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Medium"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4 font-mono">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/legal" 
                  className="text-gray-400 hover:text-white transition-colors font-mono"
                >
                  Legal Disclaimers
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
      <style jsx>{`
        #map {
          width: 100%;
          height: 320px;
          z-index: 1;
          position: relative;
        }
        
        #map > div {
          width: 100% !important;
          height: 320px !important;
        }
        
        .custom-marker {
          background: transparent;
          border: none;
        }
        
        /* Ensure Leaflet map tiles load properly */
        .leaflet-container {
          background: #e5e7eb;
          width: 100% !important;
          height: 320px !important;
        }
        
        .leaflet-popup-content-wrapper {
          background: #1f2937;
          color: white;
          border-radius: 8px;
        }
        
        .leaflet-popup-tip {
          background: #1f2937;
        }
        
        .leaflet-popup-content {
          margin: 8px 12px;
          font-family: monospace;
        }
        
        /* Fix for map tiles not loading */
        .leaflet-tile {
          opacity: 1 !important;
        }

        /* Rainbow Glow Effect */
        .rainbow-glow {
          animation: rainbow-glow 3s ease-in-out infinite;
          filter: drop-shadow(0 0 10px currentColor);
        }

        @keyframes rainbow-glow {
          0% {
            color: #ff0000;
            filter: drop-shadow(0 0 10px #ff0000);
          }
          16.66% {
            color: #ff8000;
            filter: drop-shadow(0 0 10px #ff8000);
          }
          33.33% {
            color: #ffff00;
            filter: drop-shadow(0 0 10px #ffff00);
          }
          50% {
            color: #00ff00;
            filter: drop-shadow(0 0 10px #00ff00);
          }
          66.66% {
            color: #0080ff;
            filter: drop-shadow(0 0 10px #0080ff);
          }
          83.33% {
            color: #8000ff;
            filter: drop-shadow(0 0 10px #8000ff);
          }
          100% {
            color: #ff0000;
            filter: drop-shadow(0 0 10px #ff0000);
          }
        }
      `}</style>
    </div>
  );
} 