import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint } from '@fortawesome/free-solid-svg-icons';
import TextInput from '../TextInput/TextInput';
import { useState } from "react";
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { editWine, editWineOnServer } from '../../redux/winesRedux';


const WineInfoEditionForm = props => {
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
        <div>
            <div >
                    <section>
                    <TextInput category="name" value={name} placeholder={props.name} onChange={e => setName(e.target.value)}/>
                    </section>
                       <section>
                           <FontAwesomeIcon icon={faTint} />
                           <TextInput category="color" value={color} placeholder={props.color} onChange={e => setColor(e.target.value)}/>
                       </section>
                       <section>
                           <FontAwesomeIcon icon={faLeaf} />
                           <TextInput category="grapes" value={grapes} placeholder={props.grapes} onChange={e => setGrapes(e.target.value)}/>
                       </section>
                       
                       <section>
                           <FontAwesomeIcon icon={faGlobe} />
                           <TextInput category="country" value={country} placeholder={props.country} onChange={e => setCountry(e.target.value)} />
                       </section>
           
                       <section>
                           <FontAwesomeIcon icon={faShoppingBasket} />
                           <TextInput category="shop" value={shop} placeholder={props.shop} onChange={e => setShop(e.target.value)} />
                       </section>
                       <button onClick={handleSubmit}>Save changes</button>
                       
                       
                       
                       
                   </div>
        </div>
    )
}

export default WineInfoEditionForm;