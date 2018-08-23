import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { dic_add } from "../redux/reduxConst";

import EnglishUserCitationElement from "./EnglishUserCitationElement";

import './EnglishUserCitation.css';

class EnglishUserCitation extends React.PureComponent {

    
    render(){

        console.log("EnglishUserCitation render")

        let userCitCode = this.props.add.userCitations.map(citation =>
            <EnglishUserCitationElement key={citation.id} id={citation.id} 
             title={citation.title} text={citation.text}  />
        )

        return(
            <div>
                <h3>Ваши цитаты</h3>

                <div className="UserCitationContainer">
                    {userCitCode}
                </div>
            </div>
        )
    }

}   
    
function mapStateToProps (state) {
    return{
      add: state.name,
      dic: state.dic
    };
  }
  
  // function matchDispatchToProps(dispatch){
  //   return bindActionCreators({citation_select: citation_select}, dispatch)
  // }
  
  
  export default connect (
    mapStateToProps,
    // matchDispatchToProps
  )(EnglishUserCitation);