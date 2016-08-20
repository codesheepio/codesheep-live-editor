import { expect, renderComponent } from '../test-helper'

describe('LivePreview', () => {
  let component

  beforeEach(() => {
    // LivePreview will be modified by eval.
    // So, we need to delete cache and re-import it until we find a better solution
    delete require.cache[require.resolve('../../src/components/LivePreview')]
    const LivePreview = require('../../src/components/LivePreview').default

    const props = {
      code: `var HelloMessage = React.createClass({
              render: function() {
                return <div>Hello {this.props.name}</div>;
              }
            });

            export default <HelloMessage name="CodeSheep" />;`,
    }
    component = renderComponent(LivePreview, props)
  })

  it('should have a correct class', () => {
    expect(component).to.have.class('live-preview')
  })

  it('should transform and execute code, then, display result', () => {
    expect(component).to.have.html(
      '<div data-reactroot=""><!-- react-text: 2 -->Hello <!-- /react-text -->' +
      '<!-- react-text: 3 -->CodeSheep<!-- /react-text --></div>')
  })
})
