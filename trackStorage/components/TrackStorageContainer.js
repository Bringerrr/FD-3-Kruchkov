import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { track_arrange } from "../redux/reduxConst";
import { track_filter } from "../redux/reduxConst";

import TrackStorage from './TrackStorage';

import './TrackStorageContainer.css';
import { WSASYSCALLFAILURE } from 'constants';

class TrackStorageContainer extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    tracks:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    tracks: this.props.tracks,
    arrangeMode:"id",
    filters:null,
  };


  componentWillReceiveProps = (newProps) => {
    console.log("Props Prileteli")
  };



  trackArrange = (elem) =>{
    let rev = elem +"rev";
    (this.state.arrangeMode != elem)
    ? this.props.dispatch( track_arrange(elem) )
      + this.setState( {arrangeMode:elem} )

    : this.props.dispatch( track_arrange(rev) )
      + this.setState({arrangeMode:rev})
    console.log("STATE : "+this.state.arrangeMode)

  }

  trackFilter = (EO) => {
    this.props.dispatch( track_filter(EO.target.value,EO.target.name) );
    EO.target.value=="all"
    ?this.setState({filters:null})
    :this.setState({filters:[EO.target.value,EO.target.name]})
  }


    filtr = (elem) =>{
      let result = [];
      let cont = this.props.trackRedux.content;
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

    console.log("TrackStorageContainer render");

    let filtersArr =["ganre","singer","year"]

    let trackCode=[];

    if(this.state.filters == null){
    trackCode=this.props.trackRedux.content.map( track =>
      <TrackStorage 
      key = {track.id} singer = {track.singer} 
      title = {track.title} year = {track.year}
      ganre = {track.ganre} 
      />
    )}
    else{ 
    trackCode=this.props.trackRedux.filtContent.map( track =>
      <TrackStorage 
      key = {track.id} singer = {track.singer} 
      title = {track.title} year = {track.year}
      ganre = {track.ganre} 
      />
    )}

    console.log(trackCode)

    let codeFilt = filtersArr.map( filter=>
      <select name={filter} onChange={this.trackFilter}>
      <option selected value="all">все</option>
        {this.filtr(filter)}
      </select>
    )

    return (
      <div className='TrackStorageContainer'>
          <tbody className='TrackTable'>
              <tr>
                <th>Исполнитель<button onClick={ () => {  this.trackArrange("singer") } }>Title</button></th>
                <th>Песня<button onClick={ () => {  this.trackArrange("title") } }>Text</button></th>
                <th>Жанр<button onClick={ () => {  this.trackArrange("ganre") } }>Text</button></th>
                <th>Год<button onClick={ () => {  this.trackArrange("year") } }>Text</button></th>
              </tr>
              {trackCode}
          </tbody>
        <form>
          {codeFilt}
        </form>
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