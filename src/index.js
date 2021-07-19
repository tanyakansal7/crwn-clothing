import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
     </BrowserRouter>

  </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

