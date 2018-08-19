import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { client_edit} from "../redux/reduxConst";

// import { bindActionCreators } from "redux";

import './MobileEdit.css';

class MobileEdit extends React.PureComponent {

  state = {
    edit:null,
  }

  acceptEdit = (EO) =>{
    var cont = EO.target.parentNode
    let hash = {}

    // hash.fio = document.getElementById("editFio").value
    hash.fio = "ФИО"

    hash.balance = document.getElementById("editBalance").value
    hash.id = EO.target.parentNode.id
    let orig = this.props.clientRedux.clientsRedux
    this.setState({ edit: hash })

    let elem;
    for (let i = 0; i < orig.length; i++) {
      if(orig[i].id==hash.id){
        // console.log(i);
        elem = i;
        // return elem
        break;
      }
    }
    console.log(elem)

    // this.props.clientRedux.clientsRedux[elem] = hash
  }

  clientEdit = (EO) => {

    this.props.dispatch( client_edit(EO.target) );
  }

  componentWillReceiveProps = (newProps) => {
  };

  render() {

    console.log("MobileEdit id="+" render");

    if(this.props.clientRedux.active!=null){
      return(      
        <div className="MobileEdit">
          <div id = {this.props.clientRedux.active.id} className="">
            <input id="editFio" defaultValue={this.props.clientRedux.active.fio}></input>
            <input id="editBalance" defaultValue={this.props.clientRedux.active.balance}></input>
            <button onClick={this.clientEdit}>Ok</button>
          </div>
        </div>
      )
    }

    else return null

  }

}

function mapStateToProps (state) {
  return{
    clientRedux: state.clients
  };
}


export default connect (
  mapStateToProps,
  // matchDispatchToProps
)(MobileEdit);
