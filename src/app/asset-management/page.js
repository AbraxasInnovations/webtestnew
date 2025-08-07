'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function AssetManagement() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas Innovations Logo"
                className="h-12 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-white focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-4 items-center">
                <Link 
                  href="/" 
                  className="text-lg hover:text-blue-400 transition-colors w-full text-center py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-3xl md:text-6xl font-bold mb-8">Asset Management Strategy</h1>
        
        {/* Strategy Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Positive Carry Strategies</h2>
            <p className="text-gray-300 mb-4">
              Our approach leverages market inefficiencies in the DeFi ecosystem to generate 
              consistent yield through positive carry trades. We identify opportunities where 
              the cost of capital is lower than the potential returns, creating sustainable 
              income streams.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Yield farming optimization</li>
              <li>Liquidity provision strategies</li>
              <li>Cross-chain arbitrage</li>
              <li>Delta-neutral positions</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Asymmetric Opportunities</h2>
            <p className="text-gray-300 mb-4">
              We deploy capital strategically to capture asymmetric returns in the evolving 
              DeFi landscape. Our risk management framework ensures optimal position sizing 
              while maintaining significant upside potential.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Early protocol participation</li>
              <li>Strategic token positions</li>
              <li>Governance opportunities</li>
              <li>Market neutral strategies</li>
            </ul>
          </div>
        </div>

        {/* Regulatory Landscape */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">The Golden Age of Crypto Regulation</h2>
          <p className="text-gray-300 mb-6">
            As the regulatory landscape evolves to embrace Defi, we're positioned 
            to capitalize on the increasing institutional adoption and market maturity. 
            This transition creates unique opportunities for sophisticated investors to 
            participate in the future of finance.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Institutional Adoption</h3>
              <p className="text-gray-300">
                Leveraging increasing institutional participation and deepening liquidity 
                in digital asset markets.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Regulatory Clarity</h3>
              <p className="text-gray-300">
                Benefiting from emerging regulatory frameworks that provide clear 
                operational guidelines.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Market Maturity</h3>
              <p className="text-gray-300">
                Capitalizing on sophisticated financial instruments and improved 
                market infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
