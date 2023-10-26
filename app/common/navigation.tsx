import Link from 'next/link';
import styles from '../../styles/navigation.module.scss';

const NavigationBar = () => {
    return (
        <div className={styles.navigation}>
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/our-story">Our Story</Link></li>
                    <li><Link href="/travel">Travel</Link></li>
                    <li><Link href="/wedding-party">Wedding Party</Link></li>
                    <li><Link href="/photos">Photos</Link></li>
                    <li><Link href="/things-to-do">Things To Do</Link></li>
                    <li><Link href="/registry">Registry</Link></li>
                    <li><Link href="/rsvp">RSVP</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar;