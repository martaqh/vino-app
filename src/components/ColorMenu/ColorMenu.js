import styles from './ColorMenu.module.scss';

const ColorMenu = () => {
    return (
        <div className={styles.colorMenu}>
            <label>
                <input type="checkbox" name="color-filter" value="red" /> red
            </label>
            <label>
                <input type="checkbox" name="color-filter" value="white" /> white
            </label>
            <label>
                <input type="checkbox" name="color-filter" value="rose" /> rose
            </label>
        </div>
    )
}

export default ColorMenu;