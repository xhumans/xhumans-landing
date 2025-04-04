// src/app/page.tsx
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedAvatarsSection from '@/components/sections/FeaturedAvatarsSection'
import DemoSection from '@/components/sections/DemoSection'

export default function Home() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen">
      <Header />
      <HeroSection />
      <DemoSection />
      <FeaturedAvatarsSection />
      {/* Other sections will be added later */}
      <Footer />
    </main>
  )
}