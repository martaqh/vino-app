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
    const [nazwa, setNazwa] = useState('');
    const [kolor, setKolor] = useState('');
    const [szczep, setSzczep] = useState('');
    const [kraj, setKraj] = useState('');
    const [sklep, setSklep] = useState('');
    
    //const [counter, setCounter] = useState(0);
  /*  const addInput = e => {
        e.preventDefault();
        setCounter(counter + 1);
        console.log('I was clicked')
        console.log(counter)
    } */

    const navigate = useNavigate();

    const capitalize = str => {
       /* const words = str.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        
        return words.join(" "); */
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const handleSubmit = e => {
    
        addWineToServer(capitalize(nazwa),
                        capitalize(kolor),
                        capitalize(szczep),
                        capitalize(kraj),
                        capitalize(sklep)
                        );
        dispatch(addWine({ nazwa, kolor, szczep, kraj, sklep }));
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
                    value={nazwa}
                    onChange={e => setNazwa(e.target.value)}
                />
            </div>
            <div className={styles.wineParam}>
                <label>Kolor:</label>
                <TextInput
                    className="textInput"
                    category="kolor"
                    value={kolor}
                    onChange={e => setKolor(e.target.value)}
                />
           </div>
           <div className={styles.wineParam}>
                <label>Szczep:</label>
                <TextInput
                    className="textInput"
                    category="szczep"
                    value={szczep}
                    onChange={e => setSzczep(e.target.value)}
                 />
           </div>
           <div className={styles.wineParam}>
                <label>Kraj:</label>
                <TextInput
                    className="textInput"
                    category="kraj"
                    value={kraj}
                    onChange={e => setKraj(e.target.value)} />

           </div>
           <div className={styles.wineParam}>
                <label>Sklep:</label>
                <TextInput
                    className="textInput"
                    category="sklep"
                    value={sklep}
                    onChange={e => setSklep(e.target.value)} />
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