import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'

require('codemirror/mode/jsx/jsx')

class LiveEditor extends Component {
  constructor(props) {
    super(props)
    this.handleCodeChange = this.handleCodeChange.bind(this)
  }

  handleCodeChange(code) {
    console.log('handleCodeChange') // eslint-disable-line
    this.props.updateCode(code)
  }

  render() {
    const options = {
      mode: 'jsx',
      lineWrapping: true,
      smartIndent: true,
      matchBrackets: true,
      theme: 'monokai',
      readOnly: false,
    }

    return (
      <div className="live-editor">
        <CodeMirror
          ref={(ref) => { this.codeMirror = ref }}
          className="codemirror"
          external="true"
          options={options}
          value={this.props.code}
          onChange={this.handleCodeChange}
        />
      </div>
    )
  }
}

/*const LiveEditor = ({code, updateCode}) => {

  const handleCodeChange = (code) => {
    console.log('change') // eslint-disable-line
    updateCode(code)
  }

  const options = {
    mode: 'jsx',
    lineWrapping: true,
    smartIndent: true,
    matchBrackets: true,
    theme: 'monokai',
    readOnly: false,
  }

  return (
    <div className="live-editor">
      <CodeMirror
        className="codemirror"
        external="true"
        options={options}
        value={code}
        onChange={handleCodeChange}
      />
    </div>
  )
}*/

LiveEditor.propTypes = {
  code: React.PropTypes.string.isRequired,
  updateCode: React.PropTypes.func.isRequired,
}

LiveEditor.defaultProps = {
  code: '',
}

export default LiveEditor
