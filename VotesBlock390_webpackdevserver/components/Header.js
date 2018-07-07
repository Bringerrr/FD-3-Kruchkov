import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends React.Component {

  // static propTypes = {
  //   header: PropTypes.string.isRequired,
  // };
  
  render() {
    // console.log(this.props)
    return(
        <div className="Header">
          <span>{this.props.text}</span>
          <span>{this.props.url}</span>
          <span>{this.props.count}</span>
          <span>{this.props.price}</span>
        </div>
    )
  }

}

export default Header;
