import type { Reservation, Space } from './types'

// TODO(backend): substituir estes dados mockados por chamadas reais à API
// assim que o backend estiver disponível (ver src/data/api.ts).

export const spaces: Space[] = [
  {
    id: 'biblioteca',
    name: 'Biblioteca',
    category: 'Biblioteca',
    capacity: '40 pessoas',
    equipment: 'Mesas de estudo, computadores, acervo físico e digital',
    location: 'Térreo, Ala Principal',
    status: 'Disponível',
  },
  {
    id: 'sala-maker-01',
    name: 'Sala Maker 01',
    category: 'Sala Maker',
    capacity: '12 pessoas',
    equipment: 'Impressora 3D, notebooks, ferramentas de prototipagem',
    location: 'Bloco B, 2º andar',
    status: 'Reservado',
  },
  {
    id: 'sala-maker-02',
    name: 'Sala Maker 02',
    category: 'Sala Maker',
    capacity: '12 pessoas',
    equipment: 'Cortadora a laser, notebooks, kits de eletrônica',
    location: 'Bloco B, 2º andar (sala 2)',
    status: 'Disponível',
  },
  {
    id: 'sala-maker-03',
    name: 'Sala Maker 03',
    category: 'Sala Maker',
    capacity: '8 pessoas',
    equipment: 'Ferramentas manuais, bancada de montagem',
    location: 'Bloco B, 3º andar',
    status: 'Indisponível',
  },
]

export const reservations: Reservation[] = [
  {
    id: 'r1',
    code: '#RM24015',
    spaceName: 'Sala Maker 01',
    date: '18/09/2026',
    time: '14:00–16:00',
    status: 'Confirmada',
  },
  {
    id: 'r2',
    code: '#RM24016',
    spaceName: 'Biblioteca — Sala de Estudos',
    date: '20/09/2026',
    time: '10:00–11:00',
    status: 'Confirmada',
  },
]

export const currentUser = {
  name: 'Pedro Martins',
  role: 'Aluno · 3º ano',
  email: 'pedro.martins@escola.edu.br',
}
