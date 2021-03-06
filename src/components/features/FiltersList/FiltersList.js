import { useSelector } from 'react-redux';
import FilterCard from '../FilterCard/FilterCard';
import shortid from 'shortid';
import styles from './FiltersList.module.scss'
import Button from '../../common/Button/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'

const FiltersList = () => {

    const getAllCategories = ({ wines }) => wines.map(wine => Object.keys(wine));
    
    const allCategories = useSelector(state => getAllCategories(state));
    const categories = [...new Set(allCategories.flat(1))];
    const correctCategories = categories.filter(category => category !== 'nazwa' && category !== 'id' && category !== 'wineId');

    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        navigate('/search-results')

    }
    
    return (
        <div className={styles.filtersList}>
            <h2>Szukaj win spełniających kryteria:</h2>
            <ul>
              {correctCategories.map(category =>
              <FilterCard key={shortid()} category={category}>{category}</ FilterCard>)}
            </ul>
            <Button
                icon={faSearch}
                type="basic"
                onClick={handleClick}
            >Szukaj</Button>
        </div>  
    )
}

export default FiltersList;