import ButtonAddWine from '../ButtonAddWine/ButtonAddWine';
import ButtonShowWineList from '../ButtonShowWineList/ButtonShowWineList';
import FiltersList from '../FiltersList/FiltersList';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';

const Home = () => {
    return (
        <main>
            <ButtonAddWine />
            <ButtonShowWineList />
            <FiltersList />
            <SearchResultsPage />
        </main>    
    )
}

export default Home;