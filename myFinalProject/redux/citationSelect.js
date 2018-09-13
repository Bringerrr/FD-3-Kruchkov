import { CITATION_SELECT } from './reduxConst';
import { CITATION_EDIT } from './reduxConst';
import { CITATION_ARRANGE } from './reduxConst';

import { GET_CONTENT } from './reduxConst';

let content = require("../content.json")

const config = {
    userProfile: 'users', 
    // saves user profiles to '/users' on Firebase
    // here is where you place other config options
  }
  
const initState={
    active:null,
    content,
    edit:null,
    fireData:null,
  }

function citationsSelect(state=initState,action) {
    switch (action.type) {

    case CITATION_SELECT: {
        let changed=false;
        let newState = {}
        let newText=[...state.content];
        console.log(action)
        
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

    case GET_CONTENT: {
        let newState = state;
        newState.fireData = action.payload;
        return newState;
    }

    case CITATION_EDIT: {
        
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

    case CITATION_ARRANGE: {
  
            let newState = state
            let newCont = state.content

            if(action.elem=="text"){
                newCont.sort(function(a, b){
                    if(a.text < b.text) return -1;
                    if(a.text > b.text) return 1;
                    return 0;
                })
            }

            if(action.elem=="textrev"){
                newCont.sort(function(a, b){
                    if(a.text > b.text) return -1;
                    if(a.text < b.text) return 1;
                    return 0;
                })
            }


            if(action.elem=="price"){
                newCont.sort(function(a, b){
                    if(a.price < b.price) return -1;
                    if(a.price > b.price) return 1;
                    return 0;
                })
            }

            if(action.elem=="pricerev"){
                newCont.sort(function(a, b){
                    if(a.price > b.price) return -1;
                    if(a.price < b.price) return 1;
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

            if(action.elem=="idrev"){
                newCont.sort(function(a, b){
                    if(a.id > b.id) return -1;
                    if(a.id < b.id) return 1;
                    return 0;
                })
            }


            if(action.elem=="titlerev"){
                newCont.sort(function(a, b){
                    if(a.title > b.title) return -1;
                    if(a.title < b.title) return 1;
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

            return newState

    }
      
        default:
         return state;
    }
}

export default citationsSelect;