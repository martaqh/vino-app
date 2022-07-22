import ButtonlikeLink from "../../common/ButtonlikeLink/ButtonlikeLink";
import Button from "../../common/Button/Button";
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

    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const handleSubmit = e => {
    
        addWineToServer(capitalize(name),
                        capitalize(color),
                        capitalize(grapes),
                        capitalize(country),
                        capitalize(shop)
                        );
        dispatch(addWine({ name, color, grapes, country, shop }));
        navigate('/success');
    }

    return (
        <form className={styles.addWineForm} onSubmit={handleSubmit} >
            <h3>Dodaj kolejne wino do swojej kolekcji</h3>
            <div className={styles.wineParam}>
                <label>Nazwa:</label>
                <TextInput
                    className="textInput"
                    category="nazwa"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className={styles.wineParam}>
                <label>Kolor:</label>
                <TextInput
                    className="textInput"
                    category="kolor"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
           </div>
           <div className={styles.wineParam}>
                <label>Szczep:</label>
                <TextInput
                    className="textInput"
                    category="szczep"
                    value={grapes}
                    onChange={e => setGrapes(e.target.value)}
                 />
           </div>
           <div className={styles.wineParam}>
                <label>Kraj:</label>
                <TextInput
                    className="textInput"
                    category="kraj"
                    value={country}
                    onChange={e => setCountry(e.target.value)} />

           </div>
           <div className={styles.wineParam}>
                <label>Sklep:</label>
                <TextInput
                    className="textInput"
                    category="sklep"
                    value={shop}
                    onChange={e => setShop(e.target.value)} />
           </div>
            <Button
                type="basic"
                size="small"
                onClick={handleSubmit}
            >Dodaj wino</Button>
        </form>
    )
}
export default AddWineForm;