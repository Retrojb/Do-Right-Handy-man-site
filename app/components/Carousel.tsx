import { useState, useEffect } from 'react'

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-96 w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Service ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </section>
  )
}