import '@styles/globals.css'
import { Lato } from 'next/font/google'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${inter.variable} ${lato.variable} font-sans bg-OFF_WHITE`}>
          {children}
        </div>
      </body>
    </html>
  )
}
