// src/components/common/AvatarCard.tsx
import React from 'react'
import Image from 'next/image'
import Button from './Button'

type AvatarCardProps = {
  name: string
  role: string
  imageSrc: string
  tags: string[]
  available?: boolean
  isBlurred?: boolean
}

export default function AvatarCard({ name, role, imageSrc, tags, available = false, isBlurred = false }: AvatarCardProps) {
  return (
    <div className="bg-bg-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-primary-500 transition-all group">
      {/* Image container with gradient overlay */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={`${name} - ${role}`} 
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isBlurred ? 'image-blurred' : ''}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg-black via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-bg-tertiary text-text-secondary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Avatar info */}
        <h3 className="h4 mb-1">{name}</h3>
        <p className="body-s text-text-secondary mb-4">{role}</p>
        
        {/* Button */}
        <Button 
          variant={available ? "primary" : "secondary"} 
          size="sm" 
          className="w-full"
        >
          {available ? "Connect Now" : "Coming Soon"}
        </Button>
      </div>
    </div>
  )
}