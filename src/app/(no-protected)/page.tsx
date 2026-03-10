'use client'

import { SketchButton } from '@/components/ui/buttons/sketch-button'
import BoyMap from '@/components/ui/illustrations/boy-map'
import GirlWithBow from '@/components/ui/illustrations/girl-with-bow'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const WiredCard = dynamic(
    () => import('react-wired-elements').then((mod) => mod.WiredCard),
    { ssr: false },
  )

  return (
    <div className="flex w-full flex-col gap-5 px-10 pt-10 pb-7 md:px-20">
      <section className="flex justify-center">
        <WiredCard elevation={3} className="p-2">
          <div className="relative h-70 w-80 overflow-hidden rounded-md max-[420px]:w-65 sm:h-118 sm:w-120 lg:h-118 lg:w-200">
            <Image
              src="/images/imagens_criancas_gemini.png"
              alt="Crianças brincando com blocos bilíngues"
              fill
              className="object-cover object-[center_35%]"
            />
          </div>
        </WiredCard>
      </section>

      <section className="flex flex-col items-center gap-8">
        <div className="relative flex flex-col items-center gap-3">
          <h1 className="flex flex-col items-center text-4xl font-semibold">
            <p className="text-center">Navegando no bilinguismo,</p>
            <p className="text-center">ancorados no futuro.</p>
          </h1>

          <h3 className="text-center text-lg font-medium">
            A jornada bilíngue da sua escola começa aqui.
          </h3>

          <GirlWithBow
            width={128}
            height={128}
            className="absolute -right-25 -bottom-34"
          />
          <BoyMap
            width={128}
            height={128}
            className="absolute -bottom-31 -left-25"
          />
        </div>

        <SketchButton
          variant="orange"
          onClick={() => router.push('/quem-somos')}
        >
          Inicie a sua jornada
        </SketchButton>
      </section>
    </div>
  )
}
