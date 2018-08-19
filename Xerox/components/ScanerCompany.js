import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { set_name } from "../redux/reduxConst";
import { client_select } from "../redux/reduxConst";

import deepEqual from 'deep-equal';
import ScanerClient from './ScanerClient';

import './ScanerCompany.css';
import ScanerParams from './ScanerParams';

class ScanerCompany extends React.PureComponent {

  state = {

  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  nameChange1 = () => {
    this.props.dispatch( set_name("МТС") );
  }

  nameChange2 = () => {
    this.props.dispatch( set_name("Velcom") );
  }

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

  componentWillReceiveProps = (newProps) => {
    // console.log("ScanerCOMPANY componentWillReceiveProps");
    // console.log(newProps)
    // console.log(this.props)
    // this.setState({info:newProps.info});
  };

  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };


  
  render() {

    console.log("ScanerCompany render");

    // var clientsCode=this.props.clientRedux.map( client =>
    //   <ScanerClient key={client.id} info={client}  />
    // );

    console.log(this.props.clients.activeId)

    var clientsCode=this.props.clients.clientsJson.map( client =>
      <ScanerClient 
      key={client.id} info={client}  />
    );

    console.log(this.props.params.paramsJson)

    var paramsCode=this.props.params.paramsJson.map( params =>
      <ScanerParams 
      key={params.id} info={params}  />
    );

    // var paramsCode =<ScanerParams/>

    return (
      <div className='ScanerCompany'>
      
        <div className='ScanerCompanyClients'>
          {clientsCode}
        </div>

        {paramsCode}

        <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
        <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
      </div>
    )
    ;
  }
}

function mapStateToProps(state) {
  return{
    clients: state.clients,
    params: state.params
  };
}

export default connect(
  mapStateToProps,
  // matchDispatchToProps
)(ScanerCompany);