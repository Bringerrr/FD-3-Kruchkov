import { CLIENT_SELECT } from './reduxConst';

let clientsJson=require('../clients.json');

const initState={
    clientsJson,
    activeId:null,
  }


function clientSelect(state=initState,action) {
    switch (action.type) {

    case CLIENT_SELECT: {
        let changed=false;
        let newState = {}
        let newClients=[...state.clientsJson]; // копия самого массива клиентов
        newClients.forEach( (c,i) => {

            if ( c.id==action.active.id ) {
                changed = true
                let newClient={...c}; // копия хэша изменившегося клиента
                newClient.balance=state.maxBalance;
                newClients[i]=newClient;
                state.clientsRedux = newClients

                newState={...state,
                    clientsRedux:newClients
                };

                newState={...state, 
                    activeId:newClient.id
                };

                // console.log(newState)
            }

        } );
        if ( changed ) return newState
    }
      
        default:
         return state;
    }
}

export default clientSelect;