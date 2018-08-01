const CLIENT_SELECT="CLIENT_SELECT";
const SET_BALANCE="SET_BALANCE";
const COMPANY_NAME="COMPANY_NAME";

const client_select = function(clients){
  return{
    type:CLIENT_SELECT,
    clients:clients
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
  set_balance,SET_BALANCE,
  set_name,COMPANY_NAME
}
