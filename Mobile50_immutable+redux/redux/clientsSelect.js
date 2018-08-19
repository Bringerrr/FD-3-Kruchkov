import { CLIENT_SELECT } from './reduxConst';
const initState={

    // ключ - идентификатор счётчика, значение - число нажатий
    clientsRedux:[
        {id:101, fio:"Иванов И.И.", balance:200}, 
        {id:105, fio:"Сидоров С.С.", balance:250}, 
        {id:110, fio:"Петров П.П.", balance:180},
        {id:120, fio:"Григорьев Г.Г.", balance:220},
      ],
    active:null,
    maxBalance:999,
  }


function clientSelect(state=initState,action) {
    switch (action.type) {

    case CLIENT_SELECT: {
        // console.log('ClientActive:',action);
        // console.log('ClientActive:',state.active);
        let changed=false;
        let newState = {}
        let newClients=[...state.clientsRedux]; // копия самого массива клиентов
        newClients.forEach( (c,i) => {

            // if ( c.id==action.id && c.balance!=state.balance ) {
            if ( c.id==action.active.id && c.balance!=state.maxBalance ) {
                changed = true
                let newClient={...c}; // копия хэша изменившегося клиента
                newClient.balance=state.maxBalance;
                newClients[i]=newClient;
                state.clientsRedux = newClients

                newState={...state,
                    clientsRedux:newClients
                };
                
                // console.log("newClients")
                // console.log(newClients)
                // console.log("newState")
                // console.log(newState)
            }

        } );
        if ( changed )
        // console.log(newState)
        //   this.setState({clients:newClients});
        return newState
    }
      
        default:
         return state;
    }
}

export default clientSelect;