import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { citation_select } from "../redux/reduxConst";

import './EnglishMainPage.css';

class EnglishMainPage extends React.PureComponent {

  componentWillReceiveProps = (newProps) => {
    console.log("EnglishMain=");
  };

  render() {

    const translate = require('ya-translate')("trnsl.1.1.20180821T152745Z.b203b1adaafdf5b6.21dce1350e91a9fb665fcb98a6d203c7a05f407d")

    let wordStr = ""
    let wordArr = []

    function tranFun(word){
     return translate(word, 'ru')
            .then(text => {
                wordStr = text.text
                wordArr.push(text.text)
                console.log(text.text)
            });    
    }

    tranFun("Hello world");
    console.log(wordStr)
    console.log(wordArr)

    // async function add2(x) {
    //     const a = tranFun(x);
    //     return a
    // }

    // add2("world");

    return(
        <div className="EnglishMainPage">

        <section className="EnglishMainPageSection">
            <header className="EnglishMainPageHeader">

                <div className="HeaderIcon">Language Center</div>
                <div className="HeaderContacts">
                   <p>+375 29 123-45-67</p>
                </div>

            </header>

        </section>
        
        </div>
    )

  }

}


export default EnglishMainPage;