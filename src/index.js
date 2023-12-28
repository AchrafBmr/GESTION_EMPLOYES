import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { reducer } from './config/Reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = legacy_createStore(reducer)
root.render(<Provider store={store}><App/></Provider>);


