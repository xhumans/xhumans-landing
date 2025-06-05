import { Character, Category, Avatar } from '@/types/character'

export const characters: Character[] = [
  {
    id: 'singer',
    name: 'Singer',
    title: 'Singer-Songwriter & Pop Culture Innovator',
    expertise: ['Music Production', 'Songwriting', 'Live Performance'],
    categories: ['music', 'creative-arts'],
    profileImage: '/images/avatars/singer.jpeg',
    description: 'Mexican pop singer, award winner and advocate for women in music.',
    topic: 'Writing from the soul: How to turn vulnerability into creative strength.',
    quote: 'Music is my way of telling stories I haven\'t lived yet.',
    status: 'coming-soon',
    featured: false,
    isBlurred: true
  },
  {
    id: 'actor',
    name: 'Actor',
    title: 'Actor & Social Justice Advocate',
    expertise: ['Film Acting', 'Television Acting', 'Anti-Racism Activism'],
    categories: ['film', 'television', 'social-impact'],
    profileImage: '/images/avatars/actor.jpeg',
    description: 'Mexican actor with international projection and anti-racism activist.',
    topic: 'The hero\'s journey: how to transcend without forgetting where you come from',
    quote: 'The true victory is not arriving, it\'s arriving being yourself.',
    status: 'coming-soon',
    featured: false,
    isBlurred: true
  },
  {
    id: 'comedian',
    name: 'Comedian',
    title: 'Legendary Comedian, Writer & TV Producer',
    expertise: ['Comedy Writing', 'Television Production', 'Physical Comedy'],
    categories: ['television', 'comedy', 'latinamerican-culture'],
    profileImage: '/images/avatars/comedian.jpeg',
    description: 'Creator of iconic comedy shows, icon of Latin American humor.',
    topic: 'Creating with heart: how to change generations with a good idea.',
    quote: 'You don\'t need to be big to do big things.',
    status: 'coming-soon',
    featured: false,
    isBlurred: true
  },
  {
    id: 'director',
    name: 'Director',
    title: 'Iconic Film Director & Actor',
    expertise: ['Film Direction', 'Visual Storytelling', 'Golden Age Cinema'],
    categories: ['film', 'mexican-cinema'],
    profileImage: '/images/avatars/film-director.jpeg',
    description: 'Emblematic director of the Golden Age of Mexican cinema.',
    topic: 'Cinematic Mexico: Crafting National Identity on Screen',
    quote: 'Cinema must reflect the soul of its people.',
    status: 'coming-soon',
    featured: false,
    isBlurred: true
  },
  {
    id: 'hans',
    name: 'Hans Guevara',
    title: 'CEO & Co-Founder',
    expertise: ['Startup', 'Creative Technology', 'Venture Capital'],
    categories: ['business', 'entrepreneurship'],
    profileImage: '/images/avatars/hans-guevara.jpeg',
    description: 'Ingeniero creativo con 15 años impulsando startups de tecnología y entretenimiento.',
    topic: 'Cuando no hay mercado, crea la industria.',
    quote: 'La forma más fácil de predecir el futuro es creándolo',
    status: 'available',
    featured: true
  }

]

export const categories: Category[] = [
  {
    id: 'all',
    displayName: 'All',
    slug: 'all',
    description: 'View all available XHumans'
  },
  {
    id: 'featured',
    displayName: 'Featured',
    slug: 'featured',
    description: 'Our most popular XHumans'
  },
  {
    id: 'music',
    displayName: 'Music',
    slug: 'music',
    description: 'Musicians, singers, and music producers'
  },
  {
    id: 'film',
    displayName: 'Film & Cinema',
    slug: 'film',
    description: 'Actors, directors, and film industry professionals'
  },
  {
    id: 'television',
    displayName: 'Television',
    slug: 'television',
    description: 'TV actors, producers, and content creators'
  },
  {
    id: 'comedy',
    displayName: 'Comedy',
    slug: 'comedy',
    description: 'Comedians, comedy writers, and entertainers'
  },
  {
    id: 'business',
    displayName: 'Business',
    slug: 'business',
    description: 'CEOs, founders, and business leaders'
  },
  {
    id: 'creative-arts',
    displayName: 'Creative Arts',
    slug: 'creative-arts',
    description: 'Artists, designers, and creative professionals'
  },
  {
    id: 'social-impact',
    displayName: 'Social Impact',
    slug: 'social-impact',
    description: 'Activists and social justice advocates'
  },
  {
    id: 'latinamerican-culture',
    displayName: 'Latin American Culture',
    slug: 'latinamerican-culture',
    description: 'Icons of Latin American culture and heritage'
  }
]

// Helper function to get featured characters for carousel
export const getFeaturedCharacters = () => characters.filter(char => char.featured)

// Helper function to filter characters by category
export const filterCharactersByCategory = (categoryId: string) => {
  if (categoryId === 'all') {
    return characters
  }
  if (categoryId === 'featured') {
    return getFeaturedCharacters()
  }
  return characters.filter(char => char.categories.includes(categoryId))
}

// Convert new character data to legacy avatar format for existing components
export const charactersToAvatars = (chars: Character[]): Avatar[] => {
  return chars.map(char => ({
    name: char.name, // Use full name now
    role: char.title.split(' & ')[0], // Use first part of title
    imageSrc: char.profileImage,
    tags: char.expertise.slice(0, 3), // Limit to 3 tags
    available: char.status === 'available',
    isBlurred: char.isBlurred
  }))
}

// Legacy avatar data for backward compatibility
export const avatars: Avatar[] = charactersToAvatars(characters.slice(0, 3))