import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeaf, faShoppingBasket, faTint } from '@fortawesome/free-solid-svg-icons';
//import { ImageUploader } from '../ImageUploader/ImageUploader';
import ButtonRemoveWine from '../ButtonRemoveWine/ButtonRemoveWine';
import styles from './WineInfoDisplay.module.scss';
import React from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import ScriptTag from 'react-script-tag/lib/ScriptTag';



const WineInfoDisplay = props => {
  // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'demo'
      }
    });

  // cld.image returns a CloudinaryImage with the configuration set.
    const myImage = cld.image('sample');

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  
  <ScriptTag src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />  

  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'caber-net', 
    uploadPreset: 'wine-img'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
    console.log(props);
    return (
        <div className={styles.wineCard} >
                       <section>
                           <FontAwesomeIcon icon={faTint} />
                           <p>{props.color}</p>
                       </section>
                       <section>
                           <FontAwesomeIcon icon={faLeaf} />
                           <p>{props.grapes}</p>
                       </section>
                       
                       <section>
                           <FontAwesomeIcon icon={faGlobe} />
                           <p>{props.country}</p>
                       </section>
           
                       <section>
                           <FontAwesomeIcon icon={faShoppingBasket} />
                           <p>{props.shop}</p>
                       </section>
                       
                       <AdvancedImage cldImg={myImage} />
                       <button id="upload_widget" class="cloudinary-button"
                       onClick={() => myWidget.open()}>Upload files</button>
                       <ButtonRemoveWine wineId={props.id} />
                       <button onClick={props.toggleEdit}>Edit</button>
                       
                       
                   </div>
    )
}

export default WineInfoDisplay;

