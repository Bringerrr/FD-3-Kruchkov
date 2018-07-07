import React from 'react';
import PropTypes from 'prop-types';

import {voteEvents} from './events';

import './VotesEdit.css';

class VotesEdit extends React.Component {

  state = {
    originValue: null,
    readOnly: true,
    formError: false,
    productId: null,
  }

  answerClicked = (EO) => {
    //this.props.cbSelected(this.props.code);
    console.log(EO.target)
    voteEvents.emit('EAnswerClicked',this.props);
  }

  freeAnswerTextChanged = (EO) => { 
    console.log('VotesAnswer: текст свободного ответа изменён - ' + EO.target.value); 
    //this.props.cbFreeAnswerTextChanged(EO.target.value);
    voteEvents.emit('EFreeAnswerTextChanged', EO.target.value);
  }

  startEdit = () => {
    this.setState ( {readOnly: false} )
    var inputs = document.getElementsByClassName("infoItem")
    this.setState({originValue:this.props.value})
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.background = "green"
      console.log(i)
    }
  }

  endEdit = () =>{

    if(this.state.formError === false){
      this.setState ( {readOnly: true} )
      var inputs = document.getElementsByClassName("infoItem")
      var valueArr =[]
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.background = "transparent"
        valueArr.push(inputs[i].value)
      }

      var edRow = {text:valueArr[0], count:+valueArr[1],
     code:this.props.value.code, url:valueArr[3],
      price:+valueArr[2]  }

      var currRow = this.props.value

      console.log(edRow)
      console.log(currRow)
      for(var m in edRow){
        if(edRow[m]!=currRow[m]){
          currRow[m] = edRow[m] 
        }
      }
    }
  }

  cancelEdit =() =>{
    this.setState ( {readOnly: true} )
    var inputs = document.getElementsByClassName("infoItem")
    var keys = Object.keys(this.state.originValue)
    console.log(keys)
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.background = "transparent"
      inputs[i].value = inputs[i].defaultValue
    }

  }

  validText=(EO)=>{
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
  }

  validNumber = (EO) =>{
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
  }


render() {
    var rA = this.state.readOnly
    return(
        <div className="VotesEdit">
          <div>
            <span className="name">{this.props.item.text}</span>
            <input id="text" className="infoItem" onBlur={this.validText} readOnly={rA} defaultValue = {this.props.value.text}></input>
            <span id="Valid"></span>
          </div>

          <div>
            <span className="name">{this.props.item.count}</span>
            <input id="count" className="infoItem" onBlur={this.validNumber} readOnly={rA} defaultValue ={this.props.value.count}></input>
            <span id="Valid"></span>
          </div>

          <div>
            <span className="name">{this.props.item.price}</span>
            <input id="price" className="infoItem" onBlur={this.validNumber} readOnly={rA} defaultValue = {this.props.value.price}></input>
            <span id="Valid"></span>
          </div>

          <div>
            <span className="name">{this.props.item.url}</span>
            <input id="url" className="infoItem" onBlur={this.validText} readOnly={rA} defaultValue = {this.props.value.url}></input>
            <span id="Valid"></span>
          </div>

          <input type="button" value="Редактировать" onClick={this.startEdit}></input>

          {rA==false
            ?<input type="button" value="Применить" 
            onClick={this.endEdit}></input>
            :null}

          {rA==false
            ?<input type="button" value="Отмена" 
            onClick={this.cancelEdit}></input>
            :null}
        </div>
    )
  }
}

export default VotesEdit;