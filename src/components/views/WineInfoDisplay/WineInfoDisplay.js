import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint } from '@fortawesome/free-solid-svg-icons';
import styles from './WineInfoDisplay.module.scss';

const WineInfoDisplay = props => {
 
    console.log(props);
    return (
        <div className={styles.wineCard} >
            <ul>
                <li>
                    <section>
                        <FontAwesomeIcon icon={faTint} />
                        <p>{props.kolor}</p>
                    </section>
                    <section>
                        <FontAwesomeIcon icon={faLeaf} />
                        <p>{props.szczep}</p>
                    </section>
                </li>
                <li>
                    <section>
                        <FontAwesomeIcon icon={faGlobe} />
                        <p>{props.kraj}</p>
                    </section>
        
                    <section>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <p>{props.sklep}</p>
                    </section> 
                </li>
            </ul>                                      
        </div>
    )
}

export default WineInfoDisplay;

