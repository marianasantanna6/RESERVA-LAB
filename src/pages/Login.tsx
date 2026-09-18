import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { login } from '../data/api'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('pedro.martins@escola.edu.br')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError('Preencha e-mail e senha para continuar.')
      return
    }
    setLoading(true)
    try {
      const { token } = await login(email, password)
      localStorage.setItem('reservalab_token', token)
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-fundo-claro px-4">
      <Card className="w-full max-w-[420px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-extrabold text-azul-principal">ReservaLab</h1>
            <p className="text-sm text-cinza-secundario">Sistema de Reservas Escolares</p>
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-cinza-secundario">
            E-mail institucional
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pedro.martins@escola.edu.br"
              className="rounded-lg border border-cinza-secundario/40 px-3.5 py-3 text-sm text-texto-principal outline-none focus:border-azul-principal"
              autoComplete="username"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-cinza-secundario">
            Senha
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-lg border border-cinza-secundario/40 px-3.5 py-3 text-sm text-texto-principal outline-none focus:border-azul-principal"
              autoComplete="current-password"
            />
          </label>

          {error && (
            <p role="alert" className="text-sm font-medium text-vermelho-erro">
              {error}
            </p>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Entrando…' : 'Entrar'}
          </Button>

          <a href="#" className="text-sm font-semibold text-azul-principal hover:underline">
            Esqueci minha senha
          </a>
        </form>
      </Card>
    </div>
  )
}
