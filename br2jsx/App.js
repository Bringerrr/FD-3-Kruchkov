"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

let answersArr=require('./answers.json');

ReactDOM.render(
  <VotesBlock 
    answers={answersArr}
  />
  , document.getElementById('container') 
);