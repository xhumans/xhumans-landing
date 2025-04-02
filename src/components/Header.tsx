"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-purple-50/0 backdrop-blur-x1 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-text-primary">
              XHumans
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#demo" className="text-text-tertiary hover:text-primary-500 transition-colors">
              Demo
            </Link>
            <Link href="#about" className="text-text-tertiary hover:text-primary-500 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-text-tertiary hover:text-primary-500 transition-colors">
              Contact
            </Link>
            <Link href="#en-es" className="text-text-tertiary hover:text-primary-500 transition-colors">
              EN ES
            </Link>
          </nav>

          {/* Login/Register Button
          <div className="hidden md:block">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
              Try Demo
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#demo" className="text-gray-600 hover:text-primary-500 transition-colors">
                Demo
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-primary-500 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary-500 transition-colors">
                Contact
              </Link>
              <Link href="#en-es" className="text-gray-600 hover:text-primary-500 transition-colors">
                EN ES
              </Link>
              {/* <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors w-full">
                Try Demo
              </button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}