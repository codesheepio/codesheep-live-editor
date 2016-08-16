import { expect } from '../test-helper'
import types from '../../src/actions/types'
import actions from '../../src/actions/codeAction'

describe('Code Action', () => {
  it('should create action with type UPDATE_CODE', () => {
    const resultAction = actions.updateCode('<TestComponent />')
    const expectedAction = {
      type: types.UPDATE_CODE,
      code: '<TestComponent />',
    }

    expect(resultAction).to.deep.equal(expectedAction)
  })
})
