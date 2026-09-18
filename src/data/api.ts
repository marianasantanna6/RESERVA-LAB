import { reservations, spaces } from './mockData'
import type { Reservation, Space } from './types'

// Camada de acesso a dados do frontend.
//
// Hoje isso só devolve os dados mockados em mockData.ts. Quando o backend
// estiver pronto, é só trocar o corpo destas funções por chamadas fetch/axios
// pra API real — o resto do app (páginas e componentes) não precisa mudar,
// porque todo mundo já consome os dados só por aqui.
//
// Exemplo de como deve ficar depois:
//   export async function getSpaces(): Promise<Space[]> {
//     const res = await fetch(`${API_BASE_URL}/spaces`)
//     return res.json()
//   }

const SIMULATED_DELAY_MS = 200

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), SIMULATED_DELAY_MS))
}

export async function getSpaces(): Promise<Space[]> {
  return delay(spaces)
}

export async function getReservations(): Promise<Reservation[]> {
  return delay(reservations)
}

export async function login(email: string, _password: string): Promise<{ token: string }> {
  // TODO(backend): substituir por POST /auth/login real
  return delay({ token: 'mock-token-' + btoa(email) })
}
