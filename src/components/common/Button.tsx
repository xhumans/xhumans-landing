// src/components/common/Button.tsx
import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  // Combine button classes based on variant and size
  const buttonClasses = `btn btn-${variant} btn-${size} ${className}`
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }
  
  // Otherwise render as button
  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    type,
    className: buttonClasses,
    disabled,
  }
  
  if (onClick) {
    buttonProps.onClick = (e) => onClick(e)
  }

  return (
    <button {...buttonProps}>
      {children}
    </button>
  )
}