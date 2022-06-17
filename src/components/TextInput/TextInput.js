//import styles from './TextInput.module.scss';
import { useSelector } from "react-redux";
import shortid from "shortid";

const TextInput = props => {
    console.log(props.category);
    const getAllOfKind = ({ wines }) => wines.map(wine => wine[props.category]);
    const allOfKind = useSelector(state => getAllOfKind(state));
    console.log(allOfKind);
    const uniqueInstances = [...new Set(allOfKind)];
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
