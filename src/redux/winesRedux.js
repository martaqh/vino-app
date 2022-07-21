import { API_URL } from "../config";

// selectors

// actions
const createActionName = actionName => `app/wines/${actionName}`;
const UPLOAD_WINES = createActionName('UPLOAD_WINES');
const ADD_WINE = createActionName('ADD_WINE');
const REMOVE_WINE = createActionName('REMOVE_WINE');
const EDIT_WINE = createActionName('EDIT_WINE');


// action creators
export const uploadWines = payload => ({type: UPLOAD_WINES, payload });
export const addWine = payload => ({type: ADD_WINE, payload });
export const removeWine = payload => ({type: REMOVE_WINE, payload });
export const editWine = payload => ({type: EDIT_WINE, payload });


export const fetchWines = () => {
    return (dispatch) => {
      fetch(API_URL + '/wines')
      .then(res => res.json())
      .then(wines => dispatch(uploadWines(wines)));
    }
  };

  export const addWineToServer = (name, color, grapes, country, shop) => {    
    const newWine = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nazwa: name,
          kolor: color,
          szczep: grapes,
          kraj: country,
          sklep: shop
        }),
      };
      
      fetch(API_URL + '/wines', newWine)
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
    
    fetch(API_URL + '/wines/' + wineId, options)
  }

  export const editWineOnServer = (name, color, grapes, country, shop, wineId) => {
    const editedWine = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nazwa: name,
          kolor: color,
          szczep: grapes,
          kraj: country,
          sklep: shop
        }),
      };
      
      fetch(API_URL + '/wines/' + wineId, editedWine)
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
      case EDIT_WINE:
        return statePart.map(wine => wine.id === action.payload.wineId ? action.payload : wine )
      default:
        return statePart;
    };
  };

  
  export default winesReducer;