export interface Character {
  id: string
  name: string
  title: string
  expertise: string[]
  categories: string[]
  profileImage: string
  description: string
  status: 'available' | 'coming-soon' | 'beta'
  featured?: boolean
}

export interface Category {
  id: string
  displayName: string
  slug: string
  count?: number
  description?: string
}

export interface FeaturedCharacter {
  id: string
  name: string
  title: string
  expertise: string
  backgroundImage: string
  description: string
  ctaText: string
  comingSoon?: boolean
}

// Legacy type for existing components
export interface Avatar {
  name: string
  role: string
  imageSrc: string
  tags: string[]
  available?: boolean
}