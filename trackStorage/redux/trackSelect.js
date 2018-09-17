import { TRACK_SELECT } from './reduxConst';
import { TRACK_EDIT } from './reduxConst';
import { TRACK_ARRANGE } from './reduxConst';
import { TRACK_FILTER } from './reduxConst';
import { TRACK_GROUP } from './reduxConst';
import { GO_TO_PAGE } from './reduxConst';

let content = require("../content.json")

const initState={
    content,
    filtContent:content,
    currContent:content,
    tracksPerPage:15,
    currentPage: 1,
    filt:{},
  }

function tracksSelect(state=initState,action) {
    switch (action.type) {

    case GO_TO_PAGE: {
        let newState = state
        newState.currentPage = action.curPage

        return newState
    }

    case TRACK_GROUP: {
        let newState = state

        newState.tracksPerPage = action.perPage
        newState.currentPage = action.curPage

        let indexOfLastTrack = newState.currentPage * newState.tracksPerPage;
        let indexOfFirstTrack = indexOfLastTrack - newState.tracksPerPage;
        let currentTracks = newState.filtContent.slice(indexOfFirstTrack, indexOfLastTrack);
        newState.content = currentTracks

        return newState;
    }

    case TRACK_FILTER: {
        let changed = false

        let newState = state
        let newStateContent = newState.content;
        let newCurrContent = newState.currContent;
        let newStateFiltContent = newState.filtContent;
        let newCont = [];

        let newFilt = newState.filt

        newFilt[action.name] = action.filt
        newState.filt = newFilt

          for ( var key in newFilt){
              if(newFilt[key]=="all"){
                delete newFilt[key]
              }
          }

        newCont = newCurrContent.filter(word => {
            let total = 0
            let objLength = Object.keys(newFilt).length;
            for ( var key in newFilt){
                if(word[key] == newFilt[key]){
                  total ++
                }
            }
            if(total==objLength) return true 
            else return false 
        });

        newStateContent = newCont;
        newStateFiltContent = newCont
        newState.content = newStateContent
        newState.filtContent = newStateFiltContent

        return newState
    }

    case TRACK_ARRANGE: {
            let newState = state
            let newCont = state.content
                // if( (action.elem.substr(-3,3)) == "rev"){
                //     console.log(action.elem.substr(-3,3))
                //     newCont.sort(function(a, b){
                //         if(a[action.elem] > b[action.elem]) return -1;
                //         if(a[action.elem] < b[action.elem]) return 1;
                //         return 0;
                //     })
                //     console.log(newCont)
                // }
                
                // else{
                //     console.log(action.elem.substr(-3,3))
                //     newCont.sort(function(a, b){
                //         if(a[action.elem] < b[action.elem]) return -1;
                //         if(a[action.elem] > b[action.elem]) return 1;
                //         return 0;
                //     })
                //     console.log(newCont)
                // }

            if(action.elem=="singer"){
                newCont.sort(function(a, b){
                    if(a.singer < b.singer) return -1;
                    if(a.singer > b.singer) return 1;
                    return 0;
                })
            }

            if(action.elem=="singerrev"){
                newCont.sort(function(a, b){
                    if(a.singer > b.singer) return -1;
                    if(a.singer < b.singer) return 1;
                    return 0;
                })
            }


            if(action.elem=="year"){
                newCont.sort(function(a, b){
                    if(a.year < b.year) return -1;
                    if(a.year > b.year) return 1;
                    return 0;
                })
            }

            if(action.elem=="yearrev"){
                newCont.sort(function(a, b){
                    if(a.year > b.year) return -1;
                    if(a.year < b.year) return 1;
                    return 0;
                })
            }

            if(action.elem=="id"){
                newCont.sort(function(a, b){
                    if(a.id < b.id) return -1;
                    if(a.id > b.id) return 1;
                    return 0;
                })
            }

            if(action.elem=="ganre"){
                newCont.sort(function(a, b){
                    if(a.ganre > b.ganre) return -1;
                    if(a.ganre < b.ganre) return 1;
                    return 0;
                })
            }


            if(action.elem=="ganrerev"){
                newCont.sort(function(a, b){
                    if(a.ganre > b.ganre) return 1;
                    if(a.ganre < b.ganre) return -1;
                    return 0;
                })
            }

            if(action.elem=="title"){
                newCont.sort(function(a, b){
                    if(a.title < b.title) return -1;
                    if(a.title > b.title) return 1;
                    return 0;
                })
            }

            if(action.elem=="titlerev"){
                newCont.sort(function(a, b){
                    if(a.title < b.title) return 1;
                    if(a.title > b.title) return -1;
                    return 0;
                })
            }

            console.log(newState)

            return newState

    }
      
        default:
         return state;
    }
}

export default tracksSelect;