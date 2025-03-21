'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Greenprint() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-6 h-6" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gray-400">Green</span>print Suite
          </h1>
          
          <div className="space-y-16">
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Greenprint is a comprehensive suite of trading tools designed to help serious traders capitalize on market inefficiencies in the cryptocurrency space. Our tools provide institutional-grade capabilities to retail traders, allowing you to automate your trading strategies and generate returns while you sleep.
              </p>
            </section>

            {/* Products Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Our Products</h2>
              
              {/* Funding Bot */}
              <div className="bg-gray-800/50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-300 mb-4">Greenprint Funding Bot</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 mb-4">
                      Our flagship product automates the process of capturing funding rate opportunities across various exchanges. Set up once and let it generate consistent returns through market-neutral strategies.
                    </p>
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                      <li>Automated funding rate arbitrage</li>
                      <li>Multi-exchange support</li>
                      <li>Risk management controls</li>
                      <li>Real-time monitoring</li>
                      <li>Custom parameter settings</li>
                    </ul>
                    <a 
                      href="https://t.me/AbraxasInnovations" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Download Now - $50
                    </a>
                  </div>
                  <div className="bg-black/50 rounded-lg p-6">
                    <h4 className="font-bold mb-4">Technical Specifications:</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li><span className="font-bold">Language:</span> Python</li>
                      <li><span className="font-bold">Supported Exchanges:</span> Binance, OKX, Bybit</li>
                      <li><span className="font-bold">Minimum Requirements:</span> 24/7 running environment</li>
                      <li><span className="font-bold">Updates:</span> Free lifetime updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CLMM Bot - Coming Soon */}
              <div className="bg-gray-800/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Greenprint CLMM Bot</h3>
                <p className="text-gray-400 mb-4">
                  Coming Soon - Our advanced concentrated liquidity management bot will help you optimize your liquidity positions across various DEXs, maximizing your yield potential while minimizing impermanent loss.
                </p>
                <div className="inline-block bg-gray-700/50 text-gray-400 font-bold py-2 px-4 rounded-lg">
                  Coming Soon
                </div>
              </div>

              {/* Data Analysis Tool - Coming Soon */}
              <div className="bg-gray-800/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Greenprint Data Analysis Tool</h3>
                <p className="text-gray-400 mb-4">
                  Coming Soon - A comprehensive market analysis tool that helps you identify trading opportunities through advanced data analytics and visualization.
                </p>
                <div className="inline-block bg-gray-700/50 text-gray-400 font-bold py-2 px-4 rounded-lg">
                  Coming Soon
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 