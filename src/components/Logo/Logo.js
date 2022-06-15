import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';

import styles from './Logo.module.scss'


const Logo = () => {
    return (
        <div className={styles.logo}>
            
            <a href="/">
            caber<span>.net</span>
            </a>
            <FontAwesomeIcon icon={faWineBottle} />
        </div>
    )
}

export default Logo;