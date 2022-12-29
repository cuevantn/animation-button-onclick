import './globals.css'

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className + " h-full"}>
      <head />
      <body className='h-full bg-zinc-900'>{children}</body>
    </html>
  )
}
