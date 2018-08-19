import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
// import { client_select } from "../redux/reduxConst";

// import { bindActionCreators } from "redux";

// import './MobileClient.css';

class MobileEdit extends React.PureComponent {

  componentWillReceiveProps = (newProps) => {
  };
  

  render() {

    console.log("MobileEdit id="+" render");

  }

}

export default connect (
  // mapStateToProps,
  // matchDispatchToProps
)(MobileEdit);
