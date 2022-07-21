
import ButtonlikeLink from '../../common/ButtonlikeLink/ButtonlikeLink';
import FiltersList from '../../features/FiltersList/FiltersList';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <main>
            <ButtonlikeLink
                href="/add-wine-form"
                icon={faPlus}
                type="basic"
            >
                Dodaj wino
            </ ButtonlikeLink>
            <ButtonlikeLink
                href="/wine-list"
                icon={faChevronRight}
                type="reverse"
            >
                Pokaż moją kolekcję
            </ ButtonlikeLink>
            <FiltersList />
        </main>    
    )
}

export default Home;