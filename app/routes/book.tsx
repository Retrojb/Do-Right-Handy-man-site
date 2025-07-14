export default function Book() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Book Appointment
        </h1>

        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <div className="mx-auto mb-8 flex h-64 w-64 items-center justify-center rounded-lg bg-gray-200">
            <p className="text-gray-500">Calendar will be added here</p>
          </div>

          <p className="text-lg text-gray-600">
            Schedule your appointment with our handyman services. Calendar
            integration coming soon.
          </p>
        </div>
      </div>
    </div>
  )
}
