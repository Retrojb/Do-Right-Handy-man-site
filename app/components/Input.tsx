import { useState } from 'react'

interface InputProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  value: string
  onChange: (value: string) => void
  required?: boolean
  placeholder?: string
  rows?: number
}

export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  rows = 4
}: InputProps) {
  const [error, setError] = useState('')

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    return phoneRegex.test(phone)
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value
    onChange(newValue)

    if (type === 'tel' && newValue && !validatePhone(newValue)) {
      setError('Please enter a valid US phone number')
    } else if (type === 'email' && newValue && !validateEmail(newValue)) {
      setError('Please enter a valid email address')
    } else {
      setError('')
    }
  }

  const baseClasses = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  const errorClasses = error ? "border-red-500" : "border-gray-300"

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClasses} ${errorClasses}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
          className={`${baseClasses} ${errorClasses}`}
        />
      )}
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}