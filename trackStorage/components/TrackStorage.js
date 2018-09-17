import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";


class TrackStorage extends React.Component {

  render() {
    
    return (
      <tr>
        <td>{this.props.singer}</td>
        <td>{this.props.title}</td>
        <td>{this.props.ganre}</td>
        <td>{this.props.year}</td>
      </tr>
    )
  }

}

function mapStateToProps (state) {
  return{
    add: state.name,
    trackRedux: state.tracks,
  };
}

export default connect (mapStateToProps)(TrackStorage);