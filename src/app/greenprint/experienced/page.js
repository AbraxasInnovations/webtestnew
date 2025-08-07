'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { CalendlyButton } from '../../../components/CalendlyWidget';
import { calendlyConfig } from '../../../config/calendly';
import { ShadcnLayout } from '../../../components/ui/shadcn-layout';
import { ShadcnHero } from '../../../components/ui/shadcn-hero';
import { motion } from 'framer-motion';

// Import Shadcn UI components
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';
import { Badge } from '../../../components/ui/badge';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ExperiencedTraderPage() {
  // FAQ state using Shadcn Accordion instead of custom state
  const [activeFaq, setActiveFaq] = useState('');
  
  return (
    <ShadcnLayout transparentNav={true}>
      {/* Hero Section */}
      <ShadcnHero 
        title={<>Market-Neutral <span className="text-green-600">Crypto Arbitrage</span> Strategy</>}
        description="A sophisticated approach to digital asset trading with consistent returns across all market conditions. Employing funding rate arbitrage to deliver a Sharpe ratio of 15+."
        features={["Non-directional", "Low risk", "Fully automated"]}
        imageSrc="/images/equitycurve95.jpeg"
      />
      
      {/* What is GreenPrint Section */}
      <WhatIsGreenPrintSection />
      
      {/* Why You Are Here Section */}
      <WhyYouAreHereSection />
      
      {/* Feature Cards Section */}
      <FeatureCardsSection />
      
      {/* What Makes Us Different Section */}
      <WhatMakesUsDifferentSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <FaqSection />
    </ShadcnLayout>
  );
}

// What is GreenPrint Section
function WhatIsGreenPrintSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What is <span className="text-green-600">GreenPrint</span>
          </h2>
          <div className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive suite of market-exploiting products for sophisticated traders
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-lg text-gray-700 leading-relaxed">
              GreenPrint is a sophisticated suite of trading products designed to capitalize on inefficiencies in the cryptocurrency markets. Our flagship offering, the Funding Rate Bot, exploits funding rate differentials between perpetual futures markets, generating consistent returns regardless of market direction.
            </div>
            
            <Card className="border-l-4 border-green-500 bg-white shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900">Current Product Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Funding Rate Bot</span>
                      <div className="text-sm text-gray-600">Automated funding rate arbitrage across exchanges</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Funding Rate Analyzer</span>
                      <div className="text-sm text-gray-600">Advanced analytics platform for funding rate opportunities</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">CLMM Bot</span>
                      <div className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">Concentrated liquidity market maker</span>
                        <Badge variant="outline" className="bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">Coming Soon</Badge>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="text-lg text-gray-700 leading-relaxed">
              Unlike traditional trading strategies that rely on market direction, our approach focuses on capturing the spread between funding rates, creating a reliable income stream that's independent of price movements.
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/images/equitycurve95.jpeg"
                alt="GreenPrint Performance"
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
            
            <motion.div 
              className="mt-6 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-4 rounded-lg border border-green-100 shadow-md text-center"
              >
                <div className="text-2xl font-bold text-green-600">+256%</div>
                <div className="text-sm text-gray-600">Annual Return</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-4 rounded-lg border border-green-100 shadow-md text-center"
              >
                <div className="text-2xl font-bold text-green-600">15.55</div>
                <div className="text-sm text-gray-600">Sharpe Ratio</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-4 rounded-lg border border-green-100 shadow-md text-center"
              >
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Automated</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="h-12 bg-gray-50 mt-10"></div>
    </section>
  );
}

