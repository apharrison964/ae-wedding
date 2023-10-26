import styles from '../../styles/navigation.module.scss';

const NavigationBar = () => {
    return (
        <div className={styles.navigation}>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Our Story</li>
                    <li>Travel</li>
                    <li>Wedding Party</li>
                    <li>Photos</li>
                    <li>Things to Do</li>
                    <li>Registry</li>
                    <li>RSVP</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar;