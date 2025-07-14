export default function Book() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Book Appointment</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-64 h-64 bg-gray-200 rounded-lg mx-auto mb-8 flex items-center justify-center">
            <p className="text-gray-500">Calendar will be added here</p>
          </div>
          
          <p className="text-lg text-gray-600">
            Schedule your appointment with our handyman services. 
            Calendar integration coming soon.
          </p>
        </div>
      </div>
    </div>
  )
}