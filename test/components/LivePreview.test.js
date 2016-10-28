import { expect, renderComponent } from '../test-helper'
import LivePreview from '../../src/components/LivePreview'

describe('LivePreview', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      code: {
        JS_EDITOR: `var HelloMessage = React.createClass({
              render: function() {
                return <div>Hello {this.props.name}</div>;
              }
            });

            ReactDOM.render(<HelloMessage name="CodeSheep" />, mountNode);`,
      },
    }
    component = renderComponent(LivePreview, props)
  })

  it('should have a correct class', () => {
    expect(component).to.have.class('live-preview')
  })

  it('should be able to access React and ReactDOM', () => {
    props = {
      code: {
        JS_EDITOR: `const ans = React ? <div>YES</div> : <div>NO</div>
                   ReactDOM.render(ans, mountNode)`,
      },
    }
    component = renderComponent(LivePreview, props)

    expect(component).to.have.html(
      '<div data-reactroot="">YES</div>')
  })

  it('should transform and execute code, then, display result', () => {
    expect(component).to.have.html(
      '<div data-reactroot=""><!-- react-text: 2 -->Hello <!-- /react-text -->' +
      '<!-- react-text: 3 -->CodeSheep<!-- /react-text --></div>')
  })

  it('should handle ES6 class', () => {
    props = {
      code: {
        JS_EDITOR: `class Hello extends React.Component {
              render() {
                return (
                  <div>Hello {this.props.name}</div>
                )
              }
            }
            ReactDOM.render(<Hello name="CodeSheep" />, mountNode)`
      },
    }
    component = renderComponent(LivePreview, props)

    expect(component).to.have.html(
      '<div data-reactroot=""><!-- react-text: 2 -->Hello <!-- /react-text -->' +
      '<!-- react-text: 3 -->CodeSheep<!-- /react-text --></div>')
  })
})
