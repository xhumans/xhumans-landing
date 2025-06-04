'use client'

import { CharacterCard } from './CharacterCard'
import { Character } from '@/types/character'

interface CharacterGridProps {
  characters: Character[]
  onCharacterClick?: (characterId: string) => void
}

export function CharacterGrid({ characters, onCharacterClick }: CharacterGridProps) {
  if (characters.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bg-tertiary flex items-center justify-center">
            <svg
              className="w-8 h-8 text-text-tertiary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <h3 className="h4 text-text-secondary mb-2">No XHumans found</h3>
          <p className="body-s text-text-tertiary">
            Try selecting a different category to see more XHumans.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {characters.map((character) => (
        <div
          key={character.id}
          className="scroll-animate"
          style={{
            animationDelay: `${characters.indexOf(character) * 100}ms`,
          }}
        >
          <CharacterCard
            character={character}
            onClick={onCharacterClick}
          />
        </div>
      ))}
    </div>
  )
}