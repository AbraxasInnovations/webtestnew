'use client';
import React from 'react';
import { ChevronDown, ArrowRight, Globe, Cpu, Lightbulb } from 'lucide-react';
import PipelineBackground from './PipelineBackground';
import Link from 'next/link';
import GreenprintBackground from './GreenprintBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-12">
              <img 
                src="/images/abaraxaslogo.jpeg"
                alt="Abraxas"
                className="h-full w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#greenprint" className="hover:text-green-400 transition-colors">Greenprint</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <PipelineBackground />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Innovating Decentralized Finance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Pushing boundaries. Breaking limits. Creating tomorrow.
          </p>
          <a href="#about" className="inline-flex items-center">
            <ChevronDown className="animate-bounce w-12 h-12" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Abraxas Innovations, we're dedicated to pushing the boundaries of what's possible. 
                Our team of experts works tirelessly to develop cutting-edge solutions that transform 
                the fabric of DeFi.
              </p>
              <button className="mt-8 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <span>Learn more about our mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1">
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be at the forefront of technological advancement, creating solutions 
                  that define the future of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-400" />,
                title: "Global Solutions",
                description: "Delivering innovative solutions across borders and industries."
              },
              {
                icon: <Cpu className="w-12 h-12 text-purple-400" />,
                title: "Asset Management",
                description: "Leveraging cutting-edge technology to capitalize on market inefficiencies and risk premiums.",
                link: "/asset-management"
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-green-400" />,
                title: "Innovative Platforms",
                description: "Thinking outside the box to create revolutionary solutions."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => {
                  if (service.link) {
                    window.location.href = service.link;
                  }
                }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greenprint Section */}
      <section id="greenprint" className="py-20 relative">
        <GreenprintBackground />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-green-400">Green</span>print
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Institutional-Grade Trading Tools for Retail Traders</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Access powerful algorithmic trading solutions that work while you sleep. Our suite of tools helps you capitalize on market inefficiencies in the crypto space with institutional-level infrastructure.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 text-green-400">Greenprint Funding Bot</h4>
                  <p className="text-gray-300 mb-4">
                    Automatically capture funding rate opportunities across exchanges. Ready for deployment.
                  </p>
                  <a 
                    href="https://t.me/AbraxasInnovations" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Download Now - $50
                  </a>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg opacity-75">
                  <h4 className="text-xl font-bold mb-2">Greenprint CLMM Bot</h4>
                  <p className="text-gray-300">Coming soon - Advanced concentrated liquidity management for maximum yields.</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg opacity-75">
                  <h4 className="text-xl font-bold mb-2">Greenprint Data Analysis Tool</h4>
                  <p className="text-gray-300">Coming soon - Deep market analysis and opportunity detection.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-1">
                <div className="bg-gray-900 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Greenprint?</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Automated 24/7 trading strategies
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Institutional-grade infrastructure
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Market inefficiency exploitation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Set-and-forget automation
                    </li>
                  </ul>
                  <Link 
                    href="/greenprint" 
                    className="mt-8 inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Learn more about Greenprint
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
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
                © 2024 Abraxas Innovations. All rights reserved.
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
