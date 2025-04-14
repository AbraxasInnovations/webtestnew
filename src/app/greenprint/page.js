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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a1512] to-black text-white">
      {/* Disclosure Popup */}
      {showDisclosure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="max-w-4xl w-full bg-black/90 border-2 border-green-500/30 rounded-xl overflow-hidden shadow-2xl shadow-green-500/30">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 flex flex-col h-[80vh]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                    Time-Sensitive Opportunity
                  </h2>
                </div>
                
                <div className="overflow-y-auto flex-grow pr-4 custom-scrollbar">
                  <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      <span className="text-green-400 font-bold text-2xl">Listen carefully</span> - I don't have time for marketing fluff. I'm a 15-year Wall Street quant who's been running this funding rate arbitrage strategy for the past 3 years.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      The GreenPrint Funding Bot works. Period. It's generating consistent returns regardless of market conditions. But here's the catch - it's capacity constrained. There's only so much liquidity in the funding rate markets.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      I'm offering this to a limited number of traders because I've reached my optimal position size. Any larger, and slippage would eat into my returns. By spreading it across multiple portfolios, we can all benefit without impacting each other's performance.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      <span className="text-red-400 font-bold text-2xl">But the window is closing.</span> As more arbitrageurs enter this space, the funding rate differentials will compress. This is a first-mover advantage situation. The early adopters will capture the highest returns.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      I've spent years developing and refining this strategy. The backtest results speak for themselves - consistent monthly returns with minimal drawdown. But I can't keep this to myself forever. The market will eventually catch on, and the opportunity will disappear.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      That's why I'm offering GreenPrint to a select group of traders who understand the value of a proven, market-neutral strategy. If you're looking for a reliable way to generate consistent returns in any market condition, this is it.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      Don't wait until everyone else has caught on. The funding rate arbitrage opportunity is finite, and the window is closing fast. Join the early adopters who are already capitalizing on this strategy.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      <span className="text-green-400 font-bold">Remember:</span> This isn't about hype or promises. It's about a proven strategy with real results. The data doesn't lie, and neither do I.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      The choice is yours. You can continue with your current trading approach, or you can join the growing number of traders who are leveraging GreenPrint to generate consistent returns in any market condition.
                    </p>
                    <p className="text-xl text-gray-200 leading-relaxed mb-6">
                      <span className="text-red-400 font-bold">Time is running out.</span> The funding rate arbitrage opportunity won't last forever. Don't miss out on this chance to transform your trading results.
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-800 mt-6">
                  <button 
                    onClick={closeDisclosure}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                  >
                    I Understand - Continue to GreenPrint
                  </button>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/20 to-transparent"></div>
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/bot-backtest.png"
                    alt="GreenPrint Funding Bot Backtest Results"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/90 backdrop-blur-sm border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-400">3-Year Backtest Performance</p>
                      <p className="text-4xl font-bold text-green-400">+187.4%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg text-gray-400">Max Drawdown</p>
                      <p className="text-4xl font-bold text-red-400">-3.2%</p>
                    </div>
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
      `}</style>

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
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
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
                <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Consistent Profits in Any Market</span>
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                    Automated Crypto
                  </span>
                  <br />
                  <span className="text-white">Trading That Actually Works</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-xl">
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
                    <p className="text-sm text-gray-400">Trusted by 2,500+ traders</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-2xl shadow-green-500/20">
                  {/* Faded GreenPrint Logo in Background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <Image
                      src="/images/gplogo.PNG"
                      alt="GreenPrint Logo Background"
                      width={400}
                      height={120}
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <h3 className="text-xl font-semibold">Recent Profits</h3>
                    <div className="flex items-center gap-1 text-green-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    {[
                      { name: "BTC/USDT", profit: "+$1,245", time: "2 min ago" },
                      { name: "ETH/USDT", profit: "+$876", time: "5 min ago" },
                      { name: "SOL/USDT", profit: "+$432", time: "8 min ago" },
                      { name: "AVAX/USDT", profit: "+$654", time: "12 min ago" },
                      { name: "DOT/USDT", profit: "+$321", time: "15 min ago" }
                    ].map((trade, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">{trade.name}</p>
                            <p className="text-xs text-gray-400">{trade.time}</p>
                          </div>
                        </div>
                        <p className="text-green-400 font-semibold">{trade.profit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400">Monthly Average</p>
                      <p className="text-xl font-bold text-green-400">+$8,450</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profit Cards Carousel - Moved up even higher */}
      <section className="py-4 -mt-32 bg-black/50 backdrop-blur-sm relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-180px * 5));
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {/* First set of cards */}
              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$1,234</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$2,345</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$3,456</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$4,567</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$5,678</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              {/* Duplicate set of cards for seamless loop */}
              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$1,234</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$2,345</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$3,456</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium text-sm">+$4,567</span>
                  <span className="text-gray-400 text-xs">Today</span>
                </div>
              </div>

              <div className="flex-none w-48 h-32 bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 flex-shrink-0"></div>
                  <h3 className="text-sm font-semibold text-white truncate">Trader Name</h3>
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

      {/* What is GreenPrint Section - Moved up */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                What is GreenPrint?
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
                    <p className="text-sm text-gray-400">Average Monthly Return</p>
                    <p className="text-xl font-bold text-green-400">12.4%</p>
                  </div>
                </div>
              </div>
            </div>
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
                      src="/images/trader-profile.jpg"
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
                    "GreenPrint has completely transformed my trading approach. The consistent returns have allowed me to quit my day job and trade full-time. The risk management features give me peace of mind, and the support team is always there when I need them."
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">David Martinez</p>
                      <p className="text-gray-400">Professional Crypto Trader</p>
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
            Why Choose GreenPrint?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-gray-300">
                  Our bot has consistently generated positive returns through various market conditions, maintaining a steady performance regardless of market volatility.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
                <p className="text-gray-300">
                  Built on cutting-edge technology with real-time monitoring and automated risk management systems to protect your investments.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-gray-300">
                  Access to our dedicated support team and detailed documentation to help you maximize your trading success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-8">
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-gray-300 mb-6">
                    Join thousands of traders who are already generating consistent returns with GreenPrint.
                  </p>
                  <Link 
                    href="/greenprint/docs"
                    className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                  >
                    Get Started Now
                  </Link>
                  <div className="mt-6 text-center">
                    <Link 
                      href="/greenprint/docs"
                      className="text-green-500 hover:text-green-400 inline-flex items-center gap-2"
                    >
                      Read the documentation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
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