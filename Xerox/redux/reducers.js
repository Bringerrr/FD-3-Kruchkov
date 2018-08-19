import { combineReducers } from 'redux';
import clientSelect from "./clientsSelect";
import selectParam from "./chooseParam";

let combinedReducer=combineReducers({
    clients: clientSelect, 
    params: selectParam,
});

export default combinedReducer;
