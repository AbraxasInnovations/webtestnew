'use client';
import React from 'react';

export default function GreenprintBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-15">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Grid Pattern */}
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path 
              d="M 20 0 L 0 0 0 20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              className="text-green-400/30"
            />
          </pattern>
          
          {/* Technical Symbols */}
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="4"
            markerHeight="4"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-green-400" />
          </marker>
        </defs>

        {/* Background Grid */}
        <rect width="100%" height="100%" fill="url(#smallGrid)" />

        {/* Circuit Board Paths */}
        <g className="text-green-400" stroke="currentColor" strokeWidth="1" fill="none">
          <path 
            d="M 100 200 Q 150 200 150 250 L 150 350 Q 150 400 200 400 L 400 400"
            className="animate-[dash_20s_linear_infinite]"
            strokeDasharray="4,4"
          />
          <path 
            d="M 400 100 L 400 300 Q 400 350 450 350 L 550 350 Q 600 350 600 400"
            className="animate-[dash_20s_linear_infinite]"
            strokeDasharray="4,4"
          />
        </g>

        {/* Technical Drawings */}
        <g className="text-green-400" stroke="currentColor" fill="none">
          {/* Hexagon with measurements */}
          <path d="M 700 300 L 750 275 L 800 300 L 800 350 L 750 375 L 700 350 Z" />
          <line x1="700" y1="300" x2="680" y2="280" markerEnd="url(#arrow)" />
          <text x="660" y="275" className="text-xs fill-current">50px</text>

          {/* Circle with radius lines */}
          <circle cx="200" cy="600" r="50" className="animate-[spin_20s_linear_infinite] origin-[200px_600px]" />
          <line x1="200" y1="600" x2="250" y2="600" strokeDasharray="2,2" />
          <text x="220" y="590" className="text-xs fill-current">r=50</text>

          {/* Animated Component */}
          <g className="animate-[spin_30s_linear_infinite] origin-[500px_500px]">
            <rect x="450" y="450" width="100" height="100" />
            <circle cx="500" cy="500" r="30" />
            <line x1="450" y1="500" x2="550" y2="500" />
            <line x1="500" y1="450" x2="500" y2="550" />
          </g>
        </g>

        {/* Dimension Lines */}
        <g className="text-green-400" stroke="currentColor" strokeWidth="0.5">
          {/* Vertical Measurements */}
          <line x1="100" y1="100" x2="100" y2="900" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
          <text x="80" y="500" className="text-xs fill-current" transform="rotate(-90, 80, 500)">800px</text>

          {/* Horizontal Measurements */}
          <line x1="150" y1="800" x2="850" y2="800" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
          <text x="500" y="820" className="text-xs fill-current">700px</text>
        </g>

        {/* Technical Notes */}
        <g className="text-green-400 opacity-50">
          {[
            { x: 120, y: 150, text: "R25" },
            { x: 780, y: 420, text: "∅60" },
            { x: 350, y: 650, text: "90°" },
            { x: 600, y: 250, text: "A-A" },
          ].map((note, i) => (
            <text key={i} x={note.x} y={note.y} className="text-xs fill-current">{note.text}</text>
          ))}
        </g>

        {/* Animated Connection Points */}
        <g className="animate-pulse">
          {[...Array(15)].map((_, i) => {
            const x = 150 + (i % 5) * 200;
            const y = 150 + Math.floor(i / 5) * 200;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                className="fill-green-400"
              />
            );
          })}
        </g>

        {/* Animated Flow Lines */}
        <g className="text-green-400" strokeWidth="1">
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M ${100 + i * 200} 100 Q ${150 + i * 200} ${300 + (i % 2) * 100} ${200 + i * 200} ${400 + (i % 3) * 100}`}
              fill="none"
              stroke="currentColor"
              className="animate-[dash_15s_linear_infinite]"
              strokeDasharray="4,4"
            />
          ))}
        </g>
      </svg>
    </div>
  );
} 