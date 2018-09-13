import { FETCH_USER } from '../Actions/PostActions';
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}