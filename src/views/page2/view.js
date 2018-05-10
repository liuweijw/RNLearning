import React from 'react'
import { View, Text, Button } from 'react-native'

export default self => (
  <View>
    <Text style={{ fontSize: 36 }}>text view</Text>
    <Text style={{ marginTop: 10 }}>Redux userInfo gender: {self.props.userInfo.gender}</Text>
    <Button
      onPress={() => self.setReduxStoreUserInfo({ gender: '男' })}
      style={{ marginTop: 10 }}
      title='改变Redux用户性别'
    />
    <Text style={{ marginTop: 10 }}> </Text>
    <Button
      onPress={() => self.setReduxStoreUserInfo({ gender: '女' })}
      style={{ marginTop: 10 }}
      title='还原Redux用户性别'
    />
  </View>
)
