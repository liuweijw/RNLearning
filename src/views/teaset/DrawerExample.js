// DrawerExample.js

'use strict'

import React from 'react'
import {View, ScrollView, Image} from 'react-native'

import {Theme, NavigationPage, ListRow, Drawer, Button, Label} from 'teaset'
import SelectRow from './SelectRow'

export default class DrawerExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Drawer',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      rootTransform: 'none',
    })
  }

  show(side) {
    const {rootTransform} = this.state
    if (side === 'left' || side === 'right') {
      this.drawer = Drawer.open(this.renderDrawerMenu(), side, rootTransform)
    } else {
      this.drawer = Drawer.open(this.renderDrawerBox(side), side, rootTransform, {containerStyle: {backgroundColor: 'rgba(0, 0, 0, 0)'}})
    }
  }

  renderDrawerMenu() {
    return (
      <View style={{backgroundColor: Theme.defaultColor, width: 260, flex: 1}}>
        <View style={{height: 60}} />
        <ListRow
          icon={
            <View style={{paddingRight: 12}}>
              <Image source={require('../../assets/images/icons/me_active.png')} style={{width: 30, height: 30, tintColor: Theme.primaryColor}} />
            </View>
          }
          title='User name'
        />
        <ListRow
          icon={require('../../assets/images/icons/home_active.png')}
          title='Home'
        />
        <ListRow
          bottomSeparator='none'
          icon={require('../../assets/images/icons/store_active.png')}
          title='Store'
        />
        <View style={{flex: 1}} />
        <Button onPress={() => this.drawer && this.drawer.close()} size='sm' title='Hide' type='link' />
      </View>
    )
  }

  renderDrawerBox(side) {
    // Overflow is not supported on Android, then use a higher container view to implement this functionality
    return (
      <View style={{
        height: 290,
        justifyContent: side === 'top' ? 'flex-start' : 'flex-end',
      }}
      >
        <View style={{backgroundColor: Theme.defaultColor, height: 260}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Label size='xl' text='Drawer' type='detail' />
          </View>
        </View>
        <Image
          source={require('../../assets/images/faircup.jpg')}
          style={{
            position: 'absolute',
            top: side === 'bottom' ? 0 : undefined,
            bottom: side === 'top' ? 0 : undefined,
            left: 12,
            width: 60,
            height: 60,
            borderRadius: 30
          }}
        />
      </View>
    )
  }

  renderPage() {
    const {rootTransform} = this.state
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow onPress={() => this.show('left')} title='Left side' topSeparator='full' />
        <ListRow onPress={() => this.show('right')} title='Right side' />
        <ListRow onPress={() => this.show('top')} title='Top side' />
        <ListRow bottomSeparator='full' onPress={() => this.show('bottom')} title='Bottom side' />
        <View style={{height: 20}} />
        <SelectRow
          bottomSeparator='full'
          items={['none', 'translate', 'scale']}
          onSelected={(item, index) => this.setState({rootTransform: item})}
          title='Root transform'
          topSeparator='full'
          value={rootTransform}
        />
      </ScrollView>
    )
  }
}

