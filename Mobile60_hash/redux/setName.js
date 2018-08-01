import { COMPANY_NAME } from './reduxConst';
const initState={
    // ключ - идентификатор счётчика, значение - число нажатий
    name:"Velcome",
  }

function setName(state=initState,action) {
    switch (action.type) {

        case COMPANY_NAME: {
        let changed=false;
        
        if(state.name==action.name){
            console.log("do nothing")
        }

        if ( changed )
        console.log("Render : "+action.name)
        state.name = action.name
        //   this.setState({clients:newClients});
        }
        
        default:
         return state;
    }
}

export default setName;