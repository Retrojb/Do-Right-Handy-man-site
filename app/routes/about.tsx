export default function About() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-16 text-center text-4xl font-bold">About Us</h1>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gray-300"></div>
            <h3 className="mb-4 text-center text-2xl font-semibold">
              Dustin M.
            </h3>
            <p className="text-center text-gray-600">
              Experienced handyman with over 15 years in home improvement and
              repair services.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gray-300"></div>
            <h3 className="mb-4 text-center text-2xl font-semibold">Mark M.</h3>
            <p className="text-center text-gray-600">
              Master craftsman specializing in carpentry and custom
              installations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
