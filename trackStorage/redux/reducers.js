import { combineReducers } from 'redux';

import trackSelect from "./trackSelect";

let combinedReducer=combineReducers({
    tracks: trackSelect, 
});

export default combinedReducer;
