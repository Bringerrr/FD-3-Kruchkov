import React from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';

// import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';

class VotesBlock extends React.Component {

  static propTypes = {
    answers: PropTypes.array.isRequired
  };

  state = {
  }


  render() {

    var answersCode=this.props.answers.map( v =>
      <VotesAnswer key={0}
        text={v.text} title={v.title} 
      />
    );

    console.log(answersCode)

    return (
      <div className='VotesBlock'>
        <div className='Answers'>{answersCode}</div>
      </div>
    )
    ;

  }

}

export default VotesBlock;
