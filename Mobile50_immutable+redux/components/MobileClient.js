import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

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
    //console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <div className='MobileClient'>
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


export default connect (mapStateToProps)(MobileClient);
