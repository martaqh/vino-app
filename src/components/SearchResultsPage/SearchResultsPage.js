import WineCard from '../WineCard/WineCard';
import { useSelector } from 'react-redux';
import shortid from 'shortid';


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
    

    return (
        <section>
             <h3>Search results:</h3>
        {matchingWines.map(wine => <WineCard key={shortid()} {...wine} />)}
        
        </section>
       
    )
}
export default SearchResultsPage;