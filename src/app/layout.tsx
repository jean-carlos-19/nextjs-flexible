import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Footer,NavBar} from '@/atomic/component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarable devoloper projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
