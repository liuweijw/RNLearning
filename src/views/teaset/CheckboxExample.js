// CheckboxExample.js

'use strict'

import React from 'react'
import {View, ScrollView, Image} from 'react-native'

import {NavigationPage, ListRow, Checkbox } from 'teaset'

export default class CheckboxExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Checkbox',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      checkedSM: false,
      checkedMD: false,
      checkedLG: false,
      checkedEmpty: false,
      checkedDisable: true,
      checkedCustom: false,
    })
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow
          detail={
            <Checkbox
              checked={this.state.checkedSM}
              onChange={value => this.setState({checkedSM: value})}
              size='sm'
              title='Checkbox'
            />
          } title='Size sm' topSeparator='full'
        />
        <ListRow
          detail={
            <Checkbox
              checked={this.state.checkedMD}
              onChange={value => this.setState({checkedMD: value})}
              size='md'
              title='Checkbox'
            />
          } title='Size md'
        />
        <ListRow
          bottomSeparator='full' detail={
            <Checkbox
              checked={this.state.checkedLG}
              onChange={value => this.setState({checkedLG: value})}
              size='lg'
              title='Checkbox'
            />
          } title='Size lg'
        />
        <View style={{height: 20}} />
        <ListRow
          detail={
            <Checkbox
              checked={this.state.checkedEmpty}
              onChange={value => this.setState({checkedEmpty: value})}
            />
          } title='Empty title' topSeparator='full'
        />
        <ListRow
          bottomSeparator='full' detail={
            <Checkbox
              checked={this.state.checkedDisable}
              disabled
              onChange={value => this.setState({checkedDisable: value})}
              title='Checkbox'
            />
          } title='Disabled'
        />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full' detail={
            <Checkbox
              checked={this.state.checkedCustom}
              checkedIcon={<Image source={require('../../assets/images/icons/checkbox_checked.png')} style={{width: 15, height: 15, tintColor: '#8a6d3b'}} />}
              onChange={value => this.setState({checkedCustom: value})}
              title='Custom'
              titleStyle={{color: '#8a6d3b', paddingLeft: 4}}
              uncheckedIcon={<Image source={require('../../assets/images/icons/checkbox_unchecked.png')} style={{width: 15, height: 15, tintColor: '#8a6d3b'}} />}
            />
          } title='Custom' topSeparator='full'
        />
      </ScrollView>
    )
  }
}
