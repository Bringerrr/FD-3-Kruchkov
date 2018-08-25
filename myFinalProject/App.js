"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import EnglishCitationContainer from './components/EnglishCitationContainer';
import EnglishMainPage from './components/EnglishMainPage';
import combinedReducer from './redux/reducers';

import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

let store=createStore(
  combinedReducer,
);


console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
   <BrowserRouter>
      <div className="MainContainer">
        <PagesLinks />
        <PagesRouter />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('container') 
);

