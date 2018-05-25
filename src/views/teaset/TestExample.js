// DrawerExample.js

'use strict'

import React from 'react'
import {View, ScrollView} from 'react-native'

import {NavigationPage, ListRow } from 'teaset'

export default class TestExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Test',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      rootTransform: 'none',
    })
  }

  show(side) {
    alert(side)
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='click alert' onPress={() => this.show('click alert test')} topSeparator='full' />
      </ScrollView>
    )
  }
}

