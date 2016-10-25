import { connect } from 'react-redux'
import { updateCode } from '../actions/codeAction'
import LivePlayground from '../components/LivePlayground'

const mapStateToProps = (state) => {
  return { code: state.code }
}

export default connect(mapStateToProps, { updateCode })(LivePlayground)
