import React, { Component } from 'react'
import LiveEditor from './LiveEditor'
import LivePreview from './LivePreview'
import { JS_EDITOR } from '../constants/windowIds'

class LivePlayground extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="live-playground">
        <LiveEditor editorId={JS_EDITOR} code={this.props.code[JS_EDITOR]} updateCode={this.props.updateCode} />
        <LivePreview code={this.props.code} />
      </div>
    )
  }
}

LivePlayground.propTypes = {
  code: React.PropTypes.object.isRequired,
  updateCode: React.PropTypes.func.isRequired,
}

export default LivePlayground
