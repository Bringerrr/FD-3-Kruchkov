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
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/citations" className="PageLink" activeClassName="ActivePageLink">Цитаты</NavLink>
        <div className="wrapper">
          <NavLink to="/usercitations" className="PageLink" activeClassName="ActivePageLink">
          Ваши цитаты<div className="newElem citPos" onClick={this.citRefresh}>{this.props.cit.new}</div>
        </NavLink>
        </div>
        <div className="wrapper">
        <NavLink to="/userdic" className="PageLink" activeClassName="ActivePageLink">
          Словарь<div className="newElem dicPos" onClick={this.citRefresh}>{this.props.dic.new}</div>
        </NavLink>
        </div>
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
    