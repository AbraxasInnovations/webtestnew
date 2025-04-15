'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';

export default function GreenprintHome() {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Add state for disclosure popup
  const [showDisclosure, setShowDisclosure] = useState(true);
  // Add state for tracking if user has scrolled to bottom
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  
  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close menu when clicking a navigation link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Close disclosure popup
  const closeDisclosure = () => {
    setShowDisclosure(false);
  };

  // Handle scroll event to check if user has reached bottom
  const handleScroll = (e) => {
    const element = e.target;
    const isAtBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 10;
    setHasScrolledToBottom(isAtBottom);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a1512] to-black text-white">
      {/* Vertical Lines for Scrolling Continuity - Removed from hero section */}
      
      {/* Disclosure Popup */}
      {showDisclosure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
          <div className="max-w-4xl w-full bg-[#faf6f0] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-6 md:p-8 flex flex-col h-[80vh]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Exclusive Trading Opportunity
                </h2>
              </div>
              
              <div className="overflow-y-auto flex-grow pr-4 custom-scrollbar" onScroll={handleScroll}>
                <div className="prose prose-lg max-w-none">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-4">
                      <span className="text-green-600 font-bold">Let me be direct</span> - I've placed the most important information right at the top. What you see above is a strategy with a 15+ Sharpe ratio, a maximum drawdown of just 2.8%, and a 256% annual return. These aren't just numbers - they're the result of years of Wall Street experience and a commitment to excellence. I didn't leave Wall Street to build something ordinary.
                    </p>
                    
                    {/* Centered Backtest Image */}
                    <div className="my-6 flex justify-center">
                      <div className="relative w-full max-w-2xl aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                        <Image
                          src="/images/equitycurve95.jpeg"
                          alt="GreenPrint Funding Bot Performance"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500">3-Year Backtest Performance</p>
                              <p className="text-2xl font-bold text-green-600">+256%</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Max Drawdown</p>
                              <p className="text-2xl font-bold text-red-500">-2.8%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-green-600">Impressive Results</h3>
                      <p className="text-lg text-gray-600 mt-2">The Power of GreenPrint</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Let me present you with the facts about today's trading landscape:
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Traditional directional trading (buy and hold) in today's market carries significant risks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>The GreenPrint bot employs arbitrage strategies, making it market-direction independent and virtually risk-free</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Our strategy's performance has exceeded that of the top 5 hedge funds combined</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    I anticipate your questions, and I appreciate your skepticism - it demonstrates intelligence. You might wonder: "How can this outperform top hedge funds?" and "If the strategy is so effective, why share it?"
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Understanding Market Inefficiencies</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The explanation is straightforward. Top hedge funds operate under strict investment guidelines and size constraints. While they employ brilliant analysts who identify the same opportunities we do, their large capital base prevents them from capitalizing on smaller, high-potential investments. This creates market inefficiencies that we can exploit. By operating with greater flexibility and targeting opportunities they cannot access, we achieve returns they can only aspire to.
                    </p>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    However, this strategy isn't without limitations. It's capacity-constrained, meaning it performs optimally up to a certain investment threshold. Beyond that, we risk the same issues that prevent hedge funds from participating: slippage and price impact.
                    </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Partnership Opportunity</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I've reached that capacity threshold - which is in the millions. This is why I'm offering the strategy to qualified investors at its fair value. The price reflects the development effort and operational costs, not the potential returns.
                    </p>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Successful trading isn't about constant activity - it's about patience and seizing the few truly exceptional opportunities that arise each year. These moments can emerge from various catalysts: major firm liquidations, market mispricings due to misinformation, or temporary market inefficiencies. These are the opportunities where substantial wealth is created.
                    </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">The GreenPrint Advantage</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      Imagine having an automated system that instantly capitalizes on these opportunities, regardless of timing. The value of such a tool far exceeds what I'm offering it for. I'm pricing it based on development costs and operational expenses - you're paying for the technology and infrastructure, not the potential returns.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Let's be realistic - traditional trading isn't suitable for everyone, and even professionals face significant losses in current market conditions. Why risk your capital for modest returns when you could deploy a strategy that both protects and grows your wealth? Our approach has demonstrated the ability to more than double investments annually while maintaining capital preservation.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Your Capital, Your Control</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      A key advantage of our strategy is its non-custodial nature. You maintain complete control of your funds and accounts at all times. Unlike traditional investment advisors who may impose high fees, lockup periods, or questionable expertise, our strategy offers transparency, proven performance, and the ultimate security: you retain full control of your capital.
                    </p>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Your interest in reading this far indicates two things: you're seeking a reliable investment strategy, and you recognize value when you see it. This technology has the potential to revolutionize trading. By being among the first to adopt it, you're positioning yourself ahead of the curve. Soon, capacity constraints will limit new participants. Let's build wealth together.
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#faf6f0] p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500 text-sm">Performance</p>
                        <p className="text-2xl font-bold text-green-600">+256%</p>
                      </div>
                      <div className="bg-[#faf6f0] p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500 text-sm">Volatility</p>
                        <p className="text-2xl font-bold text-green-600">-3.49%</p>
                      </div>
                      <div className="bg-[#faf6f0] p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500 text-sm">Max Drawdown</p>
                        <p className="text-2xl font-bold text-red-500">-2.8%</p>
                      </div>
                      <div className="bg-[#faf6f0] p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-500 text-sm">Sharpe Ratio</p>
                        <p className="text-2xl font-bold text-green-600">15.55</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-32"></div> {/* Extra space to ensure button is at bottom */}
                  
                  {/* Continue button at the bottom of the scrollable content */}
                  <div className="pt-6 border-t border-gray-200 mt-6 bg-[#faf6f0]">
                    <button 
                      onClick={closeDisclosure}
                      className={`w-full px-8 py-4 rounded-lg text-xl font-bold transition-all duration-200 transform hover:scale-105 ${
                        hasScrolledToBottom 
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700" 
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!hasScrolledToBottom}
                    >
                      {hasScrolledToBottom 
                        ? "I Understand - Continue to GreenPrint" 
                        : "Please read the entire disclosure to continue"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.7);
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-900px);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Money Counter Styles */
        .money-counter-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 2rem 0;
        }
        
        .letter {
          font-size: 7vw;
          font-family: 'Overpass', sans-serif;
          position: relative;
          display: inline-block;
          margin: 0 0.2em;
          height: 1.6em;
          user-select: none;
          line-height: 1.6em;
          box-shadow: 0 0.35em 0.1em -0.2em rgba(0, 0, 0, 0.3);
          perspective: 70vw;
          border-radius: 0.15em;
          white-space: nowrap;
          background-image: linear-gradient(0deg, #222 0%, #262626 100%);
          font-weight: 700;
        }
        
        .letter span:before {
          content: "";
          display: block;
          z-index: 99;
          position: absolute;
          top: 50%;
          width: 100%;
          background: linear-gradient(0deg, #333 10%, #1c1c1c);
          background-position: 50% 50%;
          background-size: cover;
          height: 3%;
        }
        
        .letter span {
          vertical-align: top;
          box-shadow: inset 0.035em 0 0 0 rgba(75, 75, 75, 0.4), inset -0.035em 0 0 0 rgba(0, 0, 0, 0.25);
          display: inline-block;
          width: 0.95em;
          height: 1.6;
          line-height: 1.6em;
          text-align: center;
          text-transform: uppercase;
          padding: 0;
          color: #eee;
          position: relative;
        }
        
        .letter span:first-child:after {
          border-radius: 0 0 0 0.15em;
        }
        
        .letter span:first-child {
          border-radius: 0.15em 0 0 0.15em;
        }
        
        .letter span:last-child:after {
          border-radius: 0 0 0.15em 0;
        }
        
        .letter span:last-child {
          border-radius: 0 0.15em 0.15em 0;
        }
        
        .letter span:after {
          content: "";
          transform-style: preserve-3d;
          display: block;
          position: absolute;
          width: 100%;
          transform: rotatex(70deg);
          transform-origin: 50% 0;
          height: 50%;
          top: 50%;
          left: 0;
          right: 0;
          animation: flip 0.6s ease infinite;
          box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.1);
        }
        
        .letter span:nth-child(1n):after {
          animation-delay: 0.2s;
        }
        
        .letter span:nth-child(2n):after {
          animation-delay: 0.3s;
        }
        
        .letter span:nth-child(3n):after {
          animation-delay: 0.4s;
        }
        
        .letter span:nth-child(4n):after {
          animation-delay: 0.5s;
        }
        
        .letter span:nth-child(5n):after {
          animation-delay: 0.6s;
        }
        
        .letter span:nth-child(6n):after {
          animation-delay: 0.7s;
        }
        
        .letter span:nth-child(7n):after {
          animation-delay: 0.8s;
        }
        
        .letter span:nth-child(8n):after {
          animation-delay: 0.9s;
        }
        
        .letter span:nth-child(9n):after {
          animation-delay: 1s;
        }
        
        .letter span:nth-child(10n):after {
          animation-delay: 1.1s;
        }
        
        .letter span:nth-child(11n):after {
          animation-delay: 1.2s;
        }
        
        .letter span:nth-child(12n):after {
          animation-delay: 1.37s;
        }
        
        .letter span:nth-child(13n):after {
          animation-delay: 1.4s;
        }
        
        @keyframes flip {
          0% {
            opacity: 0;
            transform: rotatex(0deg);
            background: linear-gradient(0deg, #333 20%, transparent);
            box-shadow: inset -0.05em -0.1em 0 #050505;
          }
          10% {
            opacity: 1;
          }
          50% {
            box-shadow: inset 0 -0.04em 0 rgba(255, 255, 255, 0.1);
          }
          70% {
            box-shadow: inset 0.01em -0.02em 0 rgba(255, 255, 255, 0.3);
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotatex(180deg);
            background: linear-gradient(0deg, #222 40%, transparent);
            box-shadow: inset 0 0em 0 rgba(205, 205, 205, 0.2);
          }
        }
      `}</style>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Lettering.js functionality
            function lettering(selector) {
              const element = document.querySelector(selector);
              if (!element) return;
              
              const text = element.textContent;
              element.textContent = '';
              
              for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                element.appendChild(span);
              }
            }
            
            lettering('.letter');
          });
        `
      }} />

      {/* Tech Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('/images/tech-pattern.png')] opacity-5 pointer-events-none"></div>
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/greenprint-logo.PNG"
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
          <div className="hidden md:block flex-1 mx-4">
            <input type="text" placeholder="Search... Ctrl K" className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 01.993.883L11 3v2a1 1 0 01-1.993.117L9 5V3a1 1 0 011-1zm4.22 2.47a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414L14.22 5.884a1 1 0 010-1.414zM10 14a4 4 0 110-8 4 4 0 010 8zm7-4a1 1 0 01.117 1.993L17 12h-2a1 1 0 01-.117-1.993L15 10h2zm-1.636 5.364a1 1 0 011.414 1.414L14.57 18.61a1 1 0 01-1.414-1.414l1.414-1.414zM5 10a1 1 0 01.117 1.993L5 12H3a1 1 0 01-.117-1.993L3 10h2zm1.636-4.636a1 1 0 011.414-1.414L9.464 5.37a1 1 0 01-1.414 1.414L6.636 5.364zM10 16a1 1 0 01.993.883L11 17v2a1 1 0 01-1.993.117L9 19v-2a1 1 0 011-1z" />
              </svg>
            </button>
            <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
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
      <nav className="bg-black/60 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex space-x-6 h-12 items-center text-sm">
            <li>
              <Link href="/greenprint" className="font-semibold text-green-600 dark:text-green-400 border-b-2 border-green-600 pb-1">Overview</Link>
            </li>
            <li>
              <Link href="/greenprint/docs" className="hover:text-green-600 dark:hover:text-green-400 transition">Documentation</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 bg-black/90 backdrop-blur-sm border-b border-gray-800">
          <div className="flex flex-col space-y-4 items-center">
            <Link 
              href="/greenprint" 
              className="text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-center py-2"
              onClick={handleNavClick}
            >
              Overview
            </Link>
            <Link 
              href="/greenprint/docs" 
              className="text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors w-full text-center py-2"
              onClick={handleNavClick}
            >
              Documentation
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section with Video */}
      <div className="relative min-h-screen pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-green-800/20 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-700/20 via-transparent to-transparent z-5"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/trading-background.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Consistent Profits in Any Market</span>
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
                    Automated Crypto
                  </span>
                  <br />
                  <span className="text-white">Trading That Actually Works</span>
                </h1>
                
                <p className="text-xl text-gray-200 max-w-xl">
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
                    className="bg-black/40 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black/60 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-700"
                  >
                    See How It Works
                  </Link>
                </div>
                
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
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
                    <p className="text-sm text-gray-300">Trusted by 2,500+ traders</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden w-full max-w-5xl mx-auto">
                  <Image
                    src="/images/gp-phone.PNG"
                    alt="GreenPrint Bot on Mobile Devices"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profit Cards Carousel - Moved up even higher */}
      <section className="py-4 -mt-64 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {/* First set of cards */}
              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Michael Chen</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$1,234</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Sarah Johnson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$2,567</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">David Rodriguez</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$3,789</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/uk.png" 
                      alt="UK Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">James Wilson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$2,345</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Emily Thompson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$4,123</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              {/* Duplicate set of cards for seamless loop */}
              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Robert Martinez</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$1,567</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Jennifer Lee</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$2,890</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/jp.png" 
                      alt="Japan Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Yuki Tanaka</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$3,456</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/us.png" 
                      alt="US Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Thomas Anderson</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$4,567</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                    <Image 
                      src="/images/flags/br.png" 
                      alt="Brazil Flag" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate">Rafael Silva</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$5,678</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GreenPrint Section */}
      <section className="py-16 relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
                  What is GreenPrint?
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-xl text-gray-200 leading-relaxed">
                    GreenPrint is an advanced funding rate arbitrage bot that automatically identifies and executes profitable trades across multiple cryptocurrency exchanges. By leveraging price discrepancies between exchanges, it generates consistent returns regardless of market direction.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-300">Non-directional strategy that profits in any market condition</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-300">Advanced algorithms identify optimal trading opportunities</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-300">Fully automated execution with built-in risk management</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg"></div>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/images/greenprint-dashboard.jpg"
                      alt="GreenPrint Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Professional Traders Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
                  Trusted by Professional Traders
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                      <Image 
                        src="/images/avatar-1.jpg" 
                        alt="Trader 1" 
                        width={48} 
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Michael Chen</h3>
                      <p className="text-sm text-gray-400">Professional Trader</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    "GreenPrint has transformed my trading approach. The consistent returns and risk management features give me confidence in any market condition."
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                      <Image 
                        src="/images/avatar-2.jpg" 
                        alt="Trader 2" 
                        width={48} 
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Sarah Johnson</h3>
                      <p className="text-sm text-gray-400">Hedge Fund Manager</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    "The arbitrage strategies employed by GreenPrint are sophisticated yet accessible. It's a game-changer for both individual traders and institutions."
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex-shrink-0 overflow-hidden border border-gray-700">
                      <Image 
                        src="/images/avatar-3.jpg" 
                        alt="Trader 3" 
                        width={48} 
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">David Rodriguez</h3>
                      <p className="text-sm text-gray-400">Crypto Analyst</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    "The automated execution and risk management features of GreenPrint have significantly improved my trading efficiency and profitability."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Counter Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
                  Funding Payments Paid Out Daily
                </span>
              </h2>
              
              <div className="money-counter-container">
                <h1 className="letter">$124560342</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
                  How It Works
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Market Analysis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Advanced algorithms continuously monitor multiple exchanges to identify price discrepancies and arbitrage opportunities.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Automated Execution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Once an opportunity is identified, the bot automatically executes trades across exchanges to capture the profit.
                  </p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Risk Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built-in risk management features ensure that trades are executed safely and within predefined parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
                  Ready to Start Trading?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professional traders who trust GreenPrint for consistent, reliable returns.
              </p>
              <Link 
                href="/greenprint/docs"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/greenprint/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/greenprint/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
            <p className="text-gray-400">&copy; 2025 GreenPrint. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 