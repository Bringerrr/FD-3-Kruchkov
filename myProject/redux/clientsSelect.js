import { CLIENT_SELECT } from './reduxConst';
import { CLIENT_EDIT } from './reduxConst';

const initState={

    // ключ - идентификатор счётчика, значение - число нажатий
    clientsRedux:[
        {id:101, fio:"Иванов И.И.", balance:200}, 
        {id:105, fio:"Сидоров С.С.", balance:250}, 
        {id:110, fio:"Петров П.П.", balance:180},
        {id:120, fio:"Григорьев Г.Г.", balance:220},
      ],
    active:null,
    edit:null,
    maxBalance:999,
  }


function clientSelect(state=initState,action) {
    switch (action.type) {

    case CLIENT_SELECT: {
        let changed=false;
        let newState = {}
        let newClients=[...state.clientsRedux]; // копия самого массива клиентов
        newClients.forEach( (c,i) => {
            if ( c.id==action.active.id 
                && c.fio==action.active.fio 
                // && c.balance!=state.maxBalance 
            ) {
                changed = true
                let newClient={...c}; // копия хэша изменившегося клиента
                // newClient.balance=state.maxBalance;
                newClients[i]=newClient;
                state.clientsRedux = newClients

                newState={...state,
                    clientsRedux:newClients
                };
                newState={...state,
                    active:newClient
                }
            }
        } );
        if ( changed ) return newState
    }

    case CLIENT_EDIT: {

        let changed=false;
        let newState = {}

        if(action.EO!==undefined){
            let EO = action.EO
            var cont = EO.parentNode

            let hash = {}
            hash.fio = document.getElementById("editFio").value
            hash.balance = document.getElementById("editBalance").value
            hash.id = EO.parentNode.id

            let orig = state.clientsRedux
            state.edit = hash
        
            let elem;
            for (let i = 0; i < orig.length; i++) {
                if(orig[i].id==hash.id){
                    elem = i;
                    break;
                }
            }

            orig[elem] = hash
            let newClients=[...state.clientsRedux]; // копия самого массива клиентов

                if ( newClients[elem].id==hash.id  && newClients[elem].fio==hash.fio ) {
                    changed = true
                    let newClient={...newClients[elem]}; // копия хэша изменившегося клиента
                    newClient.id=hash.id;
                    newClient.fio=hash.fio;
                    newClient.balance=hash.balance;
                    state.clientsRedux = newClients

                    newState={...state,
                        clientsRedux:newClients
                    };
                    
                }
        }

        if ( changed ) return newState
    }
      
        default:
         return state;
    }
}

export default clientSelect;