export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-yellow-500/40 bg-yellow-500/10 p-3 text-sm">
      {children}
    </div>
  )
}

