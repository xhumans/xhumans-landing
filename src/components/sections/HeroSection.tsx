// src/components/sections/HeroSection.tsx
import React from 'react'
import Button from '../common/Button'

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-45/[in_oklch] from-primary-900 via-bg-primary to-bg-black z-0"></div>
      
      {/* Glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl z-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-500/20 blur-3xl z-1"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center">
        {/* 3D Avatar Cards will be added later */}
        
        {/* Main Content */}
        <div className="mt-8">
          <h1 className="display-xl uppercase bg-linear-to-r from-white to-primary-300/80 bg-clip-text text-transparent mb-6">
            XTRAORDINARY HUMANS
          </h1>
          
          <p className="body-l text-text-secondary max-w-2xl mx-auto mb-8">
            Engage in powerful digital conversations with high-fidelity representations of your favorite personalities, all in an interactive and personalized environment.
          </p>
          
          <Button variant="primary" size="lg">
            Experience Now
          </Button>
        </div>
      </div>
    </section>
  )
}