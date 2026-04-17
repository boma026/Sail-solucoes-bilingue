'use client'

import { SketchButton } from '@/components/ui/buttons/sketch-button'
import BoyMap from '@/components/ui/illustrations/boy-map'
import { SketchEmailIcon } from '@/components/ui/icons/sketch-email-icon'
import { SketchInstagramIcon } from '@/components/ui/icons/sketch-instagram-icon'
import { SketchPhoneIcon } from '@/components/ui/icons/sketch-phone-icon'
import dynamic from 'next/dynamic'

export default function ContatoPage() {
  const WiredCard = dynamic(
    () => import('react-wired-elements').then((mod) => mod.WiredCard),
    { ssr: false },
  )

  const contactMethods = [
    {
      title: 'Instagram',
      handle: '@sail_bilingue',
      icon: (
        <SketchInstagramIcon className="bg-sail-yellow/40 h-12 w-12 rounded-xl p-2" />
      ),
      link: 'https://instagram.com/sail_bilingue',
      color: 'bg-yellow-50/50',
    },
    {
      title: 'WhatsApp',
      handle: '(xx) xxxx-xxxx',
      icon: (
        <SketchPhoneIcon className="bg-sail-blue-wave/40 h-12 w-12 rounded-xl p-2" />
      ),
      link: 'https://wa.me/seunumeroaqui',
      color: 'bg-blue-50/50',
    },
    {
      title: 'E-mail',
      handle: 'contato@sail.com.br',
      icon: (
        <SketchEmailIcon className="bg-sail-green/40 h-12 w-12 rounded-xl p-2" />
      ),
      link: 'mailto:contato@sail.com.br',
      color: 'bg-green-50/50',
    },
  ]

  return (
    <div className="flex w-full flex-col gap-12 bg-[#FDFDFD] px-10 pt-10 pb-20 md:px-20">
      <section className="relative flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold">Vamos Conversar?</h1>
        <p className="max-w-xl text-lg text-gray-600">
          Quer levar a experiência <strong>SAIL</strong> para sua escola ou
          tirar dúvidas? Escolha o melhor canal para você!
        </p>
        <div className="h-1 w-24 rounded-full bg-blue-300" />

        <BoyMap
          width={120}
          height={120}
          className="hidden -rotate-6 lg:absolute lg:top-0 lg:right-0 lg:block"
        />
      </section>

      <section className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            <WiredCard
              elevation={2}
              className={`flex h-full flex-col items-center gap-4 p-8 ${method.color}`}
            >
              {method.icon}
              <h2 className="text-xl font-bold text-gray-800">
                {method.title}
              </h2>
              <p className="font-medium text-gray-600">{method.handle}</p>
              <span className="font-handwriting mt-2 text-xs text-blue-400 underline">
                Clique Aqui
              </span>
            </WiredCard>
          </a>
        ))}
      </section>

      <section className="mt-10 flex flex-col items-center gap-6 text-center">
        <WiredCard
          elevation={1}
          className="max-w-2xl border-dashed bg-white p-6"
        >
          <p className="text-gray-700 italic">
            &quot;Nossa equipe de especialistas está pronta para ajudar sua
            escola a içar velas em direção ao bilinguismo de verdade.&quot;
          </p>
        </WiredCard>

        <SketchButton
          variant="pink"
          onClick={() => (window.location.href = 'mailto:contato@sail.com.br')}
        >
          Enviar uma mensagem agora
        </SketchButton>
      </section>
    </div>
  )
}
