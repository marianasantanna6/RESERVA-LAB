import AppLayout from '../components/AppLayout'
import Card from '../components/Card'

/**
 * Placeholder para as telas que ainda serão implementadas (já existem como
 * frames no Figma, só faltam virar código). Troque por components/pages
 * reais conforme forem sendo feitas.
 */
export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <AppLayout>
      <h1 className="text-3xl font-bold text-texto-principal">{title}</h1>
      <Card>
        <p className="text-sm text-cinza-secundario">
          Esta tela ainda não foi implementada em React — ela já existe no protótipo do
          Figma e será construída em seguida.
        </p>
      </Card>
    </AppLayout>
  )
}
