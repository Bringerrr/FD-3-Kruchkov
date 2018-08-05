import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { client_select } from "../redux/reduxConst";

import { bindActionCreators } from "redux";

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    // console.log(this.props.info)
    this.setState({info:newProps.info});
  };
  
  clientSelect = (elem) => {
    this.props.dispatch( client_select(elem) );
  }

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <div className='MobileClient' onClick={ () => {this.clientSelect(this.state.info)} }>
      {/* <div className='MobileClient' onClick={ () =>{this.props.client_select(this.state.info.clients)} }> */}
        <span className='MobileClientBalance'>{this.state.info.balance}</span>
        <span className='MobileClientFIO'>{this.state.info.fio}</span>
      </div>
    );

  }

}

function mapStateToProps (state) {
  return{
    clientRedux: state.clients
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({client_select: client_select}, dispatch)
}


export default connect (
  mapStateToProps,
  // matchDispatchToProps
)(MobileClient);
