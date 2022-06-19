// selectors

// actions
const createActionName = actionName => `app/filters/${actionName}`;
const ADD_FILTER_PARAM = createActionName('ADD_FILTER_PARAM');
const CLEAR_FILTERS = createActionName('CLEAR_FILTERS');

// action creators
export const addFilterParam = payload => ({type: ADD_FILTER_PARAM, payload });
export const clearFilters = payload => ({type: CLEAR_FILTERS, payload });

const filtersReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_FILTER_PARAM:
        console.log(statePart, action.payload)
        return action.payload;
      case CLEAR_FILTERS:
        return []
      default:
        return statePart; 
    }
  }

export default filtersReducer;