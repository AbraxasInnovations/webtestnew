'use client';
import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Check, Star, Download, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GreenprintTestLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="pl-6 pr-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="h-8">
                <img 
                  src="/images/whitegplogo.PNG"
                  alt="GreenPrint"
                  className="h-full w-auto"
                />
              </div>
              <div className="hidden md:flex items-center space-x-6 mt-4">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Features</a>
                <a href="/greenprint/pricing" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Pricing</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">About</a>
                <a href="/greenprint/docs" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Documentation</a>
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
              
              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu} 
                className="md:hidden text-gray-300 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  onClick={handleNavClick}
                >
                  Features
                </a>
                <a 
                  href="/greenprint/pricing" 
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  onClick={handleNavClick}
                >
                  Pricing
                </a>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  onClick={handleNavClick}
                >
                  About
                </a>
                <a 
                  href="/greenprint/docs" 
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  onClick={handleNavClick}
                >
                  Documentation
                </a>
                <a 
                  href="https://t.me/AbraxasInnovations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  onClick={handleNavClick}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-64 px-6 relative overflow-hidden" style={{ 
        background: 'radial-gradient(#ffffff54 2px, transparent 0) 0 0/40px 40px, radial-gradient(#00000026 2px, transparent 0) -1px 1px/40px 40px, radial-gradient(ellipse at 150% -50%, #a0aec0, #718096)'
      }}>
        <div className="max-w-6xl mx-auto text-center relative z-10 h-full flex flex-col justify-start pt-0">
          <div className="typing-wrapper">
            <h1 className="text-3xl md:text-5xl font-normal text-black mb-4 leading-tight font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
              <span className="typing-line-1">No Code. No Stress. No Mistakes.</span>
              <br />
              <span className="typing-line-2">Your Custody. Your Profits.</span>
            </h1>
          </div>
          
          <p className="text-base md:text-lg text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
            You know that funding rate arbitrage pays well. Don't keep missing the thousands of opportunities a day.
          </p>
          
          <div className="flex justify-center items-center mb-16">
            <div 
              id="form-hero" 
              className="form"
              style={{
                position: 'relative',
                maxWidth: '28rem',
                flex: '1 1 auto',
                height: '5rem',
                transition: '250ms ease all'
              }}
            >
              <div 
                id="heading-hero" 
                className="glass glass--gradient glass--heading"
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '3rem',
                  borderRadius: '25px',
                  border: 'none',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(2px)',
                  textShadow: '0.25em 0.25em 1px #00000010',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  boxShadow: `
                    0.5px 1px 1.1px hsl(0deg 0% 64% / 0.28),
                    1.4px 3.1px 3.4px -0.4px hsl(0deg 0% 64% / 0.27),
                    2.5px 5.3px 5.9px -0.7px hsl(0deg 0% 64% / 0.25),
                    3.9px 8.4px 9.3px -1.1px hsl(0deg 0% 64% / 0.24),
                    6px 12.9px 14.3px -1.5px hsl(0deg 0% 64% / 0.23),
                    9px 19.5px 21.6px -1.8px hsl(0deg 0% 64% / 0.21),
                    13.4px 28.9px 32px -2.2px hsl(0deg 0% 64% / 0.2),
                    19.3px 41.7px 46.2px -2.6px hsl(0deg 0% 64% / 0.19),
                    27.1px 58.5px 64.8px -2.9px hsl(0deg 0% 64% / 0.17),
                    37.1px 80px 88.6px -3.3px hsl(0deg 0% 64% / 0.16),
                    5px -30px 30px -20px #ffffff70,
                    5px 10px 30px -20px #ffffff70,
                    inset 0 -6px 2px -5px #ffffff24,
                    inset 0 -8px 3px -5px #ffffff3b,
                    inset 0 -20px 10px -15px #ffffff5c,
                    inset 7px 25px 10px -20px #ffffff5c,
                    inset -20px 5px 10px -20px #00000021,
                    inset -40px 50px 7px -55px #00000021
                  `,
                  background: 'linear-gradient(45deg, #85d5e757, #7a9ed254, #ba6ac93d, #de54c217, #f86b2d4f)',
                  backgroundPosition: 'center',
                  animation: 'gradient 10s linear infinite'
                }}
                onClick={() => {
                  const form = document.getElementById("form-hero");
                  form.classList.toggle('open');
                }}
              >
                <span 
                  className="form-header"
                  style={{
                    height: '5rem',
                    padding: '0 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem'
                  }}
                >
                  <span 
                    className="form-icon"
                    style={{
                      position: 'relative',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'block',
                      aspectRatio: '1',
                      flex: '0 0',
                      borderRadius: '50px',
                      height: '2.5rem',
                      boxShadow: 'inset -5px 20px 2px -20px #fff, inset 5px -20px 2px -20px #fff, inset -19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset -15px -26px 3px -30px #000'
                    }}
                  >
                    <span
                      style={{
                        animation: 'icon 5000ms cubic-bezier(0.22, 0.61, 0.36, 1) infinite',
                        content: '',
                        position: 'absolute',
                        inset: '0',
                        background: 'url(https://cdn.discordapp.com/attachments/1050016262035619861/1159132066592591893/ia.png?ex=651ec55c&is=651d73dc&hm=162828e7743ded23e27d4fe81ee09e4df9f283e32a32bc322b99c116a4f307b7) center / 90% 90% no-repeat'
                      }}
                    ></span>
                  </span>
                  <span 
                    className="form-title"
                    style={{
                      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                      animation: 'text linear 1s forwards',
                      animationDelay: '1s'
                    }}
                  >
                    Automate today
                  </span>
                </span>
                <button 
                  className="form-close-button"
                  style={{
                    position: 'absolute',
                    color: '#171717',
                    background: 'rgba(255, 255, 255, 0.3)',
                    top: '0.5rem',
                    right: '0.5rem',
                    boxShadow: 'inset -5px 20px 2px -20px #fff, inset 5px -20px 2px -20px #fff, inset -19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset -15px -26px 3px -30px #000',
                    display: 'grid',
                    placeContent: 'center',
                    height: '1rem',
                    width: '1rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    visibility: 'hidden',
                    opacity: '0',
                    transition: '250ms ease opacity',
                    border: 'none',
                    background: 'none'
                  }}
                >
                  ✕
                </button>
              </div>
              <div 
                id="input-hero" 
                className="glass"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  zIndex: '-1',
                  height: '4rem',
                  transition: '500ms ease all',
                  translate: '0 0',
                  opacity: '0',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '2rem',
                  borderRadius: '20px',
                  border: 'none',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(2px)',
                  textShadow: '0.25em 0.25em 1px #00000010',
                  boxShadow: `
                    0.5px 1px 1.1px hsl(0deg 0% 64% / 0.28),
                    1.4px 3.1px 3.4px -0.4px hsl(0deg 0% 64% / 0.27),
                    2.5px 5.3px 5.9px -0.7px hsl(0deg 0% 64% / 0.25),
                    3.9px 8.4px 9.3px -1.1px hsl(0deg 0% 64% / 0.24),
                    6px 12.9px 14.3px -1.5px hsl(0deg 0% 64% / 0.23),
                    9px 19.5px 21.6px -1.8px hsl(0deg 0% 64% / 0.21),
                    13.4px 28.9px 32px -2.2px hsl(0deg 0% 64% / 0.2),
                    19.3px 41.7px 46.2px -2.6px hsl(0deg 0% 64% / 0.19),
                    27.1px 58.5px 64.8px -2.9px hsl(0deg 0% 64% / 0.17),
                    37.1px 80px 88.6px -3.3px hsl(0deg 0% 64% / 0.16),
                    5px -30px 30px -20px #ffffff70,
                    5px 10px 30px -20px #ffffff70,
                    inset 0 -6px 2px -5px #ffffff24,
                    inset 0 -8px 3px -5px #ffffff3b,
                    inset 0 -20px 10px -15px #ffffff5c,
                    inset 7px 25px 10px -20px #ffffff5c,
                    inset -20px 5px 10px -20px #00000021,
                    inset -40px 50px 7px -55px #00000021
                  `
                }}
              >
                <input 
                  type="text" 
                  placeholder="Type your request here"
                  style={{
                    appearance: 'none',
                    border: 'none',
                    background: 'none',
                    width: '100%',
                    height: '2rem',
                    padding: '0 1.5rem',
                    color: '#171717',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned like Robinhood */}
      <section id="features" className="pt-20 pb-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/images/globe.jpg"
                alt="Global Trading"
                className="w-full h-auto rounded-lg max-w-xs"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 -mt-8">
              <div className="flex items-center">
                <img 
                  src="/images/whitegplogo.PNG"
                  alt="GreenPrint Logo"
                  className="h-10 w-auto mb-2 -ml-2"
                  style={{ marginBottom: '0.5rem', marginLeft: '-0.5rem' }}
                />
              </div>
              <h2 className="text-3xl font-normal text-white mb-4 leading-tight mt-4" style={{ fontFamily: 'Phonic, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif', letterSpacing: '-1px' }}>
                The World In Your Hands
              </h2>
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                It is known that funding rate arbitrage pays out in a big way. 
                The problem is that nobody has five sets of hands. Greenprint automates the search and trading 
                with your rules, and your funds in your custody. We give you the edge in the markets.
              </p>
              <p className="text-sm text-gray-400 mb-8">
                Multi-exchange funding rate arbitrage, advanced hedging optimization, institutional-grade backtesting, and 24/7 automated trading.
              </p>
              <a 
                href="https://t.me/AbraxasInnovations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-xs"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Redesigned like Robinhood */}
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/chain.jpg)' }}
        ></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-4xl font-normal text-black mb-4 leading-tight" style={{ fontFamily: 'Phonic, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif', letterSpacing: '-1px' }}>
                The Only Telegram-Based Solution
              </h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                While others require complex setups and expensive subscriptions, 
                GreenPrint delivers institutional-grade funding rate arbitrage 
                through a simple Telegram bot.
              </p>
              <p className="text-base text-gray-600 mb-8">
                You choose when and how you want to trade. No handing your money over to a third party. No hoping for the best. Arbitrage profits in your hands like never before.
              </p>
              <a 
                href="https://t.me/AbraxasInnovations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                Get Started
              </a>
            </div>
            <div className="md:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* Golden Era Section - Redesigned like Robinhood */}
      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/images/goldenglobe2.jpg"
                alt="Golden Globe"
                className="w-full h-auto rounded-lg max-w-sm"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 -mt-8">
              <div className="flex items-center">
                <img 
                  src="/images/whitegplogo.PNG"
                  alt="GreenPrint Logo"
                  className="h-10 w-auto mb-2 -ml-2"
                  style={{ marginBottom: '0.5rem', marginLeft: '-0.5rem' }}
                />
              </div>
              <h2 className="text-3xl font-normal text-white mb-4 leading-tight mt-4" style={{ fontFamily: 'Phonic, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif', letterSpacing: '-1px' }}>
                The Golden Era of Funding Arbitrage
              </h2>
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                It is your turn to be early on a new technology. Once everybody catches on, 
                funding arbitrage profits will continue to get smaller and smaller. It is simple 
                math. Seize your seat at the table.
              </p>
              <p className="text-sm text-gray-400 mb-8">
              No guessing or wishing for the next big mover in the markets. 
              Precise, logical profits in your hands. 
              </p>
              <a 
                href="https://t.me/AbraxasInnovations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-xs"
              >
                Claim Your Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphism Button Section */}
      <section className="py-24" style={{ 
        background: 'radial-gradient(#ffffff54 2px, transparent 0) 0 0/40px 40px, radial-gradient(#00000026 2px, transparent 0) -1px 1px/40px 40px, radial-gradient(ellipse at 150% -50%, #a0aec0, #718096)',
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem'
      }}>
        <div className="text-center mb-16 mt-16">
          <div className="flex items-center justify-center gap-4 mb-4 -ml-8">
            <img 
              src="/images/blackgplogo.png"
              alt="GreenPrint Logo"
              className="h-16 w-auto -mt-6"
            />
            <h2 className="text-4xl font-normal text-black leading-tight font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]" style={{ marginLeft: '-1rem' }}>
              Pricing
            </h2>
          </div>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Put the gambling aside and step into profitability. Access is currently 
            limited to 20,000 users.
          </p>
        </div>
        <div 
          id="form" 
          className="form"
          style={{
            position: 'relative',
            maxWidth: '50rem',
            flex: '1 1 auto',
            height: '8rem',
            transition: '250ms ease all'
          }}
        >
          <div 
            id="heading" 
            className="glass glass--gradient glass--heading"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              minHeight: '4rem',
              borderRadius: '20px',
              border: 'none',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(2px)',
              textShadow: '0.25em 0.25em 1px #00000010',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: `
                0.5px 1px 1.1px hsl(0deg 0% 64% / 0.28),
                1.4px 3.1px 3.4px -0.4px hsl(0deg 0% 64% / 0.27),
                2.5px 5.3px 5.9px -0.7px hsl(0deg 0% 64% / 0.25),
                3.9px 8.4px 9.3px -1.1px hsl(0deg 0% 64% / 0.24),
                6px 12.9px 14.3px -1.5px hsl(0deg 0% 64% / 0.23),
                9px 19.5px 21.6px -1.8px hsl(0deg 0% 64% / 0.21),
                13.4px 28.9px 32px -2.2px hsl(0deg 0% 64% / 0.2),
                19.3px 41.7px 46.2px -2.6px hsl(0deg 0% 64% / 0.19),
                27.1px 58.5px 64.8px -2.9px hsl(0deg 0% 64% / 0.17),
                37.1px 80px 88.6px -3.3px hsl(0deg 0% 64% / 0.16),
                5px -30px 30px -20px #ffffff70,
                5px 10px 30px -20px #ffffff70,
                inset 0 -6px 2px -5px #ffffff24,
                inset 0 -8px 3px -5px #ffffff3b,
                inset 0 -20px 10px -15px #ffffff5c,
                inset 7px 25px 10px -20px #ffffff5c,
                inset -20px 5px 10px -20px #00000021,
                inset -40px 50px 7px -55px #00000021
              `,
              background: 'linear-gradient(45deg, #85d5e757, #7a9ed254, #ba6ac93d, #de54c217, #f86b2d4f)',
              backgroundPosition: 'center',
              animation: 'gradient 10s linear infinite'
            }}
            onClick={() => {
              window.location.href = '/greenprint/pricing';
            }}
          >
            <span 
              className="form-header"
              style={{
                height: '8rem',
                padding: '0 2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              }}
            >
              <span 
                className="form-icon"
                style={{
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'block',
                  aspectRatio: '1',
                  flex: '0 0',
                  borderRadius: '50px',
                  height: '4rem',
                  boxShadow: 'inset -5px 20px 2px -20px #fff, inset 5px -20px 2px -20px #fff, inset -19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset -15px -26px 3px -30px #000'
                }}
              >
                <span
                  style={{
                    animation: 'icon 5000ms cubic-bezier(0.22, 0.61, 0.36, 1) infinite',
                    content: '',
                    position: 'absolute',
                    inset: '0',
                    background: 'url(https://cdn.discordapp.com/attachments/1050016262035619861/1159132066592591893/ia.png?ex=651ec55c&is=651d73dc&hm=162828e7743ded23e27d4fe81ee09e4df9f283e32a32bc322b99c116a4f307b7) center / 90% 90% no-repeat'
                  }}
                ></span>
              </span>
              <span 
                className="form-title"
                style={{
                  clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                  animation: 'text linear 1s forwards',
                  animationDelay: '1s'
                }}
              >
                Get First Payment Today
              </span>
            </span>
            <button 
              className="form-close-button"
              style={{
                position: 'absolute',
                color: '#171717',
                background: 'rgba(255, 255, 255, 0.3)',
                top: '0.75rem',
                right: '0.75rem',
                boxShadow: 'inset -5px 20px 2px -20px #fff, inset 5px -20px 2px -20px #fff, inset -19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset 19px 1px 2px -20px #000, inset -15px -26px 3px -30px #000',
                display: 'grid',
                placeContent: 'center',
                height: '1.5rem',
                width: '1.5rem',
                borderRadius: '50px',
                cursor: 'pointer',
                visibility: 'hidden',
                opacity: '0',
                transition: '250ms ease opacity',
                border: 'none',
                background: 'none'
              }}
            >
              ✕
            </button>
          </div>
          <div 
            id="input" 
            className="glass"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: '-1',
              height: '8rem',
              transition: '500ms ease all',
              translate: '0 0',
              opacity: '0',
              display: 'flex',
              alignItems: 'center',
              minHeight: '4rem',
              borderRadius: '20px',
              border: 'none',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(2px)',
              textShadow: '0.25em 0.25em 1px #00000010',
              boxShadow: `
                0.5px 1px 1.1px hsl(0deg 0% 64% / 0.28),
                1.4px 3.1px 3.4px -0.4px hsl(0deg 0% 64% / 0.27),
                2.5px 5.3px 5.9px -0.7px hsl(0deg 0% 64% / 0.25),
                3.9px 8.4px 9.3px -1.1px hsl(0deg 0% 64% / 0.24),
                6px 12.9px 14.3px -1.5px hsl(0deg 0% 64% / 0.23),
                9px 19.5px 21.6px -1.8px hsl(0deg 0% 64% / 0.21),
                13.4px 28.9px 32px -2.2px hsl(0deg 0% 64% / 0.2),
                19.3px 41.7px 46.2px -2.6px hsl(0deg 0% 64% / 0.19),
                27.1px 58.5px 64.8px -2.9px hsl(0deg 0% 64% / 0.17),
                37.1px 80px 88.6px -3.3px hsl(0deg 0% 64% / 0.16),
                5px -30px 30px -20px #ffffff70,
                5px 10px 30px -20px #ffffff70,
                inset 0 -6px 2px -5px #ffffff24,
                inset 0 -8px 3px -5px #ffffff3b,
                inset 0 -20px 10px -15px #ffffff5c,
                inset 7px 25px 10px -20px #ffffff5c,
                inset -20px 5px 10px -20px #00000021,
                inset -40px 50px 7px -55px #00000021
              `
            }}
          >
            <input 
              type="text" 
              placeholder="Type your request here"
              style={{
                appearance: 'none',
                border: 'none',
                background: 'none',
                width: '100%',
                height: '4rem',
                padding: '0 2rem',
                color: '#171717',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 border-t border-white/10 relative" style={{ 
        background: 'radial-gradient(#ffffff54 2px, transparent 0) 0 0/40px 40px, radial-gradient(#00000026 2px, transparent 0) -1px 1px/40px 40px, radial-gradient(ellipse at 150% -50%, #a0aec0, #718096)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-30"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <img 
                  src="/images/whitegplogo.PNG"
                  alt="GreenPrint"
                  className="h-8 w-auto mb-4"
                />
                <p className="text-gray-200 text-sm">
                  Professional trading tools for the modern investor.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-sm text-white">Product</h3>
                <ul className="space-y-2 text-gray-200 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-sm text-white">Company</h3>
                <ul className="space-y-2 text-gray-200 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-sm text-white">Legal</h3>
                <ul className="space-y-2 text-gray-200 text-xs">
                  <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-200 text-xs">
              <p>© 2025 Abraxas Innovations. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        button {
            all: unset;
            cursor: pointer;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            position: relative;
            border-radius: 999vw;
            background-color: rgba(0, 0, 0, 0.75);
            box-shadow: -0.15em -0.15em 0.15em -0.075em rgba(5, 5, 5, 0.25),
                0.0375em 0.0375em 0.0675em 0 rgba(5, 5, 5, 0.1);
        }

        button::after {
            content: "";
            position: absolute;
            z-index: 0;
            width: calc(100% + 0.3em);
            height: calc(100% + 0.3em);
            top: -0.15em;
            left: -0.15em;
            border-radius: inherit;
            background: linear-gradient(-135deg,
                    rgba(5, 5, 5, 0.5),
                    transparent 20%,
                    transparent 100%);
            filter: blur(0.0125em);
            opacity: 0.25;
            mix-blend-mode: multiply;
        }

        button .button-outer {
            position: relative;
            z-index: 1;
            border-radius: inherit;
            transition: box-shadow 300ms ease;
            will-change: box-shadow;
            box-shadow: 0 0.05em 0.05em -0.01em rgba(5, 5, 5, 1),
                0 0.01em 0.01em -0.01em rgba(5, 5, 5, 0.5),
                0.15em 0.3em 0.1em -0.01em rgba(5, 5, 5, 0.25);
        }

        button:hover .button-outer {
            box-shadow: 0 0 0 0 rgba(5, 5, 5, 1), 0 0 0 0 rgba(5, 5, 5, 0.5),
                0 0 0 0 rgba(5, 5, 5, 0.25);
        }

        .button-inner {
            --inset: 0.035em;
            position: relative;
            z-index: 1;
            border-radius: inherit;
            padding: 1.25em 1.875em;
            background-image: linear-gradient(135deg,
                    rgba(230, 230, 230, 1),
                    rgba(180, 180, 180, 1));
            transition: box-shadow 300ms ease, clip-path 250ms ease,
                background-image 250ms ease, transform 250ms ease;
            will-change: box-shadow, clip-path, background-image, transform;
            overflow: clip;
            clip-path: inset(0 0 0 0 round 999vw);
            box-shadow:
                /* 1 */
                0 0 0 0 inset rgba(5, 5, 5, 0.1),
                /* 2 */
                -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25),
                /* 3 */
                0 0 0 0 inset rgba(5, 5, 5, 0.1),
                /* 4 */
                0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.25),
                /* 5 */
                0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 1),
                /* 6 */
                0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
                /* 7 */
                -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.25);
        }

        button:hover .button-inner {
            clip-path: inset(clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) round 999vw);
            box-shadow:
                /* 1 */
                0.1em 0.15em 0.05em 0 inset rgba(5, 5, 5, 0.75),
                /* 2 */
                -0.025em -0.03em 0.05em 0.025em inset rgba(5, 5, 5, 0.5),
                /* 3 */
                0.25em 0.25em 0.2em 0 inset rgba(5, 5, 5, 0.5),
                /* 4 */
                0 0 0.05em 0.5em inset rgba(255, 255, 255, 0.15),
                /* 5 */
                0 0 0 0 inset rgba(255, 255, 255, 1),
                /* 6 */
                0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
                /* 7 */
                -0.075em -0.12em 0.2em 0.1em inset rgba(5, 5, 5, 0.25);
        }

        button .button-inner span {
            position: relative;
            z-index: 4;
            font-family: "Inter", sans-serif;
            letter-spacing: -0.05em;
            font-weight: 500;
            font-size: 1.25em;
            color: rgba(0, 0, 0, 0);
            background-image: linear-gradient(135deg,
                    rgba(25, 25, 25, 1),
                    rgba(75, 75, 75, 1));
            -webkit-background-clip: text;
            background-clip: text;
            transition: transform 250ms ease;
            display: block;
            will-change: transform;
            text-shadow: rgba(0, 0, 0, 0.1) 0 0 0.1em;
            -webkit-user-select: none; 
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        button:hover .button-inner span {
            transform: scale(0.975);
        }

        button:active .button-inner {
            transform: scale(0.975);
        }

        /* Glassmorphism Button Animations */
        @keyframes text {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%)
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
          }
        }

        @keyframes gradient {
          0% {
            background-size: 100%;
          }
          50% {
            background-size: 150%;
          }
          100% {
            background-size: 100%;
          }
        }

        @keyframes icon {
          0% {
            rotate: 0deg;
            scale: 0.8;
            filter: hue-rotate(0deg)
          }
          50% {
            rotate: 180deg;
            scale: 1.2;
            filter: hue-rotate(90deg)
          }
          100% {
            rotate: 360deg;
            scale: 0.8;
            filter: hue-rotate(0deg)
          }
        }

        /* Glassmorphism Button States */
        .form.open {
          height: calc(8rem * 1.5 + 0.5rem);
        }

        .form.open .form-close-button {
          visibility: visible;
          opacity: 1;
        }

        .form.open #input {
          translate: 0 calc(8rem + 0.5rem);
          height: calc(8rem / 2);
          opacity: 1;
          z-index: 2;
        }

        .form:not(.open) #heading:hover {
          scale: 0.99;
          filter: brightness(0.95);
        }

        .form:not(.open) #heading:active {
          scale: 0.98;
          filter: brightness(0.8);
        }

        /* Typing Animation */
        .typing-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .typing-line-1 {
          display: inline-block;
          width: 0;
          animation: typing-line-1 2s steps(30) forwards;
          white-space: nowrap;
          overflow: hidden;
        }

        .typing-line-2 {
          display: inline-block;
          width: 0;
          animation: typing-line-2 1.5s steps(20) forwards;
          white-space: nowrap;
          overflow: hidden;
          animation-delay: 3s;
        }

        @keyframes typing-line-1 {
          to {
            width: 100%;
          }
        }

        @keyframes typing-line-2 {
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
} 