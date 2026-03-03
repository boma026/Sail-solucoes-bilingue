import Image from 'next/image'
import { AnimetedLink } from './animeted-link'

export function Header() {
  return (
    <div className="font-hand flex h-26 w-full items-center justify-between px-20 py-5">
      <div className="flex flex-col items-center">
        <Image
          src="/images/logo_gerado_pelo_gemini.png"
          alt="Logo Sail"
          width={50}
          height={30}
        />
        <AnimetedLink
          href="/"
          linkAnimation={{
            type: 'highlight',
            color: '#0EA5E9',
            strokeWidth: 3,
            animationDuration: 300,
          }}
        >
          <h1 className="text-2xl font-bold">Sail</h1>
        </AnimetedLink>
        {/*<h3 className="text-sm">Soluções Bilíngues</h3>*/}
      </div>

      <div className="flex gap-10">
        <AnimetedLink
          href="/"
          linkAnimation={{
            type: 'underline',
            color: 'sail-red',
            strokeWidth: 3,
            animationDuration: 300,
          }}
        >
          Home
        </AnimetedLink>
        <AnimetedLink
          href="/quem-somos"
          linkAnimation={{
            type: 'underline',
            color: 'sail-orange',
            strokeWidth: 3,
            animationDuration: 300,
          }}
        >
          Quem Somos
        </AnimetedLink>
        <AnimetedLink
          href="/nossos-materiais"
          linkAnimation={{
            type: 'underline',
            color: 'sail-yellow',
            strokeWidth: 3,
            animationDuration: 300,
          }}
        >
          Nossos Materiais
        </AnimetedLink>
        <AnimetedLink
          href="/nossa-metodologia"
          linkAnimation={{
            type: 'underline',
            color: 'sail-green',
            strokeWidth: 3,
            animationDuration: 300,
          }}
        >
          Nossa Metodologia
        </AnimetedLink>
        <AnimetedLink
          href=""
          linkAnimation={{
            type: 'underline',
            color: 'sail-purple',
            strokeWidth: 3,
            animationDuration: 300,
          }}
        >
          Contato
        </AnimetedLink>
      </div>
    </div>
  )
}
