import WineCard from "../../features/WineCard/WineCard";
import { useSelector } from 'react-redux';
import shortid from "shortid";

const WineList = () => {
    const wines = useSelector(state => state.wines);
    console.log(wines);

    return (
        wines.map(wine => <WineCard key={shortid()} {...wine} />)
      
    )
}

export default WineList;

