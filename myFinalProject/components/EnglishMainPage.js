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