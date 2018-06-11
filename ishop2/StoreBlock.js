var StoreBlock = React.createClass({

  displayName: 'StoreBlock',

  propTypes: {
    startWorkMode: React.PropTypes.number.isRequired,
  },

  // propTypes: {
  //   item:React.PropTypes.string.isRequired,

  // },

  getDefaultProps: function() {
    return { title: "Заголовок" }
  },

  getInitialState: function() {
    return { 
      selectedItemCode: null,
      currSelecteRow: null,
      prevSelecteRow: null,
      freeanswertext:this.props.deffreeanswertext,
      workMode:this.props.startWorkMode,
      readOnly: true,
      itemLength: this.props.items.length,
      editedRow: null,
    };
  },

  answerChoose: function(EO) {
    (this.state.currSelecteRow != null)
      ?this.setState( {prevSelecteRow: this.state.currSelecteRow} )
      :null

    this.setState( {currSelecteRow: EO.currentTarget} );

    this.setState( {freeanswertext:EO.target.value} );
    var curId = EO.currentTarget.id;
    this.setState( {selectedItemCode: curId} );
    this.showEditPanel(curId);
    this.setState ( {editedRow:this.props.items[curId-1]} );
  },

  add: function(){
    var newRow = {text:"Новый",code:this.state.itemLength+1,url:" ", price:"", count:""}
    this.props.items.push(newRow)
    this.setState({ itemLength:this.state.itemLength+1 })
  },

  showEditPanel: function(id){
    this.setState( {workMode: 2} );
  },

  getIInfo(){
    return 
  },

  startEdit:function(){
    this.setState ( {readOnly: false} )
    var inputs = document.getElementsByClassName("infoItem")
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.background = "white"
      
    }
    console.log(inputs.length)
  },

  endEdit:function(EO){
    this.setState ( {readOnly: true} )
    var inputs = document.getElementsByClassName("infoItem")
    var valueArr =[]
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.background = "transparent"
      valueArr.push(inputs[i].value)
    }
    // console.log(valueArr)
    // console.log()
    var edRow = {text:valueArr[0], code: this.state.selectedItemCode, 
    url:valueArr[3], price: valueArr[1], count:valueArr[2] }
    var currRow = this.props.items[this.state.selectedItemCode-1]

    for(var m in edRow){
      if(edRow[m]!=currRow[m]){
        currRow[m] = edRow[m] 
      }
    }
  
    this.setState ({editedRow:edRow})
    this.editArg();
  },

  editArg:function(){
  },

  render: function() {
    (this.state.currSelecteRow != null || undefined)
      ?this.state.currSelecteRow.style.backgroundColor = "red"
      :null;

    (this.state.prevSelecteRow != null || undefined)
      ?this.state.prevSelecteRow.style.backgroundColor = "transparent"
      :null;

    console.log(this.state)
    // console.log("Work mode = " + this.state.workMode) 
    // console.log("установлен выбранный код : " + this.state.selectedItemCode)

    var header = this.props.item;

    var itemHeader = React.DOM.div({key:header.code,className:'HeaderItems'},
        React.DOM.span({className:'HeaderText'},header.text),
        React.DOM.span({className:'HeaderUrl'},header.url),
        React.DOM.span({className:'HeaderPrice'},header.price),
        React.DOM.span({className:'HeaderCount'},header.count)
  )

    var itemsCode=[];
    var cnt = 0;
  

    this.props.items.forEach(a => {
      var item=a;

      // console.log(this.state.editedRow)
      var edtR = this.state.editedRow      
      var itemCode = null;
      if(this.state.editedRow == null || this.state.editedRow != null){
        itemCode=      
          React.DOM.div({key:item.code,id:item.code,className:'item',
          onClick:this.answerChoose,
          },
            React.DOM.span({className:'Text'},item.text),
            React.DOM.span({className:'Url'},React.DOM.a({className:'UrlSrc',href:item.url},item.url)),
            React.DOM.span({className:'Price'},item.price),
            React.DOM.span({className:'Count'},item.count),
          )
      }
      if(this.state.editedRow != null && this.state.editedRow.code == (item.code)){
          // console.log(edtR)
          itemCode=      
          React.DOM.div({key:item.code,id:item.code,className:'item',
          onClick:this.answerChoose,
          },
            React.DOM.span({className:'Text'},edtR.text),
            React.DOM.span({className:'Url'},React.DOM.a({className:'UrlSrc',href:edtR.url},edtR.url)),
            React.DOM.span({className:'Price'},edtR.price),
            React.DOM.span({className:'Count'},edtR.count),
          )
      }
      // console.log(itemCode)

      itemsCode.push(itemCode);
      cnt++
    })


    var iInfo = this.props.items;

    var sIC = this.state.selectedItemCode-1
    
    return React.DOM.div( {className:'StoreBlock'}, 
          React.DOM.div({className:'storeContainer'},      
          React.DOM.div( {className:'Question'}, this.props.title ),
          React.DOM.div( {className:'Header'}, itemHeader ),
          React.DOM.div( {className:'items'}, itemsCode ),
          React.DOM.input( {className:'storeButt', type:'button',value:'Добавить',onClick:this.add} ),
        ),

        ((this.state.workMode == 2) && this.state.selectedItemCode ==1)
        ?React.DOM.div({className:'storeContainer'},
          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].text} ),
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].price} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].count} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].url} ),
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

        ((this.state.workMode == 2) && this.state.selectedItemCode ==2)
        ?React.DOM.div({className:'storeContainer'},
          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].text} ),
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].price} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].count} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].url} ),
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

        ((this.state.workMode == 2) && this.state.selectedItemCode ==3)
        ?React.DOM.div({className:'storeContainer'},
          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].text} ),
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].price} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].count} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].url} ),
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

        ((this.state.workMode == 2) && this.state.selectedItemCode ==4)
        ?React.DOM.div({className:'storeContainer'},
          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].text} ),
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].price} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].count} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].url} ),
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

        ((this.state.workMode == 2) && this.state.selectedItemCode ==5)
        ?React.DOM.div({className:'storeContainer'},
          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].text} ),
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].price} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].count} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].url} ),
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

        ((this.state.workMode == 2) && this.state.selectedItemCode ==6)
        ?React.DOM.div({className:'storeContainer'},
          React.DOM.div({className:"cont"},
            React.DOM.div({className:"wrapper"},
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].text} ),
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].price} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].count} ), 
              React.DOM.input( {className:"infoItem", readOnly:this.state.readOnly, 
              defaultValue:iInfo[sIC].url} ),
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
      )
    },

});