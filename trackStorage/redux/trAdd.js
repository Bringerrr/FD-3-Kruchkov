import { TRACK_ADD } from './reduxConst';
import { TR_REFRESH } from './reduxConst';

const initState={
    userCitations:[],
    idIsAdded:[],
    new:0,
  }

  function trAdd(state=initState,action) {
    switch (action.type) {

        case TRACK_ADD : {

        let newState = state
            newState.userCitations.push(action.add);
            newState.idIsAdded.push(action.add.id);
            newState.new+=1;

            return newState

        }

        case TR_REFRESH : {
            let newState = state;

             return newState
        }

        default:
         return state;
    }
}

export default trAdd;