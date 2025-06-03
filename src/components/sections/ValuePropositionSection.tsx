import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';

// Icons for the value propositions
const IconRealistic = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 8C29.52 8 34.44 10.84 37.4 15.2C36.68 15.08 35.92 15 35.12 15C32.16 15 28.92 16.28 25.72 18.92C22.36 21.68 19.88 25.56 19.04 29.04C18.04 33.04 19.52 35.68 20.8 36.8C18.76 37.56 16.48 38 14.08 38C10.12 38 6.48 36.52 3.72 33.96C6.36 22.48 14.76 14 24 14V8ZM35.12 19C36.72 19 38.36 19.6 38.36 21.6C38.36 23.28 36.56 25.76 33.52 28.44C30.2 31.44 26.36 34 23.44 35.24C22.04 35.88 21.2 35.56 20.84 35.24C20.68 35.12 20.32 34.72 20.32 33.6C20.32 31 22.6 26.16 25.96 23.16C29.32 20.16 33.04 19 35.12 19Z" fill="url(#paint0_linear_1_2)"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6"/>
        <stop offset="1" stopColor="#3B82F6"/>
      </linearGradient>
    </defs>
  </svg>
);

const IconInteractive = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM18 34V14L34 24L18 34Z" fill="url(#paint0_linear_1_3)"/>
    <defs>
      <linearGradient id="paint0_linear_1_3" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899"/>
        <stop offset="1" stopColor="#8B5CF6"/>
      </linearGradient>
    </defs>
  </svg>
);

const IconKnowledge = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
    <path d="M40 4H8C5.8 4 4 5.8 4 8V40C4 42.2 5.8 44 8 44H40C42.2 44 44 42.2 44 40V8C44 5.8 42.2 4 40 4ZM16 36H12V20H16V36ZM24 36H20V12H24V36ZM32 36H28V28H32V36ZM40 36H36V24H40V36Z" fill="url(#paint0_linear_1_4)"/>
    <defs>
      <linearGradient id="paint0_linear_1_4" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6"/>
        <stop offset="1" stopColor="#10B981"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function ValuePropositionSection() {
  // Define background element with gradient
  const sectionBackground = (
    <div className="absolute inset-0 bg-linear-to-b from-bg-secondary to-bg-primary">
      {/* Add glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full opacity-20 blur-[100px]"></div>
    </div>
  );

  const valueProps = [
    {
      icon: <IconRealistic />,
      title: "Hyper-Realistic Avatars",
      description: "Engage with digital humans so lifelike, you'll forget they're AI. Our advanced rendering technology creates stunning visual fidelity and natural expressions."
    },
    {
      icon: <IconInteractive />,
      title: "Immersive Conversations",
      description: "Experience two-way video interactions that feel natural and responsive. Our avatars listen, understand, and respond with emotional intelligence."
    },
    {
      icon: <IconKnowledge />,
      title: "Expert Knowledge",
      description: "Access the insights and expertise of your favorite personalities. Our digital humans are built with deep knowledge bases in their specific domains."
    }
  ];

  return (
    <Section
      background={sectionBackground}
      className="py-20 md:py-28"
      id="value-proposition"
    >
      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="display-s md:display-m mb-6">
        With XHumans, you can engage in powerful, digital conversations with hyper-realistic representations of your favorite celebrities, 
        all in an immersive and personalized environment. 
        </h2>
        <p className="body-l text-text-secondary max-w-3xl mx-auto">
        Leveraging cutting-edge AI, these avatars respond authentically, providing you with tailored insights and knowledge. XHumans unlocks the impossible,
        enabling you to connect directly with extraordinary minds and learn from their exceptional journeys.
        </p>
      </div>
      
      {/* Value propositions grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {valueProps.map((prop, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center px-6 py-8 rounded-2xl 
                     bg-bg-secondary/50 backdrop-blur-sm border border-primary-500/20
                     hover:border-primary-500/40 transition-all duration-300"
          >
            {prop.icon}
            <h3 className="h3 mb-4 text-primary-400">{prop.title}</h3>
            <p className="body-m text-text-secondary">{prop.description}</p>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="flex justify-center mt-16">
        <Button variant="primary" size="lg" href="/explore">
          Explore the Experience
        </Button>
      </div>
    </Section>
  );
}