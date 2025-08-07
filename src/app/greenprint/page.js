'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';

export default function GreenprintHome() {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Add state for user segmentation modal
  const [showSegmentationModal, setShowSegmentationModal] = useState(true);
  
  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close menu when clicking a navigation link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Choose beginner path
  const chooseBeginner = () => {
    setShowSegmentationModal(false);
    // We're already on the beginner page, so just close the modal
  };

  // Navigate to experienced user page
  const goToExperiencedPage = () => {
    // Redirect to the experienced user page
    window.location.href = '/greenprint/experienced';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* User Segmentation Modal */}
      {showSegmentationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
          <div className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Who are you?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Let us tailor your GreenPrint experience based on your trading background.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                {/* Beginner Path Button */}
                <div 
                  onClick={chooseBeginner}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-500/30 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">New to this</h3>
                  <p className="text-gray-600 mb-6">
                    I like the idea and want to learn more about automated trading strategies.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-green-600 font-medium">
                      Get started
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                    </span>
                    </div>
                  </div>
                  
                {/* Experienced Path Button */}
                <div 
                  onClick={goToExperiencedPage}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-500/30 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Been around the block</h3>
                  <p className="text-gray-600 mb-6">
                    I've traded before and am familiar with concepts like funding rate arbitrage and CLMMs.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-blue-600 font-medium">
                      View professional tools
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                    </span>
                            </div>
                      </div>
                    </div>
                    
              <div className="mt-8 text-center text-gray-500 text-sm">
                You can always change your preference later in settings
                        </div>
            </div>
          </div>
        </div>
      )}

      {/* Tech Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('/images/tech-pattern.png')] opacity-5 pointer-events-none"></div>
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/whitegplogo.PNG"
              alt="Greenprint Logo"
              width={240}
              height={72}
              className="h-12 w-auto"
              priority
              quality={100}
              style={{
                objectFit: 'contain',
                maxWidth: 'none'
              }}
            />
          </Link>
          
          {/* Traditional Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/greenprint" className="text-white hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/greenprint/docs" className="text-white hover:text-green-400 transition-colors">
              Documentation
            </Link>
            <Link href="#pricing" className="text-white hover:text-green-400 transition-colors">
              Pricing
            </Link>
            <Link href="#features" className="text-white hover:text-green-400 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-white hover:text-green-400 transition-colors">
              Testimonials
            </Link>
            <Link 
              href="/greenprint/docs"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 bg-black/90 backdrop-blur-sm border-b border-gray-800">
          <div className="flex flex-col space-y-4 items-center">
            <Link 
              href="/greenprint" 
              className="text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-center py-2"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link 
              href="/greenprint/docs" 
              className="text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-center py-2"
              onClick={handleNavClick}
            >
              Documentation
            </Link>
            <Link 
              href="#pricing" 
              className="text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-center py-2"
              onClick={handleNavClick}
            >
              Pricing
            </Link>
            <Link 
              href="#features" 
              className="text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-center py-2"
              onClick={handleNavClick}
            >
              Features
            </Link>
            <Link 
              href="#testimonials" 
              className="text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-center py-2"
              onClick={handleNavClick}
            >
              Testimonials
            </Link>
            <Link 
              href="/greenprint/docs"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 w-3/4"
              onClick={handleNavClick}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section with Grid Background */}
      <div className="relative min-h-screen pt-16 bg-white overflow-hidden">
        {/* Custom Grid Background */}
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ bottom: '80px' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-transparent to-transparent"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-green-500/30 text-green-700 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Consistent Profits in Any Market</span>
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-green-600">
                    Automated Crypto
                  </span>
                  <br />
                  <span className="text-gray-900">Trading That Actually Works</span>
                </h1>
                
                <p className="text-xl text-gray-700 max-w-xl">
                  GreenPrint's advanced funding rate arbitrage bot generates consistent returns regardless of market conditions. No directional risk, just reliable profits.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/greenprint/docs"
                    className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Start Trading Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/greenprint/docs"
                    className="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-300"
                  >
                    See How It Works
                  </Link>
                </div>
                
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <Image 
                          src={`/images/avatar-${i}.jpg`} 
                          alt={`User ${i}`} 
                          width={40} 
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Trusted by 2,500+ traders</p>
                  </div>
                </div>
              </div>
              
              <div className="relative w-full">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden w-full max-w-full mx-auto">
                  <Image
                    src="/images/gpfront.png"
                    alt="GreenPrint Bot on Mobile Devices"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profit Cards Carousel - Moved up even higher */}
      <section className="py-4 -mt-80 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {/* First set of cards */}
              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Michael Chen</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$1,234</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Sarah Johnson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$2,567</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">David Rodriguez</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$3,789</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/uk.png" 
                      alt="UK Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">James Wilson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$2,345</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Emily Thompson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$4,123</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              {/* Duplicate set of cards for seamless loop */}
              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Robert Martinez</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$1,567</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Jennifer Lee</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$2,890</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/jp.png" 
                      alt="Japan Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Yuki Tanaka</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$3,456</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Thomas Anderson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$4,567</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-white shadow-md rounded-lg border border-transparent p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src="/images/flags/br.png" 
                      alt="Brazil Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">Rafael Silva</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">+$5,678</span>
                  <span className="text-gray-500 text-xs">Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GreenPrint Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="text-green-600">
                  What is GreenPrint?
                </span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  GreenPrint is a suite of market-exploiting products, for retail and professionals alike. 
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Unlike traditional trading strategies that rely on market direction, GreenPrint's unique approach focuses on capturing the spread between funding rates, creating a reliable income stream that's independent of price movements. This market-neutral strategy has proven effective across various market cycles.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our platform combines cutting-edge technology with robust risk management systems, ensuring your trading activities are both profitable and secure. With real-time monitoring, automated position management, and comprehensive performance analytics, GreenPrint provides a complete solution for automated crypto trading.
                </p>
              </div>
            </div>
            <div className="relative mt-12">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/images/whatisgp.png"
                  alt="What is GreenPrint"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Counter Flipper Animation */}
      <section className="py-32 px-4 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative text-center">
          <h2 className="text-3xl font-bold mb-16 text-green-600">
            Funding Payments Paid Out Daily
          </h2>
          
          <div className="money-counter-container">
            <h1 className="letter">$124560342</h1>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-green-600">
              Trusted by Professional Traders
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Join thousands of traders who have transformed their trading with GreenPrint
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "👥", value: "2,500+", label: "Active Traders" },
              { icon: "📈", value: "$12.4M+", label: "Total Profits Generated" },
              { icon: "🛡️", value: "99.9%", label: "Uptime Reliability" }
            ].map((stat, i) => (
              <div key={i} className="bg-white shadow-md p-8 rounded-xl border border-gray-200 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold mb-2 text-gray-800">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50 to-transparent"></div>
            <div className="relative bg-white shadow-lg p-8 rounded-xl border border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-200">
                    <Image
                      src="/images/trustedtrader.jpeg"
                      alt="Professional Trader"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-green-600 font-medium">Verified Trader</span>
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-6">
                    "Believe me when I say that I knew nothing about funding rates, I mean it. I STILL couldn't even explain it to you that well. The GreenPrint is a bot that does EVERYTHING for you. I splurged a little bit with my earnings, but I'm just glad I can park my money somewhere safe because all I hear is how the stock market goes down every other day. I'm riding this until retirement!"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">Jada C.</p>
                      <p className="text-gray-600">First Time User</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-bold">+$124,500</p>
                      <p className="text-sm text-gray-600">Total Profit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Bot Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-green-600">
                The GreenPrint Funding Bot
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Our advanced funding rate arbitrage bot automatically identifies and exploits funding rate differentials across major cryptocurrency exchanges, generating consistent returns regardless of market direction.
              </p>
              <ul className="space-y-4">
                {[
                  'Automated 24/7 operation',
                  'Multi-exchange support',
                  'Advanced risk management',
                  'Real-time monitoring',
                  'Detailed performance analytics'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link 
                  href="/greenprint/docs"
                  className="text-green-600 hover:text-green-700 flex items-center gap-2 font-medium"
                >
                  Learn more about how it works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/images/interface.png"
                  alt="GreenPrint Bot Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-600">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white shadow-md p-8 rounded-xl border border-gray-200 hover:border-green-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Basic</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">$99</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Basic funding rate arbitrage</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to $10,000 capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
              <Link 
                href="/greenprint/docs"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white shadow-lg p-8 rounded-xl border border-green-500/50 relative mt-4">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Pro</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">$199</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced funding rate arbitrage</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Up to $50,000 capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
              </ul>
              <Link 
                href="/greenprint/docs"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white shadow-md p-8 rounded-xl border border-gray-200 hover:border-green-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">$2,500</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unlimited funding rate arbitrage</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unlimited capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">API access</span>
                </li>
              </ul>
              <Link 
                href="/greenprint/docs"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 relative bg-white">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/greenprint/docs" className="text-gray-600 hover:text-green-600">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/greenprint/docs" className="text-gray-600 hover:text-green-600">Documentation</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <p className="text-gray-600">&copy; 2025 GreenPrint. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.042-.133-2.052-.382-3.016z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 