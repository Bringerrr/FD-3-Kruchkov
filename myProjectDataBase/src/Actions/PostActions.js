import { database, userDataRef } from '../Firebase'
export const FETCH_POSTS = 'fetch_posts'
export const FETCH_USER = 'fetch_user'
export const CITATION_ADD="CITATION_ADD";
export const CITATION_ADD_CANCEL="CITATION_ADD_CANCEL";

export function cancelAddCitation(id){
  return{
    type:CITATION_ADD_CANCEL,
    id:id,
  }
}

export function addCitation(id){
  return{
    type:CITATION_ADD,
    id:id,
  }
}

export function getPosts () {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      })
    })
  }
}

export function getUserData () {
  return dispatch => {
    userDataRef.on('value', snapshot => {
      dispatch({
        type: FETCH_USER,
        payload: snapshot.val()
      })
    })
  }
}

export function savePost(post) {
  return dispatch => database.push(post)
}

export function addPost(user, cit) {
  
  var updates = {};
  updates['/username/'] = user;
  updates['/citations/'] = cit;

  return dispatch => userDataRef.update(updates);
}

export function addNewUser(name) {
  return dispatch => userDataRef.set({
    username: name,
    key:[]
  });
}

export function deletePost(id) {
  return dispatch => database.child(id).remove();
}