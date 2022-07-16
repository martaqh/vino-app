import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint } from '@fortawesome/free-solid-svg-icons';
import styles from './WineInfoDisplay.module.scss';

const WineInfoDisplay = props => {
 
    console.log(props);
    return (
        <div className={styles.wineCard} >
                       <section>
                           <FontAwesomeIcon icon={faTint} />
                           <p>{props.color}</p>
                       </section>
                       <section>
                           <FontAwesomeIcon icon={faLeaf} />
                           <p>{props.grapes}</p>
                       </section>
                       
                       <section>
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

export default WineInfoDisplay;

