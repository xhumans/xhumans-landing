'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Section from '@/components/common/Section'
import { HeroCarousel } from '@/components/explore/HeroCarousel'
import { CategoryFilter } from '@/components/explore/CategoryFilter'
import { CharacterGrid } from '@/components/explore/CharacterGrid'
import { ComingSoonSection } from '@/components/explore/ComingSoonSection'
import { categories, getFeaturedCharacters, filterCharactersByCategory } from '@/data/characters'

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredCharacters = useMemo(() => 
    filterCharactersByCategory(activeCategory), 
    [activeCategory]
  )

  const featuredCharacters = useMemo(() => getFeaturedCharacters(), [])

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      
      <Section className="pt-24 pb-16">
        <HeroCarousel characters={featuredCharacters} />
      </Section>
      
      <Section className="py-16">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="display-m text-text-primary mb-4">
              Discover XHumans
            </h2>
            <p className="body-l text-text-secondary max-w-2xl mx-auto">
              Explore our growing collection of AI-powered XHumans, each with unique expertise and personalities.
            </p>
          </div>
          
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <CharacterGrid characters={filteredCharacters} />
        </div>
      </Section>
      
      <Section className="py-16">
        <ComingSoonSection />
      </Section>
      
      <Footer />
    </main>
  )
}