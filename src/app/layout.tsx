import './globals.css'
import type { Metadata } from 'next'
import { Montserrat} from 'next/font/google'

const popinsFont = Montserrat({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'proedge-landing',
  description: 'Follow me for more!',
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
