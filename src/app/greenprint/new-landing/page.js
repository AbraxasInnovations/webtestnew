'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ShadcnLayout } from '../../../components/ui/shadcn-layout';
import { Button } from '../../../components/ui/button';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function NewLandingPage() {
  return (
    <ShadcnLayout transparentNav={true}>
      {/* Hero Section with lighter color */}
      <section 
        className="relative overflow-hidden" 
        style={{ backgroundColor: 'rgb(252,245,226)' }}
      >
        {/* Breaking the conventional grid layout to allow image to reach right edge */}
        <div className="relative py-16 md:py-32">
          {/* Text content */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="md:max-w-[55%] pt-8 md:pt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  You know funding arbitrage makes money. 
                  <span className="block mt-2">Your Custody. Your Rules. Your automation.</span>
                </h1>
                
                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-lg"
                  >
                    Lock in today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Image positioned absolutely to go all the way to the right edge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute top-0 right-0 bottom-0 w-[50%] h-full flex items-center"
            style={{ 
              zIndex: 10 
            }}
          >
            <div className="relative w-full h-[90%]">
              <Image
                src="/images/herofaucet.png"
                alt="Funding Arbitrage"
                fill
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'right center'
                }}
                priority
              />
            </div>
          </motion.div>
        </div>
        
        {/* Info banner with the specified RGB color */}
        <div 
          className="w-full py-6"
          style={{ backgroundColor: 'rgb(179,219,188)' }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-lg font-medium text-gray-900">
                Start earning consistent returns with market-neutral funding rate arbitrage today
              </div>
              <Button 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Semi-circle SVG Divider */}
      <div className="divider bg-white">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-24 block"
          style={{ fill: 'rgb(179,219,188)' }}
        >
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
        </svg>
      </div>
      
      {/* Placeholder for additional sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Additional Content Coming Soon</h2>
          <p className="text-lg text-gray-700">
            This section will contain more information about the GreenPrint platform.
          </p>
        </div>
      </section>
      
      {/* Wave SVG Divider */}
      <div className="divider bg-white relative">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-20 md:h-32 block"
          style={{ fill: 'rgb(246,242,230)' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Features Section with Different Background */}
      <section className="py-24 relative" style={{ backgroundColor: 'rgb(246,242,230)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Our platform provides everything you need to capitalize on funding rate arbitrage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Full Custody</h3>
              <p className="text-gray-700">Your funds stay in your exchange accounts. We never take custody of your assets.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Market Neutral</h3>
              <p className="text-gray-700">Generate consistent returns regardless of market direction with funding rate arbitrage.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Automated</h3>
              <p className="text-gray-700">Set it and forget it. Our system handles everything from opportunity detection to execution.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Diagonal Cut SVG Divider */}
      <div className="divider">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-24 block"
          style={{ fill: 'rgb(246,242,230)' }}
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        </svg>
      </div>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from traders who are already using our funding rate arbitrage solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  JD
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-gray-600">Professional Trader</p>
                </div>
              </div>
              <p className="text-gray-700">
                "After implementing this solution, my portfolio has seen consistent 20% monthly returns with almost no correlation to the broader market. The Sharpe ratio is unlike anything I've seen in my 15 years of trading."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  MS
                </div>
                <div>
                  <h4 className="font-bold">Mary Smith</h4>
                  <p className="text-sm text-gray-600">Crypto Investor</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've tried many trading bots, but none delivered consistent results like this. It's truly market-neutral, which gives me peace of mind during volatile periods. The team's support has been exceptional."
              </p>
            </div>
          </div>
        </div>
      </section>
    </ShadcnLayout>
  );
} 