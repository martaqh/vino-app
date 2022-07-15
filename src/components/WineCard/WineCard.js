import styles from './WineCard.module.scss';
import Accordion from '../Accordion/Accordion';
import { useState } from 'react';
import WineInfoDisplay from '../WineInfoDisplay/WineInfoDisplay';
//import {AdvancedImage} from '@cloudinary/react';
//import {Cloudinary} from "@cloudinary/url-gen";
import ButtonRemoveWine from '../ButtonRemoveWine/ButtonRemoveWine';
import WineInfoEditionForm from '../WineInfoEditionForm/WineInfoEditionForm';
import { ImageUploader } from '../ImageUploader/ImageUploader';
import TextInput from '../TextInput/TextInput';
import { editWine, editWineOnServer } from '../../redux/winesRedux';
import { useDispatch } from 'react-redux';

const WineCard = props => {

   /*const cld = new Cloudinary({
        cloud: {
          cloudName: 'caber-net'
        }
      }); 
  
    // cld.image returns a CloudinaryImage with the configuration set.
      const myImage = cld.image('eig6cknjfe0sdtxl3krp'); */

   /*   var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'caber-net', 
        uploadPreset: 'wine-img'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
          }
        }
      ) */
    


    const [isEdited, setIsEdited] = useState(false);
    if (isEdited === false)
    return (
            <Accordion {...props} className={styles.wineCard}
                       title={props.name}
                       content={
                       <div className={styles.wineCard}>
                            <WineInfoDisplay {...props} />
                            
                            <ImageUploader />
                            <ButtonRemoveWine />
                            <button onClick={setIsEdited}>Edit</button>
                       </div>
                       
                    } />
        
    )
    return (
        <Accordion className={styles.wineCard}
                       title={props.name}
                       content={
                        <div>
                            <WineInfoEditionForm {...props} />
                        </div>}
                        />
    )
}

export default WineCard;