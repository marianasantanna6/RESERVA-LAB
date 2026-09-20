# ReservaLab — Frontend

Sistema de reservas de Biblioteca e Salas Maker. Este é o frontend em React, construído a partir do protótipo do Figma (mesmas cores, tipografia e telas).

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. Faça login com qualquer e-mail/senha (login é mockado por enquanto — ver seção "Backend" abaixo).

## Estrutura

```
src/
  components/   # Button, Card, StatusBadge, Sidebar, AppLayout, RequireAuth
  pages/        # Login, Dashboard (prontas) + PlaceholderPage (telas que faltam)
  data/
    types.ts      # tipos compartilhados (Space, Reservation)
    mockData.ts    # dados de exemplo
    api.ts         # camada de acesso a dados — troque aqui pelas chamadas reais
```

## O que já está pronto

- **Login** (`/login`) — formulário funcional, salva um token mockado e redireciona pro Dashboard.
- **Dashboard** (`/`) — tela inicial: resumo de espaços e próximas reservas, protegida por login.
- Sistema de design consistente com o Figma: cores, tipografia (Inter), botões, cards e badges de status (sempre ícone + texto).
- Navegação lateral (sidebar) com todos os links do fluxo completo.
- Rotas para as demais telas do Figma já existem, mas ainda mostram um placeholder ("Esta tela ainda não foi implementada") — é só ir implementando uma por uma seguindo o mesmo padrão de `Dashboard.tsx`.

## Backend

Ainda não há backend conectado. Toda leitura de dados passa por `src/data/api.ts` — é o único lugar que precisa mudar quando o backend estiver pronto: troque o corpo de cada função por uma chamada `fetch`/`axios` de verdade. O resto do app não precisa ser tocado.

## Próximos passos sugeridos

1. Implementar as telas que faltam (Espaços, Detalhes do Espaço, Minhas Reservas, etc.), usando o protótipo do Figma como referência.
2. Conectar `src/data/api.ts` na API real assim que o backend estiver no ar.
3. Trocar o `RequireAuth` mockado por uma verificação de sessão de verdade.
