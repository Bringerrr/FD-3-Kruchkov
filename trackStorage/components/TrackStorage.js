import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { track_select } from "../redux/reduxConst";
import { track_add } from "../redux/reduxConst";
import { track_edit } from "../redux/reduxConst";

import { bindActionCreators } from "redux";

import './TrackStorage.css';


class TrackStorage extends React.Component {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props,
    purchased:false,
    add:null,
    workMode:1,
    text:this.props.text,
    currText:"",
    currId:null,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("TrackStorage id= "+this.props.id+" componentWillReceiveProps");
  };

  componentWillMount = () =>{
    // if(this.props.add.idIsAdded.length>=3){ this.setState( {purchased:true} ) }

    for (let i = 0; i < this.props.add.idIsAdded.length; i++) {
      if(this.props.add.idIsAdded[i]==this.props.id){
        this.setState( {purchased:true} )
        break;
      }   
    }
  }

  purchase = () =>{
    this.setState({purchased:true})
  }

  compare = () =>{
    for (let i = 0; i < this.props.add.idIsAdded.length; i++) {
      if(this.props.add.idIsAdded[i]==this.props.id){
        return false
        break;
      }
      else return true
      
    }
  }
  
  trackSelect = (elem) => {
    this.props.dispatch( track_select(elem) );
    this.purchase();
  }


  citAdd = (elem) => {
    this.props.dispatch( track_add(elem) );
    this.purchase();
  }

  countGaps = (text) =>{
    let gaps = 0;
    let newText = ""

    for (let i = 0; i < text.length; i++) {
      if(text[i]==" "){
        gaps++
        if(gaps==5){
          return text.substr(0,i) + "..."
          break;
        }
      } 
    }
  }

  startEdit = (EO) =>{
    this.setState({workMode:2})
    this.setState({currText:this.props.text})
    this.setState({currId:this.props.id})
  }

  endEdit = (EO) =>{
    let parent = EO.target.parentNode.parentNode;
    this.setState( {workMode:1} ) ;
    this.props.dispatch( track_edit(this.state.currText,this.state.currId) );
    this.props.click();
  } 

  change = (EO)=>{
    this.setState({currText:EO.target.value})
  }

  render() {

    console.log("TrackStorage id="+this.props.id+" render");
    
    return (

      <tr>
        <td>{this.props.singer}</td>
        <td>{this.props.title}</td>
        <td>{this.props.ganre}</td>
        <td>{this.props.year}</td>
        {/* <td>{(this.state.purchased==false)
            ?<button className="purchFalse" onClick={ () =>{this.citAdd(this.props)} }>Добавить</button>
            :<button className="purchTrue">Добавлено</button>
            }</td> */}
      </tr>
  );
  }

}

function mapStateToProps (state) {
  return{
    add: state.name,
    trackRedux: state.tracks,
  };
}

export default connect (mapStateToProps)(TrackStorage);