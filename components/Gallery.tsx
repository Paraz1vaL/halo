'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  '/image/IMG-20241020-WA0089.jpg',
  '/image/IMG-20241027-WA0131.jpg',
  '/image/IMG-20240818-WA0026.jpg',
  '/image/IMG-20240911-WA0048.jpg',
  '/image/IMG-20240828-WA0058~2.jpg',
  '/image/IMG-20241002-WA0120.jpg',
  '/image/IMG-20240918-WA0035.jpg',
  '/image/IMG_7052.jpeg'
]

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Kenangan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image 
              src={src} 
              alt={`Couple photo ${index + 1}`} 
              width={300} 
              height={400} 
              className="w-full h-auto object-cover"
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Anjayy 💥</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
