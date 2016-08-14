import React, { Component } from 'react'
import LiveEditor from '../containers/LiveEditorContainer'
import LivePreview from './LivePreview'

class LivePlayground extends Component {
  render() {
    return (
      <div className="live-playground">
        <LiveEditor code="Hi" />
        <LivePreview code="" />
      </div>
    )
  }
}

export default LivePlayground
