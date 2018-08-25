import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import './EnglishCounter.css';

class EnglishCounter extends React.PureComponent {

    state={
        ticked:0,
    }

    ticked = () =>{
        this.setState({ticked: this.state.ticked + 1});
    }

    componentDidMount = () => {
        this.interval = setInterval(this.ticked, 100);
    }

    componentWillUnmount = ()=> {
        clearInterval(this.interval);
      }
  
  render() {

    console.log("EnglishCounter render");

    return (
        <div className="newElem">
            {this.props.add.new}
        </div>
    )
    ;
  }
}

function mapStateToProps(state) {
  return{
    add: state.name,
  };
}

export default connect(
  mapStateToProps,
)(EnglishCounter);