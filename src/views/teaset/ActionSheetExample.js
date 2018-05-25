// ActionSheetExample.js

'use strict'

import React from 'react'
import {View, ScrollView} from 'react-native'

import {NavigationPage, ListRow, ActionSheet} from 'teaset'

export default class ActionSheetExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'ActionSheet',
    showBackButton: true,
  };

  show(modal) {
    const items = [
      {title: 'Say hello', onPress: () => alert('Hello')},
      {title: 'Do nothing'},
      {title: 'Disabled', disabled: true},
    ]
    const cancelItem = {title: 'Cancel'}
    ActionSheet.show(items, cancelItem, {modal})
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow onPress={() => this.show(false)} title='Default' topSeparator='full' />
        <ListRow bottomSeparator='full' onPress={() => this.show(true)} title='Modal' />
      </ScrollView>
    )
  }
}
