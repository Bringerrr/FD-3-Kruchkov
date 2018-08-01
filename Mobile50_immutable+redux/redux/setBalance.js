import { SET_BALANCE } from './reduxConst';
const initState={

    // ключ - идентификатор счётчика, значение - число нажатий
    balance:250,
  }


function setBalance(state=initState,action) {
    switch (action.type) {

        case SET_BALANCE: {
        let changed=false;
        let newClients=[...this.state.clients]; // копия самого массива клиентов
        newClients.forEach( (c,i) => {

            if ( c.id==clientId && c.balance!=newBalance ) {
                let newClient={...c}; // копия хэша изменившегося клиента
                newClient.balance=newBalance;
                newClients[i]=newClient;
                changed=true;
            }
        } );
        if ( changed )
        console.log(action.clientid)
        //   this.setState({clients:newClients});
        }
      
        default:
         return state;
    }
}

export default setBalance;