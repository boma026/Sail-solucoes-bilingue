'use client'

import { LinkAnimation } from '@/types'
import { useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'
import { RoughAnnotation } from 'rough-notation/lib/model'

export function AnimetedLink({
  href,
  children,
  className,
  linkAnimation,
}: {
  href: string
  children: React.ReactNode
  className?: string
  linkAnimation?: LinkAnimation
}) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const anotacaoRef = useRef<RoughAnnotation | null>(null)

  useEffect(() => {
    if (linkRef.current) {
      let finalColor = linkAnimation?.color || '#000'

      if (linkAnimation?.color?.startsWith('sail-')) {
        const style = getComputedStyle(document.documentElement)
        const cssVar = style.getPropertyValue(`--${linkAnimation.color}`).trim()
        if (cssVar) finalColor = cssVar
      }

      anotacaoRef.current = annotate(linkRef.current, {
        type: linkAnimation?.type || 'underline',
        color: finalColor || '#000',
        strokeWidth: linkAnimation?.strokeWidth || 3,
        animationDuration: linkAnimation?.animationDuration || 300,
      })
    }

    return () => {
      if (anotacaoRef.current) {
        anotacaoRef.current.remove()
      }
    }
  }, [])

  return (
    <a
      href={href}
      ref={linkRef}
      onMouseEnter={() => anotacaoRef.current?.show()}
      onMouseLeave={() => anotacaoRef.current?.hide()}
      className={`cursor-pointer transition-colors ${className}`}
    >
      {children}
    </a>
  )
}
