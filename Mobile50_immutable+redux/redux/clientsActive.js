import { CLIENT_SELECT } from './reduxConst';
const initState={

    // ключ - идентификатор счётчика, значение - число нажатий
    clients:null,
  }


function activeClient(state=initState,action) {
    switch (action.type) {

    case CLIENT_SELECT: {
        console.log('ClientActive:',action);
        console.log('ClientActive:',state.clients);
        let newState = action.clients
        // return newState
    }
      
        default:
         return state;
    }
}

export default activeClient;