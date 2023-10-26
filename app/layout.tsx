import styles from '../styles/common.module.scss';
import '../styles/global.scss'
import Footer from './common/footer';
import NavigationBar from './common/navigation';



export const metadata = {
  title: 'Allie and Elizbeth',
  description: 'Allie and Elizabeth 2024',
}

const test = {

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${styles.banner}`}></div>
          <div className={styles.container}>
            <main className={styles['main-grid']}>
              <h1 className={styles.title}>Allie and Elizabeth</h1>
              <p className={styles.description}>November 23, 2024</p>
              <NavigationBar />
              {children}
            </main>
          </div>
        <Footer />
      </body>
    </html>
  )
}
