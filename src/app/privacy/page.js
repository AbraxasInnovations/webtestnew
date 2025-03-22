'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <div className="bg-gray-800/30 rounded-lg p-8 space-y-6 text-gray-300">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-3">ABRAXAS GREENPRINT FUNDING BOT - PRIVACY NOTICE</h2>
                <p className="text-sm text-gray-400 mb-6">Last Updated: 02/20/2025</p>
                <p>
                  Your privacy is important to us. This Privacy Notice explains how Abraxas Greenprint Funding Bot ("we," "our," or "us") collects, uses, discloses, and safeguards your information when you use our digital market analysis service ("Service").
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. INFORMATION WE COLLECT</h2>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">1.1 Account Information</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Telegram user ID and username</li>
                  <li>Subscription status and tier</li>
                  <li>Payment information (processed by our payment processor, Paddle)</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">1.2 Service Configuration Data</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>API keys and access credentials for external platforms (encrypted)</li>
                  <li>Selected trading pairs and preferences</li>
                  <li>Configuration settings and parameters</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">1.3 Usage Information</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Service interaction logs</li>
                  <li>Performance metrics and statistics</li>
                  <li>Technical diagnostics and error reports</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">1.4 Technical Data</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Device information and IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Connection information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. HOW WE USE YOUR INFORMATION</h2>
                <p className="mb-3">We use your information for the following purposes:</p>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">2.1 Service Provision</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>To establish and maintain your account</li>
                  <li>To provide access to our Service functionality</li>
                  <li>To process transactions and execute automated operations</li>
                  <li>To authenticate your identity and maintain security</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">2.2 Service Improvement</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>To monitor and analyze usage patterns</li>
                  <li>To identify and fix technical issues</li>
                  <li>To develop new features and improve existing ones</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">2.3 Communication</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>To send service-related notifications</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To provide important updates about your account</li>
                </ul>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">2.4 Legal and Compliance</h3>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>To comply with applicable laws and regulations</li>
                  <li>To enforce our Terms of Service</li>
                  <li>To prevent potentially illegal activities</li>
                  <li>To protect our rights and the rights of others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. DATA SECURITY</h2>
                <p className="mb-3">
                  We implement appropriate technical and organizational security measures designed to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Encryption of sensitive data, including API keys and credentials</li>
                  <li>Regular security assessments and testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Monitoring for suspicious activities</li>
                </ul>
                <p className="mb-3">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. DATA RETENTION</h2>
                <p className="mb-3">
                  We retain your information for as long as your account is active or as needed to provide you with our Service. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. THIRD-PARTY SERVICE PROVIDERS</h2>
                <p className="mb-3">
                  We may share your information with third-party service providers that perform services on our behalf, including:
                </p>
                
                <h3 className="text-xl font-bold mb-2 text-emerald-300">5.1 Payment Processing</h3>
                <p className="mb-3">
                  Paddle processes all subscription payments. When you make a payment, you provide your payment information directly to Paddle, whose use of your personal information is governed by their privacy policy.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">5.2 Cloud Infrastructure</h3>
                <p className="mb-3">
                  Our Service is hosted on secure cloud infrastructure providers that maintain high standards of security and compliance.
                </p>

                <h3 className="text-xl font-bold mb-2 text-emerald-300">5.3 Analytics</h3>
                <p className="mb-3">
                  We may use third-party analytics services to help us understand how users interact with our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. EXTERNAL PLATFORM CONNECTIONS</h2>
                <p className="mb-3">
                  Our Service requires connection to external digital asset platforms via API keys that you provide. While we encrypt and secure these credentials, we do not control the security practices of these external platforms. Please review the privacy policies of any external platforms before connecting them to our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. YOUR DATA RIGHTS</h2>
                <p className="mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, which may include:
                </p>
                <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                  <li>Accessing and receiving a copy of your data</li>
                  <li>Rectifying inaccurate or incomplete information</li>
                  <li>Requesting deletion of your personal information</li>
                  <li>Restricting or objecting to certain processing activities</li>
                  <li>Data portability (receiving a copy of your data in a structured format)</li>
                </ul>
                <p className="mb-3">
                  To exercise any of these rights, please contact us using the information provided at the end of this Privacy Notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. CHILDREN'S PRIVACY</h2>
                <p className="mb-3">
                  Our Service is not directed to children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. INTERNATIONAL DATA TRANSFERS</h2>
                <p className="mb-3">
                  Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside [Country] and choose to provide information to us, please note that we transfer the information to [Country] and process it there.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. CHANGES TO THIS PRIVACY NOTICE</h2>
                <p className="mb-3">
                  We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Notice periodically to stay informed about how we are protecting your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. CONTACT US</h2>
                <p className="mb-3">
                  If you have questions or concerns about this Privacy Notice or our privacy practices, please contact us at <a href="mailto:derekp@abxinnovate.com" className="text-emerald-400 hover:text-emerald-300">derekp@abxinnovate.com</a>.
                </p>
              </section>

              <p className="mt-6">
                By using our Service, you acknowledge that you have read and understood this Privacy Notice.
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