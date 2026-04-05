import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mzansi Pros - Find Trusted Local Tradespeople',
  description: 'Get found. R589. Done. Find trusted plumbers, painters, electricians and more across South Africa.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
