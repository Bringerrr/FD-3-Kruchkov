import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { citation_select } from "../redux/reduxConst";

import './EnglishUserDictionary.css';

const translate = require('ya-translate')("trnsl.1.1.20180821T152745Z.b203b1adaafdf5b6.21dce1350e91a9fb665fcb98a6d203c7a05f407d")

class EnglishUserDictionary extends React.PureComponent {

  state = {

  };


  translate =(EO)=>{
    translate(EO.target.innerHTML, 'ru')
      .then(text => {
        alert(text.text)
      });
  }

    
  render() {
 
    var wordCode=this.props.dic.store.map( w =>
       <tr key={1}><td className="EnglishUserDictionary_Word" onClick={this.translate}>{w}</td><td>{}</td></tr>
    
    );

    return (
        <div className="EnglishUserDictionary">
            <h3>Ваш Словарь</h3>
            <div className="EnglishUserDictionary_TableContainer">
            <tbody>
              <tr><th>Слово</th><th>Перевод</th></tr>
                {wordCode}
            </tbody>
            </div>
        </div>

    )
    ;

  }

}

function mapStateToProps(state) {
  return{
    dic: state.dic
  };
}

export default connect(
  mapStateToProps
)(EnglishUserDictionary);