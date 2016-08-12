import { combineReducers } from 'redux'
import codeReducer from './codeReducer'

const rootReducer = combineReducers({
  code: codeReducer,
})

export default rootReducer
