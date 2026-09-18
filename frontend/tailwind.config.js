/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'azul-principal': '#2563EB',
        'azul-escuro': '#1E3A8A',
        'verde-disponivel': '#16A34A',
        'vermelho-erro': '#DC2626',
        'amarelo-aviso': '#F59E0B',
        'fundo-claro': '#F8FAFC',
        'cinza-secundario': '#64748B',
        'texto-principal': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
