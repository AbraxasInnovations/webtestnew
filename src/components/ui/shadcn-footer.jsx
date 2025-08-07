'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendlyButton } from '../../components/CalendlyWidget';
import { calendlyConfig } from '../../config/calendly';
import { ArrowRight } from 'lucide-react';
import { Button } from './button';
import { Separator } from './separator';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { name: 'Home', href: '/greenprint' },
      { name: 'Features', href: '/greenprint/experienced#features' },
      { name: 'Pricing', href: '/greenprint/experienced#pricing' },
      { name: 'Documentation', href: '/greenprint/docs' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/greenprint/book' },
      { name: 'FAQ', href: '/greenprint/experienced#faq' },
      { name: 'Help Center', href: '/support' },
      { name: 'API Documentation', href: '/api' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];

const socialLinks = [
  { name: 'Twitter', icon: 'twitter', href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com' },
];

export function ShadcnFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/greenprint-logo.PNG"
                alt="Greenprint Logo"
                width={180}
                height={54}
                quality={100}
                style={{
                  objectFit: 'contain',
                }}
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Market-neutral crypto arbitrage strategies for professional traders and institutions. 
              Employing funding rate arbitrage to deliver consistent returns regardless of market direction.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                >
                  {link.icon === 'twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  )}
                  
                  {link.icon === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  
                  {link.icon === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23 2.998.957.74.957 2.996.994 4.23.072 1.236-1.23 1.236-3.222 0-4.458z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-12 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GreenPrint. All rights reserved.
          </p>
          
          <CalendlyButton 
            url={calendlyConfig.consultationUrl}
            text="Talk to a Professional"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
          />
        </div>
      </div>
    </footer>
  );
} 