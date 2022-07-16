import { useSelector } from 'react-redux';
import FilterCard from '../../features/FilterCard/FilterCard';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import styles from './FiltersList.module.scss'

const FiltersList = () => {

    const getAllCategories = ({ wines }) => wines.map(wine => Object.keys(wine));
    const allCategories = useSelector(state => getAllCategories(state));
    const categories = [...new Set(allCategories.flat(1))];
    const correctCategories = categories.filter(category => category !== 'name' && category !== 'id');

    return (
        <div className={styles.filtersList}>
            <h2>Search your wines by:</h2>
            <ul>
              {correctCategories.map(category =>
              <FilterCard key={shortid()} category={category}>{category}</ FilterCard>)}
            </ul>
            <Link to="/search-results">Search</Link>
        </div>  
    )
}

export default FiltersList;