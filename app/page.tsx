import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import ReasonsForLove from '@/components/ReasonsForLove'
import Timeline from '@/components/Timeline'
import Widgets from '@/components/Widgets'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Hero />
        <Gallery />
        <ReasonsForLove />
        <Timeline />
        <Widgets />
      </main>
    </div>
  )
}

