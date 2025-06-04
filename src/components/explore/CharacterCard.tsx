'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { Character } from '@/types/character'
import { categories } from '@/data/characters'

interface CharacterCardProps {
  character: Character
  onClick?: (characterId: string) => void
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    onClick?.(character.id)
  }

  return (
    <div
      className="group relative bg-bg-secondary border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Profile Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={character.profileImage}
          alt={character.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Coming Soon Badge */}
        {character.status === 'coming-soon' && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-primary-500/30">
            <span className="text-primary-400 caption-l font-medium">Coming Soon</span>
          </div>
        )}

        {/* Featured Badge */}
        {character.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/50">
            <span className="text-primary-200 caption-l font-medium">Featured</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="primary"
              size="md"
              className={`w-full btn-primary btn-md transition-all duration-300 transform ${
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              onClick={(e) => {
                e?.stopPropagation()
                onClick?.(character.id)
              }}
            >
              {character.status === 'available' ? `Talk with ${character.name.split(' ')[0]}` : 'Notify Me'}
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="h4 text-text-primary mb-2 group-hover:text-primary-400 transition-colors duration-300">
          {character.name}
        </h3>
        
        <p className="body-s text-text-secondary mb-3 line-clamp-2">
          {character.title}
        </p>
        
        <p className="caption-l text-text-tertiary mb-4 line-clamp-3">
          {character.description}
        </p>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2">
          {character.categories.map((categoryId) => {
            const category = categories.find(cat => cat.id === categoryId);
            return (
              <span
                key={categoryId}
                className="px-2 py-1 rounded-md bg-bg-tertiary border border-primary-500/20 text-text-secondary caption-s"
              >
                {category?.displayName || categoryId}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  )
}