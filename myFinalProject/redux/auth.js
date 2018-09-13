import { SIGNED_IN } from './reduxConst';

const initState={
    userEmail:null,
}

function signedIn(state=initState,action) {
    switch (action.type) {
        case SIGNED_IN:{
            let newState = state
            newState.userEmail=action.email
            return newState
        }

        default:
         return state;
    }
}

export default signedIn;