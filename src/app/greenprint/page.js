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
    <div className="min-h-screen bg-white text-gray-900">
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
                <h2 className="text-3xl font-bold text-red-600">
                  THE HONEST TRUTH
                </h2>
              </div>
              
              <div className="overflow-y-auto flex-grow pr-4 custom-scrollbar" onScroll={handleScroll}>
                <div className="max-w-none">
                  {/* Premium Header Section */}
                  <div className="relative mb-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/10 to-transparent"></div>
                    <div className="relative py-6 pl-6 pr-8 rounded-xl bg-white border-l-4 border-green-500 shadow-2xl">
                      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                        <div className="mb-4 md:mb-0 md:w-3/5">
                          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-2">
                            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Exclusive</span> Trading Opportunity
                          </h2>
                          <p className="text-xl md:text-2xl font-light text-gray-700 leading-snug mb-4">
                            A <span className="font-medium text-gray-900">15+ Sharpe ratio</span> with <span className="font-medium text-gray-900">256% annual returns</span> and minimal risk.
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div className="flex flex-col">
                              <p className="text-sm font-medium text-gray-600">Wall Street level strategies</p>
                              <p className="text-xs text-gray-500">Non-custodial & secure</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative md:w-2/5">
                          <div className="px-4 py-3 bg-green-50 rounded-lg border border-green-100">
                            <div className="flex flex-col">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Verified Performance</span>
                                <span className="text-xs text-green-600 font-medium px-2 py-0.5 bg-green-100 rounded-full">Audited</span>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <p className="text-xl font-bold text-green-600">+256%</p>
                                  <p className="text-xs text-gray-500">Annual Return</p>
                                </div>
                                <div>
                                  <p className="text-xl font-bold text-red-500">-2.8%</p>
                                  <p className="text-xs text-gray-500">Max Drawdown</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Backtest Image Section */}
                  <div className="mb-12">
                    <div className="relative rounded-xl overflow-hidden bg-white shadow-2xl">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-600"></div>
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-2/3">
                            <div className="aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg">
                              <Image
                                src="/images/equitycurve95.jpeg"
                                alt="GreenPrint Funding Bot Performance"
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white/80 text-xs uppercase tracking-wider font-medium">3-Year Backtest</p>
                                <div className="mt-1 flex items-center justify-between">
                                  <p className="text-2xl font-bold text-white">Market-Neutral Strategy</p>
                                  <div className="flex items-center gap-2">
                                    <span className="inline-block px-2 py-1 bg-green-500/20 backdrop-blur-sm rounded text-green-300 text-xs font-medium">Verified</span>
                                    <span className="inline-block px-2 py-1 bg-emerald-500/20 backdrop-blur-sm rounded text-emerald-300 text-xs font-medium">Institutional</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-1/3">
                            <div className="h-full flex flex-col justify-between">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Why This Matters To You</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                  These aren't theoretical projections—they're the culmination of elite Wall Street experience and years of optimization.
                                </p>
                                <div className="space-y-3 mb-4">
                                  <div className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-gray-600">Consistently outperforms the market</p>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-gray-600">Strategy works in any market condition</p>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p className="text-sm text-gray-600">Minimal capital at risk</p>
                                  </div>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500">
                                <p>Past performance is not indicative of future results. Data verified by third-party audit.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Content Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
                    {/* Left Column */}
                    <div className="md:col-span-8 space-y-6">
                      <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                        <div className="px-6 py-5 border-b border-gray-100">
                          <h2 className="text-xl font-bold text-gray-900">The Market Reality</h2>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-900 font-medium mb-1">Traditional trading carries significant risk</p>
                                <p className="text-sm text-gray-600">Directional trading exposes your capital to extreme volatility and potential losses</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-900 font-medium mb-1">GreenPrint eliminates directional risk</p>
                                <p className="text-sm text-gray-600">Our non-directional approach profits regardless of whether markets move up, down, or sideways</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-900 font-medium mb-1">Outperforms professional hedge funds</p>
                                <p className="text-sm text-gray-600">Our strategy consistently exceeds the performance of top 5 hedge funds combined</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                        <div className="px-6 py-5 border-b border-gray-100">
                          <h2 className="text-xl font-bold text-gray-900">The Wall Street Advantage</h2>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-700 leading-relaxed mb-6">
                            Top hedge funds operate under strict investment mandates and size constraints. While they employ brilliant analysts who identify the same opportunities we do, their massive capital base <span className="font-medium text-gray-900">prevents them from capitalizing</span> on smaller, high-potential investments.
                          </p>
                          <div className="relative rounded-lg bg-gray-50 p-4 mb-6 border border-gray-100">
                            <div className="absolute top-0 right-0 -mt-3 -mr-3 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-600">
                              GreenPrint exploits these market inefficiencies with greater flexibility, targeting opportunities they cannot access to achieve returns they can only dream about.
                            </p>
                          </div>
                          <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                              <Image
                                src="/images/trustedtrader.jpeg"
                                alt="Wall Street Expert"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">Former Wall Street Trader</p>
                              <p className="text-xs text-gray-500">15+ years institutional experience</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="md:col-span-4 space-y-6">
                      <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                        <div className="px-6 py-5 border-b border-gray-100">
                          <h2 className="text-xl font-bold text-gray-900">Limited Opportunity</h2>
                        </div>
                        <div className="p-6">
                          <div className="mb-6">
                            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                              <div className="bg-red-500 h-2 rounded-full w-[85%]"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Capacity</span>
                              <span className="font-medium text-red-500">85% Full</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-4">
                            This strategy is capacity-constrained, meaning it performs optimally up to a certain investment threshold. We've almost reached that threshold.
                          </p>
                          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                            <div className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                              <p className="text-sm text-gray-700">
                                When we reach capacity, new participants will be waitlisted until space becomes available.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-xs text-gray-500">Limited slots remaining</span>
                            </div>
                            <span className="text-xs font-medium text-gray-700">Act now</span>
                          </div>
                        </div>
                      </div>
                    
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden shadow-xl border border-green-200">
                        <div className="px-6 py-5 border-b border-green-200/50">
                          <h2 className="text-xl font-bold text-gray-900">Key Advantages</h2>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-green-200 shadow-sm">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">Non-custodial operation</p>
                                <p className="text-xs text-gray-600">You maintain complete control of your funds</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-green-200 shadow-sm">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">Market-neutral strategy</p>
                                <p className="text-xs text-gray-600">Profit regardless of market direction</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-green-200 shadow-sm">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">Institutional-grade performance</p>
                                <p className="text-xs text-gray-600">Proven track record of excellence</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-green-200 shadow-sm">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">Fully automated execution</p>
                                <p className="text-xs text-gray-600">24/7 operation without manual intervention</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results Section */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-10">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-5">
                      <h2 className="text-xl font-bold text-white">Proven Track Record</h2>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Annual Return</h3>
                          <p className="text-3xl font-bold text-green-600">+256%</p>
                          <p className="text-xs text-gray-500 mt-1">Consistently high performance</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Volatility</h3>
                          <p className="text-3xl font-bold text-green-600">3.49%</p>
                          <p className="text-xs text-gray-500 mt-1">Exceptionally low</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Max Drawdown</h3>
                          <p className="text-3xl font-bold text-red-500">-2.8%</p>
                          <p className="text-xs text-gray-500 mt-1">Minimal capital at risk</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Sharpe Ratio</h3>
                          <p className="text-3xl font-bold text-green-600">15.55</p>
                          <p className="text-xs text-gray-500 mt-1">Institutional quality</p>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <p className="text-sm text-gray-700 md:max-w-xl">
                            Your interest in reading this far indicates you're seeking a reliable investment strategy that stands out from conventional approaches. This technology has the potential to revolutionize your trading portfolio.
                          </p>
                          <div className="text-right">
                            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Opportunity Closing Soon</p>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                              <p className="text-sm font-medium text-gray-900">Limited slots remaining</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-32"></div> {/* Extra space to ensure button is at bottom */}
                  
                  {/* Continue button at the bottom of the scrollable content */}
                  <div className="pt-8 border-t-4 border-green-500 mt-8 bg-white sticky bottom-0 shadow-xl">
                    <button 
                      onClick={closeDisclosure}
                      className={`w-full px-8 py-6 rounded-lg text-xl font-bold transition-all duration-300 transform ${
                        hasScrolledToBottom 
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02] shadow-lg shadow-green-500/20" 
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!hasScrolledToBottom}
                    >
                      {hasScrolledToBottom 
                        ? "I'M READY TO ACCESS THIS OPPORTUNITY" 
                        : "Please review all information to continue"}
                    </button>
                    <p className={`text-center mt-2 text-xs ${hasScrolledToBottom ? 'text-gray-500' : 'text-gray-400'}`}>
                      {hasScrolledToBottom 
                        ? "By continuing, you acknowledge that you've read and understood this disclosure"
                        : "Scroll down to review all details before proceeding"}
                    </p>
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