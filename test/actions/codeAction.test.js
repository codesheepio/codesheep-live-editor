import { expect } from '../test-helper'
import { UPDATE_CODE } from '../../src/actions/types'
import { updateCode } from '../../src/actions/codeAction'

describe('Code Action', () => {
  it('should create action with type UPDATE_CODE', () => {
    const resultAction = updateCode('JS_EDITOR', '<TestComponent />')
    const expectedAction = {
      type: UPDATE_CODE,
      payload: {
        windowId: 'JS_EDITOR',
        code: '<TestComponent />',
      },
    }

    expect(resultAction).to.deep.equal(expectedAction)
  })
})
