import { COMPANY_NAME } from './reduxConst';
const initState={
    // ключ - идентификатор счётчика, значение - число нажатий
    name:"Velcom",
  }

function setName(state=initState,action) {
    switch (action.type) {

        case COMPANY_NAME: {
            let changed=false;
            
            if(state.name===action.name){
                console.log("do nothing")
            }

            else 
                console.log("Render : "+action.name)
                state.name = action.name
            }
        
        default:
            return state;
    }
}

export default setName;