import types from './types'

const updateCode = (code) => {
  return {
    type: types.UPDATE_CODE,
    code,
  }
}

export default {
  updateCode
}
