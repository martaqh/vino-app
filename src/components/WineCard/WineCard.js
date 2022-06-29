import styles from './WineCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint } from '@fortawesome/free-solid-svg-icons';
import { ImageUploader } from '../ImageUploader/ImageUploader';
import ButtonRemoveWine from '../ButtonRemoveWine/ButtonRemoveWine';


const WineCard = props => {

    return (
        <div className={styles.wineCard}>
            <h4>{props.name}</h4>
            <section>
                <FontAwesomeIcon icon={faTint} />
                <p>{props.color}</p>
            </section>
            <section>
                <FontAwesomeIcon icon={faLeaf} />
                <p>{props.grapes}</p>
            </section>
            
            <section className={styles.wineCard__country}>
                <FontAwesomeIcon icon={faGlobe} />
                <p>{props.country}</p>
            </section>

            <section>
                <FontAwesomeIcon icon={faShoppingBasket} />
                <p>{props.shop}</p>
            </section>
            
            <ImageUploader />
            <ButtonRemoveWine wineId={props.id} />
            
        </div>
    )
}

export default WineCard;