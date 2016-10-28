import React, { Component, PropTypes } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

require('codemirror/mode/jsx/jsx')

class LiveEditor extends Component {
  constructor(props) {
    super(props)
    this.handleCodeChange = this.handleCodeChange.bind(this)
  }

  handleCodeChange(code) {
    this.props.updateCode(this.props.editorId, code)
  }

  render() {
    return (
      <div className="live-editor">
        <CodeMirror
          ref={(ref) => { this.wrapper = ref }}
          className="codemirror"
          external="true"
          options={this.props.options}
          value={this.props.code}
          onChange={this.handleCodeChange}
        />
      </div>
    )
  }
}

LiveEditor.propTypes = {
  editorId: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  updateCode: PropTypes.func.isRequired,
}

LiveEditor.defaultProps = {
  code: '',
}

export default LiveEditor
