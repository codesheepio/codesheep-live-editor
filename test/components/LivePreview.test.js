import { expect, renderComponent } from '../test-helper'
import LivePreview from '../../src/components/LivePreview'

describe('LivePreview', () => {
  let component

  beforeEach(() => {
    const props = {
      code: `var HelloMessage = React.createClass({
              render: function() {
                return <div>Hello {this.props.name}</div>;
              }
            });

            ReactDOM.render(<HelloMessage name="CodeSheep" />, mountNode);`,
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
