'use client'
import { SketchButton } from '@/components/ui/buttons/sketch-button'
import BoyMap from '@/components/ui/illustrations/boy-map'
import GirlReading from '@/components/ui/illustrations/girl-reading'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NossosMateriaisPage() {
  const router = useRouter()

  const WiredCard = dynamic(
    () => import('react-wired-elements').then((mod) => mod.WiredCard),
    { ssr: false },
  )

  return (
    <div className="flex w-full flex-col gap-20 px-20 py-20">
      <section className="relative flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold">Nossos Materiais</h1>
        <p className="max-w-xl text-gray-600">
          Unimos a excelência global da <strong>Macmillan Education</strong> com
          a vivência prática do dia a dia escolar.
        </p>
        <div className="h-1 w-24 rounded-full bg-orange-300" />

        {/* GirlReading posicionada como se estivesse lendo o título ou o material */}
        <GirlReading
          width={100}
          height={100}
          className="hidden lg:absolute lg:top-0 lg:-left-10 lg:block"
        />
      </section>

      {/* Seção 1: Material Oficial Macmillan */}
      <section className="flex flex-col items-center gap-10 rounded-xl border border-dashed border-gray-200 bg-white p-8 shadow-sm md:flex-row">
        <div className="md:w-1/2">
          <WiredCard elevation={2}>
            <div className="relative h-64 w-full overflow-hidden rounded-md">
              <Image
                src="/images/macmillan_books.png" // Substitua pela foto oficial
                alt="Materiais Macmillan Education"
                fill
                className="object-contain p-4"
              />
            </div>
          </WiredCard>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-2xl font-bold text-[#2D2D2D]">
            Excelência da Macmillan
          </h2>
          <p className="text-gray-700">
            Utilizamos recursos didáticos de ponta que estimulam o pensamento
            crítico e a comunicação real em inglês, preparados para os desafios
            do século XXI.
          </p>
        </div>
      </section>

      {/* Seção 2: Fotos de Rotina (Varal de Fotos) */}
      <section className="relative mt-10 flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-2xl font-medium">O Material na Prática</h2>
          <p className="text-sm text-gray-500">
            Momentos reais com nossos alunos e jogos educativos.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* BoyMap posicionado perto das fotos de rotina como se estivesse explorando */}
          <BoyMap
            width={110}
            height={110}
            className="absolute -top-10 -right-20 hidden rotate-12 md:block"
          />

          {[1, 2, 3].map((i) => (
            <WiredCard
              key={i}
              elevation={3}
              className="rotate-1 p-2 transition-transform even:-rotate-2 hover:rotate-0"
            >
              <div className="relative h-56 w-72 overflow-hidden rounded-sm bg-gray-50">
                <Image
                  src={`/images/rotina_material_${i}.png`} // Fotos reais (sem rostos evidentes)
                  alt={`Rotina com material Sail ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-handwriting mt-2 text-center text-xs text-gray-400">
                {i === 1
                  ? 'Aprendizado Lúdico'
                  : i === 2
                    ? 'Exploração com Jogos'
                    : 'Interação Constante'}
              </p>
            </WiredCard>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="mt-10 flex justify-center">
        <SketchButton variant="orange" onClick={() => router.push('/contato')}>
          Quero esse material na minha escola
        </SketchButton>
      </section>
    </div>
  )
}
