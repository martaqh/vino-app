import styles from './Button.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = props => {
    return (
        <div className={clsx(styles.button, styles[props.type], styles[props.size])} >
            <button onClick={props.onClick}>
                <p>{props.children}</p>
                {props.icon ?
                <span><FontAwesomeIcon icon={props.icon} /></span> : null
                }
            </button>
        </div>
    );
};

export default Button;