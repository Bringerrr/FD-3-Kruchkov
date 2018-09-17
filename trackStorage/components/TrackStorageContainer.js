import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { track_arrange, track_group, go_to_page, track_filter  } from "../redux/reduxConst";

import TrackStorage from './TrackStorage';

import './TrackStorageContainer.css';

class TrackStorageContainer extends React.Component {

  state = {
    tracks: this.props.tracks,
    arrangeMode:"id",
    filters:null,
    tracksPerPage: 20,
    currentPage: 1,
  };

  trackArrange = (elem) =>{
    let rev = elem +"rev";
    (this.state.arrangeMode != elem)
    ? this.props.dispatch( track_arrange(elem) )
      + this.setState( {arrangeMode:elem} )
    : this.props.dispatch( track_arrange(rev) )
      + this.setState({arrangeMode:rev})
  }

  trackFilter = (EO) => {
    this.props.dispatch( track_filter(EO.target.value,EO.target.name) );
    this.props.dispatch( track_group( parseInt(this.state.tracksPerPage), 1) );
    EO.target.value=="all"
    ?this.setState({filters:null})
    :this.setState({filters:[EO.target.value, EO.target.name]})
  }

  trackGroup = (EO) =>{
    this.setState( { tracksPerPage: EO.currentTarget.id } )
    this.props.dispatch( track_group(parseInt(EO.currentTarget.id), 1) );
    this.setState({currentPage:1})
  }

  renderPages=()=>{
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(this.props.trackRedux.filtContent.length / this.state.tracksPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map(number => {
      return (
        this.state.currentPage == number
        ?<li
          key={number}
          id={number}
          className="PageNumbers_Elem Active"
          onClick={ this.goToPage  }
        >
          <small className="PageNumbers_Elem__Center">
            {number}
          </small>
        </li>
        :<li
          key={number}
          id={number}
          className="PageNumbers_Elem"
          onClick={ this.goToPage  }
        >
          <small className="PageNumbers_Elem__Center">
            {number}
          </small>
        </li>
      );
    });

  }

  goToPage = (EO) =>{
    this.props.dispatch( track_group( parseInt(this.props.trackRedux.tracksPerPage), parseInt(EO.currentTarget.id) ) );
    this.setState({currentPage:EO.currentTarget.id})
  }


    filtr = (elem) =>{
      let result = [];
      let cont = this.props.trackRedux.currContent;
      let isInArray = [];
      let key = 0;

      if(elem=="ganre"){
        for (let i = 0; i < cont.length; i++) {
          if(isInArray.indexOf(cont[i].ganre) <= -1){
            isInArray.push(cont[i].ganre)
          }
          else {
            continue
          };
        }
      }
      
      if(elem=="title"){
        for (let i = 0; i < cont.length; i++) {
          if(isInArray.indexOf(cont[i].title) <= -1){
            isInArray.push(cont[i].title)
          }
          else {
            continue
          };
        }
      }

      if(elem=="year"){
        for (let i = 0; i < cont.length; i++) {
          if(isInArray.indexOf(cont[i].year) <= -1){
            isInArray.push(cont[i].year)
          }
          else {
            continue
          };
        }
      }
      if(elem=="singer"){
        for (let i = 0; i < cont.length; i++) {
          if(isInArray.indexOf(cont[i].singer) <= -1){
            isInArray.push(cont[i].singer)
          }
          else {
            continue
          };
        }
      }

      else null
      
      result = isInArray.map(e =>
        <option key={key++}>
          {e}
        </option>
      );

      return result

    }
    
  render() {

    let filtNames=[
      {width:"130px",name:"Исполнитель",crit:"singer"},
      {width:"220px",name:"Песня",crit:"title"},
      {width:"90px",name:"Жанр",crit:"ganre"},
      {width:"90px",name:"Год",crit:"year"}
    ]

    let buttons = [2,4,8,20]

    let trackCode=trackCode=this.props.trackRedux.content.map( track =>
        <TrackStorage 
        key = {track.id} singer = {track.singer} 
        title = {track.title} year = {track.year}
        ganre = {track.ganre} 
        />
    )

    let codeFilt = filtNames.map( (filter,key)=>
      filter.name == "Песня"
      ?null
      :<div key={key}>
        <label name={filter.crit}>{filter.name}</label>
        <br/>
        <select className="FilterSelect" name={filter.crit} onChange={this.trackFilter}>
        <option value="all">все</option>
          {this.filtr(filter.crit)}
        </select>
      </div>
    )

    let headerCode = filtNames.map( (elem,key)=>
      <th key={key}  width={elem.width} className="TrackTable_Header">
        <span>{elem.name}</span>
        {this.state.arrangeMode == elem.crit + "rev"
        ?<div className="Arrange"  onClick={ () => {  this.trackArrange( elem.crit ) } }>
          <div className="ArrangeState Up"></div>
        </div>
        :this.state.arrangeMode == elem.crit
        ?<div className="Arrange"  onClick={ () => {  this.trackArrange( elem.crit ) } }>
          <div className="ArrangeState Down"></div>
        </div>
        :<div className="Arrange"  onClick={ () => {  this.trackArrange( elem.crit ) } }>
            <div className="ArrangeState Up"></div>
            <div className="ArrangeState Down"></div>
        </div>
        }
      </th>
    )

    let controlButtons = buttons.map( (elem,key)=>
      this.state.tracksPerPage == elem
      ?<div key={key} className="NumberControl_Button Active" id={parseInt(elem)} onClick={ this.trackGroup }>{elem}</div>
      :<div key={key} className="NumberControl_Button " id={parseInt(elem)} onClick={ this.trackGroup }>{elem}</div>
    )

    return (
      <div className='TrackStorageContainer'>
        <div className="MainContainer">
          <div className="TableContainer">

            <table border="2" className='TrackTable'>
            <tbody>
              <tr>
                {headerCode}
              </tr>
                {trackCode}
                </tbody>
            </table>

          </div>


          <form className="FilterForm">
            {codeFilt}
          </form>
        </div>

        <div className="Navigation">
          <ul className="PageNumbers">
            {this.renderPages()}
          </ul>
          <div className="NumberControl">
            {controlButtons}
          </div>
        </div>
      </div>
    )
    ;
  }
}

function mapStateToProps(state) {
  return{
    trackRedux: state.tracks,
  };
}


export default connect(
  mapStateToProps,
)(TrackStorageContainer);