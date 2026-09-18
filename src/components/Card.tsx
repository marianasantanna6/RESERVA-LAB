import type { HTMLAttributes } from 'react'

export default function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${className}`}
      {...props}
    />
  )
}
