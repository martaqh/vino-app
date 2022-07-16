import Button from "../../common/Button/Button";
import TextInput from "../../common/TextInput/TextInput";
import styles from './AddWineForm.module.scss';
import { useDispatch } from "react-redux";
import { addWine, addWineToServer } from "../../../redux/winesRedux";
import { useState } from "react";

import { ImageUploader } from "../ImageUploader/ImageUploader";


const AddWineForm = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [grapes, setGrapes] = useState([]);
    const [country, setCountry] = useState('');
    const [shop, setShop] = useState('');

    console.log(grapes);

    const handleSubmit = e => {
        e.preventDefault();
        addWineToServer(name, color, grapes, country, shop);
        dispatch(addWine({ name, color, grapes, country, shop }));  
    }

    return (
        <form className={styles.addWineForm} onSubmit={handleSubmit} >  
            <label>Wine name:</label><TextInput category="name" value={name} onChange={e => setName(e.target.value)} />
            <label>Color:</label><TextInput category="color" value={color} onChange={e => setColor(e.target.value)} />
            <label>Grapes:</label><TextInput category="grapes" value={grapes} onChange={e => setGrapes(e.target.value)} />
            <label>Country:</label><TextInput category="country" value={country} onChange={e => setCountry(e.target.value)} />
            <label>Where to buy:</label><TextInput category="shop" value={shop} onChange={e => setShop(e.target.value)} />
            <label>Add picture of the label:</label><ImageUploader />
            <Button onClick={handleSubmit}>Add wine</Button>
        </form> 
    )

}
export default AddWineForm;