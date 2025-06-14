import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pusula Harita - Modern Harita Mühendisliği Çözümleri',
  description: 'Pusula Harita, harita mühendisliği alanında profesyonel çözümler sunan lider bir firmadır. Kadastro, GPS ölçümleri, harita çizimi ve arazi analizi hizmetleri.',
  icons: {
    icon: '/images/Pusula.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 