'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { Character } from '@/types/character'
import { categories } from '@/data/characters'

interface HeroCarouselProps {
  characters: Character[]
  autoPlay?: boolean
  interval?: number
}

export function HeroCarousel({ characters, autoPlay = true, interval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || characters.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, characters.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentCharacter = characters[currentIndex]

  if (!currentCharacter) {
    return null
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentCharacter.profileImage}
          alt={currentCharacter.name}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-bg-primary/40 to-bg-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="w-full p-6 md:p-8 lg:p-12">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-200 caption-l">
                Featured XHuman
              </span>
            </div>
            
            <h1 className="display-m md:display-l text-text-primary mb-4">
              {currentCharacter.name}
            </h1>
            
            <p className="h4 text-primary-300 font-medium mb-6 max-w-2xl">
              {currentCharacter.topic}
            </p>
            
            <blockquote className="body-l text-text-secondary italic mb-8 max-w-2xl">
              "{currentCharacter.quote}"
            </blockquote>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentCharacter.categories.map((categoryId) => {
                const category = categories.find(cat => cat.id === categoryId);
                return (
                  <span
                    key={categoryId}
                    className="px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-200 caption-l"
                  >
                    {category?.displayName || categoryId}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                className="btn-primary btn-md"
              >
                {currentCharacter.status === 'available' ? `Talk with ${currentCharacter.name.split(' ')[0]}` : 'Coming Soon'}
              </Button>
              <Button
                variant="outline"
                size="md"
                className="btn-outline btn-md"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      {characters.length > 1 && (
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
          <div className="flex space-x-2">
            {characters.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 shadow-lg shadow-primary-500/50'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}