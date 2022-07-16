import styles from './ButtonlikeLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const ButtonlikeLink = props => {
    return (
        <div className={clsx(styles.buttonlikeLink, styles[props.type], styles[props.size])}>
            <a href={props.href} onClick={props.onClick}>
                <p>{props.children}</p>
                {props.icon ?
                <span><FontAwesomeIcon icon={props.icon} /></span> : null
                }
            </a>  
        </div>
        
    )
}

export default ButtonlikeLink;