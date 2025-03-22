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
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">Return Policy</h1>
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-5 text-gray-300">
              <div className="mb-6 border-b border-gray-700 pb-4">
                <h2 className="text-xl font-semibold text-white mb-2">ABRAXAS GREENPRINT FUNDING BOT - REFUND POLICY</h2>
                <p className="text-sm text-gray-400">Last Updated: 02/20/2025</p>
              </div>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">1. NO REFUND POLICY</h2>
                <p className="text-sm leading-relaxed mb-3">
                  <strong>All subscription payments for the Abraxas Greenprint Funding Bot service are non-refundable.</strong> When you subscribe to our service, you understand and agree that due to the immediate access to proprietary digital analysis tools, algorithms, and methodologies, we cannot offer refunds.
                </p>
                <p className="text-sm leading-relaxed">
                  If you wish to cancel your subscription, you may do so at any time by:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Navigating to the subscription management section within our Telegram bot</li>
                  <li>Following the cancellation instructions provided there</li>
                  <li>Confirming your cancellation</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  Your subscription will remain active until the end of your current billing period, after which it will not renew.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">2. RATIONALE FOR NO-REFUND POLICY</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Our no-refund policy is based on the following factors:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Upon subscribing, you gain immediate access to our proprietary trading algorithms and analysis tools, which represent significant intellectual property value.</li>
                  <li>Our service provides information and methods that, once accessed, cannot be "returned" or "unseen."</li>
                  <li>We allocate computing resources and infrastructure specifically to your account upon subscription activation.</li>
                </ul>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">3. EXCEPTIONS FOR SERVICE UNAVAILABILITY</h2>
                <p className="text-sm leading-relaxed mb-3">
                  In the rare event that our service experiences a significant, extended outage (more than 72 consecutive hours) due to our systems and not external factors beyond our control or your setup, we may, at our sole discretion, offer:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Service credit for the affected period</li>
                  <li>Extended subscription period</li>
                  <li>Other appropriate compensation</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  Such compensation will be proportional to the duration of the service unavailability and will not include monetary refunds.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">4. UNAUTHORIZED CHARGES</h2>
                <p className="text-sm leading-relaxed">
                  If you believe you have been charged without authorization, please contact our support team immediately at <a href="mailto:derekp@abxinnovate.com" className="text-gray-300 hover:text-gray-100 underline">derekp@abxinnovate.com</a> with details of the transaction. We will investigate all such claims and, if verified, we will process appropriate adjustments.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">5. SUBSCRIPTION TIER CHANGES</h2>
                <p className="text-sm leading-relaxed">
                  If you upgrade to a higher subscription tier, the new rate will be charged immediately, and your billing cycle will reset. The additional value from the remaining portion of your previous subscription will be credited to your new subscription. Downgrades, however, will not result in any refund or credit and will take effect at the end of your current billing cycle.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">6. FREE TRIAL PERIOD</h2>
                <p className="text-sm leading-relaxed">
                  If we offer a free trial period and you choose not to continue with a paid subscription, no action is required from you to avoid charges as we implement a voluntary opt-in payment model. No charges will be processed unless you explicitly sign up for a paid tier after your trial concludes.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">7. PAYMENT DISPUTES</h2>
                <p className="text-sm leading-relaxed">
                  We strongly encourage you to contact our support team before initiating any payment disputes or chargebacks with your payment provider. Unauthorized chargebacks or payment disputes may result in immediate termination of your account and access to our services, as well as potential administrative fees.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">8. MODIFICATIONS TO THIS POLICY</h2>
                <p className="text-sm leading-relaxed">
                  We reserve the right to modify this Refund Policy at any time. Changes will be effective when posted on our website or communicated directly to you. Your continued use of our service after any changes to this policy will constitute your acceptance of such changes.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">9. CONTACT US</h2>
                <p className="text-sm leading-relaxed">
                  If you have any questions about our Refund Policy, please contact us at <a href="mailto:derekp@abxinnovate.com" className="text-gray-300 hover:text-gray-100 underline">derekp@abxinnovate.com</a>.
                </p>
              </section>

              <p className="mt-6 text-sm">
                By subscribing to our service, you acknowledge that you have read, understood, and agree to this Refund Policy.
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