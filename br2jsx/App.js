"use strict";

// import React from 'react';
// import ReactDOM from 'react-dom';

// import VotesBlock from './components/VotesBlock';

// let questionText='Как вы относитесь к программированию?';
// let defaultFreeAnswerText="???";

// ReactDOM.render(
//   <VotesBlock 
//     question={questionText}
//     answers={answersArr}
//     deffreeanswertext={defaultFreeAnswerText}
//     startWorkMode={1}
//   />
//   , document.getElementById('container') 
// );

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