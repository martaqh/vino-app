import styles from './FilterCard.module.scss';
import { useSelector } from 'react-redux';

const FilterCard = props => {
    
    const getAllOfKind = ({wines}) => wines.map(wine => wine[props.category]);
    const allOfKind = useSelector(state => getAllOfKind(state));
    const uniqueInstances = [...new Set(allOfKind)];
    const correctInstances = uniqueInstances.filter(instance => instance !== undefined);
    console.log(correctInstances);

    console.log(uniqueInstances);
    return (
        <li className={styles.filterCard}>
            <p className={styles.filterCard__name}>{props.category}</p>
            <button className={styles.goButton}><span className='fa fa-angle-double-right'></span></button>
            <ul>
                {correctInstances.map(instance => <li>{instance}</li>)}
            </ul>
        </li>
    )
}

export default FilterCard;