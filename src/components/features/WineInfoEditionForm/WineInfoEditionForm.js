import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import TextInput from '../../common/TextInput/TextInput';
import { useState } from "react";
import Button from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editWine, editWineOnServer } from '../../../redux/winesRedux';
import styles from './WineInfoEditionForm.module.scss';



const WineInfoEditionForm = props => {
    console.log(props)
    const getEditedWine = ({ wines }) => wines.find(wine => wine.id === props.id);
    const editedWine = useSelector(state => getEditedWine(state));
    console.log('editedwine', editedWine)

    const dispatch = useDispatch();
    const [nazwa, setNazwa] = useState(props.nazwa)
    const [kolor, setKolor] = useState(props.kolor);
    const [szczep, setSzczep] = useState(props.szczep);
    const [kraj, setKraj] = useState(props.kraj);
    const [sklep, setSklep] = useState(props.sklep);

    const handleSubmit = e => {
        e.preventDefault();
        
        const wineId = props.id;
        console.log(wineId)
        editWineOnServer(nazwa, kolor, szczep, kraj, sklep, wineId);
        dispatch(editWine({nazwa, kolor, szczep, kraj, sklep, wineId}));  
    }

    return (
        <form className={styles.editionForm}>
            <h5>Wprowadź zmiany:</h5>
                <section>
                    <span></span>
                    <TextInput
                        className="textInput"
                        category="nazwa"
                        value={nazwa}
                        placeholder={editedWine.nazwa}
                        onChange={e => setNazwa(e.target.value)}/>
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faTint} /></span>
                    <TextInput
                        className="textInput"
                        category="kolor"
                        value={kolor}
                        placeholder={editedWine.kolor}
                        onChange={e => setKolor(e.target.value)}/>
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faLeaf} /></span>
                    <TextInput
                        className="textInput"
                        category="szczep"
                        value={szczep}
                        placeholder={editedWine.szczep}
                        onChange={e => setSzczep(e.target.value)}/>
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <TextInput
                        className="textInput"
                        category="kraj"
                        value={kraj}
                        placeholder={editedWine.kraj}
                        onChange={e => setKraj(e.target.value)} />
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faShoppingBasket} /></span>
                    <TextInput
                        className="textInput"
                        category="sklep"
                        value={sklep}
                        placeholder={editedWine.sklep}
                        onChange={e => setSklep(e.target.value)} />
                </section>
                    <Button onClick={handleSubmit}>Zapisz zmiany</Button>     
        </form>
    )
}

export default WineInfoEditionForm;