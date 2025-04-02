'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function Greenprint() {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close menu when clicking a navigation link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-12 nav-logo">
              <Link href="/">
                <img 
                  src="/images/abaraxaslogo.jpeg"
                  alt="Abraxas"
                  className="h-full w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="hover:text-gray-300 transition-colors nav-items">About</Link>
              <Link href="/#services" className="hover:text-gray-300 transition-colors nav-items">Services</Link>
              <Link href="/#greenprint" className="hover:text-gray-300 transition-colors nav-items">Greenprint</Link>
              <Link href="/#contact" className="hover:text-gray-300 transition-colors nav-items">Contact</Link>
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
                <Link 
                  href="/#about" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  About
                </Link>
                <Link 
                  href="/#services" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Services
                </Link>
                <Link 
                  href="/#greenprint" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Greenprint
                </Link>
                <Link 
                  href="/#contact" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="greenprint-logo-container">
            <h1 className="greenprint-logo">
              <span className="green-text">GREEN</span><span className="print-text">PRINT</span>
            </h1>
            <p className="text-lg text-center text-gray-300 mt-4">Suite</p>
          </div>
          
          <div className="space-y-16">
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Greenprint is a comprehensive suite of trading tools designed to help serious traders capitalize on market inefficiencies in the cryptocurrency space. Our tools provide institutional-grade capabilities to retail traders, allowing you to automate your trading strategies and generate returns while you sleep.
              </p>
            </section>

            {/* Step-by-Step Guide Section */}
            <section className="py-20 bg-[#0a0a0a]">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                  <span className="text-emerald-400">Getting Started</span> with Greenprint
                </h2>
                <div className="max-w-4xl mx-auto">
                  {/* Step 1: Choose a Tier */}
                  <div className="mb-16">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-400">1</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">Choose Your Tier</h3>
                        <p className="text-gray-300 mb-6">
                          Select from our range of tiers designed to match your trading needs. Each tier comes with its own set of features and capabilities.
                        </p>
                        <div className="bg-gray-800/50 rounded-lg p-6">
                          <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                              src="/images/greenprint/tier-selection.jpg"
                              alt="Tier Selection Interface"
                              width={800}
                              height={450}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Make Payment */}
                  <div className="mb-16">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-400">2</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">Secure Payment</h3>
                        <p className="text-gray-300 mb-6">
                          Complete your purchase through our secure payment system. We accept various payment methods for your convenience.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-800/50 rounded-lg p-6">
                            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                              <Image
                                src="/images/greenprint/payment-methods.jpg"
                                alt="Available Payment Methods"
                                width={800}
                                height={450}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-6">
                            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                              <Image
                                src="/images/greenprint/payment-confirmation.jpg"
                                alt="Payment Confirmation Screen"
                                width={800}
                                height={450}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Choose Tokens */}
                  <div className="mb-16">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-400">3</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">Select Your Tokens</h3>
                        <p className="text-gray-300 mb-6">
                          Choose from our supported token list. Our bot is optimized for various trading pairs and market conditions.
                        </p>
                        <div className="bg-gray-800/50 rounded-lg p-6">
                          <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                              src="/images/greenprint/token-selection.jpg"
                              alt="Token Selection Interface"
                              width={800}
                              height={450}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Choose Strategies */}
                  <div className="mb-16">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-400">4</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">Configure Strategies</h3>
                        <p className="text-gray-300 mb-6">
                          Set up your entry and exit strategies. Our intuitive interface makes it easy to customize your trading parameters.
                        </p>
                        <div className="bg-gray-800/50 rounded-lg p-6">
                          <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                              src="/images/greenprint/strategy-config.jpg"
                              alt="Strategy Configuration Interface"
                              width={800}
                              height={450}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Enter API Keys */}
                  <div className="mb-16">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-400">5</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">Secure API Integration</h3>
                        <p className="text-gray-300 mb-6">
                          Safely input your exchange API keys. We use military-grade encryption to protect your credentials.
                        </p>
                        <div className="bg-gray-800/50 rounded-lg p-6">
                          <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                              src="/images/greenprint/api-integration.jpg"
                              alt="API Key Integration Interface"
                              width={800}
                              height={450}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 6: Start Bot */}
                  <div className="mb-16">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-400">6</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">Launch & Monitor</h3>
                        <p className="text-gray-300 mb-6">
                          Start your bot and watch it work! Monitor performance through our real-time dashboard.
                        </p>
                        <div className="bg-gray-800/50 rounded-lg p-6">
                          <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                            <Image
                              src="/images/greenprint/bot-dashboard.jpg"
                              alt="Bot Dashboard Interface"
                              width={800}
                              height={450}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Products Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Our Products</h2>
              
              {/* Funding Bot */}
              <div className="bg-gray-800/50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-300 mb-4">Greenprint Funding Bot</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 mb-4">
                      Our flagship product automates the process of capturing funding rate opportunities across various exchanges. Set up once and let it generate consistent returns through market-neutral strategies.
                    </p>
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                      <li>Automated funding rate arbitrage</li>
                      <li>Multi-exchange support</li>
                      <li>Risk management controls</li>
                      <li>Real-time monitoring</li>
                      <li>Custom parameter settings</li>
                    </ul>
                    <a 
                      href="https://t.me/AbraxasInnovations" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-gradient-to-r from-emerald-800 to-cyan-800 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Download Now - $50
                    </a>
                  </div>
                  <div className="bg-black/50 rounded-lg p-6">
                    <h4 className="font-bold mb-4">Technical Specifications:</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li><span className="font-bold">Language:</span> Python</li>
                      <li><span className="font-bold">Supported Exchanges:</span> Hyperliquid, Kraken</li>
                      <li><span className="font-bold">Minimum Requirements:</span> HL and Kraken API keys, Telegram</li>
                      <li><span className="font-bold">Updates:</span> Free lifetime updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Comprehensive Bot Overview */}
              <div className="greenprint-card bg-gray-900/50 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-emerald-300 mb-6">Comprehensive Overview: Abraxas Greenprint Funding Bot</h3>
                
                {/* Introduction */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">Introduction</h4>
                  <p className="text-gray-300 leading-relaxed">
                    The Abraxas Greenprint Funding Bot is an advanced automated trading system designed to capitalize on funding rate arbitrage opportunities between perpetual futures markets on Hyperliquid and spot markets on Kraken. By taking advantage of funding rate discrepancies while maintaining delta neutrality, the bot generates consistent returns with managed risk.
                  </p>
                </div>
                
                {/* Core Mechanism */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">Core Mechanism: Funding Rate Arbitrage</h4>
                  <h5 className="font-bold mb-2 text-white">How It Works</h5>
                  <ul className="text-gray-300 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">→</span>
                      <span><strong>Market Position:</strong> The bot simultaneously goes short on perpetual futures contracts on Hyperliquid and long on spot markets on Kraken (or Hyperliquid for HYPE token).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">→</span>
                      <span><strong>Delta Neutrality:</strong> By balancing long and short positions, the bot remains market-neutral, minimizing directional price risk.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">→</span>
                      <span><strong>Funding Rate Collection:</strong> Perpetual futures contracts periodically settle funding rates between long and short positions. When funding rates are positive, shorts receive payments from longs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">→</span>
                      <span><strong>Profit Generation:</strong> The bot captures these funding rate payments while hedging market risk, effectively generating income from the funding rate differential.</span>
                    </li>
                  </ul>
                </div>
                
                {/* Subscription Model */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">Tiered Subscription Model</h4>
                  <p className="text-gray-300 mb-3">The bot offers three subscription tiers:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="bg-gray-800/70 p-5 rounded-lg">
                      <h5 className="font-bold text-center mb-2 text-emerald-300">Tier 1</h5>
                      <p className="text-xl font-bold text-center mb-4">$50/month</p>
                      <p className="text-center text-gray-300">Trade 1 token of your choice</p>
                    </div>
                    <div className="bg-gray-800/70 p-5 rounded-lg">
                      <h5 className="font-bold text-center mb-2 text-emerald-300">Tier 2</h5>
                      <p className="text-xl font-bold text-center mb-4">$100/month</p>
                      <p className="text-center text-gray-300">Trade 2 tokens of your choice</p>
                    </div>
                    <div className="bg-gray-800/70 p-5 rounded-lg">
                      <h5 className="font-bold text-center mb-2 text-emerald-300">Tier 3</h5>
                      <p className="text-xl font-bold text-center mb-4">$200/month</p>
                      <p className="text-center text-gray-300">Trade all available tokens</p>
                    </div>
                  </div>
                </div>
                
                {/* Strategy Selection */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">Customizable Strategy Selection</h4>
                  <p className="text-gray-300 mb-3">Users can select from various entry and exit strategies:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-bold mb-2 text-white">Entry Strategies:</h5>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span><strong>Default:</strong> Enter positions when funding rates are above the 60th percentile</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span><strong>Conservative:</strong> Enter above 75th, 85th, or 95th percentile (higher threshold = lower risk)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span><strong>Aggressive:</strong> Enter above 50th percentile (more frequent entries)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span><strong>Abraxas Optimized:</strong> Advanced algorithmic entry based on comprehensive data analysis</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2 text-white">Exit Strategies:</h5>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span><strong>Default:</strong> Exit positions before the next funding rate becomes negative</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span><strong>Percentile-based:</strong> Exit when funding rate drops below 50th, 35th, 20th, or 10th percentile</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span><strong>Abraxas Optimized:</strong> Intelligent exit timing based on historical patterns and cost analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Optimized Mode */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">The Abraxas Optimized Mode: Predictive Trading Edge</h4>
                  <p className="text-gray-300 mb-4">The Abraxas Optimized mode provides a significant edge through advanced predictive analytics:</p>
                  
                  <h5 className="font-bold mb-2 text-white">Prescient Exit Timing</h5>
                  <p className="text-gray-300 mb-3">The bot's most powerful feature is its ability to predict and act before negative funding rates occur. By analyzing:</p>
                  <ul className="text-gray-300 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Historical Funding Rate Patterns:</strong> Identifying cyclical patterns and anomalies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>On-chain Order Flow:</strong> Detecting large position changes that precede funding rate shifts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Cross-exchange Correlations:</strong> Monitoring funding rate relationships across exchanges</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 mb-4">The bot can anticipate funding rate reversals with remarkable accuracy, exiting positions before negative rates materialize. This "prescience" ensures you're not caught paying negative funding.</p>
                  
                  <h5 className="font-bold mb-2 text-white">Comprehensive Data Analysis</h5>
                  <p className="text-gray-300 mb-3">The Abraxas Optimized mode leverages extensive data analysis:</p>
                  <ul className="text-gray-300 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Long-term Percentile Calculations:</strong> Analyzing 24+ hours of funding rate history across multiple markets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Volatility Correlation:</strong> Adjusting entry/exit thresholds based on market volatility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Flash Crash Protection:</strong> Built-in safeguards against sudden market dislocations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Multi-timeframe Analysis:</strong> Considering short, medium, and long-term funding rate patterns</span>
                    </li>
                  </ul>
                  
                  <h5 className="font-bold mb-2 text-white">Transaction Cost Optimization</h5>
                  <p className="text-gray-300 mb-3">The bot meticulously accounts for all transaction costs:</p>
                  <ul className="text-gray-300 space-y-2 mb-1">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Maker vs. Taker Analysis:</strong> Prioritizing maker orders to minimize fees (0.02% vs 0.05%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Slippage Modeling:</strong> Using order book depth analysis to minimize slippage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Position Sizing Optimization:</strong> Calculating optimal position sizes based on available liquidity, current volatility, fee structures, and expected funding rate returns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span><strong>Execution Timing:</strong> Placing orders during periods of higher liquidity</span>
                    </li>
                  </ul>
                </div>
                
                {/* Technical Implementation */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">Technical Implementation Excellence</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>Multi-threading Architecture:</strong> Separate threads for websocket data processing and order execution</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>API Rate Limiting:</strong> Sophisticated handling of exchange rate limits</span>
                      </li>
                    </ul>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>Connection Resilience:</strong> Automatic reconnection with exponential backoff</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>Error Handling:</strong> Comprehensive error management with incident logging</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* When it Works Best */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">When The Bot Works Best</h4>
                  <p className="text-gray-300 mb-3">The bot delivers optimal performance under these market conditions:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-800/60 rounded-lg p-4">
                      <h5 className="font-bold mb-2 text-emerald-100">High Funding Rate Environments</h5>
                      <p className="text-gray-300 text-sm">Particularly effective during periods of market exuberance when funding rates are consistently high</p>
                    </div>
                    <div className="bg-gray-800/60 rounded-lg p-4">
                      <h5 className="font-bold mb-2 text-emerald-100">Volatile But Trending Markets</h5>
                      <p className="text-gray-300 text-sm">Capitalizes on the increased funding rates that often accompany volatile markets</p>
                    </div>
                    <div className="bg-gray-800/60 rounded-lg p-4">
                      <h5 className="font-bold mb-2 text-emerald-100">Market Neutral Conditions</h5>
                      <p className="text-gray-300 text-sm">Performs well regardless of overall market direction due to delta-neutral strategy</p>
                    </div>
                    <div className="bg-gray-800/60 rounded-lg p-4">
                      <h5 className="font-bold mb-2 text-emerald-100">Low Correlation Environments</h5>
                      <p className="text-gray-300 text-sm">Excels when different assets have varied funding rate patterns, allowing for diversification</p>
                    </div>
                  </div>
                </div>
                
                {/* Advantages & Risk Management */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-emerald-200">Advantages Over Manual Trading</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">1.</span>
                        <span><strong>24/7 Operation:</strong> Continuously monitors and executes without fatigue</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">2.</span>
                        <span><strong>Emotional Discipline:</strong> Executes strategy without fear or greed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">3.</span>
                        <span><strong>Speed:</strong> Reacts to market changes in milliseconds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">4.</span>
                        <span><strong>Data Processing:</strong> Analyzes vast amounts of historical and real-time data simultaneously</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">5.</span>
                        <span><strong>Position Management:</strong> Precisely balances positions across exchanges to maintain neutrality</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-emerald-200">Risk Management</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>Flash Crash Protection:</strong> Monitors for unusual market conditions and can pause trading</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>Position Size Limits:</strong> Configures maximum exposure per asset</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>Margin Monitoring:</strong> Regularly checks margin levels to prevent liquidations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span><strong>Emergency Close Functionality:</strong> Can close all positions if predefined risk thresholds are crossed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Conclusion */}
                <div>
                  <h4 className="text-xl font-bold mb-3 text-emerald-200">Conclusion</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    The Abraxas Greenprint Funding Bot represents the cutting edge of automated funding rate arbitrage, delivering sophisticated trading capabilities previously available only to institutional traders. The Abraxas Optimized strategy provides a genuine edge through predictive analytics, cost optimization, and dynamic strategy adjustment based on market conditions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    By maintaining delta neutrality while capturing funding rate differentials, the bot offers a unique approach to generating returns in cryptocurrency markets without taking directional risk – an especially valuable strategy in uncertain market environments.
                  </p>
                </div>
                
                {/* CTA */}
                <div className="mt-8 flex justify-center">
                  <a 
                    href="https://t.me/AbraxasInnovations" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-gradient-to-r from-emerald-800 to-cyan-800 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
                  >
                    Get Started with Abraxas Greenprint Bot
                  </a>
                </div>
              </div>

              {/* CLMM Bot - Coming Soon */}
              <div className="bg-gray-800/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Greenprint CLMM Bot</h3>
                <p className="text-gray-400 mb-4">
                  Coming Soon - Our advanced concentrated liquidity management bot will help you optimize your liquidity positions across various DEXs, maximizing your yield potential while minimizing impermanent loss.
                </p>
                <div className="inline-block bg-gray-700/50 text-gray-400 font-bold py-2 px-4 rounded-lg">
                  Coming Soon
                </div>
              </div>

              {/* Data Analysis Tool - Coming Soon */}
              <div className="bg-gray-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Greenprint Data Analysis Tool</h3>
                <p className="text-gray-400 mb-4">
                  Coming Soon - A comprehensive market analysis tool that helps you identify trading opportunities through advanced data analytics and visualization.
                </p>
                <div className="inline-block bg-gray-700/50 text-gray-400 font-bold py-2 px-4 rounded-lg">
                  Coming Soon
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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

            {/* Legal Links - Added Return Policy */}
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
                <Link 
                  href="/return-policy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 