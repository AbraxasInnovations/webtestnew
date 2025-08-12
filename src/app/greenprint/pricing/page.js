'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function GreenprintPricing() {
  const [currentStep, setCurrentStep] = useState(1);
  const [responses, setResponses] = useState({});
  const [email, setEmail] = useState('');

  const handleResponse = (question, answer) => {
    setResponses(prev => ({
      ...prev,
      [question]: answer
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Auto-advance loading step after 3 seconds
  React.useEffect(() => {
    if (currentStep === 5) {
      const timer = setTimeout(() => {
        nextStep();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen" style={{ 
      background: 'radial-gradient(#ffffff54 2px, transparent 0) 0 0/40px 40px, radial-gradient(#00000026 2px, transparent 0) -1px 1px/40px 40px, radial-gradient(ellipse at 150% -50%, #6d788f, #fff)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      paddingTop: '0'
    }}>
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="h-8">
                <img 
                  src="/images/whitegplogo.PNG"
                  alt="GreenPrint"
                  className="h-full w-auto"
                />
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/greenprint/test-layout#features" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Features</Link>
                <Link href="/greenprint/pricing" className="text-white font-medium text-sm">Pricing</Link>
                <Link href="/greenprint/test-layout#about" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">About</Link>
                <Link href="/greenprint/docs" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Documentation</Link>
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
            </div>
          </div>
        </div>
      </nav>

      {/* Questionnaire Container */}
      <div className="max-w-2xl mx-auto w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl mt-48">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4 -ml-8">
            <img 
              src="/images/blackgplogo.png"
              alt="GreenPrint Logo"
              className="h-16 w-auto -mt-6"
            />
            <h1 className="text-3xl font-normal text-black leading-tight font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]" style={{ marginLeft: '-1rem' }}>
              GreenPrint Access
            </h1>
          </div>
          <p className="text-lg text-gray-700 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
            Let's find the perfect plan for your trading automation needs.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
            <span>Step {currentStep} of 6</span>
            <span>{Math.round((currentStep / 6) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            ></div>
          </div>
        </div>
          
        {/* Step Content */}
        <div className="min-h-[300px] flex flex-col justify-center">
          {currentStep === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                What is your experience in financial markets?
              </h2>
              <div className="space-y-4">
                {[
                  "I'm completely new to trading and financial markets",
                  "I have some basic knowledge but limited trading experience",
                  "I'm an active trader with 1-3 years of experience",
                  "I'm an experienced trader with 3+ years in the markets",
                  "I'm a professional trader or work in the financial industry"
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResponse('experience', option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif] ${
                      responses.experience === option
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                Why do you want to automate your trading?
              </h2>
              <div className="space-y-4">
                {[
                  "I want more passive income",
                  "I want a high Sharpe ratio portfolio diversifier",
                  "I am scared of buying and holding",
                  "I want to reduce emotional trading decisions",
                  "I want to capture opportunities 24/7",
                  "I want to scale my existing strategies"
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResponse('motivation', option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif] ${
                      responses.motivation === option
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                What is your expected liquid net worth ballpark?
              </h2>
              <div className="space-y-4">
                {[
                  "Under $10,000",
                  "$10,000 - $50,000",
                  "$50,000 - $100,000",
                  "$100,000 - $500,000",
                  "$500,000 - $1,000,000",
                  "Over $1,000,000"
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResponse('netWorth', option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif] ${
                      responses.netWorth === option
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 4 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                Quick crypto knowledge check: What is the primary purpose of a funding rate in perpetual futures?
              </h2>
              <div className="space-y-4">
                {[
                  "To pay for transaction fees",
                  "To balance long and short positions and prevent price manipulation",
                  "To provide insurance against liquidation",
                  "To reward market makers",
                  "To calculate trading volume"
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResponse('cryptoMath', option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif] ${
                      responses.cryptoMath === option
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option}
            </button>
                ))}
          </div>
        </div>
          )}
          
          {currentStep === 5 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                Loading Analysis...
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
                <p className="text-gray-600 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                  Analyzing your responses and calculating your optimal plan...
                </p>
              </div>
            </div>
          )}
          
          {currentStep === 6 && (
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                  We are pleased to inform you that you have been approved for access to GreenPrint.
                </h2>
                <p className="text-gray-600 mb-6 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                  Enter your email below to receive your personalized plan and next steps.
                </p>
                <div className="space-y-4 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]"
                  />
                  <p className="text-sm text-gray-600 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                    We'll send your personalized GreenPrint access plan and next steps to this email.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-emerald-800 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                    <strong>Important:</strong> The answer to your crypto question and additional insights are included in the email we'll send.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {currentStep !== 1 && currentStep !== 2 && currentStep !== 3 && currentStep !== 4 && currentStep !== 5 && currentStep !== 6 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                Step {currentStep} - Coming Soon
              </h2>
              <p className="text-gray-600 font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]">
                This step will be implemented next.
              </p>
            </div>
          )}
          </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {currentStep === 6 ? (
            <Link
              href="/greenprint/test-layout"
              className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]"
            >
              Back to GreenPrint Home
            </Link>
          ) : (
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]"
            >
              Previous
            </button>
          )}
          
          {currentStep !== 6 && (
            <button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !responses.experience) ||
                (currentStep === 2 && !responses.motivation) ||
                (currentStep === 3 && !responses.netWorth) ||
                (currentStep === 4 && !responses.cryptoMath) ||
                (currentStep === 6 && !email)
              }
              className="px-6 py-2 bg-emerald-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-600 transition-colors font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_system-ui,_sans-serif]"
            >
              {currentStep === 6 ? 'Submit' : 'Next'}
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© 2025 Abraxas Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 