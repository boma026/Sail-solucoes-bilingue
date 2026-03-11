'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function QuemSomos() {
  const router = useRouter()

  const WiredCard = dynamic(
    () => import('react-wired-elements').then((mod) => mod.WiredCard),
    { ssr: false },
  )

  return (
    <div className="flex w-full flex-col gap-12 bg-[#FDFDFD] px-10 pt-10 pb-10 md:px-20">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-semibold">Nossa História</h1>
        <div className="h-1 w-24 rounded-full bg-blue-300" />
      </section>

      <section className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex-0">
          <WiredCard elevation={2} className="p-1">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-dashed border-gray-200 md:h-80 md:w-80">
              <Image
                src="/images/foto_fundadora_profissional.png"
                alt="Fundadora do Programa SAIL"
                fill
                className="object-cover"
              />
            </div>
          </WiredCard>
        </div>

        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-lg leading-relaxed text-gray-700">
            O programa <strong>SAIL</strong> nasceu da vontade de transformar o
            aprendizado de uma segunda língua em uma experiência lúdica e
            natural. Baseado na metáfora de &quot;velejar&quot; (Sail),
            acreditamos que cada criança deve ter as ferramentas para guiar seu
            próprio barco no mar do conhecimento.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Nossa jornada é construída com afeto, utilizando materiais de
            excelência e uma metodologia que respeita o tempo de cada pequeno
            navegador.
          </p>
        </div>
      </section>

      <section className="mt-10 flex flex-col items-center gap-8">
        <h2 className="text-2xl font-medium">O Programa em Ação</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <WiredCard
              key={i}
              elevation={1}
              className="rotate-1 p-2 odd:-rotate-2"
            >
              <div className="relative h-48 w-64 overflow-hidden rounded-sm">
                <Image
                  src={`/images/rotina_${i}.png`}
                  alt="Rotina SAIL com crianças"
                  fill
                  className="object-cover"
                />
              </div>
            </WiredCard>
          ))}
        </div>
      </section>

      <section className="mt-10 flex justify-center">
        <button
          className="cursor-pointer"
          onClick={() => router.push('nossa-metodologia')}
        >
          Conheça nossa Metodologia
        </button>
      </section>
    </div>
  )
}
