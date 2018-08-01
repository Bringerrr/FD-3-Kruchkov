import React from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';
import Header from './Header';
import VotesEdit from './VotesEdit';

import {voteEvents} from './events';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { item_select } from '../reducers/redConst';


class VotesBlock extends React.Component {

  static propTypes = {  
    startWorkMode: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    // header:PropTypes.arrayOf({
    //   code: PropTypes.number.isRequired,
    //   count: PropTypes.number.isRequired,
    //   text: PropTypes.string.isRequired,
    // }),
    answers:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        freeanswer: PropTypes.bool,
      })
    ),
    deffreeanswertext: PropTypes.string.isRequired,
  };

  state = {
    selectedAnswerCode: null,
    selectedAnswerRaw:null,
    freeanswertext:this.props.deffreeanswertext,
    workMode:this.props.startWorkMode,
  }

  componentDidMount = () => {
    // voteEvents.addListener('EAnswerClicked',this.answerSelected);
    // voteEvents.addListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
    // voteEvents.addListener('ButtAddClicked',this.answerSelected);
    // voteEvents.addListener('ButtDelClicked',this.answerSelected);
  };

  componentWillUnmount = () => {
    // voteEvents.removeListener('EAnswerClicked',this.answerSelected);
    // voteEvents.removeListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
    // voteEvents.removeListener('ButtAddClicked',this.answerSelected);
    // voteEvents.removeListener('ButtDelClicked',this.answerSelected);
  };

  // answerSelected = (hash) => {
  //   console.log("выбран "+hash.code);
  //   this.setState( {selectedAnswerCode:hash.code} );
  //   this.setState( {selectedAnswerRaw:hash} );
  // }

  vote = () => {
    console.log('голосование завершено, выбран ответ с кодом '+this.state.selectedAnswerCode);

    this.props.answers.forEach( answer => {
      if ( answer.code==this.state.selectedAnswerCode )
        answer.count++;
    } );

    this.setState( {workMode:2} );
  }

  add = (EO) => {
      //this.props.cbSelected(this.props.code);
      // voteEvents.emit('ButtAddClicked',EO.target.value);
      console.log(this.props.answers)
      var newRaw = {}
      var currRaw = this.props.answers[this.props.answers.length-1]
      console.log(currRaw)
      for(var m in currRaw){
          currRaw[m] = newRaw[m] 
      }
      this.props.answers.push({})
  }

  del = (EO) => {
      //this.props.cbSelected(this.props.code);
      // voteEvents.emit('ButtAddClicked',EO.target.value);
      (this.state.selectedAnswerCode != null)
      ?this.props.answers.splice(this.state.selectedAnswerCode-1, 1)
      :null

      this.setState( {selectedAnswerCode:null} );
  }

  freeAnswerTextChanged = (fat) => { 
    console.log('VotesBlock: текст свободного ответа изменён - '+fat); 
    this.setState( {freeanswertext:fat} );
  }

  render() {
    console.log(this.props)
    var answersCode=this.props.itemsRedux.map( v =>
      <VotesAnswer onClick={this.click} key={v.code}
        text={v.text} count={v.count} code={v.code} url={v.url} price={v.price}
        freeanswer={v.freeanswer} freeanswertext={this.state.freeanswertext}
        selectedAnswerCode={this.state.selectedAnswerCode}
        workMode={this.state.workMode}
      />
    );

    // console.log(answersCode)

    var headerCode=this.props.header.map( v =>
      <Header key={v.code}
        text={v.text} count={v.count} code={v.code} url={v.url}
        price={v.price}
      />
    );

    if(this.state.selectedAnswerRaw!=null){   
      console.log(this.state.selectedAnswerRaw)
      var aAR=this.state.selectedAnswerRaw;
  }

    // console.log(editCode)

    return (
      <div className='VotesBlock'>
        <VotesQuestion question={this.props.question}/>
        {headerCode}
        <div className='Answers'>{answersCode}</div>
        <div>
                <input value="Добавить" type="button" onClick={this.add}></input>
                {(this.state.selectedAnswerCode!=null)
                  ?<input value="Удалить" type="button" onClick={this.del}></input>
                      // <input value="Удалить" type="button" onClick={this.del}></input>
                  :null
                }

                {(this.state.selectedAnswerCode!=null)
                  ?<input value="Редактировать" type="button" onClick={this.del}></input>
                      // <input value="Удалить" type="button" onClick={this.del}></input>
                  :null
                }
        </div>
        {
          ((this.state.workMode==1)&&this.state.selectedAnswerCode) &&
          <input type='button' value='проголосовать' onClick={this.vote} />
        }
         <VotesEdit 
        />
      </div>
    )
    ;
  }
}

function mapStateToProps (state) {
  return{
    itemsRedux: state.itemsRedux
  };
}

export default connect(mapStateToProps)(VotesBlock);
