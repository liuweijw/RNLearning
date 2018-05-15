import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../redux/actions'
import { pxToDp } from '../../../util/screen'

import view from './view'

class TabHome extends Component {
  static navigationOptions = {
    title: 'Tab首页',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../../assets/images/tab_home_active.png')
        : require('../../../assets/images/tab_home.png')
      return <Image source={icon} style={{ height: pxToDp(22), width: pxToDp(22) }} />
    }
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  componentWillMount() { }

  componentDidMount() { }

  render() {
    return view(this)
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

export default connect(mapStateToProps, mapDispatchToProps)(TabHome)
