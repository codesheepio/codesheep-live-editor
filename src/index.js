import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import LivePlayground from './components/LivePlayground'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <LivePlayground />
  </Provider>
  , document.getElementById('root')
)
