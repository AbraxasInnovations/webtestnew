'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function TermsAndConditions() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
            <div className="bg-gray-800/30 rounded-lg p-8 space-y-6 text-gray-300">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-3">ABRAXAS GREENPRINT FUNDING BOT - TERMS OF SERVICE</h2>
                <p className="text-sm text-gray-400 mb-6">Last Updated: 02/20/2025</p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. ACCEPTANCE OF TERMS</h2>
                <p className="mb-3">
                  Welcome to Abraxas Greenprint Funding Bot ("Service"). By accessing or using our Service, you agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and any additional terms and conditions that may apply. If you do not agree with these Terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. DESCRIPTION OF SERVICE</h2>
                <p className="mb-3">
                  Abraxas Greenprint Funding Bot provides automated market analysis and financial opportunity detection tools for digital asset markets. The Service operates by analyzing market data, identifying potential opportunities, and executing transactions on behalf of users according to predefined parameters.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. SUBSCRIPTION TIERS AND PAYMENT</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">3.1 Subscription Options</h3>
                <p className="mb-3">
                  We offer three subscription tiers with varying features and capabilities:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Tier 1: Basic market analysis and opportunity detection</li>
                  <li>Tier 2: Enhanced analysis with additional market coverage</li>
                  <li>Tier 3: Premium service with advanced features and priority support</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">3.2 Payment</h3>
                <p className="mb-3">
                  All payments are processed securely through Paddle as our payment processor. By subscribing to our Service, you agree to pay all fees associated with your selected subscription tier. All fees are quoted in US Dollars unless otherwise specified.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">3.3 Subscription Renewal</h3>
                <p className="mb-3">
                  Subscriptions automatically renew for the same duration as the original subscription period unless canceled before the renewal date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. USER OBLIGATIONS</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">4.1 Accurate Information</h3>
                <p className="mb-3">
                  You must provide accurate and complete information when setting up your account and connecting to external services.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">4.2 API Keys and Security</h3>
                <p className="mb-3">
                  You are responsible for maintaining the security and confidentiality of your API keys and other credentials. We encrypt all sensitive information but cannot guarantee absolute security.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">4.3 Compliance with Laws</h3>
                <p className="mb-3">
                  You agree to use the Service in compliance with all applicable laws and regulations, including but not limited to financial regulations, tax laws, and digital asset regulations in your jurisdiction.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">4.4 Acceptable Use</h3>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Use the Service for any illegal activity</li>
                  <li>Attempt to decompile, reverse engineer, or otherwise attempt to discover the source code of our Service</li>
                  <li>Interfere with the proper working of the Service</li>
                  <li>Bypass any measures we use to restrict access to the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. RISK DISCLOSURE</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">5.1 Investment Risks</h3>
                <p className="mb-3">
                  Digital asset markets involve significant risk. Past performance is not indicative of future results. You may lose some or all of your invested capital.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">5.2 Technical Risks</h3>
                <p className="mb-3">
                  The Service relies on external APIs, market data feeds, and internet connectivity. Interruptions, delays, or failures in these systems may impact the Service's performance.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">5.3 Market Volatility</h3>
                <p className="mb-3">
                  Digital asset markets can be highly volatile and unpredictable. Rapid price movements may occur at any time and may result in significant losses.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">5.4 No Financial Advice</h3>
                <p className="mb-3">
                  The Service does not provide investment advice, financial advice, or any other kind of professional advice. The Service is a tool, and all decisions made using the Service are your own responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. LIMITATION OF LIABILITY</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">6.1 No Guarantees</h3>
                <p className="mb-3">
                  We make no guarantees regarding the performance, accuracy, or reliability of the Service. The Service is provided "as is" without warranties of any kind.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">6.2 Limitation of Liability</h3>
                <p className="mb-3">
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or relating to your use of the Service.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">6.3 Maximum Liability</h3>
                <p className="mb-3">
                  In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by you to us for the Service during the twelve (12) months preceding the event giving rise to the liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. MODIFICATION OF SERVICE</h2>
                <p className="mb-3">
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time without prior notice. This includes changes to features, functionality, and subscription tiers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. TERMINATION</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">8.1 Termination by User</h3>
                <p className="mb-3">
                  You may terminate your subscription at any time by following the cancellation procedures. No refunds will be issued for the current billing period.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">8.2 Termination by Us</h3>
                <p className="mb-3">
                  We reserve the right to terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. INTELLECTUAL PROPERTY</h2>
                <p className="mb-3">
                  All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, and software, are the exclusive property of Abraxas Greenprint Funding Bot and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. GOVERNING LAW</h2>
                <p className="mb-3">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. CHANGES TO TERMS</h2>
                <p className="mb-3">
                  We reserve the right to modify these Terms at any time. If we make changes, we will provide notice of such changes, such as by sending an email or providing a notice through our Service. Your continued use of the Service following the posting of revised Terms means you accept and agree to the changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">12. CONTACT INFORMATION</h2>
                <p className="mb-3">
                  If you have any questions about these Terms, please contact us at <a href="mailto:derekp@abxinnovate.com" className="text-emerald-400 hover:text-emerald-300">derekp@abxinnovate.com</a>.
                </p>
              </section>

              <p className="mt-6">
                By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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