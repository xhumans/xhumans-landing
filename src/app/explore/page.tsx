'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Section from '@/components/common/Section'
import { HeroCarousel } from '@/components/explore/HeroCarousel'
import { CategoryFilter } from '@/components/explore/CategoryFilter'
import { CharacterGrid } from '@/components/explore/CharacterGrid'
import { ComingSoonSection } from '@/components/explore/ComingSoonSection'
import { XHumanModal } from '@/components/explore/XHumanModal'
import { categories, getFeaturedCharacters, filterCharactersByCategory, characters } from '@/data/characters'
import { Character } from '@/types/character'

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  
  const filteredCharacters = useMemo(() => 
    filterCharactersByCategory(activeCategory), 
    [activeCategory]
  )

  const featuredCharacters = useMemo(() => getFeaturedCharacters(), [])

  const handleCharacterClick = (characterId: string) => {
    const character = characters.find(char => char.id === characterId)
    if (character) {
      setSelectedCharacter(character)
    }
  }

  const handleCloseModal = () => {
    setSelectedCharacter(null)
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      
      <Section className="pt-24 pb-16">
        <HeroCarousel 
          characters={featuredCharacters} 
          onCharacterClick={handleCharacterClick}
        />
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
          
          <CharacterGrid 
            characters={filteredCharacters}
            onCharacterClick={handleCharacterClick}
          />
        </div>
      </Section>
      
      <Section className="py-16">
        <ComingSoonSection />
      </Section>
      
      <Footer />

      {/* XHuman Modal */}
      {selectedCharacter && (
        <XHumanModal
          character={selectedCharacter}
          isOpen={!!selectedCharacter}
          onClose={handleCloseModal}
        />
      )}
    </main>
  )
}