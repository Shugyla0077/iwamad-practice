import { type HTMLAttributes, type ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export const Card = ({ children, className = '', ...props }: CardProps) => {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {children}
    </article>
  )
}