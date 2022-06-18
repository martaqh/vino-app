import WineCard from '../WineCard/WineCard';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { clearFilters } from '../../redux/filtersRedux';
import { useNavigate } from 'react-router-dom';


const SearchResultsPage = () => {
    const getAllWines = ({ wines }) => wines;
    const allWines = useSelector(state => getAllWines(state));
    console.log(allWines)
    const getMatchingWinesIds = ({ results }) => results;
    const matchingWinesIds = useSelector(state => getMatchingWinesIds(state));
    console.log(matchingWinesIds)
    
    let matchingWines = [];    

    for (let wineId of matchingWinesIds) {
        console.log(wineId)
        allWines.filter(wine => wineId === wine.id ? matchingWines.push(wine) : null)
        console.log(matchingWines)
    }

    console.log(matchingWines);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            <h3>Sorry, no matching wines in your collection</h3>
            <button onClick={handleClick}>(new search)</button>
        </section>
        
    )
}
export default SearchResultsPage;