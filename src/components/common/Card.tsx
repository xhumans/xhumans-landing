// src/components/common/Card.tsx
import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'active'
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseClasses = "rounded-xl overflow-hidden"
  const variantClasses = {
    default: "bg-bg-secondary border border-gray-800",
    hover: "bg-bg-secondary border border-gray-800 transition-all hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20",
    active: "bg-bg-tertiary border border-primary-500 shadow-lg shadow-primary-500/20"
  }
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}