import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
// import { client_select } from "../redux/reduxConst";

// import { bindActionCreators } from "redux";

import './ScanerParams.css';

class ScanerEdit extends React.PureComponent {

  componentWillReceiveProps = (newProps) => {
  };

blurEvent = (EO) =>{
  console.log(EO.target)
}
  

  render() {

    let paramsList = this.props.info.data.map( i =>{
      return <option className='ScanerParamsOption'>{i}{<p>{"Copies"}</p>}</option>
    }) 


    console.log(paramsList)

    return (
        <div className='form__select'>

          {/* <label htmlFor={this.props.info.name}>{this.props.info.name}</label> */}
          <select onFocus={this.blurEvent} size="1" name={this.props.info.name} className='select'>
              {paramsList}
          </select>
          <div className='ScanerParamsActive'>
            {/* <div id={this.props.info.id} className='Active'></div> */}
            {/* <div className='Active ActiveFalse'></div> */}
          </div>
        </div>
    );

  }

}

export default connect (
  // mapStateToProps,
  // matchDispatchToProps
)(ScanerEdit);
