// InputExample.js

'use strict'

import React from 'react'
import {View, ScrollView} from 'react-native'

import {NavigationPage, ListRow, Input} from 'teaset'

export default class InputExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Input',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      valueSM: null,
      valueMD: null,
      valueLG: null,
      valueReadonly: 'Readonly',
      valueDisable: 'Disable',
      valueCustom: null,
    })
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow
          detail={
            <Input
              onChangeText={text => this.setState({valueSM: text})}
              placeholder='Size sm'
              size='sm'
              style={{width: 200}}
              value={this.state.valueSM}
            />
          } title='Size sm' topSeparator='full'
        />
        <ListRow
          detail={
            <Input
              onChangeText={text => this.setState({valueMD: text})}
              placeholder='Size md'
              size='md'
              style={{width: 200}}
              value={this.state.valueMD}
            />
          } title='Size md'
        />
        <ListRow
          bottomSeparator='full' detail={
            <Input
              onChangeText={text => this.setState({valueLG: text})}
              placeholder='Size lg'
              size='lg'
              style={{width: 200}}
              value={this.state.valueLG}
            />
          } title='Size lg'
        />
        <View style={{height: 20}} />
        <ListRow
          detail={
            <Input
              editable={false}
              style={{width: 200}}
              value={this.state.valueReadonly}
            />
          } title='Readonly' topSeparator='full'
        />
        <ListRow
          bottomSeparator='full' detail={
            <Input
              disabled
              style={{width: 200}}
              value={this.state.valueDisable}
            />
          } title='Disabled'
        />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full' detail={
            <Input
              onChangeText={text => this.setState({valueCustom: text})}
              placeholder='Custom'
              style={{width: 200, backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b', color: '#8a6d3b', textAlign: 'right'}}
              value={this.state.valueCustom}
            />
          } title='Custom' topSeparator='full'
        />
      </ScrollView>
    )
  }
}
