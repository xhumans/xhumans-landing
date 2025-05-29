'use client';

import React from 'react';
import Section from '../common/Section';
import QuestionBubble from '../common/QuestionBubble';

export default function AskTheExpertsSection() {
  // Define background element with gradient and glow effects
  const sectionBackground = (
    <div className="absolute inset-0 bg-linear-to-br from-bg-secondary to-bg-primary">
      {/* Add glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500 rounded-full opacity-15 blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary-500 rounded-full opacity-15 blur-[120px]"></div>
    </div>
  );

  // Questions to display around the devices
  const questions = [
    { text: "How did you validate your business idea?", position: "top-[0%] left-[0%] md:left-[30%]", delay: 300 },
    { text: "What's your approach to fundraising?", position: "top-[20%] left-[5%] md:left-[5%]", delay: 0 },
    { text: "How do you scale a team effectively?", position: "top-[25%] right-[0%] md:right-[2%]", delay: 600 },
    { text: "What's your strategy for market expansion?", position: "top-[45%] left-[10%] md:left-[0%]", delay: 200 },
    { text: "How do you handle business setbacks?", position: "top-[50%] right-[10%] md:right-[0%]", delay: 800 },
    { text: "What metrics matter most for growth?", position: "bottom-[25%] left-[0%] md:left-[10%]", delay: 400 },
    { text: "How do you build strategic partnerships?", position: "bottom-[20%] right-[5%] md:right-[0%]", delay: 700 },
    { text: "What's your leadership philosophy?", position: "bottom-[0%] right-[0%] md:right-[20%]", delay: 500 },
  ];

  return (
    <Section
      background={sectionBackground}
      className="py-24 md:py-32 min-h-[800px]"
      id="ask-the-experts"
    >
      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="display-s md:display-m mb-6">Ask Business Leaders Anything</h2>
        <p className="body-l text-text-secondary max-w-2xl mx-auto">
          Get answers to your toughest business questions from successful entrepreneurs.
          Access practical insights and proven strategies from leaders who've built thriving companies.
        </p>
      </div>
      
      {/* Devices and questions display */}
      <div className="relative h-[500px] md:h-[600px] w-full">
        {/* Laptop and mobile devices */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] h-[80%] flex items-center justify-center">
          {/* Laptop device */}
          <div className="relative w-[400px] h-[250px] md:w-[600px] md:h-[350px] -rotate-6 animate-float">
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-800">
              <div className="w-full h-full bg-zinc-900 relative">
                {/* Screen content - Video placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-primary-900 to-secondary-900 p-2">
                  <div className="relative h-full w-full rounded overflow-hidden border border-zinc-700">
                    {/* Experience text banner */}
                    <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                      <div className="bg-black/60 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
                        <p className="text-sm font-medium tracking-wider text-white uppercase">Experience our tech demo</p>
                      </div>
                    </div>
                    
                    {/* Placeholder for avatar video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[60%] aspect-video rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Control bar */}
                    <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-between px-4">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/10"></div>
                        <div className="w-6 h-6 rounded-full bg-white/10"></div>
                        <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="absolute left-0 right-0 h-6 bg-zinc-800 bottom-[-24px] rounded-b-xl shadow-md"></div>
          </div>
          
          {/* Mobile device */}
          <div className="absolute bottom-[10%] right-[15%] md:right-[20%] w-[100px] h-[180px] md:w-[120px] md:h-[220px] rotate-12 animate-float-delayed">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-800">
              <div className="w-full h-full bg-zinc-900 relative">
                {/* Mobile screen content */}
                <div className="w-full h-full bg-gradient-to-br from-primary-900 to-secondary-900 p-1">
                  <div className="relative h-full w-full rounded-xl overflow-hidden border border-zinc-700">
                    {/* Notch */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-lg"></div>
                    
                    {/* Avatar */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-full aspect-square rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm flex items-center justify-center border border-white/10">
                      </div>
                    </div>
                    
                    {/* Control bar */}
                    <div className="absolute bottom-2 left-2 right-2 h-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Question bubbles */}
        {questions.map((question, index) => (
          <QuestionBubble 
            key={index}
            text={question.text}
            position={question.position}
            delay={question.delay}
          />
        ))}
      </div>

    </Section>
  );
}