import { useSelector, useDispatch } from 'react-redux';
import FilterCard from '../FilterCard/FilterCard';
import shortid from 'shortid';
import { addMatchingWinesIds } from '../../redux/resultsRedux';
import { useNavigate } from 'react-router-dom';
//import { addFilterParam } from '../../redux/filtersRedux';

const FiltersList = () => {

    const getAllCategories = ({ wines }) => wines.map(wine => Object.keys(wine));
    const allCategories = useSelector(state => getAllCategories(state));
    const categories = [...new Set(allCategories.flat(1))];
    const correctCategories = categories.filter(category => category !== 'name' && category !== 'id');

    const getAllWinesParams = ({ wines }) => wines.map(wine => Object.values(wine));
    const allWinesParams = useSelector(state => getAllWinesParams(state));

    const getAllFilters = ({ filters }) => Object.values(filters);
    const allFilters = useSelector(state => getAllFilters(state));
    console.log(allFilters)
    const correctFilters = allFilters.filter(filter => filter !== '')
    console.log(correctFilters)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const findMatchingWines =() => {
     const matchingWines = allWinesParams.filter(wine => correctFilters.every(element => wine.includes(element)))
      return matchingWines;
    }

    const handleSubmit = e => {
      e.preventDefault();
      console.log(allFilters)
      console.log(correctFilters)
     const matchingWines = findMatchingWines();
     const matchingWinesIds = matchingWines.map(wine => wine[wine.length - 1]);
     dispatch(addMatchingWinesIds(matchingWinesIds));
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