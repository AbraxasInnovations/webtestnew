'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function GreenprintOverview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

        <h1 className="text-4xl font-bold mb-8 text-primary-light">Comprehensive Overview</h1>

        {/* Advantages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary-light">Advantages Over Manual Trading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-light">24/7 Operation</h3>
              <p className="text-gray-300">
                Our bot operates continuously, monitoring markets and executing trades without fatigue. This ensures you never miss an opportunity, regardless of time zones or market hours.
              </p>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-light">Emotional Discipline</h3>
              <p className="text-gray-300">
                Remove emotional bias from your trading. The bot executes your strategy consistently, without fear or greed influencing decisions.
              </p>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-light">Lightning Fast Execution</h3>
              <p className="text-gray-300">
                React to market changes in milliseconds. Our bot can process and execute trades faster than any human trader.
              </p>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-primary-light">Advanced Data Processing</h3>
              <p className="text-gray-300">
                Analyze vast amounts of market data simultaneously, identifying patterns and opportunities that would be impossible to spot manually.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Management Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary-light">Risk Management</h2>
          <div className="bg-gray-800/30 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-light">Protection Features</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span><strong>Flash Crash Protection:</strong> Automatic trading pause during unusual market conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span><strong>Position Limits:</strong> Configurable maximum exposure per asset</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span><strong>Margin Monitoring:</strong> Continuous monitoring of margin levels</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-light">Safety Measures</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span><strong>Emergency Close:</strong> Automatic position closure if risk thresholds are crossed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span><strong>Delta Neutrality:</strong> Maintain market neutrality to minimize directional risk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span><strong>Risk Metrics:</strong> Real-time monitoring of key risk indicators</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary-light">Technical Architecture</h2>
          <div className="bg-gray-800/30 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-light">Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Built on enterprise-grade infrastructure with redundancy and failover capabilities. Our system architecture ensures high availability and reliable performance.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary-light mr-2">•</span>
                    High-frequency trading capabilities
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-light mr-2">•</span>
                    Load-balanced servers
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-light mr-2">•</span>
                    Real-time data processing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-light">Security</h3>
                <p className="text-gray-300 mb-4">
                  Multiple layers of security measures protect your assets and trading operations. We implement industry best practices for cybersecurity.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary-light mr-2">•</span>
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-light mr-2">•</span>
                    Regular security audits
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-light mr-2">•</span>
                    Multi-factor authentication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 