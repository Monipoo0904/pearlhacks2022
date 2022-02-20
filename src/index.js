import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}  from 'react-router-dom';
// import Auth0ProviderWithHistory from './auth0-provider-with-history';
import { Auth0Provider } from '@auth0/auth0-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// const domain = process.env.REACT_APP_AUTH0_DOOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
<BrowserRouter>
  <Auth0Provider
   domain="dev-hlbnx87q.us.auth0.com"
   clientId="2WG6Q8ahWL8jspLDiddWyCtYLDRWlzCu"
   redirectUri={window.location.origin}>

    <App />
  </Auth0Provider>
 </BrowserRouter>,
   
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

