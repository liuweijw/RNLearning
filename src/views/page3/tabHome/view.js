import React from 'react'
import { View, Text } from 'react-native'
import { pxToDp } from '../../../util/screen'

export default self => (
  <View>
    <Text style={{ fontSize: pxToDp(36) }}>home</Text>
    <Text style={{ fontSize: pxToDp(12) }}>不同方式进入屏幕、跳转WebView页面等</Text>
  </View>
)
