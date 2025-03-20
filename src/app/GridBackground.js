'use client';
import React from 'react';

const GridBackground = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px',
          backgroundPosition: '0 0',
          opacity: 0.5,
          zIndex: 0
        }}
      />
      {children}
    </div>
  );
};

export default GridBackground; 