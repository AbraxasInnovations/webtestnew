'use client';
import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Shield, FileText, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Legal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-12 nav-logo">
              <Link href="/">
                <img 
                  src="/images/abaraxaslogo.jpeg"
                  alt="Abraxas"
                  className="h-full w-auto cursor-pointer"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="hover:text-gray-300 transition-colors nav-items font-mono">About</Link>
              <Link href="/#greenprint" className="hover:text-gray-300 transition-colors nav-items font-mono">Greenprint</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors nav-items font-mono">Contact</Link>
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
                  href="/about" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  About
                </Link>
                <Link 
                  href="/#greenprint" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  Greenprint
                </Link>
                <Link 
                  href="/contact" 
                  className="text-lg hover:text-gray-300 transition-colors w-full text-center py-2 font-mono"
                  onClick={handleNavClick}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-mono">
            Legal Disclaimers
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
            Important legal information and regulatory compliance notices
          </p>
        </div>
      </section>

      {/* Investment Disclaimer Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <AlertTriangle className="w-12 h-12 text-red-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Investment Solicitation Disclaimer
              </h2>
            </div>
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-4 font-mono">NO INVESTMENT SOLICITATION</h3>
              <p className="text-gray-300 leading-relaxed font-mono mb-4">
                <strong>IMPORTANT:</strong> This website and all communications from Abraxas Innovations are for informational purposes only and do not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any security or investment opportunity.
              </p>
              <p className="text-gray-300 leading-relaxed font-mono">
                Abraxas Innovations does not solicit investments from the general public. Any investment opportunities discussed or referenced are available only to qualified investors through private placements and are not publicly offered.
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">No Public Offering</h4>
                <p>This website does not constitute a public offering of securities. Any investment opportunities are conducted as private placements under Regulation D, Rule 506(b) of the Securities Act of 1933, as amended.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Accredited Investor Requirements</h4>
                <p>Investment opportunities may only be available to accredited investors as defined under Rule 501 of Regulation D. We do not verify investor status on this website and do not accept investment inquiries from non-accredited investors.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">No General Solicitation</h4>
                <p>This website is not intended to be a general solicitation or general advertising for investment opportunities. We do not use this website to solicit investments from the general public.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h4>
                <p>All investment activities are conducted in compliance with applicable federal and state securities laws, including but not limited to the Securities Act of 1933, the Securities Exchange Act of 1934, and Regulation D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Operations Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Shield className="w-12 h-12 text-emerald-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Business Operations & Services
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Multi-Strategy Firm</h4>
                <p>Abraxas Innovations operates as a multi-strategy firm providing various services including software development, strategic consulting, and technology solutions. Our business activities are diverse and not limited to investment management.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Special Purpose Vehicles (SPVs)</h4>
                <p>When we engage in special situations or structured transactions, these are conducted through properly formed special purpose vehicles in compliance with all applicable laws and regulations. Such activities are not publicly advertised or solicited.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Professional Services</h4>
                <p>Our primary business includes providing professional services such as software development, website security, and business consulting. These services are separate from any investment activities and are offered to clients on a fee-for-service basis.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">No Investment Advice</h4>
                <p>Nothing on this website constitutes investment advice, financial advice, or any recommendation to purchase, sell, or hold any security or investment. All investment decisions should be made in consultation with qualified financial advisors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclaimers Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <FileText className="w-12 h-12 text-yellow-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Risk Disclaimers & Limitations
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Past Performance</h4>
                <p>Past performance is not indicative of future results. Any historical information or performance data presented is for informational purposes only and should not be relied upon as a predictor of future performance.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Investment Risks</h4>
                <p>All investments involve risk, including the potential loss of principal. Special situations and alternative investments may involve additional risks including illiquidity, lack of diversification, and potential for complete loss of investment.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">Regulatory Changes</h4>
                <p>Laws and regulations governing investments and securities offerings are subject to change. We make no representations about the current or future regulatory environment or its impact on any investment opportunities.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2">No Guarantees</h4>
                <p>We make no guarantees regarding the success, profitability, or performance of any investment opportunity, business venture, or service offering. All outcomes are subject to market conditions and other factors beyond our control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Inquiries Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-mono text-center">
              Contact & Inquiries
            </h2>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">General Inquiries</h4>
                  <p>For general business inquiries, software development services, or consulting opportunities, please contact us through our standard contact channels. We welcome inquiries about our professional services.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Investment Inquiries</h4>
                  <p>We do not accept investment inquiries through this website or general contact channels. Any investment-related communications should be directed through established professional relationships and in compliance with applicable securities laws.</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h4>
                  <p>All business activities are conducted in strict compliance with applicable laws and regulations. We maintain appropriate registrations and licenses where required and operate under the guidance of qualified legal counsel.</p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">Important Notice</h4>
                  <p className="text-gray-300">
                    This website is intended for informational purposes only. No investment opportunities are offered or solicited through this website. 
                    All investment activities are conducted through private placements and are not publicly available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-gray-400 text-sm font-mono">
                © 2025 Abraxas Innovations. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4 font-mono">Connect With Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://twitter.com/abxinnovations" 
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
                  href="https://t.me/greenprintfundingbot" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.98 1.26-5.61 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.24.27-.49.71-.74C7.19 11.73 8.87 11 11.2 9.6c3.71-2.21 4.48-2.6 4.98-2.61.11 0 .35.03.51.14.13.09.17.21.18.27-.01.06-.01.24-.02.27l-.21 1.13z"/>
                  </svg>
                </a>
                <a 
                  href="https://medium.com/@derekpethel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Medium"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-bold mb-4 font-mono">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/legal" 
                  className="text-gray-400 hover:text-white transition-colors font-mono"
                >
                  Legal Disclaimers
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors font-mono"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 