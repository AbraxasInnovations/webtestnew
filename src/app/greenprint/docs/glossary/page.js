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

export default function GlossaryPage() {
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
          <h1 className="text-3xl font-bold mt-2">Glossary</h1>
          <p className="mt-4 text-base leading-relaxed">A comprehensive list of terms and concepts used in crypto trading and the GreenPrint ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* A-B Section */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">A - B</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">API (Application Programming Interface)</h3>
                <p className="text-gray-300 leading-relaxed">
                  A set of rules and protocols that allows different software applications to communicate with each other. In the context of GreenPrint, APIs are used to connect to cryptocurrency exchanges to execute trades automatically.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Arbitrage</h3>
                <p className="text-gray-300 leading-relaxed">
                  The practice of taking advantage of price differences between two or more markets. Buy low in one market and sell high in another to generate profit with minimal risk.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Backtest</h3>
                <p className="text-gray-300 leading-relaxed">
                  The process of testing a trading strategy on historical data to evaluate its performance before risking real capital.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Basis</h3>
                <p className="text-gray-300 leading-relaxed">
                  The difference between the spot price and futures price of an asset. The basis is what creates funding rates in perpetual contracts.
                </p>
              </div>
            </div>
          </div>

          {/* C-D Section */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">C - D</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Circuit Breaker</h3>
                <p className="text-gray-300 leading-relaxed">
                  A risk management mechanism that temporarily halts trading activity when market conditions become too volatile or when certain risk thresholds are exceeded.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Counterparty Risk</h3>
                <p className="text-gray-300 leading-relaxed">
                  The risk that the other party in a financial transaction might fail to fulfill their obligations. In crypto trading, this often refers to the risk that an exchange might default.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Delta</h3>
                <p className="text-gray-300 leading-relaxed">
                  A measure of how much an option's price is expected to change per $1 change in the price of the underlying asset. In the context of trading strategies, "delta-neutral" means the strategy is designed to be unaffected by price movements of the underlying asset.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Derivatives</h3>
                <p className="text-gray-300 leading-relaxed">
                  Financial instruments whose value is derived from an underlying asset, such as futures, options, and perpetual contracts.
                </p>
              </div>
            </div>
          </div>

          {/* F-H Section */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">F - H</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Funding Rate</h3>
                <p className="text-gray-300 leading-relaxed">
                  A mechanism used in perpetual futures contracts to keep the contract price close to the underlying asset's price. When the rate is positive, long positions pay short positions, and vice versa when negative.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Funding Rate Arbitrage</h3>
                <p className="text-gray-300 leading-relaxed">
                  A market-neutral strategy that exploits differences in funding rates between different exchanges or contracts to generate profit without exposure to price movements.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Futures Contract</h3>
                <p className="text-gray-300 leading-relaxed">
                  A standardized agreement to buy or sell an asset at a predetermined price at a specified time in the future.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Hedge</h3>
                <p className="text-gray-300 leading-relaxed">
                  A risk management strategy used to offset potential losses in one position by taking an opposite position in a related asset.
                </p>
              </div>
            </div>
          </div>

          {/* L-M Section */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">L - M</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Leverage</h3>
                <p className="text-gray-300 leading-relaxed">
                  The use of borrowed funds to increase the potential return of an investment. For example, 10x leverage means you can control $10,000 worth of assets with $1,000 of capital.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Liquidity</h3>
                <p className="text-gray-300 leading-relaxed">
                  The degree to which an asset can be quickly bought or sold without affecting its price. High liquidity means assets can be traded easily with minimal price impact.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Long Position</h3>
                <p className="text-gray-300 leading-relaxed">
                  A trading position that profits when the price of the asset increases. Going "long" means buying an asset with the expectation that its value will rise.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Market-Neutral Strategy</h3>
                <p className="text-gray-300 leading-relaxed">
                  A trading strategy designed to profit regardless of whether the market moves up or down. It typically involves taking offsetting long and short positions.
                </p>
              </div>
            </div>
          </div>

          {/* P-R Section */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">P - R</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Perpetual Futures (Perpetual Swaps)</h3>
                <p className="text-gray-300 leading-relaxed">
                  A type of derivative contract that has no expiry date, allowing traders to hold positions indefinitely. These contracts use funding rates to keep the price aligned with the underlying asset.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Position Sizing</h3>
                <p className="text-gray-300 leading-relaxed">
                  The process of determining how much capital to allocate to a particular trade or investment, based on risk tolerance and market conditions.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Rebalancing</h3>
                <p className="text-gray-300 leading-relaxed">
                  The process of adjusting a portfolio's asset allocation back to its original target mix. In the context of market-neutral strategies, rebalancing ensures that the strategy remains delta-neutral.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Risk Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  The process of identifying, assessing, and controlling threats to capital and earnings. This includes setting position limits, using stop-loss orders, and diversifying investments.
                </p>
              </div>
            </div>
          </div>

          {/* S-Z Section */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">S - Z</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Sharpe Ratio</h3>
                <p className="text-gray-300 leading-relaxed">
                  A measure of risk-adjusted return, calculated by dividing excess return by standard deviation. A higher Sharpe ratio indicates better risk-adjusted performance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Short Position</h3>
                <p className="text-gray-300 leading-relaxed">
                  A trading position that profits when the price of the asset decreases. Going "short" means selling an asset with the expectation that its value will fall.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Slippage</h3>
                <p className="text-gray-300 leading-relaxed">
                  The difference between the expected price of a trade and the price at which the trade is actually executed. Slippage often occurs during periods of high volatility or low liquidity.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Volatility</h3>
                <p className="text-gray-300 leading-relaxed">
                  A statistical measure of the dispersion of returns for a given security or market index. Higher volatility means the price can change dramatically over a short time period in either direction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">Need more information about GreenPrint's trading strategies?</p>
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