// ToastExample.js

'use strict'

import React from 'react'
import {View, ScrollView, ActivityIndicator} from 'react-native'

import {NavigationPage, ListRow, Toast, Theme} from 'teaset'

export default class ToastExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Toast',
    showBackButton: true,
  };

  static customKey = null;

  showCustom() {
    if (ToastExample.customKey) return
    ToastExample.customKey = Toast.show({
      text: 'Toast custom',
      icon: <ActivityIndicator color={Theme.toastIconTintColor} size='large' />,
      position: 'top',
      duration: 1000000,
    })
  }

  hideCustom() {
    if (!ToastExample.customKey) return
    Toast.hide(ToastExample.customKey)
    ToastExample.customKey = null
  }

  renderPage() {
    // const img = require('../../assets/images/faircup.jpg')
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow onPress={() => Toast.message('Toast message')} title='Message' topSeparator='full' />
        <ListRow onPress={() => Toast.success('Toast success')} title='Success' />
        <ListRow onPress={() => Toast.fail('Toast fail')} title='Fail' />
        <ListRow onPress={() => Toast.smile('Toast smile')} title='Smile' />
        <ListRow onPress={() => Toast.sad('Toast sad')} title='Sad' />
        <ListRow onPress={() => Toast.info('Toast info')} title='Info' />
        <ListRow bottomSeparator='full' onPress={() => Toast.stop('Toast stop')} title='Stop' />
        <View style={{height: 20}} />
        <ListRow onPress={() => this.showCustom()} title='Show custom' topSeparator='full' />
        <ListRow bottomSeparator='full' onPress={() => this.hideCustom()} title='Hide custom' />
      </ScrollView>
    )
  }
}
