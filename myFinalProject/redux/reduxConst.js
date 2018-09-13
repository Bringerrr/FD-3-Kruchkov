const CITATION_SELECT="CITATION_SELECT";
const CITATION_EDIT="CITATION_EDIT";
const SET_BALANCE="SET_BALANCE";
const COMPANY_NAME="COMPANY_NAME";
const CITATION_ADD="CITATION_ADD";
const DIC_ADD="DIC_ADD";
const DIC_STORE="DIC_STORE";
const CIT_REFRESH="CIT_REFRESH";
const CITATION_ARRANGE="CIT_ARRANGE";
const USER_SET_INFO="USER_SET_INFO";
const SIGNED_IN="SIGN_IN"
const GET_CONTENT="GET_CONTENT"

const get_content = function (ref) {
  return dispatch => {
    ref.on('value', snapshot => {
      dispatch({
        type: GET_CONTENT,
        payload: snapshot.val()
      })
    })
  }
}


const log_user = function(email){
  return{
    type: SIGNED_IN,
    email: email
  }
}

const user_set_info =function(elem){
  return{
    type:USER_SET_INFO,
    elem:elem
  }
}

const cit_arrange =function(elem){
  return{
    type:CITATION_ARRANGE,
    elem:elem
  }
}

const cit_refresh =function(elem){
  return{
    type:CIT_REFRESH,
    elem:elem
  }
}

const dic_store = function(arr){
  return{
    type:DIC_STORE,
    arr:arr,
  }
}

const dic_add = function(elem,text,user){
  return{
    type:DIC_ADD,
    elem:elem,
    text:text,
    user:user,
  }
}

const citation_add = function(add,user){
  return{
    type:CITATION_ADD,
    add:add,
    user:user,
  }
}

const citations_select = function(active){
  return{
    type:CITATION_SELECT,
    active:active,
  }
}

const citation_edit = function(EO,id){
  return{
    type:CITATION_EDIT,
    EO:EO,
    id:id,
  }
}


const set_name = function(name){
  return{
    type:COMPANY_NAME,
    name:name
  }
}

const set_balance = function(citations_id,balance){
  return{
    type:SET_BALANCE,
    citationsid:citationsid,
    balance:balance
  }
}

export {
  citations_select,CITATION_SELECT,
  citation_edit,CITATION_EDIT,
  set_balance,SET_BALANCE,
  set_name,COMPANY_NAME,
  citation_add,CITATION_ADD,
  dic_add,DIC_ADD,
  dic_store,DIC_STORE,
  cit_refresh, CIT_REFRESH,
  cit_arrange, CITATION_ARRANGE,
  user_set_info, USER_SET_INFO,
  get_content, GET_CONTENT,
  log_user ,SIGNED_IN,
}
