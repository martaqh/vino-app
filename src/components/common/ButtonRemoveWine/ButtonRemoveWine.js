
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeWineFromServer, removeWine } from '../../../redux/winesRedux';

const ButtonRemoveWine = props => {
    const dispatch = useDispatch();   

    const handleClick = e => {
        e.preventDefault();
        alert('Na pewno chcesz usunąć to wino ze swojej kolekcji?')
        console.log(props.wineId)
        removeWineFromServer(props.wineId)
        dispatch(removeWine(props.wineId));
    }

    return (
        <button onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default ButtonRemoveWine;