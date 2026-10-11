export interface TagProps {
  label: string
  className?: string
}

export const Tag = ({ label, className = '' }: TagProps) => {
  return (
    <span className={`tag ${className}`.trim()}>
      {label}
    </span>
  )
}