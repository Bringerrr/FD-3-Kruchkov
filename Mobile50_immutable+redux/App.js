"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MobileCompany from './components/MobileCompany';

import combinedReducer from './redux/reducers';

let companyName='Velcom';

// let initialState={
//   reduxClient:
//     [
//       {id:101, fio:"Иванов И.И.", balance:200}, 
//       {id:105, fio:"Сидоров С.С.", balance:250}, 
//       {id:110, fio:"Петров П.П.", balance:180},
//       {id:120, fio:"Григорьев Г.Г.", balance:220},
//     ]
//   };

let clientsArr=[
  {id:101, fio:"Иванов И.И.", balance:200}, 
  {id:105, fio:"Сидоров С.С.", balance:250}, 
  {id:110, fio:"Петров П.П.", balance:180},
  {id:120, fio:"Григорьев Г.Г.", balance:220},
];

let store=createStore(
  combinedReducer,
  // initialState
);

console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
    <MobileCompany 
      name={companyName}
      clients={clientsArr}
    />
  </Provider>
  , document.getElementById('container') 
);

