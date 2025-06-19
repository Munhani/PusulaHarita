import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Pusula Harita - Modern Harita Mühendisliği Çözümleri',
  description: 'Pusula Harita, harita mühendisliği alanında profesyonel çözümler sunan lider bir firmadır. Kadastro, GPS ölçümleri, harita çizimi ve arazi analizi hizmetleri.',
  keywords: 'Arnavutköy Harita Firması, Başakşehir Harita Firması, Başakşehir Harita, Lihkab, Başakşehir Lihkab, Reality Model, Dron, Dron ölçümleri, MAPEG, kentsel dönüşüm, ortofoto, orto foto, harita mühendisliği, kadastro, GPS ölçümleri, arazi ölçümü, harita çizimi, imar planları, jeodezik ölçümler, total station, lazer tarama, 3D modelleme, parsellasyon, aplikasyon, topografik harita, koordinat ölçümü, yapı ruhsatı, yapı denetimi',
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
    <html lang="tr" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 