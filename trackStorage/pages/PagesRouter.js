import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_TrackStorageContainer from './Page_TrackStorageContainer';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" component={Page_TrackStorageContainer} />
        <Route path="/2" component={Page_TrackStorageContainer} />
      </div>
    );
    
  }

}


    
export default PagesRouter;
    