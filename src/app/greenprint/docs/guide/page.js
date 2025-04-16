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

export default function GuideDoc() {
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
          <h1 className="text-3xl font-bold mt-2">GreenPrint Guide</h1>
          <p className="mt-4 text-base leading-relaxed">Follow this comprehensive guide to set up and optimize your GreenPrint experience.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">1. Create Your Account</h3>
                <p className="text-gray-300 leading-relaxed">
                  Begin by signing up for a GreenPrint account. You'll need to provide basic information and verify your email address to get started.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">2. Connect Your Exchange</h3>
                <p className="text-gray-300 leading-relaxed">
                  GreenPrint works by connecting to your existing exchange accounts. We support major exchanges including Binance, FTX, and BitMEX. 
                  You'll need to create API keys with trading permissions (but not withdrawal permissions).
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">3. Fund Your Account</h3>
                <p className="text-gray-300 leading-relaxed">
                  For optimal results, we recommend starting with at least 0.1 BTC or equivalent. The strategy performance improves with scale, 
                  and our system will automatically manage position sizes for you.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Strategy Configuration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Risk Settings</h3>
                <p className="text-gray-300 leading-relaxed">
                  GreenPrint allows you to customize your risk profile. By default, we use conservative settings to maximize 
                  the Sharpe ratio, but you can adjust these based on your preferences.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Automation Level</h3>
                <p className="text-gray-300 leading-relaxed">
                  Choose between fully automated trading or assisted mode where you'll receive alerts and need to confirm trades. 
                  Most users prefer the fully automated option for convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Monitoring Your Performance</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Dashboard Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your GreenPrint dashboard provides real-time performance metrics including current positions, 
                  historical returns, and upcoming funding opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Performance Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Detailed analytics help you understand your strategy's performance across different market conditions. 
                  You can export this data for your records or for tax purposes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">This guide is regularly updated with new features and optimizations.</p>
          <Link href="/greenprint/docs" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Back to Documentation Home
          </Link>
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