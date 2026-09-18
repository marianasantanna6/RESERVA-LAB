import type { ReactNode } from 'react'
import Sidebar from './Sidebar'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-fundo-claro">
      <Sidebar />
      <main className="flex-1 px-12 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">{children}</div>
      </main>
    </div>
  )
}
