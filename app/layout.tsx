import ClientOnly from './components/ClientOnly'
import Modal from './components/modal/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title='Hello World' isOpen/>
          <Navbar />
        </ClientOnly>
        {children}</body>
    </html>
  )
}
