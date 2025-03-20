'use client';
import React from 'react';

const GridBackground = ({ children, className = '' }) => {
  return (
    <div className={`services-grid-background relative ${className}`}>
      {/* Animated grid lines overlay */}
      <div className="absolute inset-0 z-0">
        {/* This will create an additional animated subtle effect */}
        <div className="absolute inset-0 opacity-30 animate-pulse" 
             style={{ 
               background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)'
             }}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default GridBackground; 