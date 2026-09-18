export type SpaceStatus = 'Disponível' | 'Reservado' | 'Indisponível'
export type ReservaStatus = 'Confirmada' | 'Cancelada' | 'Concluída'
export type Status = SpaceStatus | ReservaStatus

const STYLES: Record<Status, { icon: string; bg: string }> = {
  Disponível: { icon: '✓', bg: 'bg-verde-disponivel' },
  Reservado: { icon: '●', bg: 'bg-amarelo-aviso' },
  Indisponível: { icon: '✕', bg: 'bg-cinza-secundario' },
  Confirmada: { icon: '✓', bg: 'bg-verde-disponivel' },
  Cancelada: { icon: '✕', bg: 'bg-vermelho-erro' },
  Concluída: { icon: '✓', bg: 'bg-cinza-secundario' },
}

/**
 * Status badge — always icon + text, never color alone (accessibility rule
 * carried over from the Figma design system).
 */
export default function StatusBadge({ status }: { status: Status }) {
  const cfg = STYLES[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white ${cfg.bg}`}
    >
      <span aria-hidden="true">{cfg.icon}</span>
      {status}
    </span>
  )
}
