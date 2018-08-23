import { CITATION_SELECT } from './reduxConst';
import { CITATION_EDIT } from './reduxConst';


let content = require("../content.json")

const initState={

    // ключ - идентификатор счётчика, значение - число нажатий
    active:null,
    content,
    edit:null,
  }


function citationsSelect(state=initState,action) {
    switch (action.type) {

    case CITATION_SELECT: {
        console.log("CITATION_SELECT")
        let changed=false;
        let newState = {}
        let newClients=[...state.content]; // копия самого массива клиентов
        
        
        newClients.forEach( (c,i) => {
            if ( c.id==action.active.id
                && c.text==action.active.text
                // && c.balance!=state.maxBalance 
            ) {
                changed = true
                let newClient={...c}; // копия хэша изменившегося клиента
                // newClient.balance=state.maxBalance;

                console.log(newClient)
                
                newClients[i]=newClient;
                state.content = newClients

                newState={...state,
                    content:newClients
                };
                newState={...state,
                    active:newClient
                }
            }
        } );

        if ( changed ) return newState
    }

    case CITATION_EDIT: {

        let changed=false;
        let newState = {}

        if(action.EO!==undefined){
            let EO = action.EO
            var cont = EO.parentNode

            let hash = {}
            hash.text = document.getElementById("edittext").value
            hash.balance = document.getElementById("editBalance").value
            hash.id = EO.parentNode.id

            let orig = state.content
            state.edit = hash
        
            let elem;
            for (let i = 0; i < orig.length; i++) {
                if(orig[i].id==hash.id){
                    elem = i;
                    break;
                }
            }

            orig[elem] = hash
            let newClients=[...state.content]; // копия самого массива клиентов

                if ( newClients[elem].id==hash.id  && newClients[elem].text==hash.text ) {
                    changed = true
                    let newClient={...newClients[elem]}; // копия хэша изменившегося клиента
                    newClient.id=hash.id;
                    newClient.text=hash.text;
                    newClient.balance=hash.balance;
                    state.content = newClients

                    newState={...state,
                        content:newClients
                    };

                    console.log(newState)
                    
                }
        }

        if ( changed ) return newState
    }
      
        default:
         return state;
    }
}

export default citationsSelect;