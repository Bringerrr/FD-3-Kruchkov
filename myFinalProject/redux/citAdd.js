import { CITATION_ADD } from './reduxConst';
import { CIT_REFRESH } from './reduxConst';

const initState={
    userCitations:[],
    idIsAdded:[],
    new:0,
  }

  function citAdd(state=initState,action) {
    switch (action.type) {

        case CITATION_ADD : {

        console.log(action)

        console.log("CITATION_ADD")
        let newState = state
            newState.userCitations.push(action.add);
            newState.idIsAdded.push(action.add.id);
            newState.new+=1;


        // newClients=action.add
        // newState = newClients

        // newClients.forEach( (c,i) => {
        //     if ( c.id==action.add.id
        //         && c.text==action.add.text
        //     ) {
        //         changed = true
        //         let newClient={...c}; // копия хэша изменившегося клиента
        //         // newClient.balance=state.maxBalance;

        //         console.log(newClient)
                
        //         newClients[i]=newClient;
        //         state.content = newClients

        //         newState={...state,
        //             content:newClients
        //         };
        //         newState={...state,
        //             add:newClient
        //         }
        //     }
        // });
            console.log(newState)
            return newState
            
        }

        case CIT_REFRESH : {
            console.log("REFRESH")
            let newState = state
            return newState
        }

        default:
         return state;
    }
}

export default citAdd;