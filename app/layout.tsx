import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import LenisProvider from '@/components/LenisProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ohana Development — Luxury Residences UAE',
  description:
    'Leading luxury real estate developer in the UAE and Lebanon. Manchester City Yas Residences, Jacob & Co. Beachfront Living, Elie Saab Waterfront.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ohana Development',
    title: 'Ohana Development — Luxury Residences UAE',
    description:
      'Leading luxury real estate developer in the UAE. 35 years of excellence. AED 15 billion in landmark developments.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
