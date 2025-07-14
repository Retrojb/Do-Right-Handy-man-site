interface CardGroupProps {
  children: React.ReactNode
}

export default function CardGroup({ children }: CardGroupProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {children}
    </div>
  )
}