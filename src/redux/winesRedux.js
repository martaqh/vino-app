// selectors

// actions
const createActionName = actionName => `app/wines/${actionName}`;
const UPLOAD_WINES = createActionName('UPLOAD_WINES');
const ADD_WINE = createActionName('ADD_WINE');

// action creators
export const uploadWines = payload => ({type: UPLOAD_WINES, payload });
export const addWine = payload => ({type: ADD_WINE, payload });

export const fetchWines = () => {
    return (dispatch) => {
      fetch('http://localhost:3131/api/wines')
      .then(res => res.json())
      .then(wines => dispatch(uploadWines(wines)));
    }
  };

  export const updateServerData = (name, grapes, country, shop) => {
    const newWine = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          grapes: grapes,
          country: country,
          shop: shop
        }),
      };
      
      fetch('http://localhost:3131/api/wines', newWine)
  }

const winesReducer = (statePart = [], action) => {
    switch (action.type) {
      case UPLOAD_WINES:
        return [...action.payload]
      case ADD_WINE:
        console.log(statePart, action)
        return {wines: [...statePart, {...action.payload}]};
      default:
        return statePart;
    };
  };
  export default winesReducer;