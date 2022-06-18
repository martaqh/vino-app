// selectors

// actions
const createActionName = actionName => `app/results/${actionName}`;
const ADD_MATCHING_WINES_IDS = createActionName('ADD_MATCHING_WINES_IDS');

// action creators
export const addMatchingWinesIds = payload => ({type: ADD_MATCHING_WINES_IDS, payload });

const resultsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_MATCHING_WINES_IDS:
        return action.payload
      default:
        return statePart; 
    }
  }

export default resultsReducer;