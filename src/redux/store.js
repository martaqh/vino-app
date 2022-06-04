import { createStore } from 'redux';

import initialState from './initialState';


const reducer = (state, action) => {
    return state;
  };



const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;