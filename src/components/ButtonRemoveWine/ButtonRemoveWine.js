
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeWineFromServer, removeWine } from '../../redux/winesRedux';

const RemoveWine = props => {
    const dispatch = useDispatch();   

    const handleClick = e => {
        e.preventDefault();
        console.log(props.wineId)
        removeWineFromServer (props.wineId)
        dispatch(removeWine(props.wineId));
    }

    return (
        <button onClick={handleClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}

export default RemoveWine;