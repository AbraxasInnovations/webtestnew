'use client';
import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// Component to handle search params and render the back button
function BackToDocsButton() {
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  
  if (!returnTo) return null;
  
  return (
    <li className="ml-auto">
      <Link 
        href={returnTo} 
        className="flex items-center gap-2 text-green-500 hover:text-green-400"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Documentation
      </Link>
    </li>
  );
}

export default function HowItWorksDoc() {
  return (
    <div className="min-h-screen bg-[#0a1512] text-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
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
          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-black/60 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex space-x-6 h-12 items-center text-sm">
            <li>
              <Link href="/greenprint/docs" className="font-semibold text-green-400 hover:text-green-300 transition">Documentation</Link>
            </li>
            <li>
              <Link href="/greenprint" className="hover:text-green-400 transition">GreenPrint Home</Link>
            </li>
            {/* Wrap the search params component in a Suspense boundary */}
            <Suspense fallback={null}>
              <BackToDocsButton />
            </Suspense>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 pb-16 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <aside className="hidden md:block md:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div>
                <h3 className="font-medium text-green-500 mb-3">On This Page</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#funding-rates" className="text-gray-400 hover:text-green-400 transition">Understanding Funding Rates</a></li>
                  <li><a href="#trading-process" className="text-gray-400 hover:text-green-400 transition">The GreenPrint Trading Process</a></li>
                  <li><a href="#architecture" className="text-gray-400 hover:text-green-400 transition">Technical Architecture</a></li>
                  <li><a href="#risk-management" className="text-gray-400 hover:text-green-400 transition">Risk Management</a></li>
                  <li><a href="#getting-started" className="text-gray-400 hover:text-green-400 transition">Getting Started</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-green-500 mb-3">Related Topics</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/greenprint/docs/strategy" className="text-gray-400 hover:text-green-400 transition">Trading Strategy</Link></li>
                  <li><Link href="/greenprint/docs/funding-rates" className="text-gray-400 hover:text-green-400 transition">Funding Rates Explained</Link></li>
                  <li><Link href="/greenprint/glossary" className="text-gray-400 hover:text-green-400 transition">Glossary</Link></li>
                </ul>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-6 text-green-400">How GreenPrint Works</h1>
            
            <p className="text-gray-300 mb-8">
              This document provides an in-depth explanation of GreenPrint's operational mechanics, from how it identifies profitable funding rate opportunities to executing and managing trades.
            </p>
            
            <section id="funding-rates" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Understanding Funding Rates</h2>
              
              <div className="bg-black/30 border border-gray-800 rounded-lg p-6 mb-6">
                <p className="mb-4">
                  Perpetual futures contracts, unlike traditional futures, don't have an expiration date. To keep their prices aligned with the spot market, exchanges implement a funding rate mechanism.
                </p>
                
                <h3 className="text-lg font-medium mb-2 text-green-500">How Funding Rates Work:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <strong>Periodic Payments:</strong> Every 8 hours (on most exchanges), traders on opposite sides of perpetual futures contracts exchange payments.
                  </li>
                  <li>
                    <strong>Rate Determination:</strong> When the perpetual price is higher than the index price, longs pay shorts (positive funding rate).
                  </li>
                  <li>
                    <strong>Market Direction:</strong> When the perpetual price is lower than the index price, shorts pay longs (negative funding rate).
                  </li>
                </ul>
              </div>
              
              <h3 className="text-lg font-medium mb-3 text-white">Market Inefficiencies GreenPrint Exploits</h3>
              <p className="mb-4 text-gray-300">
                When extreme market sentiment drives funding rates to significant levels (typically above 0.05% or below -0.05% per 8-hour period), opportunities emerge. These rates, compounded over time, can result in substantial income regardless of price movement.
              </p>
            </section>
            
            <section id="trading-process" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">The GreenPrint Trading Process</h2>
              
              <ol className="space-y-6">
                <li className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2 text-green-500">1. Market Scanning</h3>
                  <p className="text-gray-300">
                    GreenPrint continuously monitors funding rates across multiple cryptocurrency exchanges and trading pairs. When rates exceed predefined thresholds, the system identifies these as potential trading opportunities.
                  </p>
                </li>
                
                <li className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2 text-green-500">2. Opportunity Evaluation</h3>
                  <p className="text-gray-300">
                    Each opportunity undergoes rigorous evaluation based on:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                    <li>Historical funding rate patterns</li>
                    <li>Market volatility assessment</li>
                    <li>Liquidity analysis</li>
                    <li>Risk-reward ratio calculation</li>
                  </ul>
                </li>
                
                <li className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2 text-green-500">3. Position Establishment</h3>
                  <p className="text-gray-300">
                    When an opportunity meets all criteria, GreenPrint:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                    <li>Opens a position in the direction that will receive funding payments</li>
                    <li>Simultaneously establishes a hedge to neutralize directional exposure</li>
                  </ul>
                </li>
                
                <li className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2 text-green-500">4. Position Management</h3>
                  <p className="text-gray-300">
                    Throughout the trade's lifecycle, GreenPrint:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                    <li>Continually monitors funding rates</li>
                    <li>Adjusts hedges as needed to maintain delta neutrality</li>
                    <li>Collects funding payments at each interval</li>
                  </ul>
                </li>
                
                <li className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2 text-green-500">5. Position Closure</h3>
                  <p className="text-gray-300">
                    Positions are closed when:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                    <li>Funding rates return to normal levels (opportunity exhaustion)</li>
                    <li>Risk parameters are exceeded</li>
                    <li>More profitable opportunities emerge elsewhere</li>
                  </ul>
                </li>
              </ol>
            </section>
            
            <section id="architecture" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Technical Architecture</h2>
              
              <div className="bg-black/30 border border-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium mb-3 text-green-500">System Components</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <strong>Data Aggregation Layer:</strong> Collects real-time funding rate data from multiple exchanges
                  </li>
                  <li>
                    <strong>Analytics Engine:</strong> Processes market data and identifies opportunities
                  </li>
                  <li>
                    <strong>Execution Module:</strong> Manages trade execution with optimized entry and exit
                  </li>
                  <li>
                    <strong>Risk Management System:</strong> Constantly monitors positions and market conditions
                  </li>
                  <li>
                    <strong>Reporting Dashboard:</strong> Provides users with performance metrics and trade details
                  </li>
                </ul>
              </div>
              
              <h3 className="text-lg font-medium mb-3 text-white">Security Features</h3>
              <p className="mb-4 text-gray-300">
                GreenPrint incorporates multiple security layers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>API-only access (never requires withdrawal permissions)</li>
                <li>No custody of user funds at any time</li>
                <li>End-to-end encryption for all communications</li>
                <li>Continuous security auditing and penetration testing</li>
              </ul>
            </section>
            
            <section id="risk-management" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Risk Management</h2>
              
              <div className="bg-black/30 border border-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium mb-3 text-green-500">Hedging Strategies</h3>
                <p className="text-gray-300 mb-4">
                  GreenPrint employs sophisticated hedging techniques to neutralize market exposure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Delta-neutral position management</li>
                  <li>Cross-exchange hedging when appropriate</li>
                  <li>Dynamic hedge ratio adjustments based on market conditions</li>
                </ul>
              </div>
              
              <h3 className="text-lg font-medium mb-3 text-white">Drawdown Protection</h3>
              <p className="text-gray-300 mb-4">
                Multiple safeguards limit potential drawdowns:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Strict position sizing based on account size</li>
                <li>Predefined stop-loss levels for all positions</li>
                <li>Circuit breakers that halt trading during extreme market conditions</li>
                <li>Correlation-based exposure limits across the portfolio</li>
              </ul>
              
              <div className="bg-black/30 border border-gray-800 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-medium mb-3 text-green-500">Black Swan Protocols</h3>
                <p className="text-gray-300">
                  GreenPrint maintains emergency protocols for handling unexpected events:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                  <li>Rapid position liquidation procedures</li>
                  <li>Failover systems for exchange API disruptions</li>
                  <li>Backup liquidity providers for emergency exits</li>
                </ul>
              </div>
            </section>
            
            <section id="getting-started" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Getting Started</h2>
              
              <div className="space-y-6">
                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2 text-green-500">Account Setup</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                    <li>Create a GreenPrint account</li>
                    <li>Set up your exchange accounts (we support Binance, FTX, and others)</li>
                    <li>Generate API keys with trading permissions only (no withdrawal access)</li>
                    <li>Connect your exchange accounts to GreenPrint</li>
                  </ol>
                </div>
                
                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2 text-green-500">Strategy Activation</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                    <li>Select your risk profile (conservative, balanced, or aggressive)</li>
                    <li>Define your capital allocation</li>
                    <li>Activate the GreenPrint strategy</li>
                    <li>Monitor your performance through the dashboard</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-8 bg-green-900/30 border border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2 text-green-400">Next Steps</h3>
                <p className="text-gray-300 mb-4">
                  Ready to start capitalizing on funding rate opportunities? Visit our <Link href="/greenprint/docs/quickstart" className="text-green-400 hover:text-green-300 underline">Quickstart Guide</Link> for detailed setup instructions.
                </p>
                <p className="text-gray-300">
                  For more information about our performance metrics and historical results, see the <Link href="/greenprint/docs/performance" className="text-green-400 hover:text-green-300 underline">Performance Data</Link> page.
                </p>
              </div>
            </section>
            
            {/* Feedback Section */}
            <div className="border-t border-gray-800 pt-8 mt-12">
              <h3 className="text-lg font-medium mb-4">Was this page helpful?</h3>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition text-white text-sm">
                  Yes, it was helpful
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition text-white text-sm">
                  No, it needs improvement
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>
                  Find an issue with this page? <a href="#" className="text-green-400 hover:text-green-300">Suggest an edit</a> or <a href="#" className="text-green-400 hover:text-green-300">report a problem</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 mt-auto py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/images/greenprint-logo.PNG"
                alt="GreenPrint Logo"
                width={180}
                height={54}
                className="h-10 w-auto mb-4"
                style={{
                  objectFit: 'contain',
                  maxWidth: 'none'
                }}
              />
              <p className="text-gray-400 text-sm mt-4">
                Capitalize on funding rate opportunities with our automated trading system.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li><Link href="/greenprint/docs" className="text-gray-400 hover:text-green-400 text-sm">Overview</Link></li>
                <li><Link href="/greenprint/docs/quickstart" className="text-gray-400 hover:text-green-400 text-sm">Quickstart</Link></li>
                <li><Link href="/greenprint/docs/strategy" className="text-gray-400 hover:text-green-400 text-sm">Strategy</Link></li>
                <li><Link href="/greenprint/docs/how-it-works" className="text-gray-400 hover:text-green-400 text-sm">How It Works</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/greenprint/glossary" className="text-gray-400 hover:text-green-400 text-sm">Glossary</Link></li>
                <li><Link href="/greenprint/docs/performance" className="text-gray-400 hover:text-green-400 text-sm">Performance Data</Link></li>
                <li><Link href="/greenprint/docs/faq" className="text-gray-400 hover:text-green-400 text-sm">FAQs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-green-400 text-sm">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-green-400 text-sm">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} GreenPrint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}