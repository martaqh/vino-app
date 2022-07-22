import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import TextInput from '../../common/TextInput/TextInput';
import { useState } from "react";
import Button from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editWine, editWineOnServer } from '../../../redux/winesRedux';
import styles from './WineInfoEditionForm.module.scss';



const WineInfoEditionForm = props => {
    const getEditedWine = ({ wines }) => wines.find(wine => wine.id === props.id);
    const editedWine = useSelector(state => getEditedWine(state));
    console.log('editedwine', editedWine)

    const dispatch = useDispatch();
    const [name, setName] = useState(props.name)
    const [color, setColor] = useState(props.color);
    const [grapes, setGrapes] = useState(props.grapes);
    const [country, setCountry] = useState(props.country);
    const [shop, setShop] = useState(props.shop);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('clicked')
        const wineId = props.id;
        editWineOnServer(name, color, grapes, country, shop, wineId);
        dispatch(editWine({ name, color, grapes, country, shop, wineId }));  
    }

    return (
        <div className={styles.editionForm}>
            <h5>Wprowadź zmiany:</h5>
                <section>
                    <span></span>
                    <TextInput
                        className="textInput"
                        category="nazwa"
                        value={name}
                        placeholder={editedWine.nazwa}
                        onChange={e => setName(e.target.value)}/>
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faTint} /></span>
                    <TextInput
                        className="textInput"
                        category="kolor"
                        value={color}
                        placeholder={editedWine.kolor}
                        onChange={e => setColor(e.target.value)}/>
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faLeaf} /></span>
                    <TextInput
                        className="textInput"
                        category="szczep"
                        value={grapes}
                        placeholder={editedWine.szczep}
                        onChange={e => setGrapes(e.target.value)}/>
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <TextInput
                        className="textInput"
                        category="kraj"
                        value={country}
                        placeholder={editedWine.kraj}
                        onChange={e => setCountry(e.target.value)} />
                </section>
                <section>
                    <span><FontAwesomeIcon icon={faShoppingBasket} /></span>
                    <TextInput
                        className="textInput"
                        category="sklep"
                        value={shop}
                        placeholder={editedWine.sklep}
                        onChange={e => setShop(e.target.value)} />
                </section>
                    <Button onClick={handleSubmit}>Zapisz zmiany</Button>     
        </div>
    )
}

export default WineInfoEditionForm;