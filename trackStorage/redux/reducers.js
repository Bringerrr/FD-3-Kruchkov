import { combineReducers } from 'redux';

import trackSelect from "./trackSelect";
import trAdd from "./trAdd";

let combinedReducer=combineReducers({
    tracks: trackSelect, 
    name:trAdd,
});

export default combinedReducer;
