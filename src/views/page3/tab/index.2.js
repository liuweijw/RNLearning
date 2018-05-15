import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../redux/actions'

class Tab extends Component {
  static navigationOptions = {
    title: 'Tab'
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
    return (
      <View>
        <Text style={{ fontSize: 36 }}>text view</Text>
      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Tab)
