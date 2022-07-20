import styles from './TextInput.module.scss';
import { useSelector } from "react-redux";
import shortid from "shortid";

const TextInput = props => {
    console.log(props.className);
    const getAllOfKind = ({ wines }) => wines.map(wine => wine[props.category]);
    const allOfKind = useSelector(state => getAllOfKind(state));
    const flattenAllOfKind = allOfKind.flat(1);
    const uniqueInstances = [...new Set(flattenAllOfKind)];
    const correctInstances = uniqueInstances.filter(instance => instance !== undefined);
    const sortedInstances = correctInstances.sort();

    return (
        <div className={styles[props.className]}>
            <input type="text" list={props.category} value={props.value} onChange={props.onChange} />
            <datalist id={props.category}>
            {sortedInstances.map(instance =>
                <option key={shortid()} value={instance}>{instance}</option>)}
            </datalist>
        </div>
    )
};
 
export default TextInput;
