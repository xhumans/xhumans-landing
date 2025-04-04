import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';

// Load Inter font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Load Space Grotesk font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'XHumans - The Future of Human-AI Interaction',
  description: 'Create emotionally engaging digital humans with seamless multimodal experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-gradient-to-br from-primary-950 to-bg-primary to-34% `}>
        <Header />
        {children}
      </body>
    </html>
  );
}