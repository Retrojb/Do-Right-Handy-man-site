import { useState } from 'react'

export interface ContactUsFormData {
  name: string
  phone: string
  email: string
  serviceDetails: string
}
export default function Contact() {
  const [formData, setFormData] = useState<ContactUsFormData>({
    name: '',
    phone: '',
    email: '',
    serviceDetails: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead submitted:', formData)
    alert('Thank you! We will contact you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex-1 flex-col py-16  bg-slate-500">
      <div className=" mx-auto max-w-2xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">Contact Us</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg bg-white p-8 shadow-lg"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-amber-400 border-stone-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-amber-400 border-stone-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600 ">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-amber-400 border-stone-900"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600 ">Service Details</label>
            <textarea
                name="details"
                value={formData.serviceDetails}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-amber-400 border-stone-900"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-stone-800 py-3 font-semibold text-white hover:bg-amber-200"
          >
            Submit Lead
          </button>
        </form>
      </div>
    </div>
  )
}
