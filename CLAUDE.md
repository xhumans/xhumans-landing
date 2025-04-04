# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Build/Dev**: `npm run dev` (with Turbopack), `npm run build`, `npm run start`
- **Lint**: `npm run lint`

## Code Style Guidelines

- **Framework**: Next.js 15 with React 19, TypeScript, Tailwind CSS
- **Imports**: Group imports by type (React, Next.js, components) with React imports first
- **Components**: Use functional components with named exports
- **CSS**: Use Tailwind classes with custom theme variables defined in globals.css
- **Colors**: Follow color system in globals.css with semantic naming (text-primary, bg-primary)
- **TypeScript**: Use strict mode, proper type annotations, avoid `any`
- **Paths**: Use `@/*` alias for src directory imports
- **Client Components**: Mark with "use client" directive when needed
- **Mobile-First**: Design for mobile first, then expand for larger screens
- **Formatting**: Follow Next.js/eslint-config-next conventions