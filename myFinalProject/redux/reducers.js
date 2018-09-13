import { combineReducers } from 'redux';

import citationSelect from "./citationSelect";
import citAdd from "./citAdd";
import dicCreate from "./dicCreate";
import auth from "./auth";

let combinedReducer=combineReducers({
    citations: citationSelect, 
    name:citAdd,
    dic:dicCreate,
    auth:auth,
});

export default combinedReducer;
