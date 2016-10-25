import { expect } from '../test-helper'
import codeReducer from '../../src/reducers/codeReducer'
import { UPDATE_CODE } from '../../src/actions/types'

describe('Code Reducer', () => {
  let curState

  beforeEach(() => {
    curState = {
      JS_EDITOR: 'import React from \'react\'\n' +
                 '\n' +
                 'var HelloMessage = React.createClass({\n' +
                 '  render: function() {\n' +
                 '    return <div>Hello {this.props.name}</div>;\n' +
                 '  }\n' +
                 '});\n' +
                 '   \n' +
                 'export default <HelloMessage name="John" />;',
    }
  })

  it('should return correct initial state', () => {
    const resultState = codeReducer(undefined, {})
    const expectedState = {}

    expect(resultState).to.deep.equal(expectedState)
  })

  it('should update state with new code', () => {
    const newCode = 'var TestComponent = React.createClass({\n' +
                    '  render: function() {\n' +
                    '    return <div>Test {this.props.name}</div>;\n' +
                    '  }\n' +
                    '});\n' +
                    '   \n' +
                    'ReactDOM.render(<TestComponent name="Alice" />, mountNode);'
    const action = {
      type: UPDATE_CODE,
      payload: {
        windowId: 'JS_EDITOR',
        code: newCode,
      }
    }
    const resultState = codeReducer(curState, action)
    const expectedState = {
      JS_EDITOR: newCode,
    }

    expect(resultState).to.deep.equal(expectedState)
  })
})
