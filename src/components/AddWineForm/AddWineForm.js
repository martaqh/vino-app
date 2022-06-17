import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from './AddWineForm.module.scss';
import { useDispatch } from "react-redux";
import { addWine } from "../../redux/winesRedux";
import { useState } from "react";
import { updateServerData } from "../../redux/winesRedux";
//import { useSelector } from "react-redux/es/exports";

const AddWineForm = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [grapes, setGrapes] = useState('');
    const [country, setCountry] = useState('');
    const [shop, setShop] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        console.log( name, grapes, country, shop);
        updateServerData(name, grapes, country, shop);
        dispatch(addWine({ name, grapes, country, shop }));
        
    }

    return (
        <form className={styles.addWineForm} onSubmit={handleSubmit} >     
            <label>Wine name:</label><input value={name} onChange={e => setName(e.target.value)}/>
            <label>Grapes:</label><TextInput category="grapes" value={grapes} onChange={e => setGrapes(e.target.value)} />
            <label>Country:</label><TextInput category="country" value={country} onChange={e => setCountry(e.target.value)} />
            <label>Where to buy:</label><TextInput category="shop" value={shop} onChange={e => setShop(e.target.value)} />
            <Button onClick={handleSubmit}>Add wine</Button>
        </form> 
    )

}
export default AddWineForm;