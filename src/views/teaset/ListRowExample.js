// ListRowExample.js

'use strict'

import React from 'react'
import {View, ScrollView, Image} from 'react-native'

import {NavigationPage, ListRow, Label} from 'teaset'

export default class ListRowExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: ' ListRow',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow detail='Detail' title='Title' topSeparator='full' />
        <ListRow title={<Label style={{fontSize: 18, color: '#31708f'}} text='Custom title' />} />
        <ListRow
          detail={
            <View style={{backgroundColor: '#5bc0de', width: 60, height: 24, borderRadius: 4}} />
          } title='Custom detail'
        />
        <ListRow
          detail='React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.' title='Long detail'
        />
        <ListRow
          detail='React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.' title='Title place top' titlePlace='top'
        />
        <ListRow icon={require('../../assets/images/icons/config.png')} title='Icon' />
        <ListRow accessory='indicator' title='Accessory indicator' />
        <ListRow accessory={<Image source={require('../../assets/images/icons/location.png')} />} title='Custom accessory' />
        <ListRow onPress={() => alert('Press!')} title='Press able' />
        <ListRow
          bottomSeparator='full'
          detail='Swipe to show action buttons'
          swipeActions={[
            <ListRow.SwipeActionButton title='Cancel' />,
            <ListRow.SwipeActionButton onPress={() => alert('Remove')} title='Remove' type='danger' />,
          ]}
          title='Swipe able'
        />
      </ScrollView>
    )
  }
}
