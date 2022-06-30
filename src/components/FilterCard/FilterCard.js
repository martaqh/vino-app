import styles from './FilterCard.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addFilterParam } from '../../redux/filtersRedux';

import { useState } from 'react';

const FilterCard = props => {
    
    const getAllOfKind = ({wines}) => wines.map(wine => wine[props.category]);
    const allOfKind = useSelector(state => getAllOfKind(state));
    const flattenAllOfKind = allOfKind.flat(1);
    const uniqueInstances = [...new Set(flattenAllOfKind)];
    //const arraysInArray = uniqueInstances.filter(instance => Array.isArray(instance));
    //const valuesFromArrays = arraysInArray.flat(1);
    //const uniqueValuesFromArrays = [...new Set(valuesFromArrays)]
    //const correctValuesFromArrays = uniqueValuesFromArrays.filter(instance => instance !== undefined)
    //const sortedValuesFromArrays = correctValuesFromArrays.sort();
    const correctInstances = uniqueInstances.filter(instance => !Array.isArray(instance) && instance !== undefined);
    const sortedInstances = correctInstances.sort();
    const getFilterObject = ({ filters }) => filters;
    const filterObject = useSelector(state => getFilterObject(state))    

    const dispatch = useDispatch();
    const [optionSelected, setOptionSelected] = useState('');
        
    filterObject[props.category] = optionSelected
        console.log(filterObject)
    

    const handleChange = e => {
        e.preventDefault();
        setOptionSelected(e.target.value);
        filterObject[props.category] = e.target.value;
        dispatch(addFilterParam(filterObject))
    }


    return (
        <li className={styles.filterCard}>
            <p className={styles.filterCard__name}>{props.category}</p>
            <button className={styles.goButton}><span className='fa fa-angle-double-right'></span></button>
            <select className="form-select"
                    value= {optionSelected}
                   onChange={handleChange}
                    >
                <option>{props.currentStatus}</option>
                {
                sortedInstances.map(instance => <option key={shortid()} value={instance} >{instance}</option>)
                
            }
            </select>
        </li>
    )
}

export default FilterCard;