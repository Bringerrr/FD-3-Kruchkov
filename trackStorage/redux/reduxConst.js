const TRACK_SELECT="TRACK_SELECT";
const TRACK_ARRANGE="TRACK_ARRANGE";
const TRACK_FILTER="TRACK_FILTER";
const TRACK_GROUP="TRACK_GROUP";
const GO_TO_PAGE="GO_TO_PAGE";

const go_to_page = function(curPage){
  return{
    type:GO_TO_PAGE,
    curPage:curPage,
  }
} 

const track_group = function(perPage,curPage){
  return{
    type:TRACK_GROUP,
    perPage:perPage,
    curPage:curPage,
  }
} 

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

const tracks_select = function(active){
  return{
    type:TRACK_SELECT,
    active:active,
  }
}

export {
  tracks_select,TRACK_SELECT,
  track_arrange, TRACK_ARRANGE,
  track_filter, TRACK_FILTER,
  track_group, TRACK_GROUP,
  go_to_page, GO_TO_PAGE,
}