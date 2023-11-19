"use client"

import styles from '../styles/common.module.scss';
import NavigationDesktop from './common/navigation-desktop';
import { Grid, Image, View } from '@aws-amplify/ui-react';
import { ReactNode } from 'react';
import './global.scss'
import NavigationMobile from './common/navigation-mobile';

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <View className={styles.navMobile} display={{small: 'grid', large: 'none'}}>
            <View className={styles.navMobileIcon}>
                <NavigationMobile></NavigationMobile>
            </View>
            <div className={styles.navMobileTitle}>
                A & E
            </div>
        </View>
        <div id='portal'></div>
        <Image className={`${styles.banner}`} src="lvtop.svg" alt="Lavender Banner Top"/>
        <main className={styles.main}>
          <Grid templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
              <View columnStart={1} columnEnd={-1} row={1} className={styles.justifyCenter}>
                <View as="h1" fontSize={{ xl: '3rem', large: '3rem', small: '3rem', medium: '3rem', base: '1.25rem'}} className={styles.title}>ALLIE & ELIZABETH</View>
              </View>
              <View columnStart={1} columnEnd={-1} row={2}>
                <View fontSize={{ large: '1.5rem', small: '1.5rem', medium: '1.5rem', base: '1rem'}}  className={styles.description}>
                  <View as="p" paddingRight={{base: '1rem'}} className={styles.date}>11 • 23 • 2024</View>
                  <View as="p" paddingLeft={{base: '1rem'}} className={styles.location}>CHAPEL HILL, NC </View>
                </View>
              </View>
              <View columnStart={2} columnEnd={6} row={3} display={{small: 'none', large: 'grid', base: 'none'}}>
                <NavigationDesktop />
              </View>
              <View columnStart={2} columnEnd={6} row={4} className={styles.children}>
                {children}
              </View>
          </Grid>
        </main>
        <Image className={`${styles.banner}`} src="lvbottom.svg" alt="Lavender Banner Bottom"/>
    </>
  )
}
