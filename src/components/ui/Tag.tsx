interface TagProps {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <span className="font-mono text-xs uppercase tracking-wide text-muted">{children}</span>
  )
}
