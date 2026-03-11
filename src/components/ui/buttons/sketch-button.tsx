import React, { ButtonHTMLAttributes } from 'react'

interface SketchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'blue' | 'orange' | 'yellow' | 'green' | 'red' | 'purple' | 'pink'
}

export function SketchButton({
  children,
  className = '',
  variant = 'blue',
  ...props
}: SketchButtonProps) {
  const colorStyles = {
    blue: 'bg-sail-blue-wave/20 border-sail-blue-deep text-sail-blue-deep hover:bg-sail-blue-wave/40',
    orange:
      'bg-sail-orange/20 border-sail-orange text-orange-900 hover:bg-sail-orange/40',
    yellow:
      'bg-sail-yellow/20 border-yellow-600 text-yellow-900 hover:bg-sail-yellow/40',
    green:
      'bg-sail-green/20 border-sail-green text-green-950 hover:bg-sail-green/40',
    red: 'bg-sail-red/20 border-sail-red text-red-950 hover:bg-sail-red/40',
    purple:
      'bg-sail-purple/20 border-sail-purple text-purple-950 hover:bg-sail-purple/40',
    pink: 'bg-sail-pink/20 border-sail-pink text-pink-950 hover:bg-sail-pink/40',
  }

  return (
    <button
      className={`group relative cursor-pointer px-8 py-2 font-sans text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 ${className} `}
      {...props}
    >
      <div
        className={`absolute inset-0 h-full w-full border-2 ${colorStyles[variant]} transition-colors duration-300`}
        style={{
          borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
        }}
      />
      {children}
    </button>
  )
}
