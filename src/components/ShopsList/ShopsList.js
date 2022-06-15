import FilterCard from '../FilterCard/FilterCard';
import styles from './ShopsList.module.scss';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const ShopsList = () => {
    const getAllShops = ({ wines }) => wines.map(wine => wine.shop);
    const allShops = useSelector(state => getAllShops(state));
    const shops = [...new Set(allShops)];
    console.log(shops);

    return (
        <section>
        <h2>Gdzie jesteś?</h2>
        <ul className={styles.shopsList}>
          {shops.map(shop => <FilterCard key={shortid()} >{shop}</ FilterCard>)}
        </ul>


        </section>
        
    )
}
export default ShopsList;