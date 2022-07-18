import styles from './WineCard.module.scss';
import Accordion from '../../common/Accordion/Accordion';
import ButtonIcon from '../../common/ButtonIcon/ButtonIcon';
import { useState } from 'react';
import WineInfoDisplay from '../../views/WineInfoDisplay/WineInfoDisplay';
import WineInfoEditionForm from '../../features/WineInfoEditionForm/WineInfoEditionForm';
//import { ImageUploader } from '../../features/ImageUploader/ImageUploader';
import { useDispatch } from 'react-redux';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeWineFromServer, removeWine } from '../../../redux/winesRedux';

const WineCard = props => {

    console.log(props)

    const dispatch = useDispatch();  

    const handleDelete = e => {
        e.preventDefault();
        alert('Are you sure you wish to delete this wine?')
        console.log(props.id)
        removeWineFromServer(props.id)
        dispatch(removeWine(props.id));
    }
    
    const [isEdited, setIsEdited] = useState(false);

    if (isEdited === false)
    return (
            <Accordion {...props} className={styles.wineCard}
                       title={props.name}
                       content={
                       <div className={styles.wineCard}>
                            <WineInfoDisplay {...props} />
                            <div className={styles.buttonsSection}>
                                <ButtonIcon onClick={handleDelete} icon={faTrash} className="trash" ></ButtonIcon>
                                <ButtonIcon onClick={setIsEdited} icon={faPencil} className="edit"></ButtonIcon>
                            </div>
                            
                       </div>
                       
                    } />
        
    )
    return (
        <Accordion className={styles.wineCard}
                       title={props.name}
                       content={
                        <div>
                            <WineInfoEditionForm {...props} />
                        </div>}
                        />
    )
}

export default WineCard;