import ButtonlikeLink from "../../common/ButtonlikeLink/ButtonlikeLink";
import styles from './Success.module.scss';

const Success = props => {
    return (
        <main className={styles.success}>
            <h3>Good job Demir!</h3>
            <p>Dodałeś kolejne wino do swojej kolekcji.</p>
            <ButtonlikeLink
                href="/"
                type="basic"
            >
                 Wróć do strony głównej</ButtonlikeLink>
        </main>
    )
}

export default Success;