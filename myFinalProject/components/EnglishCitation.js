import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { citation_select } from "../redux/reduxConst";
import { citation_add } from "../redux/reduxConst";

import { bindActionCreators } from "redux";

import './EnglishCitation.css';


class EnglishCitation extends React.PureComponent {

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
  };

  componentWillReceiveProps = (newProps) => {
    console.log("EnglishCitation id="+this.props.id+" componentWillReceiveProps");
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
    console.log(this.props.add.idIsAdded)   
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

          <span className='EnglishCitationText'>
            {this.countGaps(this.props.text)}
          </span>
        </div>
        {(this.state.purchased==false)
            // ?<button onClick={this.purchase}>Добавить</button>
            ?<button className="purchFalse" onClick={ () =>{this.citAdd(this.props)} }>Добавить</button>
            :<button className="purchTrue">Добавлено</button>
            }

      </div>

      :<tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
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
    add: state.name
  };
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({citation_select: citation_select}, dispatch)
// }


export default connect (
  mapStateToProps,
  // matchDispatchToProps
)(EnglishCitation);
