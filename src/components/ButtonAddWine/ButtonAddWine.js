import styles from './ButtonAddWine.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const ButtonAddWine = () => {
    return (
        <div className={styles.buttonAddWine}>
            <a href="/add-wine-form" >Add new wine
            <span><FontAwesomeIcon icon={faPlus} /> </span>
            </a>  
        </div>
        
    )
}

export default ButtonAddWine;