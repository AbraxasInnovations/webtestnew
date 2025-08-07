'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CalendlyWidget from '../../../components/CalendlyWidget';
import { calendlyConfig } from '../../../config/calendly';
import { ShadcnLayout } from '../../../components/ui/shadcn-layout';
import { Button } from '../../../components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../../../components/ui/card';

export default function BookingPage() {
  return (
    <ShadcnLayout>
      <div className="bg-white">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link 
              href="/greenprint/experienced"
              className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to experienced trader page
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Schedule a Consultation
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Book a one-on-one session with one of our trading specialists to discuss:
              </p>
              <ul className="space-y-3 mb-8">
                <ConsultationFeature>
                  Customized strategy recommendations based on your capital and risk tolerance
                </ConsultationFeature>
                <ConsultationFeature>
                  Technical setup guidance for exchange APIs and bot configuration
                </ConsultationFeature>
                <ConsultationFeature>
                  Portfolio optimization and funding rate arbitrage strategies
                </ConsultationFeature>
                <ConsultationFeature>
                  Answers to your specific questions about the GreenPrint product suite
                </ConsultationFeature>
              </ul>
              
              <Card className="bg-green-50 border-l-4 border-green-500 shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-green-800 text-sm">
                    <strong>Note:</strong> This is a no-pressure consultation focused on providing value and answering your questions. We're here to help you make the most of our platform, not to push you into a commitment.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="shadow-lg border-gray-200">
              <CardContent className="p-1">
                {/* Using the Calendly URL from config */}
                <CalendlyWidget 
                  url={calendlyConfig.consultationUrl} 
                  styles={{ height: '650px' }}
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ShadcnLayout>
  );
}

function ConsultationFeature({ children }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-green-100 rounded-full p-1">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-700">{children}</span>
    </li>
  );
} 