import styles from './ShopCard.module.scss';

const ShopCard = props => {
    return (
        <li className={styles.filterCard}>
            <p className={styles.filterCard__name}>{props.children}</p>
            <button className={styles.goButton}><span className='fa fa-angle-double-right'></span></button>
        </li>
    )
}

export default ShopCard;