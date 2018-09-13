import { TRACK_SELECT } from './reduxConst';
import { TRACK_EDIT } from './reduxConst';
import { TRACK_ARRANGE } from './reduxConst';
import { TRACK_FILTER } from './reduxConst';


let content = require("../content.json")
let originalCont = content;

const initState={
    active:null,
    content,
    originalCont,
    edit:null,
    filtSinger:null,
    filtYear:null,
    filtGanre:null, 
    filtContent:null,
  }

function tracksSelect(state=initState,action) {
    switch (action.type) {

    case TRACK_SELECT: {
        let changed=false;
        let newState = {}
        let newText=[...state.content];
        
        newClients.forEach( (c,i) => {
            if ( c.id==action.active.id
                && c.text==action.active.text
            ) {
                changed = true
                let newClient={...c};
                
                newClients[i]=newClient;
                state.content = newClients

                newState={...state,
                    content:newClients
                };
                newState={...state,
                    active:newClient
                }
            }
        } );

        if ( changed ) return newState
    }

    case TRACK_EDIT: {

        
        let changed=false;
        let newState = {}

        let newContCit = [...state.content]

        for (let i = 0; i < newContCit.length; i++) {
            if ( newContCit[i].id==action.id ) {
                let newCit = newContCit[i]

                if(true){
                    changed=true;
                    newCit.text=action.EO;
                    newContCit[i].text=newCit.text;
                    newState = state;
                    newState.content = newContCit;
                }
            }
        }

        if ( changed ) return newState
    }

    case TRACK_FILTER: {
        console.log(action.name);
        console.log(action.filt);
        let changed = false

        let newState = state
        let newStateContent = newState.content;
        let newStateFiltContent = newState.filtContent;
        let newCont = [];
        let newFiltSinger="";
        let newFiltYear="";
        let newFiltGanre="";

        if(action.name=="ganre"){
            newFiltGanre = action.filt;
            newState.filtGanre = newFiltGanre;
          }

          if(action.name=="year"){
            newFiltYear = action.filt;
            newState.filtYear = newFiltYear;
            // for (let i = 0; i < newStateContent.length; i++) {
            //   if(action.filt.indexOf(newStateContent[i].year) > -1){
            //     console.log(newStateContent[i])
            //     newCont.push(newStateContent[i])
            //   }
            //   else {
            //     console.log("failed")
            //     continue;
            //   };
            // }
          }

          if(action.name=="singer"){
            newFiltSinger = action.filt;
            newState.filtSinger = newFiltSinger;
            // for (let i = 0; i < newStateContent.length; i++) {
            //   if(action.filt.indexOf(newStateContent[i].singer) > -1){
            //     console.log(newStateContent[i])
            //     newCont.push(newStateContent[i])
            //   }
            //   else {
            //     console.log("failed")
            //     continue;
            //   };
            // }
          }

          for (let i = 0; i < newStateContent.length; i++) {
            if(newFiltSinger&&newFiltYear&&newFiltGanre!=null){
                if( (newFiltSinger.indexOf(newStateContent[i].singer) > -1)
                    && (newState.filtYear.indexOf(newStateContent[i].year) > -1)
                    && (newState.filtGanre.indexOf(newStateContent[i].ganre) > -1)
                    ){
                console.log(newStateContent[i])
                newCont.push(newStateContent[i])
                }
            }
            else {
              console.log("failed")
              continue;
            };
          }
          
          newStateFiltContent = newCont;
          newState.filtContent = newStateFiltContent
          console.log(newState)
        
        
        return newState

    }

    case TRACK_ARRANGE: {
  
            let newState = state
            let newCont = state.content

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

            return newState

    }
      
        default:
         return state;
    }
}

export default tracksSelect;