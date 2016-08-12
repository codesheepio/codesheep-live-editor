import React, { Component } from 'react'

class LiveEditor extends Component {
  render() {
    return (
      <div className="live-editor">
        Live Editor
      </div>
    )
  }
}

LiveEditor.propTypes = {
  code: React.PropTypes.string.isRequired,
}

LiveEditor.defaultProps = {
  code: '',
}

export default LiveEditor
