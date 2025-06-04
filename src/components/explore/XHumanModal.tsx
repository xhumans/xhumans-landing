'use client'

import { useEffect, useRef } from 'react'
import { Character } from '@/types/character'
import { categories } from '@/data/characters'

interface XHumanModalProps {
  character: Character
  isOpen: boolean
  onClose: () => void
}

export function XHumanModal({ character, isOpen, onClose }: XHumanModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle ESC key and click outside to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Initialize HeyGen embed when modal opens for Hans or Tenoch
  useEffect(() => {
    if (isOpen && (character.id === 'hans' || character.id === 'tenoch-huerta')) {
      const initHeyGenEmbed = () => {
        const iframe = iframeRef.current
        if (!iframe) return

        const host = "https://labs.heygen.com"
        let iframeUrl = ""
        
        if (character.id === 'hans') {
          iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJlNDA0ZjQ2NDE4MmE0NTBjOGU4ZjE1MTVj%0D%0AZTM4NDJhMCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0AL2U0MDRmNDY0MTgyYTQ1MGM4ZThmMTUxNWNlMzg0MmEwL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjU4%0D%0AYzMyOTY2ZjE2MDRkM2JiYTA4OTcwZGVjOGU4YjlhIiwidXNlcm5hbWUiOiJhODlkOWVkOTQ3ZTk0%0D%0AOTllYThjZWM0NWYyNmIxZmE2YSJ9&inIFrame=1`
        } else if (character.id === 'tenoch-huerta') {
          iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI2Y2UyZDAzZjFjOGI0ZjFkODgwYjVjNWU4%0D%0AOGNjMjExYiIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzZjZTJkMDNmMWM4YjRmMWQ4ODBiNWM1ZTg4Y2MyMTFiL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImIz%0D%0ANzBhZTc0ZjJjZjQ2OWViYzdlY2IxOTkwOTc0YmNlIiwidXNlcm5hbWUiOiJhODlkOWVkOTQ3ZTk0%0D%0AOTllYThjZWM0NWYyNmIxZmE2YSJ9&inIFrame=1`
        }
        
        iframe.src = iframeUrl
      }

      // Small delay to ensure modal is fully rendered
      const timer = setTimeout(initHeyGenEmbed, 100)
      return () => clearTimeout(timer)
    }
  }, [isOpen, character.id])

  if (!isOpen) return null

  // For Hans and Tenoch, show the interactive demo
  if (character.id === 'hans' || character.id === 'tenoch-huerta') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div 
          ref={modalRef}
          className="relative w-full max-w-4xl mx-4 bg-bg-secondary rounded-2xl border border-primary-500/20 shadow-2xl shadow-primary-500/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div>
              <h2 className="h3 text-text-primary">Talk with {character.name}</h2>
              <p className="body-s text-text-secondary">{character.title}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-bg-tertiary hover:bg-bg-quaternary text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Demo Content */}
          <div className="p-6">
            <div className="heygen-streaming-embed rounded-xl overflow-hidden border border-gray-700 bg-bg-tertiary">
              <div className="heygen-streaming-container aspect-video relative">
                <iframe
                  ref={iframeRef}
                  id="heygen-streaming-iframe-modal"
                  title={`Talk with ${character.name} - Interactive Demo`}
                  role="dialog"
                  allow="microphone"
                  allowFullScreen={false}
                  className="w-full h-full"
                />
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="caption-l text-text-tertiary">
                This is a live interactive demo. You can speak with {character.name.split(' ')[0]} about {
                  character.categories
                    .map(categoryId => {
                      const category = categories.find(cat => cat.id === categoryId);
                      return category?.displayName.toLowerCase() || categoryId;
                    })
                    .join(', ')
                    .replace(/, ([^,]*)$/, ' and $1') // Replace last comma with "and"
                }.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // For other characters, show coming soon message
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className="relative w-full max-w-md mx-4 bg-bg-secondary rounded-2xl border border-primary-500/20 shadow-2xl shadow-primary-500/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="h3 text-text-primary">{character.name}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-bg-tertiary hover:bg-bg-quaternary text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h3 className="h4 text-text-primary mb-2">Coming Soon</h3>
          <p className="body-s text-text-secondary mb-4">
            Interactive conversations with {character.name} will be available soon.
          </p>
          
          <blockquote className="body-s text-primary-300 italic mb-6">
            &ldquo;{character.quote}&rdquo;
          </blockquote>
          
          <p className="caption-l text-text-tertiary">
            Get notified when {character.name.split(' ')[0]} becomes available for conversations.
          </p>
        </div>
      </div>
    </div>
  )
}