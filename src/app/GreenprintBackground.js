'use client';
import React from 'react';

export default function GreenprintBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-green-400"
            />
          </pattern>
          
          {/* Blueprint circles */}
          <circle id="blueprint-circle" cx="25" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-400" />
          
          {/* Blueprint lines */}
          <g id="blueprint-lines">
            <line x1="0" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-green-400" />
            <line x1="25" y1="0" x2="25" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-green-400" />
          </g>
        </defs>

        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated elements */}
        <g className="animate-[spin_20s_linear_infinite]">
          <use href="#blueprint-circle" x="100" y="100" />
          <use href="#blueprint-circle" x="300" y="200" />
          <use href="#blueprint-circle" x="500" y="300" />
          <use href="#blueprint-circle" x="700" y="400" />
        </g>

        <g className="animate-[spin_30s_linear_infinite]">
          <use href="#blueprint-lines" x="200" y="150" />
          <use href="#blueprint-lines" x="400" y="250" />
          <use href="#blueprint-lines" x="600" y="350" />
          <use href="#blueprint-lines" x="800" y="450" />
        </g>

        {/* Additional decorative elements */}
        <g className="animate-pulse">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="2"
              fill="currentColor"
              className="text-green-400"
            />
          ))}
        </g>

        {/* Dimension lines and measurements */}
        <g className="text-green-400" strokeWidth="0.5" stroke="currentColor">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <line
                x1={100 + i * 100}
                y1="50"
                x2={100 + i * 100}
                y2="950"
                className="animate-[dash_15s_linear_infinite]"
                strokeDasharray="5,5"
              />
              <line
                x1="50"
                y1={100 + i * 100}
                x2="950"
                y2={100 + i * 100}
                className="animate-[dash_15s_linear_infinite]"
                strokeDasharray="5,5"
              />
            </React.Fragment>
          ))}
        </g>
      </svg>
    </div>
  );
} 