"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import EnglishCitationContainer from './components/EnglishCitationContainer';
import EnglishMainPage from './components/EnglishMainPage';
import combinedReducer from './redux/reducers';
import MobileEdit from './components/MobileEdit';

import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';


const translate = require('ya-translate')("trnsl.1.1.20180821T152745Z.b203b1adaafdf5b6.21dce1350e91a9fb665fcb98a6d203c7a05f407d")

let store=createStore(
  combinedReducer,
);

// translate('I have passed my exams', 'ru').then(text => {
//   console.log(text);  // Hola mundo
// });

console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
   <BrowserRouter>
      <div className="MainContainer">
        <PagesLinks />
        <PagesRouter />

        {/* <EnglishCitationContainer 
          name={companyName}
        />
        <MobileEdit/> */}

      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('container') 
);

