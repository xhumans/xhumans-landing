import React from 'react';
import Section from '../common/Section';

export default function KeyFeaturesSection() {
  // Define background element with gradient curves
  const sectionBackground = (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main background color */}
      <div className="absolute inset-0 bg-bg-black"></div>
      
      {/* Blue gradient curve */}
      <div className="absolute left-0 top-0 w-full h-full">
        <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M-100,800 C200,600 900,700 1300,300 L1300,0 L-100,0 Z" 
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="3"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Pink gradient curve */}
      <div className="absolute right-0 bottom-0 w-full h-full">
        <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M1300,0 C1000,300 400,100 -100,500 L-100,800 L1300,800 Z" 
            fill="none"
            stroke="url(#pinkGradient)"
            strokeWidth="3"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="pinkGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );

  // Feature content
  const features = [
    {
      title: "Instant Access to Knowledge",
      description: "Tap into valuable advice and insights from world leaders, anytime you need guidance.",
      isMain: true
    },
    {
      title: "Authentic Conversations",
      description: "Talk directly with lifelike digital versions of iconic personalities, offering you an experience that feels real and personal."
    },
    {
      title: "Expert-Approved Insights",
      description: "All information comes from the experts themselves, ensuring that every response is grounded in their unique knowledge and experiences."
    }
  ];

  return (
    <Section
      background={sectionBackground}
      className="py-24 md:py-32"
      id="key-features"
    >
      <div className="grid grid-cols-1 gap-6 md:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1024px] mx-auto gap-6 md:gap-8">
          {/* Main feature card with graphic - spans full height */}
          <div className="lg:row-span-2">
            <div className="rounded-3xl overflow-hidden h-full max-w-[500px] mx-auto w-full">
              <div className="h-full bg-gradient-to-br from-primary-700 to-primary-500 p-8 relative">
                {/* Abstract blob shapes */}
                <div className="absolute inset-0 overflow-hidden opacity-80">
                  <div className="absolute top-[10%] right-[20%] w-40 h-40 rounded-full bg-primary-400/40 blur-md"></div>
                  <div className="absolute top-[30%] left-[10%] w-60 h-60 rounded-full bg-primary-300/30 blur-md"></div>
                  <div className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-secondary-400/40 blur-md"></div>
                  <div className="absolute bottom-[5%] left-[20%] w-52 h-52 rounded-full bg-primary-400/40 blur-md"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-end">
                  <h3 className="h3 font-display mb-3 text-white font-display">{features[0].title}</h3>
                  <p className="text-white/80">{features[0].description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* First feature card - right side top */}
          <div>
            <div className="rounded-3xl overflow-hidden h-full max-w-[500px] mx-auto w-full border border-primary-500/20">
              <div className="h-full bg-black/40 backdrop-blur-md p-8 relative">
                <div className="relative z-10 flex flex-col h-full justify-end">
                  <h3 className="h3 font-display mb-3 text-white font-display">{features[1].title}</h3>
                  <p className="text-white/80">{features[1].description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second feature card - right side bottom */}
          <div>
            <div className="rounded-3xl overflow-hidden h-full max-w-[500px] mx-auto w-full border border-secondary-500/20">
              <div className="h-full bg-black/40 backdrop-blur-md p-8 relative">
                <div className="relative z-10 flex flex-col h-full justify-end">
                  <h3 className="h3 font-display mb-3 text-white font-display">{features[2].title}</h3>
                  <p className="text-white/80">{features[2].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}