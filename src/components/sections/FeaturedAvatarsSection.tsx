// src/components/sections/FeaturedAvatarsSection.tsx
import React from 'react'
import AvatarCard from '../common/AvatarCard'
import Section from '../common/Section'

export default function FeaturedAvatarsSection() {
  // Sample data for avatar cards
  const avatars = [
    {
      name: "Tech Entrepreneur",
      role: "Startup Founder",
      imageSrc: "/images/avatars/entrepreneur.jpg",
      tags: ["SaaS", "Scaling", "Fundraising"],
      available: false
    },
    {
      name: "E-commerce Executive",
      role: "Retail Leader",
      imageSrc: "/images/avatars/artist.jpg",
      tags: ["E-commerce", "Marketing", "Operations"],
      available: false
    },
    {
      name: "Investment Professional",
      role: "Venture Partner",
      imageSrc: "/images/avatars/athlete.png", 
      tags: ["Investing", "Finance", "Strategy"],
      available: false
    },
    // You can add more avatars as needed
  ]

  // Define background element
  const avatarsBackground = (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-45/[in_oklch] from-primary-900 via-bg-primary to-bg-black"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary-500/30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-tertiary-500/20 blur-3xl"></div>
    </>
  )
  
  return (
    <Section 
      className="py-24 overflow-hidden"
      background={avatarsBackground}
    >
      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="display-m mb-4">Meet Your Business Mentors</h2>
        <p className="body-l text-text-secondary max-w-3xl mx-auto">
          Connect with successful entrepreneurs and business leaders from Mexico
        </p>
      </div>
      
      {/* Grid of avatar cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {avatars.map((avatar, index) => (
          <AvatarCard 
            key={index}
            name={avatar.name}
            role={avatar.role}
            imageSrc={avatar.imageSrc}
            tags={avatar.tags}
            available={avatar.available}
          />
        ))}
      </div>

      {/* View All button */}
      <div className="flex justify-center mt-12">
        <button className="btn btn-outline btn-md">
          View All Mentors
        </button>
      </div>
    </Section>
  )
}