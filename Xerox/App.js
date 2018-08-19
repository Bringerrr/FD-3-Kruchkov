"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ScanerCompany from './components/ScanerCompany';

import combinedReducer from './redux/reducers';

let companyName='Velcom';

let store=createStore(
  combinedReducer
);


console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
    <ScanerCompany 
    />
  </Provider>
  , document.getElementById('container') 
);

