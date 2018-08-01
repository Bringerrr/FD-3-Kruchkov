import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { set_name } from "../redux/reduxConst";


import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  // setBalance = (clientId,newBalance) => {
  //   let newClients=[...this.state.clients]; // копия самого массива клиентов
  //   newClients.forEach( (c,i) => {
  //     // if ( c.id==clientId ) {
  //     if ( c.id==clientId && c.balance!=newBalance ) {
  //       let newClient={...c}; // копия хэша изменившегося клиента
  //       newClient.balance=newBalance;
  //       newClients[i]=newClient;
  //     }
  //   } );
  //   this.setState({clients:newClients});
  // };

  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };

  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <div>
          <span>Дефолтные</span>
          <br/>
          <input type="button" value="=МТС" onClick={(this.setName1)} />
          <input type="button" value="=Velcom" onClick={this.setName2} />
        </div>

        <div>
          <span>Redux</span>
          <br/>
          <input type="button" value="=МТС" onClick={()=>{this.props.set_name("МТС")}} />
          <input type="button" value="=Velcom" onClick={()=>{this.props.set_name("Velcom")}} />
        </div>

        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
        <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
      </div>
    )
    ;

  }

}

function mapStateToProps (state) {
  return{
    clientRedux: state.clients
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({set_name: set_name}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MobileCompany);