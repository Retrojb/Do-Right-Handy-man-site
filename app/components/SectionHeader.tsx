import { useState } from 'react'

interface SectionHeaderProps {
  label: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function SectionHeader({ 
  label, 
  children, 
  defaultOpen = false 
}: SectionHeaderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mb-6">
      <button 
        className="flex w-full items-center justify-between py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{label}</h3>
        <span className="text-gray-500">
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </span>
      </button>
      <div className="h-0.5 w-full bg-gray-300 mb-4"></div>
      
      {isOpen && (
        <div className="pt-2">
          {children}
        </div>
      )}
    </div>
  )
}