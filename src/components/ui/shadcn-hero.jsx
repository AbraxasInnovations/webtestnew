'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { cn } from '../../lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8
    }
  }
};

export function ShadcnHero({
  title,
  subtitle,
  description,
  primaryButtonText = "View Pricing Plans",
  primaryButtonLink = "#pricing",
  secondaryButtonText = "Explore Features",
  secondaryButtonLink = "#features",
  features = ["Non-directional", "Low risk", "Fully automated"],
  imageSrc = "/images/equitycurve95.jpeg",
  imageAlt = "GreenPrint Performance Curve",
  metrics = {
    title: "36-Month Performance",
    mainStat: "+256% Annual Returns",
    additionalStats: [
      { label: "Sharpe", value: "15.5" },
      { label: "Max Drawdown", value: "-2.8%" },
      { label: "Volatility", value: "3.49%" }
    ]
  },
  className
}) {
  return (
    <div className={cn(
      "relative pt-24 pb-24 bg-white overflow-hidden",
      className
    )}>
      {/* Custom Grid Background with Framer Motion */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-transparent to-transparent"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </motion.div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn} className="inline-block bg-green-500/20 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Professional Trading Platform</span>
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
              >
                {title || (
                  <>Market-Neutral <span className="text-green-600">Crypto Arbitrage</span> Strategy</>
                )}
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-xl text-gray-700 max-w-xl leading-relaxed"
              >
                {description || (
                  "A sophisticated approach to digital asset trading with consistent returns across all market conditions. Employing funding rate arbitrage to deliver a Sharpe ratio of 15+."
                )}
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href={primaryButtonLink}
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {primaryButtonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href={secondaryButtonLink}
                  className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200"
                >
                  {secondaryButtonText}
                </Link>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-700 mt-4"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm font-medium">{metrics.title}</p>
                      <span className="px-2 py-1 rounded bg-green-500/30 text-green-100 text-xs">{metrics.mainStat}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {metrics.additionalStats.map((stat, index) => (
                        <span key={index} className="px-2 py-1 rounded bg-white/20 text-white text-xs">
                          {stat.label}: {stat.value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 