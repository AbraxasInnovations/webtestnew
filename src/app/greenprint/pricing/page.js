'use client';
import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0a1512] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/greenprint" className="inline-flex items-center text-sm text-green-400 hover:text-green-300 mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Documentation
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
        <p className="text-xl text-gray-300 mb-12">Choose the plan that best fits your trading needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-gray-800/30 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Basic</h2>
            <div className="text-4xl font-bold mb-6">
              $99<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic trading features
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Standard support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Up to 3 trading pairs
              </li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-gray-800/30 rounded-lg p-8 border border-green-500 transform scale-105">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
              Popular
            </div>
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <div className="text-4xl font-bold mb-6">
              $199<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced trading features
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Up to 10 trading pairs
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced analytics
              </li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-gray-800/30 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <div className="text-4xl font-bold mb-6">
              Custom<span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom features
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                24/7 dedicated support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unlimited trading pairs
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom integrations
              </li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards and cryptocurrency payments.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Can I upgrade my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Is there a free trial?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">What kind of support do you offer?</h3>
              <p className="text-gray-300">We offer email support for all plans, with priority support for Pro and Enterprise customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 