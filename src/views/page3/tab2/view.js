import React from 'react'
import { View, Text, Button } from 'react-native'
import { pxToDp } from '../../../util/screen'

export default self => (
  <View>
    <Text style={{ fontSize: pxToDp(36) }}>
      我的名字是：{self.props.userInfo.name}
    </Text>
    <Text style={{ fontSize: pxToDp(36) }}>
      我的性别是：{self.props.userInfo.gender}
    </Text>
    <Button
      onPress={() => self.setReduxStoreUserInfo({ name: '张三' })}
      title='改变名字'
    />
    <Button
      onPress={() => self.setReduxStoreUserInfo({ gender: '女' })}
      title='改变性别'
    />
    <Button
      onPress={() => self.setReduxStoreUserInfo({ name: '李四', gender: '男' })}
      title='还原'
    />
  </View>
)
