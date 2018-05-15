import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import styles from './style'
import { pxToDp } from '../../../util/screen'

export default self => (
  <View style={{ alignItems: 'center' }}>
    <Text style={{ fontSize: pxToDp(24) }}>查询举例</Text>

    <TextInput
      onChangeText={text => self.setState({ monthText: text })}
      placeholder='month'
      style={[styles.input]}
    />
    <TextInput
      onChangeText={text => self.setState({ dayText: text })}
      placeholder='day'
      style={[styles.input]}
    />
    <Button onPress={() => self.query()} title='查询' />

    <Text>
      查询参数：{self.state.qResult.monthText} -- {self.state.qResult.dayText}
    </Text>
  </View>
)
