import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { load_content } from "../redux/reduxConst";
import { log_user } from "../redux/reduxConst";

import './EnglishMainPage.css';

import { fire, connectRef } from '../base'
import Login from './Login'

class EnglishMainPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.value = [];
}
  
  state = {
    user: null,
    content: null,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("EnglishMain=");
  };

  componentWillMount(){
    // var database = fire.database().ref("1/content");
    // var contented = null
    // database.on('value', snap => {
    //   // console.log(snap.val())
    //   this.setState({
    //     value : contented
    //   })
    //   this.value.push( snap.val() );
    //   return this.value
    // })
  }
  
  componentDidMount(){
    this.authListener();
    console.log(this.value)
    // this.loadContent();
  }

  logout() {
    fire.auth().signOut();
}

  loadContent = () => {
    this.props.dispatch( load_content() );
  }

  logUser = (email) => {
    this.props.dispatch( log_user(email) );
  }

  

  authListener =  () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        let userEmail = fire.auth().currentUser.email;
        // this.setState({ userEmail: userEmail });
        this.logUser(userEmail)
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {

    console.log(this.props)
    console.log(connectRef)

    console.log(this.state)

    return(
        <div className="EnglishMainPage">

        <section className="EnglishMainPageSection">
            <header className="EnglishMainPageHeader">

                <div className="HeaderIcon">Language Center</div>
                <div className="HeaderContacts">
                   <p>+375 29 123-45-67</p>
                </div>

            </header>

                 <div>{this.state.user 
                  ? ( 
                  <div>
                    <h3>Everything is awesome !!</h3>
                    <button onClick={this.logout}>Logout</button>
                  </div> ) 
                  : (<Login />)}
                 </div>

        </section>
        
        </div>
    )

  }

}

function mapStateToProps(state) {
  return{
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
)(EnglishMainPage);