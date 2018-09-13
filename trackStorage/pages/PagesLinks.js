import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { cit_refresh } from "../redux/reduxConst";

import './PagesLinks.css';

class PagesLinks extends React.Component {

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

    // console.log("Navigation Render")

    return (
      <div>
        <NavLink to="/" className="PageLink" activeClassName="ActivePageLink">Цитаты</NavLink>
        <NavLink to="/2" className="PageLink" activeClassName="ActivePageLink">стр2</NavLink>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    cit: state.name,
    dic: state.dic,
  };
}

export default connect(
  mapStateToProps,
)(PagesLinks);
    