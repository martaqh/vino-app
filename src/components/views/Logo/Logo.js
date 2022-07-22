import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to="/">
            <p>wina <span>Tuska</span> Demira</p>
            </Link>
        </div>
    )
}

export default Logo;