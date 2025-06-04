import { Character, Category, Avatar } from '@/types/character'

export const characters: Character[] = [
  {
    id: 'paty-cantu',
    name: 'Paty Cantú',
    title: 'Singer-Songwriter & Pop Culture Innovator',
    expertise: ['Music Production', 'Songwriting', 'Live Performance'],
    categories: ['music', 'creative-arts'],
    profileImage: '/images/avatars/paty-cantu.jpeg',
    description: 'Cantante pop mexicana, ganadora de premios y defensora de las mujeres en la música.',
    topic: 'Escribir desde el alma: Como convertir vulnerabilidad en fuerza creativa.',
    quote: 'La música es mi manera de contar historias que todavía no he vivido.',
    status: 'coming-soon',
    featured: true
  },
  {
    id: 'tenoch-huerta',
    name: 'Tenoch Huerta',
    title: 'Actor & Social Justice Advocate',
    expertise: ['Film Acting', 'Television Acting', 'Anti-Racism Activism'],
    categories: ['film', 'television', 'social-impact'],
    profileImage: '/images/avatars/tenoch-huerta.jpeg',
    description: 'Actor mexicano de proyección internacional y activista contra el racismo.',
    topic: 'El camino del héroe: cómo trascender sin olvidar de dónde vienes',
    quote: 'La verdadera victoria no es llegar, es llegar siendo tú mismo.',
    status: 'available',
    featured: true
  },
  {
    id: 'roberto-gomez-bolanos',
    name: 'Roberto Gómez Bolaños',
    title: 'Legendary Comedian, Writer & TV Producer',
    expertise: ['Comedy Writing', 'Television Production', 'Physical Comedy'],
    categories: ['television', 'comedy', 'latinamerican-culture'],
    profileImage: '/images/avatars/roberto-gomez-bolanos.jpeg',
    description: 'Creador de El Chavo y El Chapulín, ícono del humor latinoamericano.',
    topic: 'Crear con el corazón: cómo cambiar generaciones con una buena idea.',
    quote: 'No hace falta ser grande para hacer cosas grandes.',
    status: 'coming-soon',
    featured: true
  },
  {
    id: 'el-indio-fernandez',
    name: 'Emilio "El Indio" Fernández',
    title: 'Iconic Film Director & Actor',
    expertise: ['Film Direction', 'Visual Storytelling', 'Golden Age Cinema'],
    categories: ['film', 'mexican-cinema'],
    profileImage: '/images/avatars/el-indio.jpeg',
    description: 'Director emblemático de la Época de Oro del cine mexicano.',
    topic: 'Cinematic Mexico: Crafting National Identity on Screen',
    quote: 'El cine debe reflejar el alma de su pueblo.',
    status: 'coming-soon',
    featured: false
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
    available: char.status === 'available'
  }))
}

// Legacy avatar data for backward compatibility
export const avatars: Avatar[] = charactersToAvatars(characters.slice(0, 3))