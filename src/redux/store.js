import { createStore } from 'redux';

import initialState from './initialState';

export const addWine = payload => ({ type: 'ADD_WINE', payload });

const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_WINE':
        return [...state, {...action.payload}];
    default:
    return state;
  };
};



const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;