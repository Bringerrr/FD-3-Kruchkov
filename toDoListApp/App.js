import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './components/MainApp'
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers/index'
import { Provider } from 'react-redux'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MainApp />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
