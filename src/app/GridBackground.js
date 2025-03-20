'use client';
import React from 'react';

const GridBackground = ({ children, className = '' }) => {
  return (
    <div className={`services-grid-background relative ${className}`}>
      {children}
    </div>
  );
};

export default GridBackground; 