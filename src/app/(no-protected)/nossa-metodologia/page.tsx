'use client'

import { SketchButton } from '@/components/ui/buttons/sketch-button'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

export default function NossaMetodologiaPage() {
  const router = useRouter()

  const WiredCard = dynamic(
    () => import('react-wired-elements').then((mod) => mod.WiredCard),
    { ssr: false },
  )

  const pilaresUNESCO = [
    {
      titulo: 'Aprender a Conhecer',
      desc: 'Desenvolver o prazer de aprender e a curiosidade intelectual.',
    },
    {
      titulo: 'Aprender a Fazer',
      desc: 'Colocar o conhecimento em prática em diversas situações.',
    },
    {
      titulo: 'Aprender a Conviver',
      desc: 'Compreender o outro e desenvolver projetos comuns.',
    },
    {
      titulo: 'Aprender a Ser',
      desc: 'Desenvolver autonomia, discernimento e responsabilidade.',
    },
  ]
  return (
    <div className="flex w-full flex-col gap-20 px-20 py-15">
      <section className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold">Nossa Metodologia</h1>
        <p className="max-w-2xl text-gray-600 italic">
          &quot;Navegando por caminhos sólidos, baseados em diretrizes globais e
          nacionais.&quot;
        </p>
        <div className="h-1 w-24 rounded-full bg-yellow-400" />
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        <WiredCard elevation={3} className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-blue-500">CLIL</h2>
          <p className="text-gray-700">
            Content and Language Integrated Learning. O inglês não é apenas uma
            matéria, mas o veículo para aprender outros conteúdos, tornando o
            bilinguismo natural e contextualizado.
          </p>
        </WiredCard>

        <WiredCard elevation={2} className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-green-600">BNCC</h2>
          <p className="text-gray-700">
            Alinhados à Base Nacional Comum Curricular, garantimos que o
            desenvolvimento das competências essenciais ocorra em harmonia com a
            língua inglesa.
          </p>
        </WiredCard>
      </section>

      <section className="mt-10 flex flex-col items-center gap-8">
        <h2 className="text-3xl font-medium">Os 4 Pilares da UNESCO</h2>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilaresUNESCO.map((pilar, index) => (
            <WiredCard
              key={index}
              elevation={1}
              className="flex flex-col items-center p-4 text-center transition-colors hover:bg-yellow-50"
            >
              <span className="mb-2 text-3xl">⚓</span>
              <h3 className="mb-2 font-bold text-[#2D2D2D]">{pilar.titulo}</h3>
              <p className="text-sm text-gray-600">{pilar.desc}</p>
            </WiredCard>
          ))}
        </div>
      </section>

      <section className="mt-12 flex flex-col items-center gap-6">
        <p className="text-sm text-gray-500">
          Ficou com alguma dúvida sobre nosso método?
        </p>
        <SketchButton variant="pink" onClick={() => router.push('/contato')}>
          Fale com a gente
        </SketchButton>
      </section>
    </div>
  )
}
