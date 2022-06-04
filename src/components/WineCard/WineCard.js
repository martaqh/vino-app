import styles from './WineCard.module.scss';

const WineCard = props => {

    return (
        <section className={styles.wineCard}>
            <h4>{props.name}</h4>
            <p>{props.grapeVariety}</p>
            <p>{props.country}</p>
            <p>{props.shop}</p>
        </section>
    )
}

export default WineCard;