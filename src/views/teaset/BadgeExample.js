// BadgeExample.js

'use strict'

import React from 'react'
import {View, ScrollView, Text} from 'react-native'

import {NavigationPage, ListRow, Badge} from 'teaset'

export default class BadgeExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Badge',
    showBackButton: true,
  };

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow
          detail={
            <View style={{flexDirection: 'row'}}>
              <Badge count={6} />
              <View style={{width: 4}} />
              <Badge count={68} />
              <View style={{width: 4}} />
              <Badge count={689} />
              <View style={{width: 4}} />
              <Badge count='new' />
            </View>
          } title='Type capsule' topSeparator='full'
        />
        <ListRow
          detail={
            <View style={{flexDirection: 'row'}}>
              <Badge count={6} type='square' />
              <View style={{width: 4}} />
              <Badge count={68} type='square' />
              <View style={{width: 4}} />
              <Badge count={689} type='square' />
              <View style={{width: 4}} />
              <Badge count='new' type='square' />
            </View>
          } title='Type square'
        />
        <ListRow bottomSeparator='full' detail={<Badge type='dot' />} title='Type dot' />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full' detail={
            <View style={{flexDirection: 'row'}}>
              <Badge count='券' style={{backgroundColor: '#5bc0de'}} type='square' />
              <View style={{width: 4}} />
              <Badge style={{backgroundColor: '#777', paddingLeft: 0, paddingRight: 0}}>
                <Text style={{color: '#fff'}}>$</Text>
              </Badge>
            </View>
          } title='Custom' topSeparator='full'
        />
      </ScrollView>
    )
  }
}
