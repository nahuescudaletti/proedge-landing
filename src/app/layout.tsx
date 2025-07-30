import './globals.css'
import type { Metadata } from 'next'
import { Montserrat} from 'next/font/google'

const popinsFont = Montserrat({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProEdge Agency - Marketing Digital y Desarrollo Web',
  description: 'ProEdge helps create brand awareness, community, and social media capitalization, focusing on long-term relationships, trust, and results. Servicios de marketing digital, branding, meta ads, y desarrollo web.',
  keywords: 'marketing digital, branding, meta ads, desarrollo web, social media, ProEdge, brand identity, website development',
  authors: [{ name: 'ProEdge Agency' }],
  creator: 'ProEdge Agency',
  publisher: 'ProEdge Agency',
  robots: 'index, follow',
  openGraph: {
    title: 'ProEdge Agency - Marketing Digital y Desarrollo Web',
    description: 'ProEdge helps create brand awareness, community, and social media capitalization. Servicios profesionales de marketing digital y desarrollo web.',
    url: 'https://proedge.agency',
    siteName: 'ProEdge Agency',
    images: [
      {
        url: '/assets/PE_logo_white_1_.svg',
        width: 1200,
        height: 630,
        alt: 'ProEdge Agency Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProEdge Agency - Marketing Digital y Desarrollo Web',
    description: 'ProEdge helps create brand awareness, community, and social media capitalization.',
    images: ['/assets/PE_logo_white_1_.svg'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}
