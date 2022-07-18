import styles from './ButtonIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';


const ButtonIcon = props => {
    console.log(props)
        return (
            <button className={clsx(styles.buttonIcon, styles[props.className])} onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon} />
            </button>
        )
}

export default ButtonIcon;