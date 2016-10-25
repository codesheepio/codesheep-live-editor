import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { transform } from 'babel-core'
import babelPresetEs2015 from 'babel-preset-es2015'
import babelPresetReact from 'babel-preset-react'
import babelObjectRestSpread from 'babel-plugin-transform-object-rest-spread'
import { JS_EDITOR } from '../constants/windowIds'

class LivePreview extends Component {
  componentDidMount() {
    this.executeCode(this.props.code[JS_EDITOR])
  }

  componentDidUpdate(prevProps) {
    if (this.props.code[JS_EDITOR] !== prevProps.code[JS_EDITOR]) {
      this.executeCode(this.props.code[JS_EDITOR])
    }
  }

  compileCode(code) {
    return transform(
      code,
      {
        presets: [babelPresetEs2015, babelPresetReact],
        plugins: [babelObjectRestSpread],
      }
    ).code
  }

  executeCode(code) {
    // Remove previous result
    ReactDOM.unmountComponentAtNode(this.livePreview)

    try {
      const compiledCode = this.compileCode(code)

      // Prevent eval to touch global module and exports
      const privateModule = { exports: { } }

      // Construct a function taking 5 params (module, exports, React, ReactDOM, DOM node to be mounted) and will run compiledCode
      const execute = new Function(['module', 'exports', 'React', 'ReactDOM', 'mountNode'], compiledCode)

      // Run compiledCode with injected module, exports, and React, ReactDOM, and mounted node
      // Code in LiveEditor is able to call ReactDOM.render
      execute(privateModule, privateModule.exports, React, ReactDOM, this.livePreview)

      // Code must end with 'export default <ReactClass />' for being rendered with ReactDOM
      //const result = privateModule.exports.default
      //ReactDOM.render(result, this.livePreview)

      // In code, use ReactDOM.render(<ReactClass />, mountNode)
    } catch (err) {
      ReactDOM.render(
        <div className="preview-error">{err.toString()}</div>,
        this.livePreview
      )
    }
  }

  render() {
    return (
      <div className="live-preview" ref={(ref) => { this.livePreview = ref }}>
        Live Preview
      </div>
    )
  }
}

LivePreview.propTypes = {
  code: PropTypes.object.isRequired,
}

export default LivePreview
