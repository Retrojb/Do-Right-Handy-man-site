import type { Route } from './+types/home'
import Carousel from '../components/Carousel'
import CardGroup from '../components/CardGroup'
import Card from '../components/Card'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Do Right Handyman - Professional Home Services' },
    {
      name: 'description',
      content: 'Quality handyman services for all your home improvement needs',
    },
  ]
}

export default function Home() {

  return (
    <div className='flex-1 flex-col flex bg-stone-800'>
      <section className="bg-stone-800 py-20 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Professional Handyman Services
          </h1>
          <p className="text-xl">
            Quality craftsmanship you can trust for all your home improvement
            needs
          </p>
        </div>
      </section>
      <Carousel />
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <CardGroup>
            <Card
              heading="Home Repairs"
              icon="🔧"
              body="From fixing leaky faucets to patching drywall, we handle all your repair needs."
            />
            <Card
              heading="Electrical Work"
              icon="⚡"
              body="Licensed electrical services including outlets, lighting, and troubleshooting."
            />
            <Card
              heading="Plumbing Services"
              icon="🚰"
              body="Professional plumbing solutions for repairs and installations."
            />
          </CardGroup>
        </div>
      </section>
    </div>
  )
}
