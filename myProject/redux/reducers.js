import { combineReducers } from 'redux';

// import clientList from "./clients";
import clientSelect from "./clientsSelect";
import setBalance from "./setBalance";
import setName from "./setName";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    clients: clientSelect, 
    // active: activeClient,
    // balance: setBalance,
    name:setName,
    // + другие редьюсеры
});

export default combinedReducer;
