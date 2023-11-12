import { Metadata } from 'next';
import '../styles/global.scss'
import { AppWrapper } from './app-wrapper';
import { Lato } from 'next/font/google'


const lato = Lato({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  weight: ['100', '300', '400']
})

export const metadata: Metadata = {
  title: 'Allie and Elizbeth',
  description: 'Allie and Elizabeth 2024'
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
