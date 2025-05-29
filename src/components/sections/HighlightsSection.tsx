import React from 'react';
import Section from '../common/Section';

export default function HighlightsSection() {
  const sectionBackground = (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-bg-black"></div>
      
      <div className="absolute left-0 top-0 w-full h-full">
        <svg viewBox="24 0 2100 748" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient 
              id="gradient-curve" 
              x1="191.54" 
              y1="409.85" 
              x2="2017.54" 
              y2="454.35" 
              gradientTransform="translate(0 805.45) scale(1 -1)" 
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" className="gradient-stop-1"/>
              <stop offset="0.17" className="gradient-stop-2"/>
              <stop offset="0.47" className="gradient-stop-3"/>
              <stop offset="0.63" className="gradient-stop-4"/>
              <stop offset="0.81" className="gradient-stop-5"/>
              <stop offset="1" className="gradient-stop-6"/>
            </linearGradient>
          </defs>
          <path 
            d="M5.16,746.23c51.67-140.83,226.1-402.1,510.5-320.5,355.5,102,672.72,336.76,1117,221.5C1977.66,557.73,2158.16,173.23,2135.16.73"
            fill="none"
            stroke="url(#gradient-curve)"
            strokeWidth="11"
            className="opacity-60"
          />
        </svg>
      </div>
    </div>
  );

  // Feature content
  const features = [
    {
      title: "Accessible Business Mentorship",
      description: "Break down traditional barriers to mentorship. Connect with successful entrepreneurs regardless of your location, network, or status.",
      isMain: true
    },
    {
      title: "Authentic Leadership Wisdom",
      description: "Every interaction reflects the real knowledge, experiences, and business philosophy of proven leaders who've built successful companies."
    },
    {
      title: "Actionable Business Guidance",
      description: "Focus on practical insights you can apply immediately to your business challenges and professional development."
    }
  ];

  return (
    <Section
      background={sectionBackground}
      className="py-24 md:py-32"
      id="highlights"
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
                  <h3 className="h3 font-display mb-3 text-white">{features[0].title}</h3>
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
                  <h3 className="h3 font-display mb-3 text-white">{features[2].title}</h3>
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
