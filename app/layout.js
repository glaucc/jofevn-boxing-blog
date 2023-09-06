import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jofevn Boxing Articles',
  description: 'Jofevn Boxing Articles about Famous topics for beginners, intermediates and advanced athlete or people wo have interest in boxing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9662284664462592"
     crossorigin="anonymous"></script></head>
      <body className={inter.className}>{children}
      <Analytics />
</body>
    </html>
  )
}
