"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TrackStorageContainer from './components/TrackStorageContainer';
import combinedReducer from './redux/reducers';

import { BrowserRouter } from 'react-router-dom';


let store=createStore(
  combinedReducer,
);

ReactDOM.render(
  <Provider store = {store}>
      <div className="MainContainer">
        <TrackStorageContainer/>
      </div>
  </Provider>
  , document.getElementById('container') 
);

