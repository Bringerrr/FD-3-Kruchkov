import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { client_select } from "../redux/reduxConst";

import { bindActionCreators } from "redux";

import './ScanerClient.css';

class ScanerClient extends React.PureComponent {

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("ScanerClient id="+this.props.info.id+" componentWillReceiveProps");
    // console.log(this.props.info)
    // this.setState({info:newProps.info});
  };
  
  clientSelect = (elem) => {
    this.props.dispatch( client_select(elem) );
  }

  render() {

    console.log("ScanerClient id="+this.state.info.id+" render");
    console.log(this.state)

    // console.log(document.getElementsByClassName("Active")[2])

    // console.log(this.state.info.id);
    
    return (
      <div className='ScanerClient' onClick={ () => {this.clientSelect(this.state.info)} }>
      {/* <div className='ScanerClient' onClick={ () =>{this.props.client_select(this.state.info.clients)} }> */}
        
        <span className='ScanerClientFIO'>{this.state.info.fio}</span>
        <div className='ScanerClientActive'>
          <div id={this.props.info.id} className='Active'></div>
          {/* <div className='Active ActiveFalse'></div> */}
        </div>
      </div>
    );

  }

}

function mapStateToProps (state) {
  return{
    clients: state.clients.info,
  };
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({client_select: client_select}, dispatch)
// }


export default connect (
  mapStateToProps,
  // matchDispatchToProps
)(ScanerClient);
