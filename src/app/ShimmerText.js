'use client';
import React, { useEffect, useRef } from 'react';

const ShimmerText = ({ children, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      // Set the placeholder length property for animation timing
      element.style.setProperty('--placeholder-length', element.textContent.length);
    }
  }, [children]);

  return (
    <span 
      ref={textRef} 
      className={`services-shimmer-text ${className}`}
    >
      {children}
    </span>
  );
};

export default ShimmerText; 