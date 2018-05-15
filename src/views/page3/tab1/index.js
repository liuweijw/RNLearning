import React, { Component } from 'react'
import { Image } from 'react-native'
import view from './view'
import RnToast from '../../../module/RnToast'
import { pxToDp } from '../../../util/screen'

export default class Tab1 extends Component {
  static navigationOptions = {
    title: '网络相关',
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
    this.state = { // 动态定义state
      qResult: {},
      monthText: '',
      dayText: ''
    }
  }

  query() {
    RnToast.show('查询参数' + this.state.monthText + '|' + this.state.dayText, RnToast.SHORT)
    const qResult = {
      monthText: this.state.monthText,
      dayText: this.state.dayText
    }
    this.setState({ qResult })
  }

  render() {
    return view(this)
  }
}
