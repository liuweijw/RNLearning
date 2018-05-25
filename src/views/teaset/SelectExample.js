// SelectExample.js

'use strict'

import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'

import {NavigationPage, ListRow, Select} from 'teaset'

export default class SelectExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Select',
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
    this.customItems = [
      {
        text: 'Long long long long long long long',
        value: 1,
      }, {
        text: 'Short',
        value: 2,
      }, {
        text: <Image source={require('../../assets/images/teaset1_s.jpg')} style={{width: 40, height: 40}} />,
        value: 3,
      },
    ]
    Object.assign(this.state, {
      valueSM: null,
      valueMD: null,
      valueLG: null,
      valueAuto: null,
      valuePull: null,
      valuePopover: null,
      valueReadonly: 'Readonly',
      valueDisable: null,
      valueCustom: null,
    })
  }

  renderPage() {
    const {valueSM, valueMD, valueLG, valueAuto, valuePull, valuePopover, valueReadonly, valueDisable, valueCustom} = this.state
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow
          detail={
            <Select
              items={this.items}
              onSelected={(item, index) => this.setState({valueSM: item})}
              pickerTitle='Size sm'
              placeholder='Select item'
              size='sm'
              style={{width: 200}}
              value={valueSM}
            />
          }
          title='Size sm' topSeparator='full'
        />
        <ListRow
          detail={
            <Select
              items={this.items}
              onSelected={(item, index) => this.setState({valueMD: item})}
              pickerTitle='Size md'
              placeholder='Select item'
              size='md'
              style={{width: 200}}
              value={valueMD}
            />
          }
          title='Size md'
        />
        <ListRow
          bottomSeparator='full'
          detail={
            <Select
              items={this.items}
              onSelected={(item, index) => this.setState({valueLG: item})}
              pickerTitle='Size lg'
              placeholder='Select item'
              size='lg'
              style={{width: 200}}
              value={valueLG}
            />
          } title='Size lg'
        />
        <View style={{height: 20}} />
        <ListRow
          detail={
            <Select
              items={this.items}
              onSelected={(item, index) => this.setState({valueAuto: item})}
              pickerTitle='PickerType auto'
              pickerType='auto'
              placeholder='Select item'
              size='md'
              style={{width: 200}}
              value={valueAuto}
            />
          }
          title='PickerType auto'
        />
        <ListRow
          detail={
            <Select
              items={this.items}
              onSelected={(item, index) => this.setState({valuePull: item})}
              pickerTitle='PickerType pull'
              pickerType='pull'
              placeholder='Select item'
              size='md'
              style={{width: 200}}
              value={valuePull}
            />
          }
          title='PickerType pull'
        />
        <ListRow
          detail={
            <Select
              items={this.items}
              onSelected={(item, index) => this.setState({valuePopover: item})}
              pickerTitle='PickerType popover'
              pickerType='popover'
              placeholder='Select item'
              size='md'
              style={{width: 200}}
              value={valuePopover}
            />
          }
          title='PickerType popover'
        />
        <View style={{height: 20}} />
        <ListRow
          detail={
            <Select
              editable={false}
              placeholder='Select item'
              style={{width: 200}}
              value={valueReadonly}
            />
          }
          title='Readonly' topSeparator='full'
        />
        <ListRow
          bottomSeparator='full'
          detail={
            <Select
              disabled
              items={this.items}
              placeholder='Select item'
              style={{width: 200}}
              value={valueDisable}
            />
          } title='Disabled'
        />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full'
          detail={
            <Select
              getItemText={(item, index) => item.text}
              getItemValue={(item, index) => item.value}
              icon={<Text style={{color: '#8a6d3b', fontSize: 16, paddingRight: 4}}>▼</Text>}
              items={this.customItems}
              onSelected={(item, index) => this.setState({valueCustom: item.value})}
              pickerTitle='Custom'
              placeholder='Select item'
              size='lg'
              style={{width: 200, backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b'}}
              value={valueCustom}
              valueStyle={{flex: 1, color: '#8a6d3b', textAlign: 'right'}}
            />
          } title='Custom' topSeparator='full'
        />
      </ScrollView>
    )
  }
}
