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
  
  // Add useEffect for money counter animation
  useEffect(() => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
      const text = letter.textContent;
      letter.textContent = '';
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.1}s`;
        letter.appendChild(span);
      });
    });
  }, []);
  
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
        
        .letter span {
          vertical-align: top;
          box-shadow: inset 0.035em 0 0 0 rgba(75, 75, 75, 0.4), inset -0.035em 0 0 0 rgba(0, 0, 0, 0.25);
          display: inline-block;
          width: 0.95em;
          height: 1.6em;
          line-height: 1.6em;
          text-align: center;
          animation: flip 2s infinite;
          animation-fill-mode: both;
          transform-origin: 50% 100%;
          background: linear-gradient(0deg, #333 10%, #1c1c1c);
          color: #fff;
          text-shadow: 0 0 0.1em rgba(255, 255, 255, 0.5);
        }
        
        @keyframes flip {
          0% { transform: rotateX(0deg); }
          5% { transform: rotateX(0deg); }
          10% { transform: rotateX(180deg); }
          15% { transform: rotateX(0deg); }
          100% { transform: rotateX(0deg); }
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
      <section className="py-4 -mt-80 relative overflow-hidden z-10">
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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
                  What is GreenPrint?
                </span>
              </h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  GreenPrint is a suite of market-exploiting products, for retail and professionals alike. 
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Unlike traditional trading strategies that rely on market direction, GreenPrint's unique approach focuses on capturing the spread between funding rates, creating a reliable income stream that's independent of price movements. This market-neutral strategy has proven effective across various market cycles.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our platform combines cutting-edge technology with robust risk management systems, ensuring your trading activities are both profitable and secure. With real-time monitoring, automated position management, and comprehensive performance analytics, GreenPrint provides a complete solution for automated crypto trading.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-green-500/20">
                <Image
                  src="/images/bot-dashboard.png"
                  alt="GreenPrint Bot Dashboard"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Yearly Returns</p>
                    <p className="text-xl font-bold text-green-400">113.52%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Counter Flipper Animation */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative text-center">
          <h2 className="text-3xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Funding Payments Paid Out Daily
          </h2>
          
          <div className="money-counter-container">
            <h1 className="letter">$124560342</h1>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Moved down */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Trusted by Professional Traders
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of traders who have transformed their trading with GreenPrint
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "👥", value: "2,500+", label: "Active Traders" },
              { icon: "📈", value: "$12.4M+", label: "Total Profits Generated" },
              { icon: "🛡️", value: "99.9%", label: "Uptime Reliability" }
            ].map((stat, i) => (
              <div key={i} className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
            <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-800">
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
                    <span className="text-green-400 font-medium">Verified Trader</span>
                  </div>
                  <blockquote className="text-xl text-gray-300 mb-6">
                    "Believe me when I say that I knew nothing about funding rates, I mean it. I STILL couldn't even explain it to you that well. The GreenPrint is a bot that does EVERYTHING for you. I splurged a little bit with my earnings, but I'm just glad I can park my money somewhere safe because all I hear is how the stock market goes down every other day. I'm riding this until retirement!"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Jada C.</p>
                      <p className="text-gray-400">First Time User</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">+$124,500</p>
                      <p className="text-sm text-gray-400">Total Profit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Bot Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                The GreenPrint Funding Bot
              </h2>
              <p className="text-gray-300 text-lg mb-6">
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
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link 
                  href="/greenprint/docs"
                  className="text-green-500 hover:text-green-400 flex items-center gap-2 font-medium"
                >
                  Learn more about how it works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-green-500/20">
                <Image
                  src="/images/bot-dashboard.png"
                  alt="GreenPrint Bot Dashboard"
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
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Basic</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$99</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic funding rate arbitrage</span>
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
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/50 shadow-lg shadow-green-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-3">Pro</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$199</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced funding rate arbitrage</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to $50,000 capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics</span>
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
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$2,500</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited funding rate arbitrage</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>API access</span>
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