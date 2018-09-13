import { FETCH_POSTS } from '../Actions/PostActions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload

    case CITATION_ADD : {

        let newState = state
        newState.idIsAdded.push(action.id);
        newState.new+=1;
        return newState

    }
    default:
      return state
  }
}

export default function (state = {idIsAdded:null}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload
    default:
      return state
  }
}