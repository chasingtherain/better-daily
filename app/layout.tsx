
import '../styles/globals.css'
import Navbar from "@/components/Navbar"
import Providers from './providers'
import { Suspense } from 'react'
import LoadingNavbar from '@/components/loadingSkeleton/LoadingNavbar'

export const metadata = {
  title: 'Better Daily',
  description: 'A journal for daily reflection and a place to practice gratefulness',
  keywords: ['grateful, gratefulness, daily journal,reflection, stoic, progress'],
  authors: [{ name: 'ChasingRain', url: 'https://chasingtherain.vercel.app/' }],
  creator: 'Tnia Jun Peng',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Providers>
            <Suspense fallback={<LoadingNavbar/>}>
              <Navbar/>
            </Suspense>
            <div>{children}</div>
          </Providers>
      </body>
    </html>
  )
}

