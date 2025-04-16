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

export default function PricingPage() {
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
          <h1 className="text-3xl font-bold mt-2">Pricing Plans</h1>
          <p className="mt-4 text-base leading-relaxed">Explore our flexible pricing options designed to accommodate traders of all levels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Starter Plan */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-400/10 rounded-full">STARTER</span>
              <h2 className="text-2xl font-bold mt-4">$99<span className="text-sm font-normal text-gray-400">/month</span></h2>
              <p className="mt-2 text-gray-300">Perfect for beginning traders exploring market-neutral strategies.</p>
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Access to funding rate arbitrage strategy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Support for 2 major exchanges</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Basic performance dashboard</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Email support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Up to $10,000 account size</span>
              </li>
            </ul>
            
            <button className="mt-auto w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition">
              Get Started
            </button>
          </div>
          
          {/* Pro Plan - Highlighted */}
          <div className="bg-black/40 backdrop-blur-sm border-2 border-green-500 rounded-xl p-6 flex flex-col relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-green-500 text-black font-bold text-sm rounded-full">
              MOST POPULAR
            </div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-400/10 rounded-full">PRO</span>
              <h2 className="text-2xl font-bold mt-4">$249<span className="text-sm font-normal text-gray-400">/month</span></h2>
              <p className="mt-2 text-gray-300">Ideal for serious traders seeking consistent returns.</p>
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">All Starter features</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Support for 5 major exchanges</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Advanced analytics dashboard</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Priority email & chat support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Custom risk parameters</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Up to $50,000 account size</span>
              </li>
            </ul>
            
            <button className="mt-auto w-full py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-lg transition">
              Get Started
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-400/10 rounded-full">ENTERPRISE</span>
              <h2 className="text-2xl font-bold mt-4">$499<span className="text-sm font-normal text-gray-400">/month</span></h2>
              <p className="mt-2 text-gray-300">Built for professional traders and institutional clients.</p>
            </div>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">All Pro features</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Support for all major exchanges</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Enterprise-grade dashboard</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">24/7 dedicated support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Advanced strategy customization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Unlimited account size</span>
              </li>
            </ul>
            
            <button className="mt-auto w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 text-green-400">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg">Is there a setup fee?</h3>
              <p className="text-gray-300 leading-relaxed mt-2">
                No, there are no hidden or setup fees. The monthly subscription includes all features available at your chosen plan level.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-300 leading-relaxed mt-2">
                Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will take effect at the next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Do you offer a free trial?</h3>
              <p className="text-gray-300 leading-relaxed mt-2">
                We offer a 14-day free trial for the Starter plan so you can experience the benefits of GreenPrint's market-neutral strategy risk-free.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">What if I need to manage a larger account?</h3>
              <p className="text-gray-300 leading-relaxed mt-2">
                For accounts larger than $50,000, we recommend our Enterprise plan which offers unlimited account size and enhanced support. For specific institutional needs, please contact our sales team for a customized solution.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started with GreenPrint?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Join thousands of traders already using our market-neutral strategy to generate consistent returns.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/greenprint/docs/getting-started" className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Getting Started Guide
            </Link>
            <Link href="#" className="px-6 py-3 bg-black/30 text-white font-medium rounded-lg border border-green-600 hover:bg-black/50 transition">
              Schedule a Demo
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