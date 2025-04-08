'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Menu, X, ArrowRight } from 'lucide-react';

export default function Greenprint() {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close menu when clicking a navigation link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a1512] text-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Top Navigation */}
      <nav className="fixed w-full bg-[#0a1512]/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="h-8">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas"
                className="h-full w-auto"
              />
            </Link>
            <div className="hidden md:flex space-x-6 text-sm">
              <Link href="/documentation" className="text-gray-400 hover:text-white">Documentation</Link>
              <Link href="/ecosystem" className="text-gray-400 hover:text-white">Ecosystem</Link>
              <Link href="/portal" className="text-gray-400 hover:text-white">Portal</Link>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-black/30 rounded-lg px-3 py-1.5 border border-gray-800/50">
            <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent text-sm text-gray-300 placeholder-gray-500 focus:outline-none w-64"
            />
            <span className="text-xs text-gray-600 ml-2">⌘K</span>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex min-h-screen pt-16">
        {/* Left Sidebar */}
        <div className="w-64 fixed h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-800/50 bg-[#0a1512]/80 backdrop-blur-sm">
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Overview</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#introduction" className="text-sm text-gray-300 hover:text-white">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="#getting-started" className="text-sm text-gray-300 hover:text-white">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/greenprint/overview" className="text-sm text-gray-300 hover:text-white">
                    Comprehensive Overview
                  </Link>
                </li>
                <li>
                  <Link href="/greenprint/guide" className="text-sm text-gray-300 hover:text-white">
                    Step-by-Step Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Products</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#funding-bot" className="text-sm text-gray-300 hover:text-white">
                    Funding Bot
                  </Link>
                </li>
                <li>
                  <Link href="#clmm-bot" className="text-sm text-gray-300 hover:text-white">
                    CLMM Bot
                  </Link>
                </li>
                <li>
                  <Link href="#data-analysis" className="text-sm text-gray-300 hover:text-white">
                    Data Analysis Tool
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Resources</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#documentation" className="text-sm text-gray-300 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#tutorials" className="text-sm text-gray-300 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="text-sm text-gray-300 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="pl-64 w-full">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Hero Section */}
            <section className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to <span className="text-primary-light">Greenprint</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Discover our suite of sophisticated trading tools designed to help you capitalize on market inefficiencies in the cryptocurrency space.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="/greenprint/guide" 
                  className="group block bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary-light">Quick Start Guide</h3>
                    <ArrowRight className="w-5 h-5 text-primary-light transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-300">
                    Get up and running with our step-by-step guide for new users.
                  </p>
                </Link>
                <Link 
                  href="/greenprint/overview" 
                  className="group block bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary-light">Comprehensive Overview</h3>
                    <ArrowRight className="w-5 h-5 text-primary-light transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-300">
                    Deep dive into features, advantages, and technical details.
                  </p>
                </Link>
              </div>
            </section>

            {/* Getting Started Cards */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-primary-light">Getting Started</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-light">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-light">Choose Your Tier</h3>
                  <p className="text-gray-300 mb-4">
                    Select the tier that best matches your trading needs and volume.
                  </p>
                  <Link href="/greenprint/guide#tiers" className="text-primary-light hover:text-primary-light/90">
                    View tiers →
                  </Link>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-light">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-light">Setup</h3>
                  <p className="text-gray-300 mb-4">
                    Configure your environment and connect your accounts securely.
                  </p>
                  <Link href="/greenprint/guide#setup" className="text-primary-light hover:text-primary-light/90">
                    Setup guide →
                  </Link>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-light">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-light">Launch</h3>
                  <p className="text-gray-300 mb-4">
                    Start trading with our automated systems and monitor performance.
                  </p>
                  <Link href="/greenprint/guide#launch" className="text-primary-light hover:text-primary-light/90">
                    Launch guide →
                  </Link>
                </div>
              </div>
            </section>

            {/* Features Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-primary-light">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary-light">Automated Trading</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-primary-light mr-2">•</span>
                      24/7 market monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-light mr-2">•</span>
                      Instant execution
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-light mr-2">•</span>
                      Smart order routing
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary-light">Risk Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-primary-light mr-2">•</span>
                      Position limits
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-light mr-2">•</span>
                      Auto stop-loss
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-light mr-2">•</span>
                      Emergency protocols
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                © 2025 Abraxas Innovations. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/AbraxasInnovations" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.98 1.26-5.61 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.24.27-.49.71-.74C7.19 11.73 8.87 11 11.2 9.6c3.71-2.21 4.48-2.6 4.98-2.61.11 0 .35.03.51.14.13.09.17.21.18.27-.01.06-.01.24-.02.27l-.21 1.13z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Legal Links - Added Return Policy */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/return-policy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 