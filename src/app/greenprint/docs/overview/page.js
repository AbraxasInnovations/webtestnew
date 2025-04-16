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

export default function OverviewDoc() {
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
          <p className="mt-4 text-base leading-relaxed">Learn about GreenPrint's technology, features, and how it can help you achieve consistent returns in the cryptocurrency market.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Platform Overview</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                GreenPrint is a suite of market-exploiting products designed for both retail traders and professionals. 
                Unlike traditional trading strategies that rely on predicting market direction, GreenPrint employs a 
                market-neutral approach that captures the spread between funding rates, creating a reliable income 
                stream that's independent of price fluctuations.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Our platform combines cutting-edge technology with robust risk management systems, ensuring your 
                trading activities are both profitable and secure. With real-time monitoring, automated position 
                management, and comprehensive performance analytics, GreenPrint provides a complete solution for 
                automated crypto trading.
              </p>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Key Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Market-Neutral Strategy</h3>
                <p className="text-gray-300 leading-relaxed">
                  The GreenPrint system doesn't require predicting whether the market will go up or down. By 
                  focusing on funding rate differentials, it can generate profits regardless of overall market 
                  conditions, providing consistent returns even during market downturns.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Automated Trading</h3>
                <p className="text-gray-300 leading-relaxed">
                  Once configured, the GreenPrint system operates 24/7, constantly monitoring markets for opportunities 
                  and executing trades when conditions are optimal. This allows you to benefit from the strategy without 
                  the need for constant monitoring.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Advanced Risk Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our platform includes sophisticated risk management tools that help protect your capital. Position sizing 
                  is automatically adjusted based on your account size and risk tolerance, and the system includes built-in 
                  circuit breakers to mitigate losses during extreme market conditions.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Performance Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Track your strategy's performance with detailed analytics that show returns, drawdowns, and other key metrics. 
                  You can use these insights to fine-tune your approach and optimize for your financial goals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Performance Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-black/60 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Annual Return</p>
                <p className="text-2xl font-bold text-green-400">+113.52%</p>
              </div>
              <div className="bg-black/60 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Volatility</p>
                <p className="text-2xl font-bold text-green-400">3.49%</p>
              </div>
              <div className="bg-black/60 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Max Drawdown</p>
                <p className="text-2xl font-bold text-green-400">-2.8%</p>
              </div>
              <div className="bg-black/60 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Sharpe Ratio</p>
                <p className="text-2xl font-bold text-green-400">15.55</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">Ready to get started with GreenPrint?</p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/greenprint/docs/guide" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              View the Guide
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