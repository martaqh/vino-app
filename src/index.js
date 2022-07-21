import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
      <Provider store={store}>
      <BrowserRouter>
      
        <App />

        </BrowserRouter>
        
      </Provider>

     
    
    
  </React.StrictMode>
);



