import styles from './ButtonShowWineList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ButtonShowWineList = () => {
    return (
        <div className={styles.buttonAddWine}>
            <a href="/wine-list" >Show my wine collection
            <span><FontAwesomeIcon icon={faChevronRight} /> </span>
            </a>
            
        </div>
    )
}

export default ButtonShowWineList;