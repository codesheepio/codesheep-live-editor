import { UPDATE_CODE } from '../actions/types'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        [action.payload.windowId]: action.payload.code,
      }
    default:
      return state
  }
}

export default reducer
