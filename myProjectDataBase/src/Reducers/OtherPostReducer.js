import { CITATION_ADD } from '../Actions/PostActions';
import { CITATION_ADD_CANCEL } from '../Actions/PostActions';
import _ from 'lodash';

const initState={
  userCitations:[],
  idIsAdded:[],
  new:0,
}

export default function (state = initState, action) {
    switch (action.type) {
        case CITATION_ADD : {
          let newState = state
          newState.idIsAdded.push(action.id);
          return newState
        }
        case CITATION_ADD_CANCEL : {
          let newState = state

          for (let i = 0; i < newState.idIsAdded.length; i++) {
            if(newState.idIsAdded[i]===action.id){
              newState.idIsAdded.splice(i,1);
              break;
            }
          }

          let uniqArr = _.uniq(newState.idIsAdded);
          newState.idIsAdded = uniqArr;
          return newState
        }
      default:
        return state;
    }
  }