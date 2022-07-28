import WineCard from "../../features/WineCard/WineCard";
import { useSelector } from 'react-redux';
import shortid from "shortid";
import ButtonlikeLink from "../../common/ButtonlikeLink/ButtonlikeLink";

const WineList = () => {
    const wines = useSelector(state => state.wines);


    return (
        <main>
            {wines.map(wine => <WineCard key={shortid()} {...wine} />)}
            <ButtonlikeLink
                href="/"
                type="basic"
                size="small"
            >Wróć do strony głównej</ButtonlikeLink>
        </main>
        

      
    )
}

export default WineList;

