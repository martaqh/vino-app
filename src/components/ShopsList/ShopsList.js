import ShopCard from "../ShopCard/ShopCard";
import styles from './ShopsList.module.scss';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const ShopsList = () => {
    const getAllShops = ({ wines }) => wines.map(wine => wine.shop);
    const allShops = useSelector(state => getAllShops(state));
    const shops = [...new Set(allShops)];

    return (
        <section>
        <h2>Gdzie jesteś?</h2>
        <ul className={styles.shopsList}>
          {shops.map(shop => <ShopCard key={shortid()} >{shop}</ ShopCard>)}
        </ul>


        </section>
        
    )
}
export default ShopsList;