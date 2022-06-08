import styles from './WineCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLeaf, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const WineCard = props => {

    return (
        <div className={styles.wineCard}>
            <h4>{props.name}</h4>
            <section>
                <FontAwesomeIcon icon={faLeaf} />
                <p>{props.grapeVariety}</p>
            </section>
            
            <section className={styles.wineCard__country}>
                <FontAwesomeIcon icon={faGlobe} />
                <p>{props.country}</p>
            </section>

            <section>
                <FontAwesomeIcon icon={faShoppingBasket} />
                <p>{props.shop}</p>
            </section>
            
            
        </div>
    )
}

export default WineCard;