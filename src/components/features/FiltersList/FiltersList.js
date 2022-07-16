import { useSelector } from 'react-redux';
import FilterCard from '../FilterCard/FilterCard';
import shortid from 'shortid';
import styles from './FiltersList.module.scss'
import ButtonlikeLink from '../../common/ButtonlikeLink/ButtonlikeLink';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <ButtonlikeLink
                href="/search-results"
                icon={faSearch}
                type="basic"
                size="small"
            >Search</ButtonlikeLink>
        </div>  
    )
}

export default FiltersList;