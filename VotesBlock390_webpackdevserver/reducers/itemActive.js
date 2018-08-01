import { ITEM_SELECT } from './redConst';
const initState={

    // ключ - идентификатор счётчика, значение - число нажатий
    items:null,
  }


function activeClient(state=initState,action) {
    switch (action.type) {

    case ITEM_SELECT: {
        console.log('ClientActive:',action);
        console.log('ClientActive:',state.clients);
        let newState = action.clients
        return newState
    }
      
        default:
         return state;
    }
}

export default activeClient;