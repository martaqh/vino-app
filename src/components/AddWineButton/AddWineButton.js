import styles from './AddWineButton.module.scss';

const AddWineButton = () => {
    return (
        <div className={styles.addWineButton}>
            <a href="/" >Dodaj wino</a>
            <span className='fa fa-plus'></span>
        </div>
        
    )
}

export default AddWineButton;