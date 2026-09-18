export type SpaceStatus = 'Disponível' | 'Reservado' | 'Indisponível'
export type ReservaStatus = 'Confirmada' | 'Cancelada' | 'Concluída'

export interface Space {
  id: string
  name: string
  category: 'Biblioteca' | 'Sala Maker'
  capacity: string
  equipment: string
  location: string
  status: SpaceStatus
}

export interface Reservation {
  id: string
  code: string
  spaceName: string
  date: string
  time: string
  status: ReservaStatus
}
