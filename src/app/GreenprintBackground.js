'use client';
import { useEffect, useRef } from 'react';

const GreenprintBackground = () => {
  const headerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
    let animationFrameId;

    // Initialize header
    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width/2, y: height/2 };

      largeHeader = headerRef.current;
      if (!largeHeader) return;
      
      largeHeader.style.height = height+'px';

      canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // Create points
      points = [];
      for(let x = 0; x < width; x = x + width/20) {
        for(let y = 0; y < height; y = y + height/20) {
          const px = x + Math.random()*width/20;
          const py = y + Math.random()*height/20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // For each point find the 5 closest points
      for(let i = 0; i < points.length; i++) {
        const closest = [];
        const p1 = points[i];
        for(let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if(!(p1 === p2)) {
            let placed = false;
            for(let k = 0; k < 5; k++) {
              if(!placed) {
                if(closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for(let k = 0; k < 5; k++) {
              if(!placed) {
                if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // Assign a circle to each point
      for(let i in points) {
        points[i].circle = new Circle(points[i], 2+Math.random()*2, 'rgba(89,217,129,0.3)');
      }
    };

    // Event handling
    const addListeners = () => {
      if(!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    };

    const mouseMove = (e) => {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      }
      else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    };

    const scrollCheck = () => {
      if(document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (largeHeader) largeHeader.style.height = height+'px';
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    // Animation
    const initAnimation = () => {
      animate();
      for(let i in points) {
        shiftPoint(points[i]);
      }
    };

    const animate = () => {
      if(animateHeader) {
        ctx.clearRect(0,0,width,height);
        for(let i in points) {
          // Detect points in range
          if(Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if(Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if(Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Tweening helper for point movement
    const shiftPoint = (p) => {
      setTimeout(() => {
        const duration = 1 + Math.random();
        const startX = p.x;
        const startY = p.y;
        const targetX = p.originX - 50 + Math.random() * 100;
        const targetY = p.originY - 50 + Math.random() * 100;
        
        // Simple linear animation
        let startTime = null;
        
        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = (timestamp - startTime) / (duration * 1000);
          
          if (progress < 1) {
            p.x = startX + (targetX - startX) * progress;
            p.y = startY + (targetY - startY) * progress;
            requestAnimationFrame(step);
          } else {
            p.x = targetX;
            p.y = targetY;
            shiftPoint(p); // Loop the animation
          }
        }
        
        requestAnimationFrame(step);
      }, 50);
    };

    // Canvas manipulation
    const drawLines = (p) => {
      if(!p.active) return;
      for(let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(89,217,129,'+ p.active+')';
        ctx.stroke();
      }
    };

    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;
      this.active = 0;

      this.draw = function() {
        if(!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(89,217,129,'+ this.active+')';
        ctx.fill();
      };
    }

    // Utility
    const getDistance = (p1, p2) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    // Initialize
    initHeader();
    initAnimation();
    addListeners();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

            return (
    <div 
      ref={headerRef} 
      className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-green-800/20 to-black/60 z-10"
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default GreenprintBackground; 