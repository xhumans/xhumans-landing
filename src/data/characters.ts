import { Character, Category, Avatar } from '@/types/character'

export const characters: Character[] = [
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    title: 'AI Research Director & Technology Futurist',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Tech Strategy'],
    categories: ['technology-innovation', 'business-leadership'],
    profileImage: '/images/avatars/entrepreneur.jpg',
    description: 'Former Google AI researcher with insights into the future of human-AI collaboration',
    status: 'available',
    featured: true
  },
  {
    id: 'marcus-williams',
    name: 'Marcus Williams',
    title: 'Executive Performance Coach & Mindfulness Expert',
    expertise: ['Leadership Development', 'Mental Performance', 'Wellness'],
    categories: ['business-leadership', 'health-wellness'],
    profileImage: '/images/avatars/athlete.png',
    description: 'Silicon Valley executive coach specializing in high-performance leadership and mental resilience',
    status: 'available',
    featured: true
  },
  {
    id: 'luna-rodriguez',
    name: 'Luna Rodriguez',
    title: 'Creative Director & Digital Storyteller',
    expertise: ['Creative Strategy', 'Brand Storytelling', 'Digital Art'],
    categories: ['creative-entertainment', 'business-leadership'],
    profileImage: '/images/avatars/artist.jpg',
    description: 'Award-winning creative director who has shaped brand narratives for Fortune 500 companies',
    status: 'available',
    featured: true
  },
  {
    id: 'prof-james-thompson',
    name: 'Professor James Thompson',
    title: 'Quantum Physics Researcher & Science Communicator',
    expertise: ['Quantum Computing', 'Physics', 'Science Education'],
    categories: ['technology-innovation', 'education-learning'],
    profileImage: '/images/avatars/entrepreneur.jpg',
    description: 'Making complex quantum concepts accessible to business leaders and innovators',
    status: 'coming-soon',
    featured: false
  }
]

export const categories: Category[] = [
  {
    id: 'featured',
    displayName: 'Featured',
    slug: 'featured',
    description: 'Our most popular digital humans'
  },
  {
    id: 'business-leadership',
    displayName: 'Business & Leadership',
    slug: 'business-leadership',
    description: 'Executive coaching and leadership development'
  },
  {
    id: 'health-wellness',
    displayName: 'Health & Wellness',
    slug: 'health-wellness',
    description: 'Mental performance and wellness expertise'
  },
  {
    id: 'technology-innovation',
    displayName: 'Technology & Innovation',
    slug: 'technology-innovation',
    description: 'AI, quantum computing, and tech strategy'
  },
  {
    id: 'creative-entertainment',
    displayName: 'Creative & Entertainment',
    slug: 'creative-entertainment',
    description: 'Creative strategy and digital storytelling'
  },
  {
    id: 'education-learning',
    displayName: 'Education & Learning',
    slug: 'education-learning',
    description: 'Science communication and education'
  },
  {
    id: 'lifestyle-personal',
    displayName: 'Lifestyle & Personal Growth',
    slug: 'lifestyle-personal',
    description: 'Personal development and life coaching'
  }
]

// Helper function to get featured characters for carousel
export const getFeaturedCharacters = () => characters.filter(char => char.featured)

// Helper function to filter characters by category
export const filterCharactersByCategory = (categoryId: string) => {
  if (categoryId === 'featured') {
    return getFeaturedCharacters()
  }
  return characters.filter(char => char.categories.includes(categoryId))
}

// Convert new character data to legacy avatar format for existing components
export const charactersToAvatars = (chars: Character[]): Avatar[] => {
  return chars.map(char => ({
    name: char.name.split(' ')[char.name.split(' ').length - 1], // Use last name or first name
    role: char.title.split(' & ')[0], // Use first part of title
    imageSrc: char.profileImage,
    tags: char.expertise.slice(0, 3), // Limit to 3 tags
    available: char.status === 'available'
  }))
}

// Legacy avatar data for backward compatibility
export const avatars: Avatar[] = charactersToAvatars(characters.slice(0, 3))