'use client'

import { useState } from 'react'
import Button from '@/components/common/Button'

export function ComingSoonSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-900/30 via-bg-secondary to-primary-900/20 border border-primary-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tertiary-500 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative px-6 py-16 md:px-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <h2 className="display-s md:display-m text-text-primary mb-4">
            More Amazing Characters Coming Soon
          </h2>
          
          <p className="body-l text-text-secondary mb-8 max-w-2xl mx-auto">
            We&apos;re constantly adding new digital humans with diverse expertise and personalities. 
            Be the first to know when new characters become available.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-bg-tertiary border border-primary-500/20 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="btn-primary btn-md whitespace-nowrap"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    'Notify Me'
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="h4 text-text-primary mb-2">You&apos;re all set!</h3>
              <p className="body-s text-text-secondary">
                We&apos;ll notify you as soon as new characters are available.
              </p>
            </div>
          )}

          {/* Features List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-bg-tertiary border border-primary-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="h6 text-text-primary mb-1">Diverse Expertise</h4>
              <p className="caption-l text-text-tertiary">Characters across industries and specializations</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-bg-tertiary border border-primary-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="h6 text-text-primary mb-1">Early Access</h4>
              <p className="caption-l text-text-tertiary">Be among the first to interact with new characters</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-bg-tertiary border border-primary-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="h6 text-text-primary mb-1">Premium Features</h4>
              <p className="caption-l text-text-tertiary">Access to exclusive character interactions and content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}