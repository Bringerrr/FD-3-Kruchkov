const CLIENT_SELECT="CLIENT_SELECT";
const CLIENT_EDIT="CLIENT_EDIT";
const SET_BALANCE="SET_BALANCE";
const COMPANY_NAME="COMPANY_NAME";


const client_select = function(active){
  return{
    type:CLIENT_SELECT,
    active:active
  }
}

const client_edit = function(EO,edit){
  return{
    type:CLIENT_EDIT,
    EO:EO
  }
}


const set_name = function(name){
  return{
    type:COMPANY_NAME,
    name:name
  }
}

const set_balance = function(client_id,balance){
  return{
    type:SET_BALANCE,
    clientid:clientid,
    balance:balance
  }
}

export {
  client_select,CLIENT_SELECT,
  client_edit,CLIENT_EDIT,
  set_balance,SET_BALANCE,
  set_name,COMPANY_NAME
}
