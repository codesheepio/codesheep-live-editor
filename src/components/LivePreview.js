import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { transform } from 'babel-core'
import babelPresetEs2015 from 'babel-preset-es2015'
import babelPresetReact from 'babel-preset-react'

class LivePreview extends Component {
  componentDidMount() {
    this.executeCode(this.props.code)
  }

  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) {
      this.executeCode(this.props.code)
    }
  }

  compileCode(code) {
    return transform(
      code,
      { presets: [babelPresetEs2015, babelPresetReact] }
    ).code
  }

  executeCode(code) {
    // Remove previous result
    ReactDOM.unmountComponentAtNode(this.livePreview)

    try {
      const compiledCode = this.compileCode(code)

      // Prevent eval to touch global module and exports
      const privateModule = { exports: { } }

      // Construct a function taking 3 params (module, exports, React) and will run compiledCode
      const execute = new Function(['module', 'exports', 'React'], compiledCode)

      // Run compiledCode with injected module, exports, and React
      execute(privateModule, privateModule.exports, React)

      // Code must end with 'export default <ReactClass />' for being rendered with ReactDOM
      const result = privateModule.exports.default

      ReactDOM.render(result, this.livePreview)
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
  code: React.PropTypes.string.isRequired,
}

export default LivePreview
