import { Metadata } from 'next';
import '../styles/global.scss'
import { AppWrapper } from './app-wrapper';



export const metadata: Metadata = {
  title: 'Allie and Elizbeth',
  description: 'Allie and Elizabeth 2024'
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
