'use client'

import { Category } from '@/types/character'

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="w-full">
      {/* Desktop: Flex wrap layout */}
      <div className="hidden md:flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-6 py-3 rounded-full transition-all duration-300 label-m
              ${activeCategory === category.id
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-600'
                : 'bg-bg-tertiary border border-primary-500/20 text-text-secondary hover:bg-bg-quaternary hover:border-primary-500/40 hover:text-text-primary'
              }
            `}
          >
            {category.displayName}
          </button>
        ))}
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden">
        <div className="relative">
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full transition-all duration-300 label-m whitespace-nowrap
                  ${activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-bg-tertiary border border-primary-500/20 text-text-secondary hover:bg-bg-quaternary hover:border-primary-500/40'
                  }
                `}
              >
                {category.displayName}
              </button>
            ))}
          </div>
          
          {/* Fade gradient on right for mobile scroll indicator */}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}