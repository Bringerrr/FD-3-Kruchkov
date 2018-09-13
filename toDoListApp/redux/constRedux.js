import { connectRef } from "../base";

const FETCH_TO_DO = "FETCH_TO_DO";

const fetch_data = (ref) => async dispatch => {
    console.log("!~@!@S")
    ref.on("value", snapshot => {
      dispatch({
        type: FETCH_TO_DO,
        payload: snapshot.val()
      });
    });
}

const add_to_do = newToDo => async dispatch => {
  connectRef.push().set(newToDo);
};

const complete_to_do = completeToDoId => async dispatch => {
  connectRef.child(completeToDoId).remove();
};

export {
    fetch_data, FETCH_TO_DO,
    add_to_do, complete_to_do,
}
  