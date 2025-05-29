// src/components/sections/HeroSection.tsx
import React from 'react'
import Button from '../common/Button'
import Section from '../common/Section'

export default function HeroSection() {
  // Define background element
  const heroBackground = (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-45/[in_oklch] from-primary-900 via-bg-primary to-bg-black"></div>
      
      {/* Glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-500/20 blur-3xl"></div>
    </>
  )
  
  return (
    <Section 
      className="min-h-screen pt-20 pb-16 overflow-hidden" 
      background={heroBackground}
    >
      <div className="flex flex-col items-center justify-center min-h-[90vh] text-center">
        {/* 3D Avatar Cards will be added later */}
        
        {/* Main Content */}
        <div className="mt-8">
          <h1 className="display-xl uppercase bg-linear-to-r from-white to-primary-300/80 bg-clip-text text-transparent mb-6">
            XTRAORDINARY HUMANS
          </h1>
          
          <p className="body-l text-text-secondary max-w-3xl mx-auto mb-8">
            Access the wisdom of successful business leaders through AI-powered conversations.
          </p>
          
          <Button variant="primary" size="lg">
            Experience Now
          </Button>
        </div>
      </div>
    </Section>
  )
}