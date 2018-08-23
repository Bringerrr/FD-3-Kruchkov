const CITATION_SELECT="CITATION_SELECT";
const CITATION_EDIT="CITATION_EDIT";
const SET_BALANCE="SET_BALANCE";
const COMPANY_NAME="COMPANY_NAME";
const CITATION_ADD="CITATION_ADD";
const DIC_ADD="DIC_ADD";
const DIC_STORE="DIC_STORE";
const CIT_REFRESH="CIT_REFRESH";


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

const dic_add = function(elem,text){
  return{
    type:DIC_ADD,
    elem:elem,
    text:text,
  }
}

const citation_add = function(add){
  return{
    type:CITATION_ADD,
    add:add,
  }
}

const citations_select = function(active){
  return{
    type:CITATION_SELECT,
    active:active,
  }
}

const citations_edit = function(EO){
  return{
    type:CITATION_EDIT,
    EO:EO
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
  citations_edit,CITATION_EDIT,
  set_balance,SET_BALANCE,
  set_name,COMPANY_NAME,
  citation_add,CITATION_ADD,
  dic_add,DIC_ADD,
  dic_store,DIC_STORE,
  cit_refresh, CIT_REFRESH,
}
