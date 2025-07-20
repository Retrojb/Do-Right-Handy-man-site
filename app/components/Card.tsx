import {tv} from "tailwind-variants";

interface CardProps {
  heading: string
  icon?: string
  image?: string
  body: string
}

const card = tv({
    base: 'rounded-sm bg-stone-200 p-[20px] md:w-[300px] sm:w-[150px]'
})
export default function Card({ heading, icon, image, body }: CardProps) {
  return (
    <div className={card()}>
      {image && (
        <img src={image} alt={heading} className="mb-4 h-48 w-full rounded object-cover" />
      )}
      <div className="flex items-center gap-3 mb-3">
        {icon && <div className="text-4xl">{icon}</div>}
        <h3 className="text-2xl text-gray-600 font-semibold">{heading}</h3>
      </div>
        <div>
            <p className="text-gray-600">{body}</p>

        </div>
    </div>
  )
}