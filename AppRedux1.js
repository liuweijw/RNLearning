
import React, { Component } from 'react'
// import { NativeAppEventEmitter, DeviceEventEmitter } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './src/redux/actions'

// import RnToast from './src/module/RnToast'

import Page1 from './src/views/page1'

class ReduxRoute extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // 注册绑定事件，IOS目前还未兼容好
    // const emitter = Platform.OS === 'ios' ? NativeAppEventEmitter : DeviceEventEmitter
    // emitter.addListener('keyboardWillShow', data => {
    //   this.props.setUserInfo({ routerType: data.key })
    //   RnToast.show('event listener success' + data.key, RnToast.LONG)
    // })
  }

  componentDidMount() {
  }

  render() {
    return <Page1 />
  }
}

// 关联 redux store
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxRoute)
