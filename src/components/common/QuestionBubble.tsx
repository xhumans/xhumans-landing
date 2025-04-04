'use client';

import React, { useEffect, useRef, useState } from 'react';

interface QuestionBubbleProps {
  text: string;
  position: string;
  delay?: number;
}

const QuestionBubble: React.FC<QuestionBubbleProps> = ({ text, position, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before showing
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // Unobserve after becoming visible
          if (bubbleRef.current) observer.unobserve(bubbleRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    if (bubbleRef.current) {
      observer.observe(bubbleRef.current);
    }
    
    return () => {
      if (bubbleRef.current) observer.unobserve(bubbleRef.current);
    };
  }, [delay]);
  
  return (
    <div 
      ref={bubbleRef}
      className={`absolute ${position} transition-all duration-500 ease-out`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex items-center gap-2 bg-bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 shadow-lg shadow-primary-500/10">
        <span className="body-m text-text-secondary">{text}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12H16M12 8V16M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default QuestionBubble;