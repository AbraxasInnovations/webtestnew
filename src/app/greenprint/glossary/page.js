'use client';
import React from 'react';
import Link from 'next/link';

export default function Glossary() {
  return (
    <div className="min-h-screen bg-[#0a1512] text-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
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
            <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex space-x-6 h-12 items-center text-sm">
            <li>
              <Link href="#" className="font-semibold text-green-600 dark:text-green-400 border-b-2 border-green-600 pb-1">Documentation</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition">Abraxas Innovations</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="uppercase text-green-600 dark:text-green-400 text-xs font-semibold tracking-wide">Education</p>
          <h1 className="text-3xl font-bold mt-2">Glossary</h1>
          <p className="mt-4 text-base leading-relaxed">A comprehensive list of terms and concepts used in the GreenPrint ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">A</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Arbitrage</h3>
                <p className="text-gray-600 dark:text-gray-300">The practice of taking advantage of price differences between markets to generate profit with minimal risk.</p>
              </div>

              <div>
                <h3 className="font-medium text-lg">API</h3>
                <p className="text-gray-600 dark:text-gray-300">Application Programming Interface - a set of rules and protocols that allows different software applications to communicate with each other.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">Authentication</h3>
                <p className="text-gray-600 dark:text-gray-300">The process of verifying the identity of a user or system to ensure secure access to resources.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">B</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Blockchain</h3>
                <p className="text-gray-600 dark:text-gray-300">A distributed ledger technology that records transactions across a network of computers in a secure, transparent, and immutable way.</p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Bot</h3>
                <p className="text-gray-600 dark:text-gray-300">An automated software program that performs specific tasks, such as trading or monitoring market conditions.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">Backtesting</h3>
                <p className="text-gray-600 dark:text-gray-300">The process of testing a trading strategy using historical data to evaluate its performance before deploying it with real funds.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">C</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Cryptocurrency</h3>
                <p className="text-gray-600 dark:text-gray-300">A digital or virtual form of currency that uses cryptography for security and operates independently of a central bank.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">Consensus Mechanism</h3>
                <p className="text-gray-600 dark:text-gray-300">A protocol that ensures all nodes in a blockchain network agree on the state of the ledger, validating transactions and maintaining security.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">Cold Storage</h3>
                <p className="text-gray-600 dark:text-gray-300">A method of storing cryptocurrency offline, away from internet access, to protect against hacking and theft.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">D</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Decentralized Finance (DeFi)</h3>
                <p className="text-gray-600 dark:text-gray-300">Financial services built on blockchain technology that operate without traditional intermediaries like banks.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">Digital Asset</h3>
                <p className="text-gray-600 dark:text-gray-300">Any asset that exists in digital form and has value, including cryptocurrencies, tokens, and digital collectibles.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg">DEX</h3>
                <p className="text-gray-600 dark:text-gray-300">Decentralized Exchange - a platform that allows users to trade cryptocurrencies without the need for a central authority.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">This glossary is regularly updated. Check back for new terms and definitions.</p>
        </div>
      </div>

      <footer className="border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="p-2 hover:text-green-600 dark:hover:text-green-400 transition" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.88-2.35 8.69 8.69 0 01-2.7 1.03 4.25 4.25 0 00-7.24 3.87 12.07 12.07 0 01-8.75-4.43 4.24 4.24 0 001.32 5.67 4.21 4.21 0 01-1.92-.53v.05a4.25 4.25 0 003.41 4.17 4.23 4.23 0 01-1.91.07 4.26 4.26 0 003.97 2.96 8.52 8.52 0 01-5.27 1.82A8.71 8.71 0 012 19.54a12.04 12.04 0 006.52 1.91c7.83 0 12.12-6.48 12.12-12.11 0-.19-.01-.39-.02-.58A8.65 8.65 0 0024 5.55a8.43 8.43 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="https://discord.com" className="p-2 hover:text-green-600 dark:hover:text-green-400 transition" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.074.035 13.86 13.86 0 00-2.608 5.333 19.665 19.665 0 00-5.687 0A13.888 13.888 0 007.449 3.89a.07.07 0 00-.074-.035 19.736 19.736 0 00-4.885 1.515.066.066 0 00-.03.027C.533 9.36-.319 14.276.099 19.138a.07.07 0 00.027.045 19.916 19.916 0 005.994 3.005.07.07 0 00.076-.027c.464-.63.87-1.295 1.226-1.993a.07.07 0 00-.041-.095 13.148 13.148 0 01-1.87-.89.07.07 0 01-.007-.117c.125-.094.25-.192.367-.293a.07.07 0 01.072-.01 13.16 13.16 0 0012.108 0 .07.07 0 01.073.01c.117.1.242.199.367.293a.07.07 0 01-.006.117 13.093 13.093 0 01-1.87.89.07.07 0 00-.041.095c.36.698.765 1.363 1.227 1.993a.07.07 0 00.077.027 19.86 19.86 0 005.994-3.005.07.07 0 00.027-.045c.5-5.035-.838-9.95-3.548-14.742a.063.063 0 00-.03-.028zM8.02 15.331c-1.18 0-2.148-1.085-2.148-2.419 0-1.334.955-2.419 2.148-2.419 1.2 0 2.167 1.092 2.148 2.419 0 1.334-.955 2.419-2.148 2.419zm7.96 0c-1.18 0-2.148-1.085-2.148-2.419 0-1.334.955-2.419 2.148-2.419 1.2 0 2.167 1.092 2.148 2.419 0 1.334-.948 2.419-2.148 2.419z" />
              </svg>
            </a>
            <a href="https://github.com" className="p-2 hover:text-green-600 dark:hover:text-green-400 transition" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.49 11.49 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.66-5.49 5.96.43.38.81 1.12.81 2.26v3.35c0 .32.22.7.82.58A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://mintlify.com" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">Powered by Mintlify</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 