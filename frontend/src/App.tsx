import { Navigate, Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PlaceholderPage from './pages/PlaceholderPage'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      {/* Telas que já existem no Figma e serão implementadas em seguida */}
      <Route
        path="/espacos"
        element={
          <RequireAuth>
            <PlaceholderPage title="Espaços disponíveis" />
          </RequireAuth>
        }
      />
      <Route
        path="/espacos/:id"
        element={
          <RequireAuth>
            <PlaceholderPage title="Detalhes do Espaço" />
          </RequireAuth>
        }
      />
      <Route
        path="/minhas-reservas"
        element={
          <RequireAuth>
            <PlaceholderPage title="Minhas Reservas" />
          </RequireAuth>
        }
      />
      <Route
        path="/notificacoes"
        element={
          <RequireAuth>
            <PlaceholderPage title="Notificações" />
          </RequireAuth>
        }
      />
      <Route
        path="/perfil"
        element={
          <RequireAuth>
            <PlaceholderPage title="Perfil" />
          </RequireAuth>
        }
      />
      <Route
        path="/ajuda"
        element={
          <RequireAuth>
            <PlaceholderPage title="Ajuda e Regras" />
          </RequireAuth>
        }
      />
      <Route
        path="/acessibilidade"
        element={
          <RequireAuth>
            <PlaceholderPage title="Acessibilidade" />
          </RequireAuth>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
