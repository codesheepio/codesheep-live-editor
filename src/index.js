import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import LivePlaygroundContainer from './containers/LivePlaygroundContainer'

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
  <Provider store={store}>
    <LivePlaygroundContainer />
  </Provider>
  , document.getElementById('root')
)
