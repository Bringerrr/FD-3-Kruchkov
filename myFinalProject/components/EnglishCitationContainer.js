import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { citation_select } from "../redux/reduxConst";

import EnglishCitation from './EnglishCitation';

import './EnglishCitationContainer.css';

const translate = require('ya-translate')("trnsl.1.1.20180821T152745Z.b203b1adaafdf5b6.21dce1350e91a9fb665fcb98a6d203c7a05f407d")

class EnglishCitationContainer extends React.PureComponent {

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
  };


  componentWillReceiveProps = (newProps) => {
  };

    
  render() {

    translate('I have passed my exams', 'ru').then(text => {
      console.log(text);  // Hola mundo
    });

    console.log("EnglishCitationContainer render");


    // var citationsCode=this.props.citationRedux.map( citation =>
    //   <MobileClient key={citation.id} info={citation}  />
    // );

    // var citationsCode=this.props.citationRedux.citationsRedux.map( citation =>
    //   <MobileClient key={citation.id} info={citation}  />
    // );

    var citationCode=this.props.citationRedux.content.map( citation =>
      <EnglishCitation key={citation.id} 
      pos={this.state.blockPos} id={citation.id} 
      price={citation.price} title={citation.title}
      text={citation.text} img={citation.img} audio={citation.audio} />
    );

    return (
      <div className='EnglishCitationContainer'>
        <button onClick={()=>{ this.setState({blockPos:"block"}) } }>Флексы</button>
        <button onClick={()=>{ this.setState({blockPos:"table"}) } }>Таблицы</button>

        {this.state.blockPos=="block"
          ?<div className='CitationFlex'>
            {citationCode}
          </div>
          :<tbody className='CitationTable'>
              <tr><th><td>ID</td></th><th><td>Название</td></th><th><td>есть звук</td></th><th><td>есть картинка</td></th><th><td>Цена</td></th><th><td>Покупка</td></th></tr>
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

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({citation_select: citation_select}, dispatch)
// }



export default connect(
  mapStateToProps,
  // matchDispatchToProps
)(EnglishCitationContainer);