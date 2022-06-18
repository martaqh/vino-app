import styles from './Logo.module.scss'


const Logo = () => {
    return (
        <div className={styles.logo}>
            <a href="/">
            caber<span>.net</span>
            </a>
        </div>
    )
}

export default Logo;