"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from "./reducers/index"
  
  const store = createStore(allReducers);

let questionText = 'Как вы относитесь к программированию?';
let answersArr = require('./answers.json');
let itemHeader = require('./header.json');

let defaultFreeAnswerText="???";

ReactDOM.render(
  <Provider store={store}>
    <VotesBlock 
      question={questionText}
      header={itemHeader}
      answers={answersArr}
      // edit={selectedAnswerRaw}
      deffreeanswertext={defaultFreeAnswerText}
      startWorkMode={1}
    />
   </Provider>
  , document.getElementById('container') 
);

