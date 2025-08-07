'use client';
import React from 'react';
import Link from 'next/link';

export default function GreenprintPricing() {
  return (
    <div className="min-h-screen bg-gray-50" style={{
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.8) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    }}>
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="h-8">
                <img 
                  src="/images/whitegplogo.PNG"
                  alt="GreenPrint"
                  className="h-full w-auto"
                />
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/greenprint/test-layout#features" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Features</Link>
                <Link href="/greenprint/pricing" className="text-white font-medium text-sm">Pricing</Link>
                <Link href="/greenprint/test-layout#about" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">About</Link>
                <Link href="/greenprint/docs" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Documentation</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://t.me/AbraxasInnovations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img 
              src="/images/blackgplogo.png"
              alt="GreenPrint Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-5xl font-normal text-gray-900 leading-tight font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
              Pricing
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16 font-medium">
            Choose the perfect plan for your trading automation needs. All plans include lifetime access and no monthly fees.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden" style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), 0 4px 16px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$997</div>
                  <p className="text-gray-600 font-medium">One-time payment</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Basic funding rate arbitrage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Telegram bot access</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Lifetime access</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Basic support</span>
                  </li>
                </ul>
                <a 
                  href="https://t.me/AbraxasInnovations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-center block border border-gray-700"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden" style={{
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(16, 185, 129, 0.6)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), 0 4px 16px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(16, 185, 129, 0.2)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-emerald-400/10 rounded-2xl"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">Most Popular</span>
              </div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$1,997</div>
                  <p className="text-gray-600 font-medium">One-time payment</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Everything in Starter</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Advanced CLMM strategies</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Multi-exchange support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Backtesting tools</span>
                  </li>
                </ul>
                <a 
                  href="https://t.me/AbraxasInnovations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 text-center block border border-emerald-500"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden" style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), 0 4px 16px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$4,997</div>
                  <p className="text-gray-600 font-medium">One-time payment</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Custom strategies</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">API access</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">White-label options</span>
                  </li>
                </ul>
                <a 
                  href="https://t.me/AbraxasInnovations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-center block border border-gray-700"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/images/whitegplogo.PNG"
                alt="GreenPrint"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Professional trading tools for the modern investor.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Product</h3>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><Link href="/greenprint/test-layout#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/greenprint/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/greenprint/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Company</h3>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><Link href="/greenprint/test-layout#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-xs">
            <p>© 2025 Abraxas Innovations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 