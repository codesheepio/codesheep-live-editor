import types from '../actions/types'

const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CODE:
      return action.code
    default:
      return state
  }
}

export default reducer
