import {combineReducers} from "redux";
import items from "./items";
import ActiveItem from "./itemActive";

const allReducers = combineReducers({
    itemsRedux: items,
    active: ActiveItem
})

export default allReducers