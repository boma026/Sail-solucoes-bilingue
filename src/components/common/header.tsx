'use client'

import { AnimetedLink } from '../ui/buttons/animeted-link'
import { SketchMenuButton } from '../ui/buttons/sketch-menu-button'
import { useState } from 'react'
import { SketchArrowRight } from '../ui/icons/sketch-arrow-right'
import SailLogo from '../ui/illustrations/sail-logo'
import SailName from '../ui/illustrations/sail-name'

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
      <div className="font-hand flex h-25 w-full items-center justify-between px-10 py-5 shadow-[0_4px_30px_rgba(26,54,93,0.07)] md:px-20">
        <div className="flex flex-col items-center">
          <SailLogo width={60} height={50} />
          <AnimetedLink
            href="/"
            linkAnimation={{
              type: 'highlight',
              color: 'sail-blue-wave',
              strokeWidth: 3,
              animationDuration: 300,
            }}
          >
            <SailName width={64} height={32} />
          </AnimetedLink>
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
