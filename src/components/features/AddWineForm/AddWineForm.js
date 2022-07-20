import ButtonlikeLink from "../../common/ButtonlikeLink/ButtonlikeLink";
import TextInput from "../../common/TextInput/TextInput";
import styles from './AddWineForm.module.scss';
import { useDispatch } from "react-redux";
import { addWine, addWineToServer } from "../../../redux/winesRedux";
import { useState } from "react";
import  { useNavigate } from "react-router-dom";


const AddWineForm = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [grapes, setGrapes] = useState('');
    const [country, setCountry] = useState('');
    const [shop, setShop] = useState('');
    
    //const [counter, setCounter] = useState(0);
  /*  const addInput = e => {
        e.preventDefault();
        setCounter(counter + 1);
        console.log('I was clicked')
        console.log(counter)
    } */

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        addWineToServer(name, color, grapes, country, shop);
        dispatch(addWine({ name, color, grapes, country, shop }));
        navigate('/success');
    }

    return (
        <form className={styles.addWineForm} onSubmit={handleSubmit} >
            <h3>Add a new wine to your collection</h3>
            <div className={styles.wineParam}>
                <label>Wine name:</label>
                <TextInput
                    className="textInput"
                    category="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className={styles.wineParam}>
                <label>Color:</label>
                <TextInput
                    className="textInput"
                    category="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
           </div>
           <div className={styles.wineParam}>
                <label>Grapes:</label>
                <TextInput
                    className="textInput"
                    category="grapes"
                    value={grapes}
                    onChange={e => setGrapes(e.target.value)}
                 />
           </div>
           <div className={styles.wineParam}>
                <label>Country:</label>
                <TextInput
                    className="textInput"
                    category="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)} />

           </div>
           <div className={styles.wineParam}>
                <label>Where to buy:</label>
                <TextInput
                    className="textInput"
                    category="shop"
                    value={shop}
                    onChange={e => setShop(e.target.value)} />
           </div>
            <ButtonlikeLink
                href="/"
                type="basic"
                size="small"
                onClick={handleSubmit}
            >Add wine</ButtonlikeLink>
        </form>
    )
}
export default AddWineForm;