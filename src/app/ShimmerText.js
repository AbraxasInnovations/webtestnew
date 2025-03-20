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
    <div className={`inline-block ${className}`}>
      <span
        ref={textRef}
        className="services-shimmer-text font-bold"
        data-text={typeof children === 'string' ? children : ''}
        style={{
          display: 'inline-block',
          position: 'relative',
          color: 'white',
          fontWeight: 'inherit'
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default ShimmerText; 