import styles from './ButtonlikeLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const ButtonlikeLink = props => {
    return (
        <div className={clsx(styles.buttonlikeLink, styles[props.type], styles[props.size])}>
            <Link to={props.href}>
                <p>{props.children}</p>
                {props.icon ?
                <span><FontAwesomeIcon icon={props.icon} /></span> : null
                }
            </Link>
        
        </div>
        
    )
}

export default ButtonlikeLink;