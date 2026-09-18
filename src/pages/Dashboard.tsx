import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import Card from '../components/Card'
import StatusBadge from '../components/StatusBadge'
import { getReservations, getSpaces } from '../data/api'
import { currentUser } from '../data/mockData'
import type { Reservation, Space } from '../data/types'

export default function Dashboard() {
  const [spaces, setSpaces] = useState<Space[]>([])
  const [reservations, setReservations] = useState<Reservation[]>([])

  useEffect(() => {
    getSpaces().then(setSpaces)
    getReservations().then(setReservations)
  }, [])

  const firstName = currentUser.name.split(' ')[0]

  return (
    <AppLayout>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-texto-principal">Olá, {firstName}!</h1>
        <p className="text-sm text-cinza-secundario">
          Aqui está um resumo dos espaços e das suas reservas.
        </p>
      </div>

      <Link to="/espacos" className="w-fit">
        <Button>+ Nova reserva</Button>
      </Link>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-texto-principal">Espaços</h2>
        <div className="flex flex-wrap gap-4">
          {spaces
            .filter((s) => s.name !== 'Sala Maker 03')
            .map((space) => (
              <Link key={space.id} to={`/espacos/${space.id}`} className="w-[300px]">
                <Card className="flex h-full flex-col gap-3 transition-shadow hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
                  <span className="font-semibold text-texto-principal">{space.name}</span>
                  <StatusBadge status={space.status} />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-texto-principal">Minhas próximas reservas</h2>
        <div className="flex flex-col gap-4">
          {reservations.map((r) => (
            <Card key={r.id} className="flex items-center justify-between gap-5">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-texto-principal">{r.spaceName}</span>
                <span className="text-sm text-cinza-secundario">
                  {r.date} · {r.time}
                </span>
              </div>
              <StatusBadge status={r.status} />
            </Card>
          ))}
        </div>
      </section>
    </AppLayout>
  )
}
