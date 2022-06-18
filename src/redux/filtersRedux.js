// selectors

// actions
const createActionName = actionName => `app/filters/${actionName}`;
const ADD_FILTER_PARAM = createActionName('ADD_FILTER_PARAM')

// action creators
export const addFilterParam = payload => ({type: ADD_FILTER_PARAM, payload });

const filtersReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_FILTER_PARAM:
        console.log(statePart, action)
        return [...statePart, action.payload];
      default:
        return statePart; 
    }
  }

export default filtersReducer;