// src/components/common/Section.tsx
import React from 'react'

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  background?: React.ReactNode
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background
}: SectionProps) {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      {/* Background element that spans full width */}
      {background && (
        <div className="absolute inset-0 w-full -z-10">
          {background}
        </div>
      )}
      
      {/* Content with narrower width */}
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {children}
      </div>
    </section>
  )
}