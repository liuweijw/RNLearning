// StepperExample.js

'use strict'

import React from 'react'
import {View, ScrollView, Text} from 'react-native'

import {NavigationPage, ListRow, Stepper} from 'teaset'

export default class StepperExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Stepper',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      valueCustom: 1,
    })
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow detail={<Stepper />} title='Default' topSeparator='full' />
        <ListRow detail={<Stepper defaultValue={1} max={10} min={1} />} title='Min & max' />
        <ListRow bottomSeparator='full' detail={<Stepper defaultValue={0.8} step={0.005} valueFormat={v => (v * 100).toFixed(1) + '%'} valueStyle={{minWidth: 60}} />} title='Step' />
        <View style={{height: 20}} />
        <ListRow detail={<Stepper editable={false} />} title='Readonly' topSeparator='full' />
        <ListRow bottomSeparator='full' detail={<Stepper disabled />} title='Disabled' />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full' detail={
            <Stepper
              addButton={
                <View style={{backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b', borderWidth: 1, borderRadius: 4, width: 20, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: '#8a6d3b'}}>＋</Text>
                </View>
              }
              max={100}
              min={0}
              onChange={v => this.setState({valueCustom: v})}
              showSeparator={false}
              style={{borderWidth: 0}}
              subButton={
                <View style={{backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b', borderWidth: 1, borderRadius: 4, width: 20, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: '#8a6d3b'}}>－</Text>
                </View>
              }
              value={this.state.valueCustom}
              valueStyle={{color: '#8a6d3b'}}
            />
          } title='Custom' topSeparator='full'
        />
      </ScrollView>
    )
  }
}
