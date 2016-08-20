import React, { Component } from 'react'
import LiveEditor from './LiveEditor'

class LivePlayground extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // LivePreview will be modified by eval.
    // So, we need to delete cache and re-import it until we find a better solution
    delete require.cache[require.resolve('./LivePreview')]
    const LivePreview = require('./LivePreview').default

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
