// selectors

// actions
const createActionName = actionName => `app/wines/${actionName}`;
const UPLOAD_WINES = createActionName('UPLOAD_WINES');
const ADD_WINE = createActionName('ADD_WINE');
const REMOVE_WINE = createActionName('REMOVE_WINE');


// action creators
export const uploadWines = payload => ({type: UPLOAD_WINES, payload });
export const addWine = payload => ({type: ADD_WINE, payload });
export const removeWine = payload => ({type: REMOVE_WINE, payload });


export const fetchWines = () => {
    return (dispatch) => {
      fetch('http://localhost:3131/api/wines')
      .then(res => res.json())
      .then(wines => dispatch(uploadWines(wines)));
    }
  };

  export const updateServerData = (name, color, grapes, country, shop) => {
    const newWine = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          color: color,
          grapes: [grapes],
          country: country,
          shop: shop
        }),
      };
      
      fetch('http://localhost:3131/api/wines', newWine)
  }

  export const removeWineFromServer = (wineId) => {

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
      }),
    };
    
    fetch('http://localhost:3131/wines/' + wineId, options)
  }



const winesReducer = (statePart = [], action) => {
    switch (action.type) {
      case UPLOAD_WINES:
        return [...action.payload]
      case ADD_WINE:
        console.log(statePart, action)
        return {wines: [...statePart, {...action.payload}]}
      case REMOVE_WINE:
        return statePart.filter(wine => wine.id !== action.payload)
      default:
        return statePart;
    };
  };

  
  export default winesReducer;