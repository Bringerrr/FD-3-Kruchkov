const TRACK_SELECT="TRACK_SELECT";
const TRACK_EDIT="TRACK_EDIT";
const SET_BALANCE="SET_BALANCE";
const COMPANY_NAME="COMPANY_NAME";
const TRACK_ADD="TRACK_ADD";
const DIC_ADD="DIC_ADD";
const DIC_STORE="DIC_STORE";
const TR_REFRESH="TR_REFRESH";
const TRACK_ARRANGE="TRACK_ARRANGE";
const TRACK_FILTER="TRACK_FILTER";



const track_filter =function(filt,name){
  return{
    type:TRACK_FILTER,
    filt:filt,
    name:name,
  }
}

const track_arrange =function(elem){
  return{
    type:TRACK_ARRANGE,
    elem:elem
  }
}

const cit_refresh =function(elem){
  return{
    type:TR_REFRESH,
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

const track_add = function(add){
  return{
    type:TRACK_ADD,
    add:add,
  }
}

const tracks_select = function(active){
  return{
    type:TRACK_SELECT,
    active:active,
  }
}

const track_edit = function(EO,id){
  return{
    type:TRACK_EDIT,
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

const set_balance = function(tracks_id,balance){
  return{
    type:SET_BALANCE,
    tracksid:tracksid,
    balance:balance
  }
}

export {
  tracks_select,TRACK_SELECT,
  track_edit,TRACK_EDIT,
  set_balance,SET_BALANCE,
  set_name,COMPANY_NAME,
  track_add,TRACK_ADD,
  dic_add,DIC_ADD,
  dic_store,DIC_STORE,
  cit_refresh, TR_REFRESH,
  track_arrange, TRACK_ARRANGE,
  track_filter, TRACK_FILTER
}
