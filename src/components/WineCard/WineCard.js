import styles from './WineCard.module.scss';
import Accordion from '../Accordion/Accordion';
import { useState } from 'react';
import WineInfoDisplay from '../WineInfoDisplay/WineInfoDisplay';

const WineCard = props => {
    const [isEdited, setIsEdited] = useState(false);
    if (isEdited === false)
    return (
            <Accordion {...props} className={styles.wineCard}
                       title={props.name}
                       content={<WineInfoDisplay {...props} toggleEdit={setIsEdited} />} />
        
    )
    return (
        <Accordion className={styles.wineCard}
                       title={props.name}
                       content={<div>Edit me</div>}
                        />
    )
}

export default WineCard;