interface CardProps {
  heading: string
  icon?: string
  image?: string
  body: string
}

export default function Card({ heading, icon, image, body }: CardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      {image && (
        <img src={image} alt={heading} className="mb-4 h-48 w-full rounded object-cover" />
      )}
      <div className="flex items-center gap-3 mb-3">
        {icon && <div className="text-4xl">{icon}</div>}
        <h3 className="text-xl font-semibold">{heading}</h3>
      </div>
      <p className="text-gray-600">{body}</p>
    </div>
  )
}