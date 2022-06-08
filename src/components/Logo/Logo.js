import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Logo.module.scss'


const Logo = () => {
    return (
        <div className={styles.logo}>
            <a href="/">
            caber<span>.net</span>
            </a>
            
            <p>your favorite wine always with you</p>
        </div>
    )
}

export default Logo;