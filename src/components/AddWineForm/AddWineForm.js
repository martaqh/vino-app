import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from './AddWineForm.module.scss';
import { useDispatch } from "react-redux";
import { addWine } from "../../redux/winesRedux";
import { useState } from "react";
import { updateServerData } from "../../redux/winesRedux";

const AddWineForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [grapeVariety, setGrapeVariety] = useState('');
    const [country, setCountry] = useState('');
    const [shop, setShop] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log( name, grapeVariety, country, shop);
        updateServerData(name, grapeVariety, country, shop);
        dispatch(addWine({ name, grapeVariety, country, shop }));
        
    }

    return (
        <form className={styles.addWineForm} onSubmit={handleSubmit} >     
            <label>Wine name:</label><TextInput value={name} onChange={e => setName(e.target.value)}/>
            <label>Grape variety:</label><TextInput value={grapeVariety} onChange={e => setGrapeVariety(e.target.value)} />
            <label>Country:</label><TextInput value={country} onChange={e => setCountry(e.target.value)} />
            <label>Where to buy:</label><TextInput value={shop} onChange={e => setShop(e.target.value)} />
            <Button onClick={handleSubmit}>Add wine</Button>
        </form> 
    )

}
export default AddWineForm;