import { CITATION_ADD } from './reduxConst';
import { CIT_REFRESH } from './reduxConst';

import { fire } from '../base'

function baseContent() {
    const database = fire.database().ref("/1/content");
    let content = null 
    database.on('value', snap => {
      console.log(snap.val())
      content = snap.val()
    })
    return content;
}

const initState={
    userCitations:[],
    idIsAdded:[],
    new:0,
    fireCont:null,
  }

  function citAdd(state=initState,action) {
    switch (action.type) {

        case CITATION_ADD : {

        let newState = state
            newState.userCitations.push(action.add);
            newState.idIsAdded.push(action.add.id);
            newState.new+=1;
            
        const database = fire.database().ref("/1/content");
        let content = null 
            database.on('value', snap => {
            content = snap.val()
        })
    return content;

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