'use client';
import React from 'react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div className="min-h-screen bg-[#0a1512] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/greenprint" className="inline-flex items-center text-sm text-green-400 hover:text-green-300 mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Documentation
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">What is GreenPrint?</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl mb-6">
            GreenPrint is a sophisticated trading bot designed to capitalize on funding rate arbitrage opportunities in cryptocurrency markets.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li>Automated funding rate arbitrage</li>
            <li>24/7 market monitoring</li>
            <li>Risk management systems</li>
            <li>Position size optimization</li>
            <li>Multi-exchange support</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">How It Works</h2>
          <p>
            GreenPrint continuously monitors funding rates across multiple exchanges, identifying opportunities where the funding rate differential exceeds transaction costs and other fees. When such opportunities are found, the bot automatically executes trades to capture the arbitrage profit.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Benefits</h2>
          <ul className="space-y-4">
            <li>Consistent returns independent of market direction</li>
            <li>Fully automated operation</li>
            <li>Advanced risk management</li>
            <li>Real-time monitoring and alerts</li>
            <li>Detailed performance analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 