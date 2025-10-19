import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'PawConnect - Find Your Perfect Dog',
  description: 'Connect with adoptable dogs on Base, bringing onchain pet ownership to Farcaster',
  icons: {
    icon: '/icon-256x256.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
