import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'

export default function MainNoProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex-1 overflow-y-auto scroll-smooth">
        <main>{children}</main>

        <Footer />
      </div>
    </div>
  )
}
