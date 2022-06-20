import { useSelector } from 'react-redux';
import FilterCard from '../FilterCard/FilterCard';
import shortid from 'shortid';

import { useNavigate } from 'react-router-dom';
//import { addFilterParam } from '../../redux/filtersRedux';

const FiltersList = () => {

    const getAllCategories = ({ wines }) => wines.map(wine => Object.keys(wine));
    const allCategories = useSelector(state => getAllCategories(state));
    const categories = [...new Set(allCategories.flat(1))];
    const correctCategories = categories.filter(category => category !== 'name' && category !== 'id');

    const navigate = useNavigate();
    const handleSubmit = e => {
      e.preventDefault();
      navigate('/search-results');
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Search your wines by:</h2>
        <ul>
          {correctCategories.map(category => <FilterCard key={shortid()} category={category} >{category}</ FilterCard>)}
        </ul>

        <button>Search</button>
        </form> 
    )
}

export default FiltersList;