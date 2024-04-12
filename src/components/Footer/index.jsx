import styles from './Footer.module.css'
import { hour } from '../../utils/functions';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {(hour>=12 && hour<=22) ? <h4>We are open until 22,00</h4> : <h4>We are closed until 12,00</h4>}
            <h4>©Davide Baldi 12/04/2024</h4>
        </footer>
    )
};

export default Footer
