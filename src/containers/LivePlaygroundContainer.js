import React, { Component } from 'react'
import { connect } from 'react-redux'
import { default as actions } from '../actions/codeAction'
import LivePlayground from '../components/LivePlayground'

class LivePlaygroundContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LivePlayground code={this.props.code} updateCode={this.props.updateCode} />
    )
  }
}

LivePlaygroundContainer.propTypes = {
  code: React.PropTypes.string.isRequired,
  updateCode: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { code: state.code }
}

export default connect(mapStateToProps, actions)(LivePlaygroundContainer)
