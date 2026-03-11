import type { Metadata } from 'next'
import { Quicksand, Bad_Script } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-main',
})

const vibur = Bad_Script({
  subsets: ['latin'],
  variable: '--font-handwritten',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Sail Solução Bilíngue',
  description: 'Educação bilíngue',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${quicksand.variable} ${vibur.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
