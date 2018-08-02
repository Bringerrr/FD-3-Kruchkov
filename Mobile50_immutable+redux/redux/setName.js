import { COMPANY_NAME } from './reduxConst';
const initState={
    // ключ - идентификатор счётчика, значение - число нажатий
    name:"Velcom",
  }

function setName(state=initState,action) {
    switch (action.type) {

        case COMPANY_NAME: {
            
            if(state.name===action.name){
                console.log("do nothing")
            }

            else 
                console.log("New state : "+action.name)
                state = {...state, name:action.name}
            }
        
        default:
            return state;
    }
}

export default setName;