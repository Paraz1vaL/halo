'use client'

import { useState, useEffect } from 'react'

export default function Widgets() {
  const [daysTogetherCount, setDaysTogetherCount] = useState(0)
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const startDate = new Date('2023-08-05') // Replace with your actual start date
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysTogetherCount(diffDays)

    // Simulating a daily quote
    setQuote("Hubungan yang kuat adalah hubungan yang ada Cewek Palu dan Jamet Bantul.")
  }, [])

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-2">🔥🔥🔥</h3>
          <p className="text-4xl sm:text-5xl font-bold text-gray-900">{daysTogetherCount}</p>
          <h3 className="text-xl font-semibold mb-2">HARI BERSAMA</h3>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Our Playlist</h3>
          <ul className="list-disc list-inside">
            <li>Semua Lagu Bernadya</li>
            <li>Drunk Text</li>
            <li>Love Me Like You Do</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Quote</h3>
          <p className="italic text-gray-600">{quote}</p>
        </div>
      </div>
    </section>
  )
}

