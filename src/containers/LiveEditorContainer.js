import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions/codeAction'
import LiveEditor from '../components/LiveEditor'

class LiveEditorContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <LiveEditor code={this.props.code} updateCode={actions.updateCode} />
  }
}

LiveEditorContainer.propTypes = {
  code: React.PropTypes.string.isRequired
}

LiveEditorContainer.defaultProps = {
  code: ''
}

const mapStateToProps = (state) => {
  return { code: state.code }
}

export default connect(mapStateToProps, actions)(LiveEditorContainer)
