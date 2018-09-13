import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { citation_select } from "../redux/reduxConst";
import { citation_add } from "../redux/reduxConst";
import { citation_edit } from "../redux/reduxConst";

import { bindActionCreators } from "redux";

import fire from '../base'

import './EnglishCitation.css';


class EnglishCitation extends React.Component {

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
    console.log("EnglishCitation id= "+this.props.id+" componentWillReceiveProps");
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
  
  citationSelect = (elem) => {
    this.props.dispatch( citation_select(elem) );
    this.purchase();
  }

  citAdd = (elem) => {
    this.props.dispatch( citation_add(elem) );
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

  countGapsMin = (text) =>{
    let gaps = 0;
    let newText = ""

    for (let i = 0; i < text.length; i++) {
      if(text[i]==" "){
        gaps++
        if(gaps==3){
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
    this.props.dispatch( citation_edit(this.state.currText,this.state.currId) );
    this.props.click();
  } 

  change = (EO)=>{
    this.setState({currText:EO.target.value})
  }

  render() {

    console.log("EnglishCitation id="+this.props.id+" render");
    
    return (

      (this.props.pos=="block")
      ?<div className="Container">
        <div className='EnglishCitation' 
        // onClick={ () => {this.citationSelect(this.state.info)} }
        >
        {/* <div className='EnglishCitation' onClick={ () =>{this.props.citation_select(this.state.info.citations)} }> */}
          <span className='EnglishCitationId'>Citation{this.props.id}</span>
          <br/>
          {this.state.workMode == 1
          ?<span id='EnglishCitationText'>
            {this.countGaps(this.props.text)}
          </span>
          :<input value={this.state.currText} onChange={this.change}></input>
          }
        </div>
        {(this.state.purchased==false)
            // ?<button onClick={this.purchase}>Добавить</button>
            ?<button className="purchFalse" onClick={ () =>{this.citAdd(this.props)} }>Добавить</button>
            :<div>
              <button className="purchTrue">Добавлено</button>
              {this.state.workMode == 1
              ?<div>
                <button className="EnglishCitationText_Edit" onClick={this.startEdit}>Редактировать</button>
              </div >
              :<button className="EnglishCitationText_Edit" onClick={this.endEdit}>Ok</button>
              }
            </div>
            }

      </div>

      :<tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.countGapsMin(this.props.text)}</td>
        <td>{this.props.audio}</td>
        <td>{this.props.img!=""?<span>да</span>:<span>нет</span>}</td>
        <td>{this.props.price}</td>
        <td>{(this.state.purchased==false)
            // ?<button onClick={this.purchase}>Добавить</button>
            ?<button className="purchFalse" onClick={ () =>{this.citAdd(this.props)} }>Добавить</button>
            :<button className="purchTrue">Добавлено</button>
            }</td>
      </tr>
  );
  }

}

function mapStateToProps (state) {
  return{
    add: state.name,
    citationRedux: state.citations,
  };
}

export default connect (
  mapStateToProps,
  // matchDispatchToProps
)(EnglishCitation);