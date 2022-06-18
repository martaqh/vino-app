import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filtersReducer from './filtersRedux';
import initialState from './initialState';
import winesReducer from './winesRedux';
import resultsReducer from './resultsRedux';

const subreducers = {
    wines: winesReducer,
    filters: filtersReducer,
    results: resultsReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;