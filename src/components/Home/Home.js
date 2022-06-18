import ButtonAddWine from '../ButtonAddWine/ButtonAddWine';
import ButtonShowWineList from '../ButtonShowWineList/ButtonShowWineList';
import FiltersList from '../FiltersList/FiltersList';

const Home = () => {
    return (
        <main>
            <ButtonAddWine />
            <ButtonShowWineList />
            <FiltersList />
        </main>    
    )
}

export default Home;