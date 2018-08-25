﻿import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { citation_select } from "../redux/reduxConst";
import { cit_arrange } from "../redux/reduxConst";

import EnglishCitation from './EnglishCitation';
// import EnglishCitation from './EnglishCitation';

import './EnglishCitationContainer.css';

const translate = require('ya-translate')("trnsl.1.1.20180821T152745Z.b203b1adaafdf5b6.21dce1350e91a9fb665fcb98a6d203c7a05f407d")

class EnglishCitationContainer extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    citations:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    citations: this.props.citations,
    blockPos:"block",
    refresh:0,
    arrangeMode:"id",
  };


  componentWillReceiveProps = (newProps) => {
    console.log("Props Prileteli")
  };

  refresh = () =>{
    this.setState({refresh:1})
  }

  click =() =>{
    this.setState({refresh:1})
  }

  citationArrange = (elem) =>{
    let rev = elem +"rev";
    (this.state.arrangeMode != elem)
    ? this.props.dispatch( cit_arrange(elem) )
      + this.setState({arrangeMode:elem})

    : this.props.dispatch( cit_arrange(rev) )
      // + console.log(rev)
      + this.setState({arrangeMode:rev})
      // + console.log(this.state.arrangeMode)
    console.log("STATE : "+this.state.arrangeMode)

  }

    
  render() {

    console.log("EnglishCitationContainer render");

    var citationCode=this.props.citationRedux.content.map( citation =>
      <EnglishCitation 
      key={citation.id} 
      pos={this.state.blockPos} 
      id={citation.id} 
      price={citation.price} 
      title={citation.title}
      text={citation.text} 
      img={citation.img} 
      audio={citation.audio} 
      click={this.click}
      />
    );

    return (
      <div className='EnglishCitationContainer'>
        <button onClick={ () => {  this.setState({blockPos:"block"}) } }>Флексы</button>
        <button onClick={ () => {  this.setState({blockPos:"table"}) } }>Таблицы</button>

        <br/>

        {this.state.blockPos=="block"
          ?<div><button onClick={ () => {  this.citationArrange("id") } }>Id</button>
              <button onClick={ () => {  this.citationArrange("title") } }>Title</button>
              <button onClick={ () => {  this.citationArrange("text") } }>Text</button>
              <button onClick={ () => {  this.citationArrange("price") } }>Price</button>
              <div className='CitationFlex'>
            {citationCode}
          </div>
          </div>

          :<tbody className='CitationTable'>
              <tr>
                <th>ID<button onClick={ () => {  this.citationArrange("id") } }>Id</button></th>
                <th>Название<button onClick={ () => {  this.citationArrange("title") } }>Title</button></th>
                <th>Открывок<button onClick={ () => {  this.citationArrange("text") } }>Text</button></th>
                <th>есть звук</th>
                <th>есть картинка</th>
                <th>Цена<button onClick={ () => {  this.citationArrange("price") } }>Price</button></th>
                <th>Покупка</th>
              </tr>
              {citationCode}
          </tbody>
        }
      </div>
    )
    ;
  }
}

function mapStateToProps(state) {
  return{
    citationRedux: state.citations,
  };
}


export default connect(
  mapStateToProps,
)(EnglishCitationContainer);