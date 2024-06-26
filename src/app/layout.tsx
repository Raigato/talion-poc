import Navbar from '@/components/Navbar'
import SocialBar from '@/components/SocialBar'
import { cn } from '@/utils/cn'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

type Props = Readonly<{ children: ReactNode }>

export const metadata: Metadata = {
  title: 'Talion TV',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="fr">
      <body className={cn(inter.className, 'bg-zinc-900 text-white')}>
        <Navbar />
        {children}
        <SocialBar />
      </body>
    </html>
  )
}

export default RootLayout
