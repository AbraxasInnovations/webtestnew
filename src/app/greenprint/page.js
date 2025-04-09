'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Menu, X, ArrowRight } from 'lucide-react';

export default function Greenprint() {
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
    <div className="min-h-screen bg-[#0a1512] text-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </a>
          <div className="hidden md:block flex-1 mx-4">
            <input type="text" placeholder="Search... Ctrl K" className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 01.993.883L11 3v2a1 1 0 01-1.993.117L9 5V3a1 1 0 011-1zm4.22 2.47a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414L14.22 5.884a1 1 0 010-1.414zM10 14a4 4 0 110-8 4 4 0 010 8zm7-4a1 1 0 01.117 1.993L17 12h-2a1 1 0 01-.117-1.993L15 10h2zm-1.636 5.364a1 1 0 011.414 1.414L14.57 18.61a1 1 0 01-1.414-1.414l1.414-1.414zM5 10a1 1 0 01.117 1.993L5 12H3a1 1 0 01-.117-1.993L3 10h2zm1.636-4.636a1 1 0 011.414-1.414L9.464 5.37a1 1 0 01-1.414 1.414L6.636 5.364zM10 16a1 1 0 01.993.883L11 17v2a1 1 0 01-1.993.117L9 19v-2a1 1 0 011-1z" />
              </svg>
            </button>
            <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex space-x-6 h-12 items-center text-sm">
            <li>
              <a href="#" className="font-semibold text-green-600 dark:text-green-400 border-b-2 border-green-600 pb-1">Documentation</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 dark:hover:text-green-400 transition">Abraxas Innovations</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="space-y-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Overview</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/greenprint" className="block py-1.5 px-3 rounded bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 font-medium">Introduction</Link>
                </li>
                <li>
                  <Link href="/greenprint/what-is" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">What is GreenPrint?</Link>
                </li>
                <li>
                  <Link href="/greenprint/connect" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Connect to GreenPrint</Link>
                </li>
                <li>
                  <Link href="/greenprint/how-to-guide" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">How-to Guide</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Pricing</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/greenprint/pricing" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Our prices</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">How GreenPrint Works</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/greenprint/how-it-works" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Overview</Link>
                </li>
                <li>
                  <Link href="/greenprint/how-to-guide" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">How-to Guide</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Education</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/greenprint/glossary" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Glossary</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Infrastructure</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/greenprint/network" className="block py-1.5 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Network</Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <main className="lg:col-span-7 space-y-12">
          <section>
            <p className="uppercase text-green-600 dark:text-green-400 text-xs font-semibold tracking-wide">Overview</p>
            <h1 className="text-3xl font-bold mt-2">Introduction</h1>
            <p className="mt-4 text-base leading-relaxed">Welcome to the GreenPrint documentation. Learn how GreenPrint empowers developers to build, connect, and innovate in a next-generation ecosystem.</p>
            <div className="mt-8 flex justify-center">
              <img src="https://mintlify.s3.us-west-1.amazonaws.com/abstract/images/Block.svg" alt="Hero Block Image" className="w-96 h-auto" />
            </div>
          </section>
          <section id="get-started-with-abstract">
            <h2 className="text-2xl font-semibold mb-2">Get started with GreenPrint</h2>
            <p className="mb-4 text-base">Kickstart your journey. Choose one of the options below to connect or begin building on GreenPrint.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/connect-to-abstract" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-5a1 1 0 00-.993.883L9 6v3H6a1 1 0 00-.117 1.993L6 11h3v3a1 1 0 001.993.117L11 14v-3h3a1 1 0 00.117-1.993L14 9h-3V6a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Connect to GreenPrint</h3>
                <p className="text-sm">Link your services and enjoy seamless connectivity.</p>
              </a>
              <a href="/build-on-abstract/getting-started" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 17a1 1 0 01-.117-1.993L11 15h3a1 1 0 01.117 1.993L14 17h-3zm-4-4a1 1 0 01-.117-1.993L7 11h7a1 1 0 01.117 1.993L14 13H7zm-4-4a1 1 0 01-.117-1.993L3 7h11a1 1 0 01.117 1.993L14 9H3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Our prices</h3>
                <p className="text-sm">Explore our pricing options and find the right plan for you.</p>
              </a>
            </div>
          </section>
          <section id="explore-abstract-resources">
            <h2 className="text-2xl font-semibold mb-2">Explore GreenPrint Resources</h2>
            <p className="mb-4 text-base">Discover example repositories and tutorials to accelerate your learning process.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://github.com/Abstract-Foundation/examples" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.49 11.49 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.66-5.49 5.96.43.38.81 1.12.81 2.26v3.35c0 .32.22.7.82.58A12 12 0 0012 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Clone Example Repositories</h3>
                <p className="text-sm">Browse our GitHub examples to kickstart your project.</p>
              </a>
              <a href="https://www.youtube.com/@AbstractBlockchain" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.985 2.985 0 00-2.103-2.116C19.845 3.5 12 3.5 12 3.5s-7.845 0-9.395.57A2.985 2.985 0 00.502 6.186 31.87 31.87 0 000 12a31.87 31.87 0 00.502 5.814 2.985 2.985 0 002.103 2.116C4.155 20.5 12 20.5 12 20.5s7.845 0 9.395-.57a2.985 2.985 0 002.103-2.116A31.87 31.87 0 0024 12a31.87 31.87 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">YouTube Tutorials</h3>
                <p className="text-sm">Watch our video guides to learn the ropes of GreenPrint.</p>
              </a>
            </div>
          </section>
          <section id="learn-more-about-abstract">
            <h2 className="text-2xl font-semibold mb-2">Learn more about GreenPrint</h2>
            <p className="mb-4 text-base">Deep dive into what GreenPrint is, how it works, and explore its architecture and wallet solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/what-is-abstract" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-5a1 1 0 00-.993.883L9 6v3H6a1 1 0 00-.117 1.993L6 11h3v3a1 1 0 001.993.117L11 14v-3h3a1 1 0 00.117-1.993L14 9h-3V6a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">What is GreenPrint?</h3>
                <p className="text-sm">Understand the fundamentals of GreenPrint.</p>
              </a>
              <a href="/how-abstract-works/architecture/layer-2s" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm11 2v10H5V5h10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">How GreenPrint Works</h3>
                <p className="text-sm">Dive into the technical workings of the platform.</p>
              </a>
              <a href="/architecture" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 01.993.883L11 3v4h4a1 1 0 01.117 1.993L15 9h-4v4H5a1 1 0 01-.117-1.993L5 11h4V3a1 1 0 011-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Architecture</h3>
                <p className="text-sm">Discover the design behind GreenPrint.</p>
              </a>
              <a href="/abstract-global-wallet/overview" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-600 dark:hover:border-green-400 transition">
                <div className="mb-2">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 01.993.883L11 3v4h4a1 1 0 01.117 1.993L15 9h-4v4H5a1 1 0 01-.117-1.993L5 11h4V3a1 1 0 011-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Glossary</h3>
                <p className="text-sm">Explore key terms and concepts in GreenPrint.</p>
              </a>
            </div>
          </section>
          <section className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="font-medium">Was this page helpful?</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Yes</button>
                <button className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition">No</button>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/Abstract-Foundation" className="text-sm text-green-600 dark:text-green-400 hover:underline">Suggest edits</a>
                <a href="https://github.com/Abstract-Foundation/issues" className="text-sm text-green-600 dark:text-green-400 hover:underline">Raise issue</a>
              </div>
            </div>
          </section>
        </main>
        <aside className="hidden xl:block xl:col-span-2">
          <div className="sticky top-20">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">On this page</h3>
            <nav className="space-y-2 text-sm">
              <a href="#get-started-with-abstract" className="block hover:text-green-600 dark:hover:text-green-400 transition">Get started with GreenPrint</a>
              <a href="#explore-abstract-resources" className="block hover:text-green-600 dark:hover:text-green-400 transition">Explore GreenPrint Resources</a>
              <a href="#learn-more-about-abstract" className="block hover:text-green-600 dark:hover:text-green-400 transition">Learn more about GreenPrint</a>
            </nav>
          </div>
        </aside>
      </div>
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="p-2 hover:text-green-600 dark:hover:text-green-400 transition" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.88-2.35 8.69 8.69 0 01-2.7 1.03 4.25 4.25 0 00-7.24 3.87 12.07 12.07 0 01-8.75-4.43 4.24 4.24 0 001.32 5.67 4.21 4.21 0 01-1.92-.53v.05a4.25 4.25 0 003.41 4.17 4.23 4.23 0 01-1.91.07 4.26 4.26 0 003.97 2.96 8.52 8.52 0 01-5.27 1.82A8.71 8.71 0 012 19.54a12.04 12.04 0 006.52 1.91c7.83 0 12.12-6.48 12.12-12.11 0-.19-.01-.39-.02-.58A8.65 8.65 0 0024 5.55a8.43 8.43 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="https://discord.com" className="p-2 hover:text-green-600 dark:hover:text-green-400 transition" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.074.035 13.86 13.86 0 00-2.608 5.333 19.665 19.665 0 00-5.687 0A13.888 13.888 0 007.449 3.89a.07.07 0 00-.074-.035 19.736 19.736 0 00-4.885 1.515.066.066 0 00-.03.027C.533 9.36-.319 14.276.099 19.138a.07.07 0 00.027.045 19.916 19.916 0 005.994 3.005.07.07 0 00.076-.027c.464-.63.87-1.295 1.226-1.993a.07.07 0 00-.041-.095 13.148 13.148 0 01-1.87-.89.07.07 0 01-.007-.117c.125-.094.25-.192.367-.293a.07.07 0 01.072-.01 13.16 13.16 0 0012.108 0 .07.07 0 01.073.01c.117.1.242.199.367.293a.07.07 0 01-.006.117 13.093 13.093 0 01-1.87.89.07.07 0 00-.041.095c.36.698.765 1.363 1.227 1.993a.07.07 0 00.077.027 19.86 19.86 0 005.994-3.005.07.07 0 00.027-.045c.5-5.035-.838-9.95-3.548-14.742a.063.063 0 00-.03-.028zM8.02 15.331c-1.18 0-2.148-1.085-2.148-2.419 0-1.334.955-2.419 2.148-2.419 1.2 0 2.167 1.092 2.148 2.419 0 1.334-.955 2.419-2.148 2.419zm7.96 0c-1.18 0-2.148-1.085-2.148-2.419 0-1.334.955-2.419 2.148-2.419 1.2 0 2.167 1.092 2.148 2.419 0 1.334-.948 2.419-2.148 2.419z" />
              </svg>
            </a>
            <a href="https://github.com" className="p-2 hover:text-green-600 dark:hover:text-green-400 transition" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.49 11.49 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.66-5.49 5.96.43.38.81 1.12.81 2.26v3.35c0 .32.22.7.82.58A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://mintlify.com" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">Powered by Mintlify</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 