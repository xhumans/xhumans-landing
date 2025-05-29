import React from 'react';
import Section from '../common/Section';

// Icons for the value propositions
const IconBusinessLeader = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
    <path d="M24 4C18.48 4 14 8.48 14 14C14 19.52 18.48 24 24 24C29.52 24 34 19.52 34 14C34 8.48 29.52 4 24 4ZM24 8C27.32 8 30 10.68 30 14C30 17.32 27.32 20 24 20C20.68 20 18 17.32 18 14C18 10.68 20.68 8 24 8ZM6 44V38C6 31.38 13.38 28 24 28C34.62 28 42 31.38 42 38V44H6ZM10 40H38V38C38 34.66 31.06 32 24 32C16.94 32 10 34.66 10 38V40Z" fill="url(#paint0_linear_leader)"/>
    <path d="M32 12L36 8L40 12L36 16L32 12Z" fill="url(#paint1_linear_leader)"/>
    <defs>
      <linearGradient id="paint0_linear_leader" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6"/>
        <stop offset="1" stopColor="#3B82F6"/>
      </linearGradient>
      <linearGradient id="paint1_linear_leader" x1="32" y1="8" x2="40" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B"/>
        <stop offset="1" stopColor="#EF4444"/>
      </linearGradient>
    </defs>
  </svg>
);

const IconMentorship = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
    <path d="M16 6C12.68 6 10 8.68 10 12C10 15.32 12.68 18 16 18C19.32 18 22 15.32 22 12C22 8.68 19.32 6 16 6ZM32 6C28.68 6 26 8.68 26 12C26 15.32 28.68 18 32 18C35.32 18 38 15.32 38 12C38 8.68 35.32 6 32 6ZM16 22C11.58 22 2 24.22 2 28.66V34H30V28.66C30 24.22 20.42 22 16 22ZM32 22C31.28 22 30.44 22.06 29.54 22.16C31.1 23.2 32 24.68 32 26.34V32H46V28.66C46 24.22 36.42 22 32 22Z" fill="url(#paint0_linear_mentorship)"/>
    <path d="M20 36C18.9 36 18 36.9 18 38V42C18 43.1 18.9 44 20 44H28C29.1 44 30 43.1 30 42V38C30 36.9 29.1 36 28 36H20ZM22 40H26V42H22V40Z" fill="url(#paint1_linear_mentorship)"/>
    <defs>
      <linearGradient id="paint0_linear_mentorship" x1="2" y1="6" x2="46" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899"/>
        <stop offset="1" stopColor="#8B5CF6"/>
      </linearGradient>
      <linearGradient id="paint1_linear_mentorship" x1="18" y1="36" x2="30" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6"/>
        <stop offset="1" stopColor="#10B981"/>
      </linearGradient>
    </defs>
  </svg>
);

const IconActionable = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40C15.16 40 8 32.84 8 24C8 15.16 15.16 8 24 8Z" fill="url(#paint0_linear_actionable)"/>
    <path d="M24 12C17.38 12 12 17.38 12 24C12 30.62 17.38 36 24 36C30.62 36 36 30.62 36 24C36 17.38 30.62 12 24 12ZM24 16C28.42 16 32 19.58 32 24C32 28.42 28.42 32 24 32C19.58 32 16 28.42 16 24C16 19.58 19.58 16 24 16Z" fill="url(#paint1_linear_actionable)"/>
    <path d="M24 20C21.78 20 20 21.78 20 24C20 26.22 21.78 28 24 28C26.22 28 28 26.22 28 24C28 21.78 26.22 20 24 20Z" fill="url(#paint2_linear_actionable)"/>
    <defs>
      <linearGradient id="paint0_linear_actionable" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6"/>
        <stop offset="1" stopColor="#10B981"/>
      </linearGradient>
      <linearGradient id="paint1_linear_actionable" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B"/>
        <stop offset="1" stopColor="#EF4444"/>
      </linearGradient>
      <linearGradient id="paint2_linear_actionable" x1="20" y1="20" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DC2626"/>
        <stop offset="1" stopColor="#B91C1C"/>
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
      icon: <IconBusinessLeader />,
      title: "Authentic Business Leaders",
      description: "Connect with AI-powered representations of successful entrepreneurs and executives. Each avatar embodies the real expertise and communication style of proven business leaders."
    },
    {
      icon: <IconMentorship />,
      title: "Personalized Mentorship",
      description: "Get tailored business guidance through natural conversations. Our AI mentors adapt their advice to your specific challenges and entrepreneurial journey."
    },
    {
      icon: <IconActionable />,
      title: "Actionable Insights",
      description: "Receive practical business advice you can implement immediately. Learn from real experiences of leaders who've built successful companies across Latin America."
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
        Access authentic business wisdom through AI-powered conversations with successful entrepreneurs and industry leaders.
        </h2>
        <p className="body-l text-text-secondary max-w-3xl mx-auto">
        XHumans democratizes access to high-quality business mentorship by creating digital representations of proven leaders. Get personalized guidance, avoid common pitfalls, and accelerate your entrepreneurial journey with insights from those who've walked the path before you.
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
        <button className="btn btn-primary btn-lg">
          Explore the Experience
        </button>
      </div>
    </Section>
  );
}