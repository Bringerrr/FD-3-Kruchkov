import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { cit_refresh } from "../redux/reduxConst";

import './PagesLinks.css';

class PagesLinks extends React.Component {

  state = {
    refresh:0
  };

  citRefresh = () => {
    this.props.dispatch( cit_refresh() );
    this.setState({refresh:1})
    console.log(this.props.new)
    console.log(this.state.refresh)
  }

  render() {

    // function func(){
    //   console.log(this.citRefresh)
      
    // }

    // if(this.state.refresh==0){
    //   setInterval(func,1000)
    // }

    return (
      <div>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/citations" className="PageLink" activeClassName="ActivePageLink">Цитаты</NavLink>
        <NavLink to="/usercitations" className="PageLink" activeClassName="ActivePageLink">
          Ваши цитаты<div className="newElem" onClick={this.citRefresh}>{this.props.new.new}</div>
        </NavLink>
        <NavLink to="/userdic" className="PageLink" activeClassName="ActivePageLink">Словарь</NavLink>
      </div>
    );
    
  }

}

function mapStateToProps(state) {
  return{
    new: state.name,
  };
}

export default connect(
  mapStateToProps,
  // matchDispatchToProps
)(PagesLinks);
    
// export default PagesLinks;
    