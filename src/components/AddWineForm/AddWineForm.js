import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from './AddWineForm.module.scss';
import { useDispatch } from "react-redux";
import { addWine } from "../../redux/store";
import { useState } from "react";

const AddWineForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [grapeVariety, setGrapeVariety] = useState('');
    const [country, setCountry] = useState('');
    const [shop, setShop] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addWine({ name, grapeVariety, country, shop }));
        setName('');
        setGrapeVariety('');
        setCountry('');
        setShop('');
    }

    return (
        <form className={styles.addWineForm} onSubmit={handleSubmit} >     
            <label>Wine name:</label><TextInput value={name} onChange={e => setName(e.target.value)}/>
            <label>Grape variety:</label><TextInput value={grapeVariety} onChange={e => setGrapeVariety(e.target.value)} />
            <label>Country:</label><TextInput value={country} onChange={e => setCountry(e.target.value)} />
            <label>Where to buy:</label><TextInput value={shop} onChange={e => setShop(e.target.value)} />
            <Button onClick={handleSubmit}>Submit</Button>
        </form> 
    )

}
export default AddWineForm;