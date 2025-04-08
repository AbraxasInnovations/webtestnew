'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function GreenprintGuide() {
  return (
    <div className="min-h-screen bg-[#0a1512] text-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Top Navigation */}
      <nav className="fixed w-full bg-[#0a1512]/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/greenprint" className="h-8">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas"
                className="h-full w-auto"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/greenprint" 
            className="inline-flex items-center text-primary-light hover:text-primary-light/90"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Greenprint
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-primary-light">Step-by-Step Guide</h1>

        {/* Steps */}
        <div className="space-y-16">
          {/* Step 1: Choose a Tier */}
          <section className="relative">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-light">1</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-primary-light">Choose Your Tier</h2>
                <p className="text-gray-300 mb-6">
                  Select from our range of tiers designed to match your trading needs. Each tier comes with its own set of features and capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary-light">Standard Tier</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Basic trading features
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Standard support
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Limited API access
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary-light">Premium Tier</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Advanced trading features
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Priority support
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Full API access
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2: Setup */}
          <section className="relative">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-light">2</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-primary-light">Initial Setup</h2>
                <p className="text-gray-300 mb-6">
                  Configure your trading environment and connect your accounts. Follow our security best practices for optimal protection.
                </p>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary-light">Setup Checklist</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">1.</span>
                      <span>Create API keys with appropriate permissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">2.</span>
                      <span>Configure security settings and 2FA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">3.</span>
                      <span>Set up wallet connections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">4.</span>
                      <span>Test connections with minimal amounts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3: Strategy Configuration */}
          <section className="relative">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-light">3</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-primary-light">Configure Your Strategy</h2>
                <p className="text-gray-300 mb-6">
                  Customize your trading parameters and risk management settings to match your investment goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary-light">Trading Parameters</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Position size limits
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Trading pairs selection
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Execution speed
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary-light">Risk Settings</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Stop-loss levels
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Maximum drawdown
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-light mr-2">•</span>
                        Emergency protocols
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4: Launch */}
          <section className="relative">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-light">4</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-primary-light">Launch Your Bot</h2>
                <p className="text-gray-300 mb-6">
                  Start your trading bot and monitor its performance. Our dashboard provides real-time insights into your trading operations.
                </p>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary-light">Launch Checklist</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">1.</span>
                      <span>Verify all configurations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">2.</span>
                      <span>Start with minimal test trades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">3.</span>
                      <span>Monitor initial performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-light mr-2">4.</span>
                      <span>Scale up gradually</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Next Steps */}
        <div className="mt-16 bg-gray-800/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-light">Next Steps</h2>
          <p className="text-gray-300 mb-6">
            Now that you've set up your bot, explore our additional resources to optimize your trading strategy:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/documentation" className="block bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-primary-light">Documentation</h3>
              <p className="text-gray-300">
                Detailed guides and API references
              </p>
            </Link>
            <Link href="/tutorials" className="block bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-primary-light">Tutorials</h3>
              <p className="text-gray-300">
                Step-by-step learning resources
              </p>
            </Link>
            <Link href="/support" className="block bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-primary-light">Support</h3>
              <p className="text-gray-300">
                Get help from our team
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 