import React from 'react'
import { View, Text, Platform, StyleSheet} from 'react-native'

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

export default self => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to RNLearning First!</Text>
    <Text onPress={() => self.toToast('AppRedux1 点我弹出测试!')} style={styles.instructions}>
      AppRedux1 点我弹出测试!
    </Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </View>
)
