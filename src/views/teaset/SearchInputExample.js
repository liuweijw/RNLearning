// SearchInputExample.js

'use strict'

import React from 'react'
import {View, ScrollView} from 'react-native'

import {NavigationPage, ListRow, SearchInput} from 'teaset'

export default class SearchInputExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'SearchInput',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      valueCustom: null,
    })
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full' detail={
            <SearchInput clearButtonMode='while-editing' placeholder='Enter text' style={{width: 200}} />
          } title='Default' topSeparator='full'
        />
        <View style={{height: 20}} />
        <ListRow
          detail={
            <SearchInput clearButtonMode='while-editing' editable={false} placeholder='Enter text' style={{width: 200}} value='Readonly' />
          } title='Readonly' topSeparator='full'
        />
        <ListRow
          bottomSeparator='full' detail={
            <SearchInput clearButtonMode='while-editing' disabled placeholder='Enter text' style={{width: 200}} value='Disabled' />
          } title='Disabled'
        />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full' detail={
            <SearchInput
              iconSize={15}
              inputStyle={{color: '#8a6d3b', fontSize: 18}}
              onChangeText={text => this.setState({valueCustom: text})}
              placeholder='Custom'
              placeholderTextColor='#aaa'
              style={{width: 200, height: 40, backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b'}}
              value={this.state.valueCustom}
            />
          } title='Custom' topSeparator='full'
        />
      </ScrollView>
    )
  }
}
