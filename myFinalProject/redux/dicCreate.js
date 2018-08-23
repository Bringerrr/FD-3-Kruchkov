import { DIC_ADD } from './reduxConst';
import { DIC_STORE } from './reduxConst';

const initState={
    text:null,
    elem:null,
    store:[],
}


function dicAdd(state=initState,action) {
    switch (action.type) {

        case DIC_ADD: {
            let newState = state
            newState.text = action.text
            newState.elem = action.elem

            return newState
        }

        case DIC_STORE: {
            let newState = state;
            action.arr.forEach( (e,i,arr) => {

                if(newState.store.indexOf(e)!=-1){
                    console.log("Не пойдет")
                }

                else 
                newState.store.push(e.toLowerCase())

            });

            return newState
        }
      
        default:
            return state;
    }
}

export default dicAdd;