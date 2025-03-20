'use client';
import React, { useEffect, useRef } from 'react';

const ShimmerText = ({ children, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      // Make sure the data-text attribute has the same text as the element
      textRef.current.setAttribute('data-text', textRef.current.textContent);
    }
  }, [children]);

  return (
    <span 
      ref={textRef} 
      className={`services-shimmer-text ${className}`}
      data-text={typeof children === 'string' ? children : ''}
    >
      {children}
    </span>
  );
};

export default ShimmerText; 