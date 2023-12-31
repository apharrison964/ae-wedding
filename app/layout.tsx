import { Metadata } from 'next';
import './global.scss'
import '@aws-amplify/ui-react/styles.css';
import { AppWrapper } from './app-wrapper';
import { Lato } from 'next/font/google'


const lato = Lato({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  weight: ['100', '300', '400']
})

export const metadata: Metadata = {
  title: 'Allie and Elizabeth',
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
