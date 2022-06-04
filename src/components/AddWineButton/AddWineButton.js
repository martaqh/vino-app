import styles from './AddWineButton.module.scss';

const AddWineButton = () => {
    return (
        <div className={styles.addWineButton}>
            <a href="/" ><span className='fa fa-plus'></span>Dodaj wino</a>
        </div>
        
    )
}

export default AddWineButton;