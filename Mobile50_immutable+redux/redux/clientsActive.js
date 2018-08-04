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
  }


function activeClient(state=initState,action) {
    switch (action.type) {

    case CLIENT_SELECT: {
        console.log('ClientActive:',action);
        console.log('ClientActive:',state.active);
        // let newState = action.clients
        // return newState
    }
      
        default:
         return state;
    }
}

export default activeClient;