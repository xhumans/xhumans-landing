// src/components/common/Header.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md">
      {/* Full-width background but centered content */}
      <div className="container mx-auto px-4 max-w-5xl py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="XHumans Logo" 
            width={42} 
            height={32} 
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
            About
          </Link>
          <Link href="#demo" className="text-text-secondary hover:text-text-primary transition-colors">
            Demo
          </Link>
          <Link href="#faq" className="text-text-secondary hover:text-text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Get Access
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* Button content remains the same */}
        </button>
      </div>
      
      {/* Mobile Menu - Full width but content is centered */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-secondary py-4">
          <div className="container mx-auto px-4 max-w-5xl flex flex-col space-y-4">
            {/* Menu content remains the same */}
          </div>
        </div>
      )}
    </header>
  )
}