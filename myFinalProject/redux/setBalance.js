import { SET_BALANCE } from './reduxConst';
const initState={

    // ключ - идентификатор счётчика, значение - число нажатий
    balance:250,
  }


function setBalance(state=initState,action) {
    switch (action.type) {

        case SET_BALANCE: {
        let changed=false;
        let newClients=[...this.state.citations]; // копия самого массива клиентов
        newClients.forEach( (c,i) => {

            if ( c.id==citationId && c.balance!=newBalance ) {
                let newClient={...c}; // копия хэша изменившегося клиента
                newClient.balance=newBalance;
                newClients[i]=newClient;
                changed=true;
            }
        } );
        if ( changed )
        console.log(action.citationid)
        console.log(state)
        //   this.setState({citations:newClients});
        }
      
        default:
         return state;
    }
}

export default setBalance;