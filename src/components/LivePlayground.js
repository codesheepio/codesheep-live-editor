import React, { Component } from 'react'
import LiveEditor from './LiveEditor'
import LivePreview from './LivePreview'

class LivePlayground extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="live-playground">
        <LiveEditor code={this.props.code} updateCode={this.props.updateCode} />
        <LivePreview code={this.props.code} />
      </div>
    )
  }
}

LivePlayground.propTypes = {
  code: React.PropTypes.string.isRequired,
  updateCode: React.PropTypes.func.isRequired,
}

LivePlayground.defaultProps = {
  code: '',
}

export default LivePlayground
