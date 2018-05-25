// ModalIndicatorExample.js

'use strict'

import React from 'react'
import {View, ScrollView} from 'react-native'

import {NavigationPage, ListRow, ModalIndicator} from 'teaset'

export default class ModalIndicatorExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'ModalIndicator',
    showBackButton: true,
  };

  show() {
    let secs = 5
    ModalIndicator.show(`Close after ${secs} sec(s)`)
    const timer = setInterval(() => {
      secs--
      ModalIndicator.show(`Close after ${secs} sec(s)`)
      if (secs < 0) {
        clearInterval(timer)
        ModalIndicator.hide()
      }
    }, 1000)
  }

  renderPage() {
    // const img = require('../../assets/images/faircup.jpg')
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow bottomSeparator='full' onPress={() => this.show()} title='Show' topSeparator='full' />
      </ScrollView>
    )
  }
}
