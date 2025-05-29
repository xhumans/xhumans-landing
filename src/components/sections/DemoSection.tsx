// src/components/sections/DemoSection.tsx
'use client' // Mark as client component since it will interact with DOM scripts

import React, { useEffect, useRef } from 'react'
import Section from '../common/Section'
import Script from 'next/script'

export default function DemoSection() {
  // Reference to the iframe element
  const iframeRef = useRef<HTMLIFrameElement>(null)
  
  // Background element
  const demoBackground = (
    <div className="absolute inset-0 bg-bg-primary"></div>
  )
  
  // Effect to handle script initialization
  useEffect(() => {
    // This function will be called after the component mounts
    // Your script.js can access the iframe through its ID
    return () => {
      // Cleanup if needed when component unmounts
    }
  }, [])
  
  return (
    <Section background={demoBackground}>
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="display-s md:display-m mb-4">Experience AI-Powered Business Mentorship</h2>
        <p className="body-l text-text-secondary max-w-3xl mx-auto mb-8 ">
          See how our platform works by talking to a digital business mentor.
        </p>
      </div>
      
      {/* HeyGen Streaming Embed */}
      <div className="heygen-streaming-embed rounded-2xl overflow-hidden border border-gray-800 shadow-xl shadow-primary-500/5 bg-bg-secondary">
        <div className="heygen-streaming-container aspect-video relative">
          <iframe
            ref={iframeRef}
            id="heygen-streaming-iframe"
            title="Streaming Embed"
            role="dialog"
            allow="microphone"
            allowFullScreen={false}
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* Load script that will populate the iframe */}
      <Script 
        src="/scripts/heygen-embed.js"
        strategy="afterInteractive"
      />
    </Section>
  )
}