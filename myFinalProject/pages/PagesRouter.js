import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_About from './Page_About';
import Page_EnglishCitationContainer from './Page_EnglishCitationContainer';
import Page_UserCitation from './Page_UserCitation';
import Page_EnglishUserDictionary from './Page_EnglishUserDictionary';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_About} />
        <Route path="/citations" component={Page_EnglishCitationContainer} />
        <Route path="/usercitations" component={Page_UserCitation} />
        <Route path="/userdic" component={Page_EnglishUserDictionary} />
      </div>
    );
    
  }

}


    
export default PagesRouter;
    