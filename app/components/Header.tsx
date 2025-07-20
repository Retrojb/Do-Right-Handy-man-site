import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-stone-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <img src="/DorightLogo.svg" alt="DoRight Handyman" className="h-8 w-8" />
            <span className="text-xl font-bold">Do Right Handyman</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8">
            <a href="/" className="hover:text-blue-200">Home</a>
            <a href="/about" className="hover:text-blue-200">About</a>
            <a href="/contact" className="hover:text-blue-200">Contact</a>
            <a href="/book" className="hover:text-blue-200">Book</a>
            <a href="/faq" className="hover:text-blue-200">FAQ</a>
          </div>
          
          {/* Mobile Hamburger */}
          <button 
            className="sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden pb-4">
            <a href="/" className="block py-2 hover:text-blue-200">Home</a>
            <a href="/about" className="block py-2 hover:text-blue-200">About</a>
            <a href="/contact" className="block py-2 hover:text-blue-200">Contact</a>
            <a href="/book" className="block py-2 hover:text-blue-200">Book</a>
            <a href="/faq" className="block py-2 hover:text-blue-200">FAQ</a>
          </div>
        )}
      </div>
    </nav>
  )
}