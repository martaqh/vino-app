import styles from './FilterCard.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addFilterParam } from '../../redux/filtersRedux';

const FilterCard = props => {
    
    const getAllOfKind = ({wines}) => wines.map(wine => wine[props.category]);
    const allOfKind = useSelector(state => getAllOfKind(state));
    const uniqueInstances = [...new Set(allOfKind)];
    const correctInstances = uniqueInstances.filter(instance => instance !== undefined);
    const sortedInstances = correctInstances.sort();

    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        dispatch(addFilterParam(e.target.value));  
    } 

    return (
        <li className={styles.filterCard}>
            <p className={styles.filterCard__name}>{props.category}</p>
            <button className={styles.goButton}><span className='fa fa-angle-double-right'></span></button>
            <select className="form-select"
                    
                   onChange={handleChange}
                    >
                <option>{props.currentStatus}</option>
                {sortedInstances.map(instance => <option key={shortid()} value={instance} >{instance}</option> )}
            </select>
        </li>
    )
}

export default FilterCard;