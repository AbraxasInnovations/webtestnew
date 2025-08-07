'use client';
import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link for support@abxinnovate.com
    const mailtoLink = `mailto:support@abxinnovate.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
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

      {/* Main Content */}
      <main className="min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16">
        {/* Video Container */}
        <div className="logo-container">
          <video autoPlay loop muted playsInline>
            <source src="/videos/contact-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Contact Form */}
        <div className="contact-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="form-textarea"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </main>

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

      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 160px;
          padding-bottom: 100px;
        }

        .logo-container {
          width: 375px;
          height: 375px;
          position: relative;
          margin-bottom: 60px;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .contact-wrapper {
          position: relative;
          margin-top: 20px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          width: 100%;
          max-width: 700px;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .form-label {
          display: block;
          color: white;
          font-family: monospace;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 15px;
          background: #111;
          border: 2px solid #333;
          border-radius: 8px;
          color: white;
          font-family: monospace;
          font-size: 16px;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #10b981;
          background: #0a0a0a;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #666;
          font-family: monospace;
        }

        .form-textarea {
          resize: none;
          min-height: 100px;
        }

        .submit-button {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          font-family: monospace;
          font-weight: 700;
          padding: 16px 40px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .logo-container {
            width: 250px;
            height: 250px;
            margin-bottom: 40px;
          }
          
          .contact-form {
            max-width: 90%;
            gap: 20px;
          }
          
          .form-grid {
            gap: 15px;
          }
          
          .form-input,
          .form-textarea {
            padding: 12px 15px;
            font-size: 14px;
          }
          
          .submit-button {
            padding: 14px 30px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
} 