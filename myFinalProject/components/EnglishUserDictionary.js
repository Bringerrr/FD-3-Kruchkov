import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { citation_select } from "../redux/reduxConst";

// import EnglishCitation from './EnglishCitation';

// import './EnglishUserDictionary.css';

const translate = require('ya-translate')("trnsl.1.1.20180821T152745Z.b203b1adaafdf5b6.21dce1350e91a9fb665fcb98a6d203c7a05f407d")

class EnglishUserDictionary extends React.PureComponent {

  state = {

  };


  justText = () =>{
    return "just text"
  }

    
  render() {


    console.log("EnglishUserDictionary render");

    // function translateText(word){
    //   let transl = translate(word, 'ru')
    //       .then(text => {
    //       console.log(text.text)
    //       return text.text;
    //       });

    //   return transl
    // }

    // translate('Parli italiano?')
    // .then(console.log)
    // .catch(console.error)

      translate("word", 'ru')
        .then(text => {
          console.log(text.text)
        });

      let transl=translate({lang: 'ru', text: 'Use your brain'})

    console.log(transl);
  
    var wordCode=this.props.dic.store.map( w =>
       <tr><td>{w}</td><td>{}</td></tr>
       
    );

    return (
        <div>
            <h3>Ваш Словарь</h3>
            <tbody>

                {wordCode}

            </tbody>
            
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
  mapStateToProps,
  // matchDispatchToProps
)(EnglishUserDictionary);