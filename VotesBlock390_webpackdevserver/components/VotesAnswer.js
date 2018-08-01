import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {voteEvents} from './events';

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { item_select } from '../reducers/redConst';

import './VotesAnswer.css';

class VotesAnswer extends React.Component {

  static propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    workMode: PropTypes.number.isRequired,
    freeanswer: PropTypes.bool,
    freeanswertext: PropTypes.string.isRequired,
    selectedAnswerCode: PropTypes.number, // может быть null, пока ни один ответ не выбран
  };

  answerClicked = (EO) => {
    //this.props.cbSelected(this.props.code);
    EO.currentTarget.style.backgroundColor = "red"
    // voteEvents.emit('EAnswerClicked',this.props);
  }

  freeAnswerTextChanged = (EO) => { 
    console.log('VotesAnswer: текст свободного ответа изменён - ' + EO.target.value); 
    //this.props.cbFreeAnswerTextChanged(EO.target.value);
    // voteEvents.emit('EFreeAnswerTextChanged', EO.target.value);
  }



  render() {
    if ( this.props.workMode==1 ) {
      return (
          <div className='VotesBlockAnswer' onClick={()=>this.props.item_select(this.props)}>
            {/* <input type='radio' value={this.props.code} name='voteanswer'
              checked={this.props.selectedAnswerCode==this.props.code}
              
            /> */}
            <span>{this.props.text}</span>
            <span>{this.props.url}</span>
            <span>{this.props.count}</span>
            <span>{this.props.price}</span>
            {
              (this.props.freeanswer) &&
              <input type='text' name='votefreeanswer' className='FreeAnswer'
                defaultValue={this.props.freeanswertext} onChange={this.freeAnswerTextChanged}
                disabled={this.props.selectedAnswerCode!=this.props.code}
              />
            }
          </div>
      )
    }
    else {
      return (
        <div className='VotesBlockAnswer'>
          <span className='Count'>{this.props.count}</span>
          <span className='Text'>{this.props.text}</span>
        </div>
      );
    }
  }
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({item_select: item_select}, dispatch)
}

export default connect(matchDispatchToProps)(VotesAnswer);
