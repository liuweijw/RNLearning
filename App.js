
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
// 原生模块提供的方法
import RnToast from './src/module/RnToast'

const instructions = Platform.select({
  ios: 'IOS System',
  android: 'Android System'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  toToast() {
    RnToast.show('Test Toast', RnToast.LONG)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to RNLearning!</Text>
        <Text onPress={() => this.toToast()} style={styles.instructions}>
          来自原生初始化传值[routerType]：{this.props.routerType}，点我弹出测试
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}
