import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from './AddWineForm.module.scss'

const AddWineForm = () => {
    return (
        <form className={styles.addWineForm} >     
            <label>Wine name:</label><TextInput />
            <label>Grape variety:</label><TextInput />
            <label>Country:</label><TextInput />
            <label>Where to buy:</label><TextInput />
            <Button>Submit</Button>
        </form> 
    )

}
export default AddWineForm;