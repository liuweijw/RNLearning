
import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'

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

class ReduxRoute extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to RNLearning DEFAULT!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

export default ReduxRoute
