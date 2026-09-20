import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-azul-principal text-white hover:bg-blue-700 disabled:opacity-50',
  secondary:
    'bg-white text-azul-principal border border-azul-principal hover:bg-blue-50 disabled:opacity-50',
  danger: 'bg-vermelho-erro text-white hover:bg-red-700 disabled:opacity-50',
}

export default function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  )
}
