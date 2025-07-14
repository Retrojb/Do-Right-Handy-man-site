import type { Route } from "./+types/home";
import { useState, useEffect } from 'react'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DoRight Handyman - Professional Home Services" },
    { name: "description", content: "Quality handyman services for all your home improvement needs" },
  ];
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Full-width description */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Handyman Services</h1>
          <p className="text-xl">Quality craftsmanship you can trust for all your home improvement needs</p>
        </div>
      </section>

      {/* Full-width carousel */}
      <section className="relative w-full h-96 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Service ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </section>

      {/* 3 horizontal cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Home Repairs</h3>
              <p className="text-gray-600">From fixing leaky faucets to patching drywall, we handle all your repair needs.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Electrical Work</h3>
              <p className="text-gray-600">Licensed electrical services including outlets, lighting, and troubleshooting.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">🚰</div>
              <h3 className="text-xl font-semibold mb-3">Plumbing Services</h3>
              <p className="text-gray-600">Professional plumbing solutions for repairs and installations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}