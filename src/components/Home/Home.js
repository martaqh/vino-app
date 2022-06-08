import ButtonAddWine from '../ButtonAddWine/ButtonAddWine';
import ButtonShowWineList from '../ButtonShowWineList/ButtonShowWineList';
import FilterSingleChoice from '../FilterSingleChoice/FilterSingleChoice';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <main>
            <ButtonAddWine />
            <ButtonShowWineList />
            
                <FilterSingleChoice value={"shop"} />
                <FilterSingleChoice value={"country"} />
                <FilterSingleChoice value={"grapeVariety"} />
          
        </main>    
    )
}

export default Home;