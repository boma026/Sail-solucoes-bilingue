import { Header } from '@/components/common/header'

export default function MainNoProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
