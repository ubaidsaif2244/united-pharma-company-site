import React, { useState, useEffect, useRef } from 'react';
import './CounterAnimation.css';

const CounterAnimation = ({ 
  endValue, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '',
  startAnimation = false 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  // Parse the end value to handle numbers with suffixes like "20+", "1M+", etc.
  const parseEndValue = (value) => {
    if (typeof value === 'number') return value;
    
    const str = value.toString().toLowerCase();
    let numericValue = parseFloat(str);
    
    if (str.includes('k')) {
      numericValue *= 1000;
    } else if (str.includes('m')) {
      numericValue *= 1000000;
    } else if (str.includes('b')) {
      numericValue *= 1000000000;
    }
    
    return numericValue;
  };

  // Format the display value
  const formatValue = (value) => {
    const originalStr = endValue.toString().toLowerCase();
    
    if (originalStr.includes('k')) {
      return (value / 1000).toFixed(0) + 'K';
    } else if (originalStr.includes('m')) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (originalStr.includes('b')) {
      return (value / 1000000000).toFixed(1) + 'B';
    }
    
    return Math.floor(value).toString();
  };

  useEffect(() => {
    if (!startAnimation || hasAnimated) return;

    const numericEndValue = parseEndValue(endValue);
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentVal = numericEndValue * easeOutQuart;
      
      setCurrentValue(currentVal);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };
    
    animate();
  }, [startAnimation, endValue, duration, hasAnimated]);

  // Intersection Observer for auto-triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(false);
            // Small delay to ensure smooth animation
            setTimeout(() => {
              const numericEndValue = parseEndValue(endValue);
              const startTime = Date.now();
              
              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentVal = numericEndValue * easeOutQuart;
                
                setCurrentValue(currentVal);
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setHasAnimated(true);
                }
              };
              
              animate();
            }, 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [endValue, duration]);

  return (
    <span 
      ref={counterRef}
      className={`counter-animation ${className}`}
    >
      {prefix}{formatValue(currentValue)}{suffix}
    </span>
  );
};

export default CounterAnimation;