'use client'

import { useEffect, useState } from 'react'
import { SketchEmailIcon } from '../ui/icons/sketch-email-icon'
import { SketchInstagramIcon } from '../ui/icons/sketch-instagram-icon'
import { SketchPhoneIcon } from '../ui/icons/sketch-phone-icon'
import dynamic from 'next/dynamic'

export function Footer() {
  const [screenWidth, setScreenWidth] = useState(0)

  const WiredDivider = dynamic(
    () => import('react-wired-elements').then((mod) => mod.WiredDivider),
    { ssr: false },
  )

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <WiredDivider className="m-auto mt-5 w-3/4" key={screenWidth} />
      <footer
        id="contact"
        className="font-hand flex h-44 w-full justify-center px-10 pt-4.5 pb-5 sm:h-24 md:px-20"
      >
        <div className="flex flex-col max-sm:gap-3 sm:flex-1 sm:flex-row sm:justify-around">
          <div className="flex items-center gap-2">
            <SketchInstagramIcon className="bg-sail-yellow/40 h-9 w-9 rounded-tl-2xl rounded-tr-xl rounded-br-2xl rounded-bl-xl p-1" />
            Instagram
          </div>

          <div className="flex items-center gap-2">
            <SketchPhoneIcon className="bg-sail-blue-wave/40 h-9 w-9 rounded-2xl rounded-tl-2xl rounded-tr-xl rounded-br-2xl rounded-bl-xl p-1" />
            Telefone
          </div>

          <div className="flex items-center gap-2">
            <SketchEmailIcon className="bg-sail-green/40 h-9 w-9 rounded-2xl rounded-tl-2xl rounded-tr-xl rounded-br-2xl rounded-bl-xl p-1" />
            Email
          </div>
        </div>
      </footer>
    </>
  )
}
