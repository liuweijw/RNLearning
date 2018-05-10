import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../redux/actions'

import view from './view'

class ViewPage2 extends Component {
  static navigationOptions = {
    title: 'Page2'
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  componentWillMount() {}

  componentDidMount() {}

  // 变更ReduxStore里面的用户信息
  setReduxStoreUserInfo(userInfo) {
    this.props.setUserInfo(userInfo)
  }

  render() {
    return view(this)
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage2)
