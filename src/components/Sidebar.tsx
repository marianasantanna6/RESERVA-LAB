import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Início', to: '/' },
  { label: 'Espaços', to: '/espacos' },
  { label: 'Minhas Reservas', to: '/minhas-reservas' },
  { label: 'Notificações', to: '/notificacoes' },
  { label: 'Perfil', to: '/perfil' },
  { label: 'Ajuda e Regras', to: '/ajuda' },
]

function NavItem({ label, to }: { label: string; to: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold transition-colors ${
          isActive ? 'text-white' : 'text-white/70 hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && <span aria-hidden="true">●</span>}
          {label}
        </>
      )}
    </NavLink>
  )
}

export default function Sidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col justify-between bg-azul-escuro px-5 py-7">
      <div className="flex flex-col gap-7">
        <span className="text-xl font-bold text-white">ReservaLab</span>
        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-4">
        <NavItem label="Acessibilidade" to="/acessibilidade" />
        <NavLink to="/login" className="text-sm font-semibold text-white/70 hover:text-white">
          Sair
        </NavLink>
      </div>
    </aside>
  )
}
