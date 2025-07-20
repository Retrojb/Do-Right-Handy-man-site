import SectionHeader from '../components/SectionHeader'

export default function FAQ() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <SectionHeader label="What services do you offer?" defaultOpen={true}>
            <p className="text-gray-600">
              We offer a wide range of handyman services including home repairs, electrical work, 
              plumbing, carpentry, painting, and general maintenance. Our skilled professionals 
              can handle projects of all sizes.
            </p>
          </SectionHeader>
          
          <SectionHeader label="What areas do you serve?">
            <p className="text-gray-600">
              We currently serve the greater metropolitan area including all surrounding suburbs 
              within a 30-mile radius of the city center.
            </p>
          </SectionHeader>
          
          <SectionHeader label="How much do your services cost?">
            <p className="text-gray-600">
              Our rates depend on the specific service and scope of work. We provide free estimates 
              before beginning any project so you'll know exactly what to expect.
            </p>
            <p className="mt-2 text-gray-600">
              For standard services, we offer competitive hourly rates starting at $75/hour.
            </p>
          </SectionHeader>
          
          <SectionHeader label="Are you licensed and insured?">
            <p className="text-gray-600">
              Yes, DoRight Handyman is fully licensed and insured. We carry general liability 
              insurance and our technicians are covered by workers' compensation.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=300&fit=crop" 
              alt="Licensed professional" 
              className="mt-4 rounded-lg"
            />
          </SectionHeader>
        </div>
      </div>
    </div>
  )
}