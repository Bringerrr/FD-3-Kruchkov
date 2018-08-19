import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { client_select } from "../redux/reduxConst";

import './EnglishMainPage.css';

class EnglishMainPage extends React.PureComponent {

//   static propTypes = {
//     info:PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       fio: PropTypes.string.isRequired,
//       balance: PropTypes.number.isRequired,
//     }),
//   };


  componentWillReceiveProps = (newProps) => {
    console.log("EnglishMain=");
    // // console.log(this.props.info)
    // this.setState({info:newProps.info});
  };

  

  render() {

    let lists = this.props.nav.map(e =>
        <li key={e.id}>{e.data}</li>
    )

    // console.log(lists)

    return(
        <div className="EnglishMainPage">

        <section className="EnglishMainPageSection">
            <header className="EnglishMainPageHeader">

                <div className="HeaderIcon">Language Center</div>
                <div className="HeaderNav">
                    <nav>
                        <ul>
                            {lists}
                        </ul>
                    </nav>
                </div>
                <div className="HeaderContacts">
                   <p>+375 29 123-45-67</p>
                </div>

            </header>

        </section>

        
        </div>
    )

  }

}


export default EnglishMainPage;