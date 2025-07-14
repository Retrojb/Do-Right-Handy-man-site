export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-semibold text-center mb-4">Dustin M.</h3>
            <p className="text-gray-600 text-center">
              Experienced handyman with over 15 years in home improvement and repair services.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-semibold text-center mb-4">Mark M.</h3>
            <p className="text-gray-600 text-center">
              Master craftsman specializing in carpentry and custom installations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}