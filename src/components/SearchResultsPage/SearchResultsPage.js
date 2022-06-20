import WineCard from '../WineCard/WineCard';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { clearFilters } from '../../redux/filtersRedux';
import { useNavigate } from 'react-router-dom';


const SearchResultsPage = () => {

    const getAllWinesParams = ({ wines }) => wines.map(wine => Object.values(wine));
    const allWinesParams = useSelector(state => getAllWinesParams(state));
    console.log(allWinesParams)

    const getAllFilters = ({ filters }) => Object.values(filters);
    const allFilters = useSelector(state => getAllFilters(state));
    const correctFilters = allFilters.filter(filter => filter !== '')
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const findMatchingWines = () => {
     const matchingWines = allWinesParams.filter(wine => correctFilters.every(element => wine.includes(element)))
      return matchingWines;
    }

    const allMatchingWines = findMatchingWines();
    const matchingWinesIds = allMatchingWines.map(wine => wine[wine.length - 1]);
   
    
    const getAllWines = ({ wines }) => wines;
    const allWines = useSelector(state => getAllWines(state));
    console.log(allWines)

    
    let matchingWines = [];    

    for (let wineId of matchingWinesIds) {
        console.log(wineId)
        allWines.filter(wine => wine.id === wineId ? matchingWines.push(wine) : null)
    }

    console.log(matchingWines);
    

    const handleClick = e => {
        e.preventDefault();
        dispatch(clearFilters());
        navigate('/');
    }
    
    if (matchingWines.length > 0)
    return (
        <section>
             <h3>Search results:</h3>
             <button onClick={handleClick}>(new search)</button>
        {matchingWines.map(wine => <WineCard key={shortid()} {...wine} />)}
        
        </section>  
    )
    return (
        <section>
            <h3>Sorry, no matching wines found in your collection</h3>
            <button onClick={handleClick}>(new search)</button>
        </section>
        
    )
}
export default SearchResultsPage;