// Why You Are Here Section
function WhyYouAreHereSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310b981' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: '100px 100px',
          }}
        />
      </div>
      
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white transform skew-y-1 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why You Are <span className="text-green-600">Here</span>
          </h2>
          <div className="text-xl text-gray-700 max-w-3xl mx-auto">
            As an experienced trader, you recognize the value of sophisticated strategies that deliver consistent returns
          </div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Reason 1 */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-green-50 to-green-100/30 shadow-md"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">You're After Consistency</h3>
            <p className="text-gray-700">
              You understand the value of consistent returns over time, rather than the high-risk approach of directional bets. Our strategy delivers steady performance in all market conditions.
            </p>
          </motion.div>
          
          {/* Reason 2 */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-blue-50 to-blue-100/30 shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">You Value Risk Management</h3>
            <p className="text-gray-700">
              Your experience has taught you that proper risk management is essential. Our market-neutral approach eliminates directional exposure, providing a truly hedged strategy.
            </p>
          </motion.div>
          
          {/* Reason 3 */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-amber-50 to-amber-100/30 shadow-md"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">You Seek Efficiency</h3>
            <p className="text-gray-700">
              You know that time is valuable. Our fully automated solution removes the need for constant monitoring, freeing you to focus on other aspects of your portfolio.
            </p>
          </motion.div>
          
          {/* Reason 4 */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-purple-50 to-purple-100/30 shadow-md"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">You Appreciate Innovation</h3>
            <p className="text-gray-700">
              Your trading journey has shown you the value of innovative strategies. Our approach represents the cutting edge of quantitative trading in the crypto space.
            </p>
          </motion.div>
          
          {/* Reason 5 */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-pink-50 to-pink-100/30 shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">You Recognize Quality Support</h3>
            <p className="text-gray-700">
              You know that quality support is crucial for complex strategies. Our team provides personalized assistance to ensure optimal performance of your solution.
            </p>
          </motion.div>
          
          {/* Reason 6 */}
          <motion.div 
            variants={fadeIn}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="rounded-xl border border-gray-200 p-6 bg-gradient-to-br from-teal-50 to-teal-100/30 shadow-md"
          >
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">You Want Proven Results</h3>
            <p className="text-gray-700">
              Your experience makes you skeptical of unproven strategies. We offer complete transparency with verifiable performance data and a track record of success.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-green-500 to-teal-600 text-white p-2">
            <CardContent className="py-6">
              <div className="text-xl font-medium">
                Our clients typically see annual returns of 100-250% with a Sharpe Ratio exceeding 15 – all without directional market exposure.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-1 pointer-events-none"></div>
    </section>
  );
}

// Feature Cards Section
function FeatureCardsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%2310b981' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: '84px 48px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            <span className="text-green-600">Features</span> Designed for Professionals
          </h2>
          <div className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our platform provides the sophisticated tools and capabilities that experienced traders demand
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-44 bg-gradient-to-br from-green-400 to-green-600 relative p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Performance Analytics</h3>
              <p className="text-gray-500 mb-4">Real-time performance monitoring</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time P&L tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed statistical analysis</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-44 bg-gradient-to-br from-blue-400 to-blue-600 relative p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sophisticated Risk Management</h3>
              <p className="text-gray-500 mb-4">Advanced protection features</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated position sizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dynamic stop-loss mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-exchange risk balancing</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-44 bg-gradient-to-br from-purple-400 to-purple-600 relative p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Strategy Parameters</h3>
              <p className="text-gray-500 mb-4">Tailored to your preferences</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Configurable funding rate thresholds</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exchange prioritization options</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Adjustable execution parameters</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div 
            className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-44 bg-gradient-to-br from-amber-400 to-amber-600 relative p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Execution</h3>
              <p className="text-gray-500 mb-4">Set and forget operation</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 autonomous operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time opportunity detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart execution algorithms</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 5 */}
          <motion.div 
            className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-44 bg-gradient-to-br from-teal-400 to-teal-600 relative p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise-Grade Security</h3>
              <p className="text-gray-500 mb-4">Advanced protection features</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>API-key based access only</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Restricted withdrawal permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>End-to-end encryption</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Feature 6 */}
          <motion.div 
            className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-44 bg-gradient-to-br from-pink-400 to-pink-600 relative p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-gray-500 mb-4">Expert assistance when you need it</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fast response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategy optimization assistance</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// What Makes Us Different Section
function WhatMakesUsDifferentSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '20px 20px',
          }}
        />
      </div>
      
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white transform skew-y-1 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What Makes Us <span className="text-green-600">Different</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Compared to other solutions, GreenPrint offers substantial advantages for experienced traders
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image + Stats Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <Image
                  src="/images/gpperformance.jpeg"
                  alt="Performance Metrics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-5 border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-100">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15.5+</div>
                    <div className="text-sm text-gray-600">Sharpe Ratio</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-5 border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-100">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+256%</div>
                    <div className="text-sm text-gray-600">Annual Return</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-16 grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-lg border border-gray-200 shadow-md p-6"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">24/7 Operation</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Unlike manual strategies requiring constant attention, our system operates continuously to capture all opportunities.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-lg border border-gray-200 shadow-md p-6"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Stable Returns</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Our market-neutral approach delivers consistent performance regardless of market direction or volatility.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Text Side */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Difference 1 */}
            <motion.div variants={fadeIn} className="flex gap-5">
              <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">
                  True Market Neutrality
                </h3>
                <p className="text-gray-700">
                  Unlike most "market neutral" strategies that still retain some directional bias, our solution ensures complete neutrality through funding rate arbitrage, eliminating market exposure entirely.
                </p>
              </div>
            </motion.div>
            
            {/* Difference 2 */}
            <motion.div variants={fadeIn} className="flex gap-5">
              <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Proprietary Execution Algorithms
                </h3>
                <p className="text-gray-700">
                  Our system employs advanced execution algorithms that minimize slippage and maximize capital efficiency, resulting in superior performance compared to manual approaches or less sophisticated automation.
                </p>
              </div>
            </motion.div>
            
            {/* Difference 3 */}
            <motion.div variants={fadeIn} className="flex gap-5">
              <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Exceptional Sharpe Ratio
                </h3>
                <p className="text-gray-700">
                  While many strategies claim good risk-adjusted returns, our approach consistently delivers a Sharpe ratio exceeding 15 — a level of performance that places it among the elite strategies in any asset class.
                </p>
              </div>
            </motion.div>
            
            {/* Difference 4 */}
            <motion.div variants={fadeIn} className="flex gap-5">
              <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Experienced Team
                </h3>
                <p className="text-gray-700">
                  Our team combines decades of experience in quantitative finance, market making, and algorithmic trading across traditional and digital assets — bringing institutional-grade expertise to our solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="mt-8"
            >
              <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-white/10 rounded-full">
                      <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <blockquote>
                      <p className="text-lg mb-2">
                        "After implementing GreenPrint's solution, my portfolio has seen consistent 20% monthly returns with almost no correlation to the broader market. The Sharpe ratio is unlike anything I've seen in my 15 years of trading."
                      </p>
                      <footer className="text-gray-300 text-sm">
                        — James K., Professional Trader
                      </footer>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-1 pointer-events-none"></div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-green-50/20 to-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310b981' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: '100px 100px',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Transparent <span className="text-green-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the plan that best suits your trading strategy and capital deployment
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Pricing Tier 1 */}
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative"
          >
            <Card className="h-full border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Standard
                </CardTitle>
                <CardDescription>
                  For traders getting started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$450</span>
                  <span className="ml-2 text-gray-600">/month</span>
                </div>
                
                <div className="border-t border-b border-gray-100 py-4 my-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Up to $50,000 capital deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Funding Rate Bot</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Email support</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Advanced risk management</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Priority trade execution</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Pricing Tier 2 - Featured */}
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative z-10 lg:-mt-8"
          >
            <Card className="h-full border-2 border-green-500 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute -top-5 left-0 right-0 text-center">
                <Badge className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-4 py-1 text-sm font-medium rounded-full shadow-lg">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="pt-10 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Professional
                </CardTitle>
                <CardDescription>
                  For serious traders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$950</span>
                  <span className="ml-2 text-gray-600">/month</span>
                </div>
                
                <div className="border-t border-b border-gray-100 py-4 my-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Up to $250,000 capital deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Funding Rate Bot + Analyzer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority support (24hr response)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced risk management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom execution parameters</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Pricing Tier 3 */}
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative"
          >
            <Card className="h-full border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Enterprise
                </CardTitle>
                <CardDescription>
                  For institutional traders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                
                <div className="border-t border-b border-gray-100 py-4 my-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Unlimited capital deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full product suite access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced risk management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom execution parameters</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Button className="w-full border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-100">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        {/* Additional Info */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">No Performance Fees</h3>
              <p className="text-gray-700">Unlike many funds or services, we charge a flat subscription fee with no additional performance-based fees.</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">Cancel Anytime</h3>
              <p className="text-gray-700">All plans are month-to-month with no long-term commitment required. Cancel with 30 days notice.</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">Secure Implementation</h3>
              <p className="text-gray-700">We use read-only API keys with restricted permissions to ensure the highest level of security.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FaqSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-gray-100">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white transform skew-y-1 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about GreenPrint's solutions
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-3"
        >
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    What is funding rate arbitrage?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    Funding rate arbitrage is a market-neutral strategy that exploits the difference in funding rates between perpetual futures contracts across different exchanges. By taking opposite positions on exchanges with different funding rates, traders can earn the funding rate differential without directional market exposure. This creates consistent returns regardless of whether the market goes up or down.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    How does GreenPrint differ from other crypto trading bots?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    Unlike most trading bots that make directional bets on price movements, GreenPrint's solution is completely market-neutral. We focus exclusively on funding rate arbitrage, which eliminates directional risk. Our proprietary execution algorithms, sophisticated risk management systems, and institutional-grade infrastructure deliver exceptional performance with a Sharpe ratio exceeding 15 — far superior to most trading strategies in any asset class.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    What exchanges are supported?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    GreenPrint currently supports Binance, Bybit, OKX, and dYdX for funding rate arbitrage. We continuously monitor these exchanges for the most profitable opportunities and execute trades accordingly. Our system is designed to adapt to changing exchange conditions and can be configured to prioritize specific exchanges based on your preferences.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    How secure is my trading capital?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    Security is our top priority. We never take custody of your funds — all capital remains in your exchange accounts. Our system operates using API keys with restricted permissions (trade-only, no withdrawal access). We implement enterprise-grade security practices, including end-to-end encryption, secure credential storage, and regular security audits. Additionally, our risk management systems include multiple safeguards to protect your capital during execution.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    What kind of returns can I expect?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    Our clients typically see annual returns between 100-250% on their deployed capital, with a Sharpe ratio exceeding 15. These returns are based on historical performance and can vary depending on market conditions and funding rate environments. What makes our approach unique is the consistency of returns regardless of market direction. During high volatility periods, returns can be even higher as funding rate differentials tend to widen.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    Is there a minimum capital requirement?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    While there's no hard minimum, we recommend deploying at least $10,000 per exchange to ensure efficient capital utilization and overcome trading fees. Our Standard plan is designed for up to $50,000 in capital deployment, while the Professional plan supports up to $250,000. For larger capital deployments, our Enterprise solution offers unlimited scaling with custom parameters.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    How do I get started?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    Getting started is simple. After selecting your subscription plan, our team will schedule an onboarding call to walk you through the setup process. This includes creating exchange accounts (if needed), generating the necessary API keys with the correct permissions, and configuring your risk parameters. Most clients are up and running within 24-48 hours. Our team provides comprehensive support throughout the setup process and remains available for any questions or optimizations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <div className="text-lg font-medium text-gray-900 pr-6">
                    Can I customize the strategy parameters?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-700">
                  <p>
                    Yes, especially for Professional and Enterprise plans. You can customize parameters such as funding rate thresholds, position sizing, exchange prioritization, and risk management settings. Our team works with you to optimize these parameters based on your risk tolerance and capital deployment. For Standard plan users, we provide a more streamlined setup with our recommended default parameters, which are designed to deliver strong performance for most traders.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl border-0 py-6 px-8">
            <CardContent className="px-0 py-0 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4">Ready to elevate your trading strategy?</h3>
              <p className="text-lg mb-8 max-w-2xl">
                Schedule a consultation with our team to discuss how GreenPrint can help you achieve consistent, market-neutral returns.
              </p>
              <CalendlyButton 
                className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-md transition-all transform hover:scale-105"
                text="Book a Free Consultation"
                calendlyUrl={calendlyConfig.calendlyUrl}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-1 pointer-events-none"></div>
    </section>
  );
}
