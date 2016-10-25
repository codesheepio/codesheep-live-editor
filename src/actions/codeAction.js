import { UPDATE_CODE } from './types'

const updateCode = (windowId, code) => {
  return {
    type: UPDATE_CODE,
    payload: {
      windowId,
      code,
    }
  }
}

export {
  updateCode // eslint-disable-line import/prefer-default-export
}
