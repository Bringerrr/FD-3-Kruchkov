"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'

import EnglishCitationContainer from './components/EnglishCitationContainer';
import EnglishMainPage from './components/EnglishMainPage';

import combinedReducer from './redux/reducers';
// import configureStore from './redux/config'

import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

const store = createStore(combinedReducer, {}, applyMiddleware(reduxThunk));

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

