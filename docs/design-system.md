# Design System — ReservaLab

Referência única de cores, tipografia, espaçamento e componentes do ReservaLab. Extraído diretamente do código do frontend (React + Tailwind CSS) e do protótipo no Figma que o originou — Figma e frontend devem seguir exatamente estes valores. Único tema disponível hoje: **Claro** (ainda não existe tema escuro).

## Fundamentos de conteúdo

- Escrever em português do Brasil, no tom institucional-escolar do produto: direto, sem gírias, sempre na segunda pessoa ("Confirme sua reserva", "Escolha um espaço").
- Nunca comunicar status apenas por cor. Todo indicador de status usa ícone + palavra, nunca a cor isolada — regra de acessibilidade.
- Texto de botão é um verbo de ação curto ("Entrar", "+ Nova reserva", "Confirmar").

## Cores

| Token | Hex | Uso |
|---|---|---|
| `azul-principal` | `#2563EB` | Ações primárias: botão principal, links, foco de campos e marcador do item ativo da navegação |
| `azul-escuro` | `#1E3A8A` | Fundo da barra lateral (sidebar) — nunca em texto ou botões |
| `verde-disponivel` | `#16A34A` | Status de sucesso: badge "Disponível" (espaço) e "Confirmada" (reserva) |
| `amarelo-aviso` | `#F59E0B` | Status de atenção: badge "Reservado" |
| `vermelho-erro` | `#DC2626` | Status de erro: badge "Cancelada", validação de formulário, botão variante `danger` |
| `cinza-secundario` | `#64748B` | Texto de apoio (datas, subtítulos, labels), borda de campos e badges "Indisponível"/"Concluída" |
| `fundo-claro` | `#F8FAFC` | Fundo de página (body) em toda a aplicação |
| `texto-principal` | `#0F172A` | Cor de texto de leitura principal, sobre fundo claro ou branco |
| `branco` | `#FFFFFF` | Fundo de superfícies elevadas: cards e cartão de login |
| `azul-hover` | `#1D4ED8` | Estado `:hover` do botão primário |
| `azul-suave` | `#EFF6FF` | Estado `:hover` do botão secundário |
| `vermelho-hover` | `#B91C1C` | Estado `:hover` do botão de perigo (danger) |

## Tipografia

Família: **Inter** (pesos 400, 500, 600, 700, 800), via Google Fonts. Fallback: `system-ui, sans-serif`.

| Estilo | Tamanho / altura de linha | Peso | Uso |
|---|---|---|---|
| `titulo-hero` | 30px / 36px | 800 | Nome "ReservaLab" na tela de login |
| `titulo-pagina` | 30px / 36px | 700 | Título que abre cada tela autenticada (ex.: "Olá, Pedro!") |
| `titulo-secao` | 20px / 28px | 700 | Divide seções dentro de uma tela e nomeia a marca na sidebar |
| `corpo` | 14px / 20px | 400 | Texto de leitura padrão: subtítulos, datas, mensagens de apoio e de erro |
| `rotulo` | 14px / 20px | 600 | Labels de formulário, itens de navegação, texto de botão, nomes em cards |
| `legenda` | 12px / 16px | 600 | Exclusiva dos badges de status (ícone + palavra) |

## Espaçamento

| Token | Valor | Uso |
|---|---|---|
| `space-1-5` | 6px | Gap entre ícone e palavra num badge de status |
| `space-3` | 12px | Padding horizontal dos badges de status |
| `space-3-5` | 14px | Padding horizontal e vertical dos campos de formulário |
| `space-4` | 16px | Gap entre cards de uma grade; padding horizontal do botão; gap entre itens da sidebar |
| `space-5` | 20px | Padding interno dos cards; padding horizontal da sidebar |
| `space-6` | 24px | Gap entre seções de uma tela |
| `space-7` | 28px | Padding vertical da sidebar; gap entre marca e navegação |
| `space-10` | 40px | Padding vertical da área de conteúdo principal |
| `space-12` | 48px | Padding horizontal da área de conteúdo principal |

## Layout

| Token | Valor | Uso |
|---|---|---|
| `sidebar-largura` | 240px | Largura fixa da barra lateral, sempre visível em telas desktop |
| `conteudo-largura-maxima` | 1024px | Largura máxima do conteúdo principal, centralizado ao lado da sidebar |
| `card-largura` | 300px | Largura padrão dos cards de espaço na grade do Dashboard |
| `login-largura-maxima` | 420px | Largura máxima do cartão de login, centralizado na tela |

