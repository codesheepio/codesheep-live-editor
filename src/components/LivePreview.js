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
    // Make React available for eval
    const React = require('react') // eslint-disable-line no-unused-vars

    try {
      const compiledCode = this.compileCode(code)
      const result = eval(compiledCode)

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
