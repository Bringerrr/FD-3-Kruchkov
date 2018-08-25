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

        let newState = state
            newState.userCitations.push(action.add);
            newState.idIsAdded.push(action.add.id);
            newState.new+=1;

            return newState

        }

        case CIT_REFRESH : {
            let newState = state;

             return newState
        }

        default:
         return state;
    }
}

export default citAdd;