O layout é desktop-first — ainda não há um breakpoint mobile definido no código; qualquer adaptação para telas estreitas deve ser proposta, não presumida.

## Cantos e sombra

| Token | Valor | Uso |
|---|---|---|
| `radius-md` | 6px | Itens de navegação da sidebar |
| `radius-lg` | 8px | Botões e campos de formulário |
| `radius-xl` | 12px | Cards |
| `radius-full` | 9999px | Badges de status (formato pílula) |
| `shadow-card` | `0 2px 8px rgba(0, 0, 0, 0.08)` | Sombra de repouso de todo card |
| `shadow-card-hover` | `0 4px 14px rgba(0, 0, 0, 0.12)` | Substitui `shadow-card` em cards clicáveis, ao passar o mouse |

## Iconografia

Não há biblioteca de ícones — os únicos símbolos do sistema são os indicadores de status usados nos badges: `✓` (sucesso), `●` (atenção), `✕` (erro/encerrado), sempre com `aria-hidden="true"` e sempre acompanhados da palavra do status como texto visível.

Não existe uma marca (logotipo) desenhada — o nome "ReservaLab" é sempre tipografado em `titulo-hero`/`titulo-secao`, nunca substituído por um símbolo.

## Componentes

### Botão

Três variantes, usadas em toda ação clicável do ReservaLab.

- `primary` (padrão) — ação principal de uma tela (ex.: "Entrar", "+ Nova reserva", "Confirmar reserva"); nunca mais de um por tela. Fundo `azul-principal`, texto `branco`, hover `azul-hover`.
- `secondary` — ações alternativas ao lado de uma primária (ex.: "Cancelar" ao lado de "Salvar"). Fundo `branco`, texto e borda `azul-principal`, hover `azul-suave`.
- `danger` — só para ações destrutivas ou irreversíveis (ex.: cancelar reserva). Fundo `vermelho-erro`, texto `branco`, hover `vermelho-hover`.
- Tipografia `rotulo`, cantos `radius-lg`.
- `:disabled` reduz a opacidade para 50% e remove o cursor de clique — nunca esconder um botão desabilitado, deixá-lo visível e inerte.

### Card

Superfície elevada branca usada para agrupar conteúdo relacionado — espaços, reservas, o formulário de login.

- Fundo `branco`, cantos `radius-xl`, padding interno `space-5`, sombra `shadow-card` em repouso.
- Em cards clicáveis (ex.: card de espaço que leva aos detalhes), trocar a sombra para `shadow-card-hover` no `:hover` — nunca mudar a cor de fundo ou a borda para indicar interatividade.
- Não empilhar cards dentro de cards; usar `space-4` de gap entre cards de uma mesma lista ou grade.

### Badge de status

Sempre ícone + palavra, nunca cor isolada.

| Status | Cor de fundo | Ícone |
|---|---|---|
| Disponível / Confirmada | `verde-disponivel` | ✓ |
| Reservado | `amarelo-aviso` | ● |
| Indisponível / Concluída | `cinza-secundario` | ✕ / ✓ |
| Cancelada | `vermelho-erro` | ✕ |

Tipografia `legenda`, texto sempre `branco`, cantos `radius-full`, `space-3` de padding horizontal, `space-1-5` de gap entre ícone e palavra.

### Campo de formulário (Input)

Campo de linha única, usado no login e em qualquer formulário futuro.

- Borda `cinza-secundario` a 40% de opacidade em repouso; troca para `azul-principal` sólida em `:focus` — nunca remover o contorno de foco.
- Cantos `radius-lg`, `space-3-5` de padding, tipografia `corpo` para o valor digitado.
- Todo campo tem um `rotulo` acima — nunca usar apenas um placeholder como rótulo.
- Mensagem de erro abaixo do campo/formulário em `corpo`, cor `vermelho-erro`, com `role="alert"`.

### Sidebar (navegação lateral)

Fixa, presente em toda tela autenticada.

- Fundo `azul-escuro`, largura `sidebar-largura` (240px), padding `space-5` horizontal e `space-7` vertical.
- Marca "ReservaLab" em `titulo-secao`, sempre branca.
- Itens de navegação em `rotulo`, branco a 70% de opacidade em repouso; item da tela atual em branco sólido com marcador `●` à esquerda — nunca usar apenas a cor para indicar a página ativa.
- "Acessibilidade" e "Sair" ficam no rodapé, separados da navegação principal por espaçamento (`justify-content: space-between`), não por uma borda.

---