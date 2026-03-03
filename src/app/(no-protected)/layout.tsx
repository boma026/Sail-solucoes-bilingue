import { Header } from '@/components/common/header'

export default function MainNoProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
