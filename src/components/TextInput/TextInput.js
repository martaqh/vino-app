//import styles from './TextInput.module.scss';
import { useSelector } from "react-redux";
import shortid from "shortid";

const TextInput = props => {
    console.log(props.category);
    const getAllOfKind = ({ wines }) => wines.map(wine => wine[props.category]);
    const allOfKind = useSelector(state => getAllOfKind(state));
    const flattenAllOfKind = allOfKind.flat(1);
    const uniqueInstances = [...new Set(flattenAllOfKind)];
    const correctInstances = uniqueInstances.filter(instance => instance !== undefined);
    const sortedInstances = correctInstances.sort();

    return (
        <div>
            <input type="text" list={props.category} onChange={props.onChange} />
            <datalist id={props.category}>
            {sortedInstances.map(instance =>
                <option key={shortid()} value={instance}>{instance}</option>)}
            </datalist>
        </div>
    )
};
 
export default TextInput;
