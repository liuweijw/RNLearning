// ButtonExample.js

'use strict'

import React from 'react'
import {View, ScrollView, Image} from 'react-native'

import {NavigationPage, ListRow, Button, Label, Theme} from 'teaset'

export default class ButtonExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Button',
    showBackButton: true,
  };

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow detail={<Button title='Button' />} title='Type default' topSeparator='full' />
        <ListRow detail={<Button title='Button' type='primary' />} title='Type primary' />
        <ListRow detail={<Button title='Button' type='secondary' />} title='Type secondary' />
        <ListRow detail={<Button title='Button' type='danger' />} title='Type danger' />
        <ListRow bottomSeparator='full' detail={<Button title='Button' type='link' />} title='Type link' />
        <View style={{height: 20}} />
        <ListRow detail={<Button size='xs' title='Button' />} title='Size xs' topSeparator='full' />
        <ListRow detail={<Button size='sm' title='Button' />} title='Size sm' />
        <ListRow detail={<Button size='md' title='Button' />} title='Size md' />
        <ListRow detail={<Button size='lg' title='Button' />} title='Size lg' />
        <ListRow bottomSeparator='full' detail={<Button size='xl' title='Button' />} title='Size xl' />
        <View style={{height: 20}} />
        <ListRow detail={<Button disabled title='Button' />} title='Type default disabled' topSeparator='full' />
        <ListRow detail={<Button disabled title='Button' type='primary' />} title='Type primary disabled' />
        <ListRow detail={<Button disabled title='Button' type='secondary' />} title='Type secondary disabled' />
        <ListRow detail={<Button disabled title='Button' type='danger' />} title='Type danger disabled' />
        <ListRow bottomSeparator='full' detail={<Button disabled title='Button' type='link' />} title='Type link disabled' />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full' detail={
            <Button style={{backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b'}}>
              <Image source={require('../../assets/images/icons/search.png')} style={{width: 16, height: 16, tintColor: '#8a6d3b'}} />
              <Label style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}} text='Search' />
            </Button>
          } title='Custom' topSeparator='full'
        />
        <View style={{height: Theme.screenInset.bottom}} />
      </ScrollView>
    )
  }
}
