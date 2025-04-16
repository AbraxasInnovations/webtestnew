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

export default function WhatIsPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
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
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="uppercase text-green-400 text-xs font-semibold tracking-wide">Documentation</p>
          <h1 className="text-3xl font-bold mt-2">What is GreenPrint?</h1>
          <p className="mt-4 text-base leading-relaxed">A comprehensive explanation of GreenPrint's functionality, technology, and trading approach.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">The GreenPrint Concept</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                GreenPrint is a revolutionary crypto trading platform that implements a market-neutral strategy to 
                generate consistent returns regardless of market conditions. Unlike traditional approaches that rely 
                on predicting price movements, GreenPrint capitalizes on structural inefficiencies in cryptocurrency 
                markets, specifically funding rate differentials in perpetual futures contracts.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                The core principle behind GreenPrint is to capture the spread between funding rates across different 
                exchanges and markets. By taking opposing positions (long and short) on the same asset across different 
                venues, the system creates a market-neutral setup that generates income from the funding payments while 
                eliminating directional price risk.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                This approach has been used by professional traders and institutions for years, but has typically been 
                inaccessible to retail investors due to its complexity and capital requirements. GreenPrint democratizes 
                this strategy by providing an automated solution that handles all the technical aspects of implementation.
              </p>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">How It Works</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Funding Rate Mechanics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Perpetual futures contracts in crypto use a mechanism called funding rates to ensure the futures price 
                  stays close to the spot price. When the funding rate is positive, long positions pay short positions; 
                  when negative, short positions pay long positions. These rates vary across exchanges and can create 
                  arbitrage opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Market-Neutral Setup</h3>
                <p className="text-gray-300 leading-relaxed">
                  GreenPrint identifies situations where there's a significant difference in funding rates between 
                  exchanges. It then opens a long position on the exchange with the negative (or lower) funding rate 
                  and a short position on the exchange with the positive (or higher) funding rate. The result is a 
                  hedged position that collects funding payments without exposure to price movements.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Automated Execution</h3>
                <p className="text-gray-300 leading-relaxed">
                  The platform continuously monitors funding rates across multiple exchanges, automatically identifying 
                  and executing trades when profitable opportunities arise. It manages position sizes based on your 
                  account balance and risk preferences, ensuring optimal capital allocation.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Risk Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  While the strategy is market-neutral by design, GreenPrint implements additional risk management 
                  features to protect against extreme market conditions, exchange risks, and other potential issues. 
                  These include position limits, circuit breakers, and automatic rebalancing mechanisms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Strategy Advantages</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Market Condition Independence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Whether markets are bullish, bearish, or rangebound, GreenPrint's strategy can generate returns. This 
                  contrasts sharply with directional trading approaches that require accurate price predictions.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Low Volatility</h3>
                <p className="text-gray-300 leading-relaxed">
                  The market-neutral nature of the strategy means returns tend to be steady and consistent, with much 
                  lower volatility than typical crypto investments. This creates a more predictable income stream and 
                  significantly reduces stress for traders.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Non-Custodial Operation</h3>
                <p className="text-gray-300 leading-relaxed">
                  GreenPrint connects to your exchange accounts via API but never takes custody of your funds. This 
                  eliminates counterparty risk and ensures you maintain full control over your assets at all times.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Institutional-Grade Strategy</h3>
                <p className="text-gray-300 leading-relaxed">
                  The funding rate arbitrage approach has been employed by sophisticated trading firms and hedge funds 
                  for years. GreenPrint brings this institutional-grade strategy to individual traders without requiring 
                  advanced technical knowledge.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">User Experience</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                GreenPrint is designed with simplicity in mind, despite the complexity of the underlying strategy. The 
                platform guides you through the entire process:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li className="pl-2">Create an account on GreenPrint</li>
                <li className="pl-2">Connect your exchange accounts via API keys (read-only permissions for security)</li>
                <li className="pl-2">Set your risk parameters and capital allocation</li>
                <li className="pl-2">Activate the strategy</li>
                <li className="pl-2">Monitor performance through the dashboard</li>
              </ol>
              
              <p className="text-gray-300 leading-relaxed">
                The system handles all the technical aspects, including market monitoring, trade execution, position 
                management, and risk control. You can check your performance anytime through the intuitive dashboard, 
                which provides real-time updates and comprehensive analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">Ready to learn more about GreenPrint?</p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/greenprint/docs/how-it-works" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              How It Works
            </Link>
            <Link href="/greenprint/docs" className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
              Back to Documentation
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-800 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <Link href="/greenprint" className="text-sm text-gray-400 hover:text-green-400 transition">
              GreenPrint Home
            </Link>
            <Link href="/greenprint/docs" className="text-sm text-gray-400 hover:text-green-400 transition">
              Documentation
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-600">© 2023 Abraxas Innovations</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 