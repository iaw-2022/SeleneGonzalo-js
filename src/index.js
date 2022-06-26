import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain='dev-c0-abgh2.us.auth0.com'
      clientId='kYM5vftNjnsVR9u9v6VLj3CkWhBmeiQg'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
      audience='https://localhost:3000'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
