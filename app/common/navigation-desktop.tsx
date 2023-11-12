"use client"

import Link from 'next/link';
import styles from '../../styles/navigation.module.scss';
import { usePathname } from 'next/navigation';
import { routes } from '../content/routes';

const NavigationDesktop = () => {
    const pathname = usePathname();
    
    return (
        <div className={styles.navigation}>
            <div>
                <ul>
                    {routes.map((route) => (
                        <li key={route.key}>
                            <Link href={route.href}>
                                <p className={pathname === route.href ? styles.active : styles.inactive}>{ route.title }</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavigationDesktop;