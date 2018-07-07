"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

let questionText = 'Как вы относитесь к программированию?';
let answersArr = require('./answers.json');
let itemHeader = require('./header.json');

let defaultFreeAnswerText="???";

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    header={itemHeader}
    answers={answersArr}
    // edit={selectedAnswerRaw}
    deffreeanswertext={defaultFreeAnswerText}
    startWorkMode={1}
  />
  , document.getElementById('container') 
);

