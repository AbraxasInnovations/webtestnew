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
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">Terms of Service</h1>
            <div className="bg-gray-900/50 rounded-lg p-8 space-y-5 text-gray-300">
              <div className="mb-6 border-b border-gray-700 pb-4">
                <h2 className="text-xl font-semibold text-white mb-2">ABRAXAS GREENPRINT FUNDING BOT - TERMS OF SERVICE</h2>
                <p className="text-sm text-gray-400">Last Updated: 02/20/2025</p>
              </div>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">1. ACCEPTANCE OF TERMS</h2>
                <p className="text-sm leading-relaxed mb-3">
                  By accessing or using the Abraxas Greenprint Funding Bot ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access or use the Service.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">2. DESCRIPTION OF SERVICE</h2>
                <p className="text-sm leading-relaxed mb-3">
                  The Service is a digital market analysis tool that provides automated trading signals and market insights via Telegram. The Service does not directly execute trades but provides information and signals that users may choose to act upon at their sole discretion.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">3. SUBSCRIPTION TIERS AND PAYMENT</h2>
                <p className="text-sm leading-relaxed mb-3">
                  We offer multiple subscription tiers with different features and pricing models. All payments are processed through Paddle as our payment processor. By subscribing to our Service, you agree to:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Pay all fees associated with your selected subscription tier</li>
                  <li>Provide accurate and complete payment information</li>
                  <li>Accept our no-refund policy as detailed in our Refund Policy</li>
                  <li>Authorize recurring charges on a monthly or annual basis, depending on your selected billing cycle</li>
                </ul>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">4. USER OBLIGATIONS</h2>
                <p className="text-sm leading-relaxed mb-3">
                  As a user of our Service, you agree to:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Maintain the security of your account credentials</li>
                  <li>Not share your subscription access with others</li>
                  <li>Use the Service for lawful purposes and in compliance with all applicable laws</li>
                  <li>Accept full responsibility for decisions made based on our Service's information</li>
                  <li>Not reverse engineer or attempt to extract the source code of our algorithms</li>
                  <li>Not use automated methods to scrape or extract data from our Service</li>
                </ul>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">5. RISK DISCLOSURE</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Trading digital assets involves significant risk and can lead to partial or total loss of capital. By using our Service, you acknowledge that:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Past performance is not indicative of future results</li>
                  <li>Our signals and insights are not financial advice</li>
                  <li>Trading decisions should be made based on your own research and risk tolerance</li>
                  <li>Market conditions can change rapidly, and signals may not always be accurate</li>
                  <li>You alone are responsible for the management of your capital and trading decisions</li>
                </ul>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">6. LIMITATION OF LIABILITY</h2>
                <p className="text-sm leading-relaxed mb-3">
                  To the maximum extent permitted by applicable law, in no event shall Abraxas or its suppliers be liable for:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Trading losses or missed opportunities resulting from using or not using our signals</li>
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or trading opportunities</li>
                  <li>Cost of substitute services</li>
                  <li>Technical issues with third-party platforms or exchanges that may affect signal execution</li>
                </ul>
                <p className="text-sm leading-relaxed mb-3">
                  Our total liability for any claim arising from or related to these Terms shall not exceed the amount you paid for the Service during the 12 months preceding the claim.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">7. MODIFICATION OF SERVICE</h2>
                <p className="text-sm leading-relaxed mb-3">
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time without prior notice. This includes:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-sm">
                  <li>Changing, adding, or removing features and functionalities</li>
                  <li>Updating algorithms and signal parameters</li>
                  <li>Adjusting subscription tiers and pricing</li>
                  <li>Modifying user interfaces and delivery methods</li>
                </ul>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">8. TERMINATION</h2>
                <p className="text-sm leading-relaxed mb-3">
                  We reserve the right to terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">9. INTELLECTUAL PROPERTY</h2>
                <p className="text-sm leading-relaxed mb-3">
                  All content, features, and functionality of the Service, including but not limited to algorithms, trading signals, analytical methodologies, and user interface, are owned by Abraxas and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">10. GOVERNING LAW</h2>
                <p className="text-sm leading-relaxed mb-3">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes relating to these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of the United States.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">11. CHANGES TO TERMS</h2>
                <p className="text-sm leading-relaxed mb-3">
                  We reserve the right to modify these Terms at any time. We will provide notice of significant changes via the Service or our website. Your continued use of the Service after such modifications will constitute your acknowledgment and acceptance of the modified Terms.
                </p>
              </section>

              <section className="pb-4">
                <h2 className="text-lg font-semibold mb-3 text-white">12. CONTACT US</h2>
                <p className="text-sm leading-relaxed mb-3">
                  If you have any questions about these Terms, please contact us at <a href="mailto:support@abxinnovate.com" className="text-gray-300 hover:text-gray-100 underline">support@abxinnovate.com</a>.
                </p>
              </section>

              <p className="mt-6 text-sm">
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