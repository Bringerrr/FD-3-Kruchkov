"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MobileCompany from './components/MobileCompany';
import EnglishMainPage from './components/EnglishMainPage';
import combinedReducer from './redux/reducers';
import MobileEdit from './components/MobileEdit';

let companyName='Velcom';

let navList = require("./navigation.json")

let store=createStore(
  combinedReducer,
);

console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
    {/* <EnglishMainPage
      nav = {navList}
    /> */}
    <div className="MainContainer">
      <MobileCompany 
        name={companyName}
      />
      
      <MobileEdit/>

    </div>
  </Provider>
  , document.getElementById('container') 
);

