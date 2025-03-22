'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function ReturnPolicy() {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-12 nav-logo">
              <Link href="/">
                <img 
                  src="/images/abaraxaslogo.jpeg"
                  alt="Abraxas"
                  className="h-full w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="hover:text-gray-300 transition-colors nav-items">About</Link>
              <Link href="/#services" className="hover:text-gray-300 transition-colors nav-items">Services</Link>
              <Link href="/#greenprint" className="hover:text-gray-300 transition-colors nav-items">Greenprint</Link>
              <Link href="/#contact" className="hover:text-gray-300 transition-colors nav-items">Contact</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu} 
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
                  href="/#about" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  About
                </Link>
                <Link 
                  href="/#services" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Services
                </Link>
                <Link 
                  href="/#greenprint" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Greenprint
                </Link>
                <Link 
                  href="/#contact" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2"
                  onClick={handleNavClick}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Return Policy</h1>
            <div className="bg-gray-800/30 rounded-lg p-8 space-y-6 text-gray-300">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-3">ABRAXAS GREENPRINT FUNDING BOT - REFUND POLICY</h2>
                <p className="text-sm text-gray-400 mb-6">Last Updated: 02/20/2025</p>
                <p>
                  This Refund Policy ("Policy") outlines the terms and conditions regarding refunds for subscriptions to Abraxas Greenprint Funding Bot ("Service"). By subscribing to our Service, you acknowledge and agree to this Policy.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. NO REFUND POLICY</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">1.1 Non-Refundable Subscriptions</h3>
                <p className="mb-3">
                  All subscription payments for the Service are <strong>non-refundable</strong>. Due to the nature of digital services and the immediate access to our proprietary technology platform, we maintain a strict no-refund policy for all subscription tiers.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">1.2 Subscription Cancellation</h3>
                <p className="mb-3">
                  You may cancel your subscription at any time through your account settings or by contacting our support team. Upon cancellation:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Your subscription will remain active until the end of the current billing period</li>
                  <li>No partial refunds will be issued for unused portions of the current billing period</li>
                  <li>Automatic renewal will be disabled for future billing cycles</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">1.3 Rationale for No-Refund Policy</h3>
                <p className="mb-3">
                  Our strict no-refund policy is based on the following considerations:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Immediate access to proprietary digital market analysis tools</li>
                  <li>Continuous real-time data processing and computational resources allocated upon subscription</li>
                  <li>Operational costs incurred regardless of individual usage patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. EXCEPTIONS</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">2.1 Service Unavailability</h3>
                <p className="mb-3">
                  In the rare event that our Service is completely unavailable for a continuous period exceeding 72 hours due solely to our technical failures (and not due to external factors, third-party integrations, or scheduled maintenance), we may consider, at our sole discretion, providing service credits for future use.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">2.2 Unauthorized Charges</h3>
                <p className="mb-3">
                  If you believe your account has been charged without authorization, please contact our support team immediately. With proper verification, we will investigate unauthorized payment claims in accordance with Paddle's payment dispute procedures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. SUBSCRIPTION TIER CHANGES</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">3.1 Upgrading</h3>
                <p className="mb-3">
                  When upgrading from a lower to a higher subscription tier, the new tier will be activated immediately. The remaining value of your current subscription will be prorated and applied as a credit toward the higher tier.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">3.2 Downgrading</h3>
                <p className="mb-3">
                  When downgrading from a higher to a lower subscription tier, the lower tier will take effect at the start of the next billing cycle. No refunds will be issued for the difference in price for the current billing period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. FREE TRIAL PERIODS</h2>
                <p className="mb-3">
                  If we offer free trial periods, no payment will be required during the trial. Upon trial expiration, your selected subscription will activate and billing will commence automatically unless you cancel before the trial period ends.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. PAYMENT DISPUTES AND CHARGEBACKS</h2>
                <p className="mb-3">
                  Initiating payment disputes or chargebacks with your payment provider instead of contacting us directly may result in the immediate termination of your account and access to the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. MODIFICATIONS TO THIS POLICY</h2>
                <p className="mb-3">
                  We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. It is your responsibility to review this Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. CONTACT INFORMATION</h2>
                <p className="mb-3">
                  If you have questions about this Refund Policy or need to discuss exceptional circumstances, please contact our support team at <a href="mailto:derekp@abxinnovate.com" className="text-emerald-400 hover:text-emerald-300">derekp@abxinnovate.com</a>.
                </p>
              </section>

              <p className="mt-6">
                By subscribing to our Service, you acknowledge that you have read, understood, and agree to this Refund Policy.
              </p>
            </div>
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

            {/* Legal Links */}
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