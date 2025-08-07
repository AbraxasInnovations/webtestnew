'use client';

import React, { useEffect, useState, useCallback } from 'react';

export default function CalendlyWidget({ url, styles = {} }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Load the Calendly script if it's not already loaded
    const loadCalendlyScript = () => {
      return new Promise((resolve, reject) => {
        if (window.Calendly) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = (error) => reject(new Error(`Failed to load Calendly script: ${error}`));
        document.body.appendChild(script);
      });
    };
    
    setIsLoading(true);
    
    loadCalendlyScript()
      .then(() => {
        setIsLoading(false);
        if (document.getElementById('calendly-inline-widget')) {
          try {
            window.Calendly.initInlineWidget({
              url: url,
              parentElement: document.getElementById('calendly-inline-widget'),
              prefill: {},
              utm: {}
            });
          } catch (error) {
            console.error('Error initializing Calendly widget:', error);
            setHasError(true);
          }
        }
      })
      .catch(error => {
        console.error('Error loading Calendly script:', error);
        setIsLoading(false);
        setHasError(true);
      });
      
    // No need for cleanup as we don't want to remove the script once loaded
  }, [url]);

  if (isLoading) {
    return (
      <div 
        style={{ 
          minWidth: '320px',
          height: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...styles 
        }}
      >
        <div className="animate-pulse text-gray-500">Loading calendar...</div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div 
        style={{ 
          minWidth: '320px',
          height: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...styles 
        }}
      >
        <div className="text-red-500 text-center p-8">
          <p className="font-bold mb-2">Unable to load calendar</p>
          <p className="text-sm">Please try refreshing the page or visit our calendar directly at:</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 inline-block"
          >
            {url}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="calendly-inline-widget"
      style={{ 
        minWidth: '320px',
        height: '700px',
        ...styles
      }} 
    />
  );
}

// Pop-up button version
export function CalendlyButton({ url, text, className }) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Load the Calendly script on component mount
  useEffect(() => {
    const loadCalendlyScript = () => {
      return new Promise((resolve, reject) => {
        if (window.Calendly) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = (error) => reject(new Error(`Failed to load Calendly script: ${error}`));
        document.body.appendChild(script);
      });
    };
    
    loadCalendlyScript()
      .then(() => {
        setScriptLoaded(true);
      })
      .catch(error => {
        console.error('Error loading Calendly script:', error);
        setHasError(true);
        // Still mark as loaded so the button isn't permanently disabled
        setScriptLoaded(true);
      });
  }, []);

  const openCalendly = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      if (window.Calendly) {
        // For local development, open in a new tab instead of popup
        // to avoid cross-origin issues
        if (window.location.hostname === 'localhost') {
          window.open(url, '_blank');
          setIsLoading(false);
        } else {
          // Use popup for production environment
          window.Calendly.initPopupWidget({
            url: url
          });
          
          // Set a timeout to reset loading state in case the Calendly
          // callback doesn't work due to cross-origin issues
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        }
      } else {
        // If Calendly script failed to load, open URL directly
        window.open(url, '_blank');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error opening Calendly popup:', error);
      // Fallback: open in new tab if popup fails
      window.open(url, '_blank');
      setIsLoading(false);
    }
  }, [url, isLoading]);

  // When there's an error with Calendly script loading,
  // simply provide a direct link to the Calendly page
  if (hasError) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className || "inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"}
      >
        {text || "Talk to a Professional"}
      </a>
    );
  }

  return (
    <button
      onClick={openCalendly}
      disabled={!scriptLoaded || isLoading}
      className={`${className || "inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"} ${!scriptLoaded || isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {isLoading ? "Loading..." : (text || "Talk to a Professional")}
    </button>
  );
} 