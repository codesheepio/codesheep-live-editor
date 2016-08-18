import { expect, renderComponent } from '../test-helper'
import LivePreview from '../../src/components/LivePreview'

describe('LivePreview', () => {
  let component

  beforeEach(() => {
    const props = {
      code: 'import React from \'react\'\n' +
            '\n' +
            'var HelloMessage = React.createClass({\n' +
            '  render: function() {\n' +
            '    return <div>Hello {this.props.name}</div>;\n' +
            '  }\n' +
            '});\n' +
            '   \n' +
            'export default <HelloMessage name="John" />;',
    }
    console.log('Before render') // eslint-disable-line
    console.log(LivePreview) // eslint-disable-line
    component = renderComponent(LivePreview, props)
    console.log('After render') // eslint-disable-line
    console.log(LivePreview) // eslint-disable-line
  })

  it.only('should have a correct class', () => {
    expect(component).to.have.class('live-preview')
  })

  it('should transform and execute code, then, display result', () => {
    expect(component).to.have.html(
      '<div data-reactroot=""><!-- react-text: 2 -->Hello <!-- /react-text -->' +
      '<!-- react-text: 3 -->John<!-- /react-text --></div>')
  })
})
