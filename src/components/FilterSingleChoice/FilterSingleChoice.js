import styles from './FilterSingleChoice.module.scss'
import { useSelector } from "react-redux";
import shortid from 'shortid';
import Button from '../Button/Button';

const FilterSingleChoice = props => {
    const getAllOfKind = ({ wines }) => wines.map(wine => wine[props.value]);
    const allOfKind = useSelector(state => getAllOfKind(state));
    console.log(allOfKind);
    const uniqueNames = [...new Set(allOfKind)];
    
    return (
    <div className={styles.filterCard}>
        <h3>{props.value}</h3>
        {uniqueNames.map(uniqueName => <Button key={shortid()} value={uniqueName}>{uniqueName}</Button>)}
    </div> 
    )
}
export default FilterSingleChoice