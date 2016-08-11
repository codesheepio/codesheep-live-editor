import { expect } from '../test-helper'
import codeReducer from '../../src/reducers/codeReducer'
import types from '../../src/actions/types'

describe('Code Reducer', () => {
  let curState

  beforeEach(() => {
    curState = 'import React from \'react\'\n' +
               '\n' +
               'var HelloMessage = React.createClass({\n' +
               '  render: function() {\n' +
               '    return <div>Hello {this.props.name}</div>;\n' +
               '  }\n' +
               '});\n' +
               '   \n' +
               'export default <HelloMessage name="John" />;'
  })

  it('should return correct initial state', () => {
    const resultState = codeReducer(undefined, {})
    const expectedState = ''

    expect(resultState).to.equal(expectedState)
  })

  it('should update state with new code', () => {
    const newCode = 'import React from \'react\'\n' +
                    '\n' +
                    'var TestComponent = React.createClass({\n' +
                    '  render: function() {\n' +
                    '    return <div>Test {this.props.name}</div>;\n' +
                    '  }\n' +
                    '});\n' +
                    '   \n' +
                    'export default <TestComponent name="Alice" />;'
    const action = {
      type: types.UPDATE_CODE,
      code: newCode,
    }
    const resultState = codeReducer(curState, action)
    const expectedState = newCode

    expect(resultState).to.equal(expectedState)
  })
})
