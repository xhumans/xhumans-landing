import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} bg-gradient-to-br from-primary-950 to-bg-primary to-34% `}>
        <Header />
        {children}
      </body>
    </html>
  );
}