'use client'

import Image from 'next/image'
import { AnimetedLink } from '../ui/animeted-link'
import { SketchMenuButton } from '../ui/sketch-menu-button'
import { useState } from 'react'
import { SketchArrowRight } from '../ui/sketch-arrow-right'

const NAV_LINKS = [
  { label: 'Home', href: '/', color: 'sail-red' },
  { label: 'Quem Somos', href: '/quem-somos', color: 'sail-orange' },
  {
    label: 'Nossos Materiais',
    href: '/nossos-materiais',
    color: 'sail-yellow',
  },
  {
    label: 'Nossa Metodologia',
    href: '/nossa-metodologia',
    color: 'sail-green',
  },
  { label: 'Contato', href: '#contact', color: 'sail-purple' },
]

export function Header() {
  const [menuButtonIsOpen, setMenuButtonIsOpen] = useState(false)

  const toggleOpenMenu = () => {
    setMenuButtonIsOpen(!menuButtonIsOpen)
  }

  return (
    <header>
      <div className="font-hand flex h-24 w-full items-center justify-between px-10 py-5 shadow-[0_4px_30px_rgba(26,54,93,0.07)] md:px-20">
        <div className="flex flex-col items-center">
          <Image
            src="/images/logo_gerado_pelo_gemini.png"
            alt="Logo Sail"
            width={40}
            height={24}
          />
          <AnimetedLink
            href="/"
            linkAnimation={{
              type: 'highlight',
              color: 'sail-blue-wave',
              strokeWidth: 3,
              animationDuration: 300,
            }}
          >
            <h1 className="text-2xl font-bold">Sail</h1>
          </AnimetedLink>
          {/*<h3 className="text-sm">Soluções Bilíngues</h3>*/}
        </div>

        <div className="flex items-center gap-15 max-lg:hidden">
          {NAV_LINKS.map((link) => (
            <AnimetedLink
              className="text-[1.03rem]"
              key={link.href}
              href={link.href}
              linkAnimation={{
                type: 'underline',
                color: link.color,
                strokeWidth: 3,
                animationDuration: 300,
              }}
            >
              {link.label}
            </AnimetedLink>
          ))}
        </div>

        <div className="lg:hidden">
          <SketchMenuButton
            isOpen={menuButtonIsOpen}
            onClick={toggleOpenMenu}
          />
        </div>
      </div>

      {menuButtonIsOpen && (
        <div className="font-hand bg-background/90 absolute z-50 flex w-full flex-col items-start gap-3 px-10 pt-4 pb-5 shadow-[0_15px_30px_-10px_rgba(26,54,93,0.08)] backdrop-blur-md sm:px-20 md:px-40 lg:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="w-full">
              <AnimetedLink
                onClick={toggleOpenMenu}
                className="flex w-full flex-row items-center justify-between px-2 py-1"
                key={link.href}
                href={link.href}
                linkAnimation={{
                  type: 'highlight',
                  color: link.color,
                  strokeWidth: 2,
                  animationDuration: 300,
                }}
              >
                {link.label}
                <SketchArrowRight />
              </AnimetedLink>
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
