import styles from './WineCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint } from '@fortawesome/free-solid-svg-icons';
import { ImageUploader } from '../ImageUploader/ImageUploader';
import ButtonRemoveWine from '../ButtonRemoveWine/ButtonRemoveWine';
import Accordion from '../Accordion/Accordion';


const WineCard = props => {

    return (
            <Accordion title={props.name}
                       content={ <div className={styles.wineCard}>
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

                       } />
        
    )
}

export default WineCard;