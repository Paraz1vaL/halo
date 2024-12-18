import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dongeng CintaKu</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8">ini cerita dua orang yang mencoba memasak cinta, meskipun sering gosong tapi tetap enak!</p>
      <div className="relative w-60 h-60 mx-auto">
        <Image 
          src="/image/IMG-20241027-WA0092.jpg" 
          alt="Couple illustration" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  )
}
