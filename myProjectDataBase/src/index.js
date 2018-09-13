import React from 'react';
import ReactDOM from 'react-dom';

import ListPosts from './Containers/ListPosts';
import Login from './Containers/Login';
import CreateAccount from './Containers/CreateAccount';
import UserCitations from './Containers/UserCitations';

import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/* {this.children.props.history.location.pathname !== "/CreateAccount" || "/Login" 
        ?<div>
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
          <NavLink to="/YourCitations" exact className="PageLink" activeClassName="ActivePageLink">Ваши цитаты</NavLink>
        </div>
        :null} */}
      <Switch>
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/Login" component={Login} />
        <Route path="/" component={ListPosts}/>
        <Route path="/YourCitations" component={UserCitations}/>
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
