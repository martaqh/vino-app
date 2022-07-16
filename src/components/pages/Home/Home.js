
import ButtonlikeLink from '../../common/ButtonlikeLink/ButtonlikeLink';
import FiltersList from '../../views/FiltersList/FiltersList';
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
                Add new wine
            </ ButtonlikeLink>
            <ButtonlikeLink
                href="/wine-list"
                icon={faChevronRight}
                type="reverse"
            >
                Show my wine collection
            </ ButtonlikeLink>
            <FiltersList />
        </main>    
    )
}

export default Home;