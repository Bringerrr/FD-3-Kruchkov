var StoreBlock = React.createClass({

  displayName: 'StoreBlock',

  getDefaultProps: function() {
    return { title: "Заголовок" }
  },

  getInitialState: function() {
    return { 
      selectedItemCode: null, 
      selectedItemId:   null,
      currSelecteRow:   null,
      prevSelecteRow:   null,
      workMode:         this.props.startWorkMode,
      readOnly:         true,
      itemLength:       this.props.items.length,
      editedRow:        null,
      formError:        null,
      isArranged:       false,
      deffItemArray:    [],
      deletable:        false,
    };
  },

  setInit: function(){
    this.setState(  {prevSelecteRow:    null} )
    this.setState(  {currSelecteRow:    null} );
    this.setState(  {selectedItemId:    null} );
    this.setState(  {selectedItemCode:  null} );
    this.setState(  {editedRow:         null} );
    this.setState(  { deletable:        false} );

    (this.state.currSelecteRow!=null)
    ?this.state.currSelecteRow.style.backgroundColor = ""
    :null
  },

  arrange: function(EO){    
  
    if(this.state.isArranged !== true){
      EO.target.style.border = "1px solid black"
      this.props.items.sort(function(a, b){
        if(a.text < b.text) return -1;
        if(a.text > b.text) return 1;
        return 0;
      })
      this.setState({ isArranged: true })
    }
    else{
      EO.target.style.border = ""
      this.props.items.sort(function(a, b){
        if(a.code < b.code) return -1;
        if(a.code > b.code) return 1;
        return 0;
      })
      this.setState({ isArranged: false })
    }

    this.setInit()
  },

  itemChoose: function(EO) {
    var curId = EO.currentTarget.id;
    var eRId;

    for (var i = 0; i < this.props.items.length; i++) {
      if(this.props.items[i].id == curId){
        eRId = i
      }
    }

    (this.state.currSelecteRow != null)
      ?this.setState( {prevSelecteRow: this.state.currSelecteRow} )
      :null 
    this.setState( {currSelecteRow:   EO.currentTarget} );   
    this.setState( {selectedItemId:   +curId } );
    this.setState( {selectedItemCode: this.props.items[eRId].code } );
    this.setState( {editedRow:        this.props.items[eRId]} );
    this.setState( {deletable:        true } );
    this.showEditPanel();
  },

  

  add: function(){
    var newRow = {text:"Новый",code:this.state.itemLength+1,
    url:" ", price:"", count:""}
    this.props.items.push(newRow)
    this.setState({ itemLength:this.state.itemLength+1 })
  },

  delete:function(){
    this.props.items.splice(this.state.selectedItemId-1, 1);
    this.setInit()
  },

  showEditPanel: function(){
    this.setState( {workMode: 2} );
  },

  startEdit:function(){
    this.setState ( {readOnly: false} )
    var inputs = document.getElementsByClassName("infoItem")

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.background = "white"
    }
  },

  endEdit:function(EO){

    if(this.state.formError === false){
      this.setState ( {readOnly: true} )
      var inputs = document.getElementsByClassName("infoItem")
      var valueArr =[]
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.background = "transparent"
        valueArr.push(inputs[i].value)
      }

      var edRow = {text:valueArr[0], code: this.state.selectedItemCode, 
      url:valueArr[3], price: valueArr[1], count:valueArr[2] }

      var currRow = this.props.items[this.state.selectedItemId-1]

      for(var m in edRow){
        if(edRow[m]!=currRow[m]){
          currRow[m] = edRow[m] 
        }
      }
      this.setState ({editedRow:edRow})
    }
  },

  validText:function(EO){
    var err;
    var val = EO.target.value;
    var nextSibl = EO.target.nextSibling

    if(isFinite(val) ) {
      err = true;
      nextSibl.innerHTML = "Введите строку"}
    if(!(isFinite(val))) {
      err = false;
      nextSibl.innerHTML ="" 
    } 

    this.setState({ formError:err })
    return err
  },

  validNumber:function(EO){
    var err;
    var val = EO.target.value;
    var nextSibl = EO.target.nextSibling

    if(isFinite(val) ) {
      err = false;
      nextSibl.innerHTML = ""}
    if(!(isFinite(val))) {
      err = true;
      nextSibl.innerHTML ="Введите число" 
    } 
    this.setState({ formError:err })
    return err
  },

  render: function() {
    (this.state.currSelecteRow != null || undefined)  
      ?this.state.currSelecteRow.style.backgroundColor = "red"
      :null;

    (this.state.prevSelecteRow != null || undefined)
      ?this.state.prevSelecteRow.style.backgroundColor = "transparent"
      :null;

    var itemsCode=[];
    var cnt = 1;
    var header = this.props.item;
    var iInfo = this.props.items;
    var sIC = this.state.selectedItemId-1

    var itemHeader = React.DOM.div({key:header.code,className:'HeaderItems'},
        React.DOM.div({className:'Arrangement', onClick:this.arrange}),
        React.DOM.span({className:'HeaderText'},header.text),
        React.DOM.span({className:'HeaderUrl'},header.url),
        React.DOM.span({className:'HeaderPrice'},header.price),
        React.DOM.span({className:'HeaderCount'},header.count)
  )

    this.props.items.forEach(a => {
      var item=a;

      a.id = cnt;

      var edtR = this.state.editedRow      
      var itemCode = null;
      if(this.state.editedRow == null || this.state.editedRow != null){
        itemCode=      
          React.DOM.div({key:item.code,id:item.id,className:'item',
          onClick:this.itemChoose,
          },
            React.DOM.span({className:'Text'},item.text),
            React.DOM.span({className:'Url'},React.DOM.a({className:'UrlSrc',href:item.url},item.url)),
            React.DOM.span({className:'Price'},item.price),
            React.DOM.span({className:'Count'},item.count),
          )
      }

      if(this.state.editedRow != null && this.state.editedRow.code == (item.code)){
          itemCode=      
          React.DOM.div({key:item.code,id:item.id,className:'item',
          onClick:this.itemChoose,
          },
            React.DOM.span({className:'Text'},edtR.text),
            React.DOM.span({className:'Url'},React.DOM.a({className:'UrlSrc',href:edtR.url},edtR.url)),
            React.DOM.span({className:'Price'},edtR.price),
            React.DOM.span({className:'Count'},edtR.count),
          )
      }
      
      itemsCode.push(itemCode);
      cnt++
    })

    
    return React.DOM.div( {className:'StoreBlock'}, 
          React.DOM.div( {className:'storeContainer'},      
          React.DOM.div( {className:'Question'}, this.props.title ),
          React.DOM.div( {className:'Header'}, itemHeader ),
          React.DOM.div( {className:'items'}, itemsCode ),
          React.DOM.input( {className:'storeButt', type:'button',value:'Добавить',onClick:this.add} ),
          (this.state.deletable == true)
            ? React.DOM.input( {className:'storeButt', type:'button',value:'Удалить',onClick:this.delete} )
            :null,
        ),

        // Начало блока 1 ---------------------------------------------

        ((this.state.workMode == 2) && this.state.selectedItemId == 1)
        ?React.DOM.div({className:'storeContainer'},

          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.text ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].text, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"}, ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.price ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].price, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
              
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.count ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].count, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.url ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].url, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
            ),
          React.DOM.div( {className:"imgCont", src:iInfo[sIC].url},
            (iInfo[sIC].url != "#")
            ?React.DOM.img({src:iInfo[sIC].url})
            :null
          )),

          React.DOM.input( {className:"infoItemButton",type:"button", 
            value:"Редактировать", onClick:this.startEdit} ),
            (this.state.readOnly === false)
              ?React.DOM.input( {className:"infoItemButton",type:"button", 
              value:"Ok", onClick:this.endEdit} )
              :null    
        )
        :null ,

        // Конец блока 1 ---------------------------------------------

        // Начало 2-6 блоков

        ((this.state.workMode == 2) && this.state.selectedItemId == 2)
        ?React.DOM.div({className:'storeContainer'},

          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.text ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].text, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"}, ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.price ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].price, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
              
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.count ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].count, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.url ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].url, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
            ),
          React.DOM.div( {className:"imgCont", src:iInfo[sIC].url},
            (iInfo[sIC].url != "#")
            ?React.DOM.img({src:iInfo[sIC].url})
            :null
          )),

          React.DOM.input( {className:"infoItemButton",type:"button", 
            value:"Редактировать", onClick:this.startEdit} ),
            (this.state.readOnly === false)
              ?React.DOM.input( {className:"infoItemButton",type:"button", 
              value:"Ok", onClick:this.endEdit} )
              :null    
        )
        :null ,

        ((this.state.workMode == 2) && this.state.selectedItemId == 3)
        ?React.DOM.div({className:'storeContainer'},

          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.text ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].text, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"}, ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.price ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].price, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
              
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.count ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].count, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.url ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].url, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
            ),
          React.DOM.div( {className:"imgCont", src:iInfo[sIC].url},
            (iInfo[sIC].url != "#")
            ?React.DOM.img({src:iInfo[sIC].url})
            :null
          )),

          React.DOM.input( {className:"infoItemButton",type:"button", 
            value:"Редактировать", onClick:this.startEdit} ),
            (this.state.readOnly === false)
              ?React.DOM.input( {className:"infoItemButton",type:"button", 
              value:"Ok", onClick:this.endEdit} )
              :null    
        )
        :null ,

        ((this.state.workMode == 2) && this.state.selectedItemId == 4)
        ?React.DOM.div({className:'storeContainer'},

          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.text ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].text, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"}, ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.price ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].price, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
              
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.count ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].count, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.url ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].url, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
            ),
          React.DOM.div( {className:"imgCont", src:iInfo[sIC].url},
            (iInfo[sIC].url != "#")
            ?React.DOM.img({src:iInfo[sIC].url})
            :null
          )),

          React.DOM.input( {className:"infoItemButton",type:"button", 
            value:"Редактировать", onClick:this.startEdit} ),
            (this.state.readOnly === false)
              ?React.DOM.input( {className:"infoItemButton",type:"button", 
              value:"Ok", onClick:this.endEdit} )
              :null    
        )
        :null ,

        ((this.state.workMode == 2) && this.state.selectedItemId == 5)
        ?React.DOM.div({className:'storeContainer'},

          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.text ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].text, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"}, ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.price ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].price, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
              
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.count ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].count, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.url ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].url, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
            ),
          React.DOM.div( {className:"imgCont", src:iInfo[sIC].url},
            (iInfo[sIC].url != "#")
            ?React.DOM.img({src:iInfo[sIC].url})
            :null
          )),

          React.DOM.input( {className:"infoItemButton",type:"button", 
            value:"Редактировать", onClick:this.startEdit} ),
            (this.state.readOnly === false)
              ?React.DOM.input( {className:"infoItemButton",type:"button", 
              value:"Ok", onClick:this.endEdit} )
              :null    
        )
        :null ,

        ((this.state.workMode == 2) && this.state.selectedItemId == 6)
        ?React.DOM.div({className:'storeContainer'},

          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.text ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].text, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"}, ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.price ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].price, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
              
              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.count ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].count, onBlur:this.validNumber} ),
                React.DOM.span( {className:"infoValid"} ),
              ),

              React.DOM.div({className:"infoContainer"},
                React.DOM.span( {className:"infoName"}, header.url ),
                React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
                defaultValue:iInfo[sIC].url, onBlur:this.validText} ),
                React.DOM.span( {className:"infoValid"} ),
              ),
            ),
          React.DOM.div( {className:"imgCont", src:iInfo[sIC].url},
            (iInfo[sIC].url != "#")
            ?React.DOM.img({src:iInfo[sIC].url})
            :null
          )),

          React.DOM.input( {className:"infoItemButton",type:"button", 
            value:"Редактировать", onClick:this.startEdit} ),
            (this.state.readOnly === false)
              ?React.DOM.input( {className:"infoItemButton",type:"button", 
              value:"Ok", onClick:this.endEdit} )
              :null    
        )
        :null ,



        // Конец блоков 2-6 

      )
    },

});