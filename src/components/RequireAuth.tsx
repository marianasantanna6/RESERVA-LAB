import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

/**
 * Guarda de rota simples baseada no token salvo no login mockado.
 * Quando o backend real existir, troque isso por uma verificação de sessão
 * de verdade (ex: checar validade do token com a API).
 */
export default function RequireAuth({ children }: { children: ReactNode }) {
  const token = localStorage.getItem('reservalab_token')
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}
