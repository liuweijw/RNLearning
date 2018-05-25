// PullPickerExample.js

'use strict'

import React from 'react'
import {View, ScrollView} from 'react-native'

import {NavigationPage, ListRow, PullPicker} from 'teaset'

export default class PullPickerExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'PullPicker',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    this.items = [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
      'Filbert',
      'Grape',
      'Hickory',
      'Lemon',
      'Mango',
    ]
    Object.assign(this.state, {
      selectedIndex: null,
      modalSelectedIndex: null,
    })
  }

  show() {
    PullPicker.show(
      'Select item',
      this.items,
      this.state.selectedIndex,
      (item, index) => this.setState({selectedIndex: index})
    )
  }

  showModal() {
    PullPicker.show(
      'Select item',
      this.items,
      this.state.modalSelectedIndex,
      (item, index) => this.setState({modalSelectedIndex: index}),
      {modal: true}
    )
  }

  renderPage() {
    const {selectedIndex, modalSelectedIndex} = this.state
    const selected = (selectedIndex || selectedIndex === 0) ? this.items[selectedIndex] : null
    const modalSelected = (modalSelectedIndex || modalSelectedIndex === 0) ? this.items[modalSelectedIndex] : null
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow detail={selected} onPress={() => this.show()} title='Default' topSeparator='full' />
        <ListRow bottomSeparator='full' detail={modalSelected} onPress={() => this.showModal()} title='Modal' />
      </ScrollView>
    )
  }
}

