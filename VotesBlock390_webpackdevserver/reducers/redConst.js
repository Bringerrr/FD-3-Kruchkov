const ITEM_SELECT="ITEM_SELECT"

const item_select = function(items){
    return{
      type:ITEM_SELECT,
      items:items
    }
  }
  
  export {
    item_select,ITEM_SELECT,
  }