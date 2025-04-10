'use client';
import React from 'react';
import Link from 'next/link';

export default function Guide() {
  return (
    <div className="min-h-screen bg-[#0a1512] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/greenprint" className="inline-flex items-center text-sm text-green-400 hover:text-green-300 mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Documentation
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Getting Started Guide</h1>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-12 mb-6">Step 1: Setup</h2>
          <ul className="space-y-4">
            <li>Create an account on supported exchanges</li>
            <li>Generate API keys with trading permissions</li>
            <li>Configure your risk parameters</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Step 2: Configuration</h2>
          <ul className="space-y-4">
            <li>Set your trading pairs</li>
            <li>Define position sizes</li>
            <li>Set up notifications</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Step 3: Launch</h2>
          <ul className="space-y-4">
            <li>Review your settings</li>
            <li>Start with small positions</li>
            <li>Monitor performance</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Best Practices</h2>
          <ul className="space-y-4">
            <li>Regularly check your bot's performance</li>
            <li>Keep API keys secure</li>
            <li>Maintain sufficient balance</li>
            <li>Stay informed about market conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 