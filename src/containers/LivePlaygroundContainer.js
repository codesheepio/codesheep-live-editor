import { connect } from 'react-redux'
import { default as actions } from '../actions/codeAction'
import LivePlayground from '../components/LivePlayground'

const mapStateToProps = (state) => {
  return { code: state.code }
}

export default connect(mapStateToProps, actions)(LivePlayground)
