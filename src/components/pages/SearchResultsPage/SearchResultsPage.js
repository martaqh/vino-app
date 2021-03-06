import WineCard from '../../features/WineCard/WineCard';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { clearFilters } from '../../../redux/filtersRedux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchWines } from '../../../redux/winesRedux';
import ButtonlikeLink from '../../common/ButtonlikeLink/ButtonlikeLink';
import Button from '../../common/Button/Button';


const SearchResultsPage = () => {

    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchWines()), [dispatch]);
    
    const getAllWinesParams = ({ wines }) => wines.map(wine => Object.values(wine));
    const allWinesParams = useSelector(state => getAllWinesParams(state));
    console.log(allWinesParams);
    const flattenWinesParams = allWinesParams.map(wine => wine.flat(1))
    console.log(flattenWinesParams);

    const getAllFilters = ({ filters }) => Object.values(filters);
    const allFilters = useSelector(state => getAllFilters(state));
    console.log(allFilters)
    const correctFilters = allFilters.filter(filter => filter !== '')
    console.log(correctFilters)
    

    const navigate = useNavigate();

    const findMatchingWines = () => {
     const matchingWines = flattenWinesParams.filter(wine => correctFilters.every(element => wine.includes(element)))
     return matchingWines;
    }   

    const allMatchingWines = findMatchingWines();
    console.log(allMatchingWines)
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
             <Button
                onClick={handleClick}
                type="reverse"
             >zmie?? kryteria wyszukiwania</Button>
             <h3>Wyniki wyszukiwania:</h3>
            
             
        {matchingWines.map(wine => <WineCard key={shortid()} {...wine} />)}

        <ButtonlikeLink
                href="/"
                type="basic"
                size="small"
            >
                 Wr???? do strony g????wnej</ButtonlikeLink>
        
        </section>  
    )
    return (
        <section>
            <h3>??adne wino z Twojej kolekcji nie spe??nia wskazanych kryteri??w</h3>
            <Button
                onClick={handleClick}
                type="simple"
             >zmie?? kryteria wyszukiwania</Button>
        </section>
        
    )
}
export default SearchResultsPage;