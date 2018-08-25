import { combineReducers } from 'redux';

import citationSelect from "./citationSelect";
import citAdd from "./citAdd";
import dicCreate from "./dicCreate";

let combinedReducer=combineReducers({
    citations: citationSelect, 
    name:citAdd,
    dic:dicCreate,
});

export default combinedReducer;
