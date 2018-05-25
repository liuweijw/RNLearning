// SegmentedViewExample.js

'use strict'

import React from 'react'
import {View, Image, Switch} from 'react-native'

import {Theme, NavigationPage, ListRow, SegmentedView, Label, PullPicker} from 'teaset'

export default class SegmentedViewExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'SegmentedView',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    this.items = ['projector', 'carousel']
    Object.assign(this.state, {
      type: 'projector',
      custom: false,
      activeIndex: 0,
    })
  }

  selectType() {
    PullPicker.show(
      'Type',
      this.items,
      this.items.indexOf(this.state.type),
      (item, index) => this.setState({type: item})
    )
  }

  renderTitle(index) {
    const titles = ['One', 'Two', 'Three']
    const {custom, activeIndex} = this.state
    if (!custom) return titles[index]

    const icons = [
      require('../../assets/images/icons/home.png'),
      require('../../assets/images/icons/store.png'),
      require('../../assets/images/icons/me.png'),
    ]
    const activeIcons = [
      require('../../assets/images/icons/home_active.png'),
      require('../../assets/images/icons/store_active.png'),
      require('../../assets/images/icons/me_active.png'),
    ]
    const isActive = index == activeIndex
    const tintColor = isActive ? Theme.primaryColor : '#989898'

    return (
      <View key={index} style={{alignItems: 'center'}}>
        <Image
          source={isActive ? activeIcons[index] : icons[index]}
          style={{width: 20, height: 20, tintColor}}
        />
        <Label style={{color: tintColor, paddingTop: 4}} text={titles[index]} />
      </View>
    )
  }

  renderPage() {
    const {custom} = this.state
    return (
      <View style={{flex: 1}}>
        <SegmentedView
          activeIndex={this.state.activeIndex}
          indicatorLineColor={custom ? '#5cb85c' : undefined}
          indicatorLineWidth={custom ? 1 : undefined}
          indicatorPositionPadding={custom ? 3 : undefined}
          onChange={index => this.setState({activeIndex: index})}
          style={{flex: 1}}
          type={this.state.type}
        >
          <SegmentedView.Sheet title={this.renderTitle(0)}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Label size='xl' text='Segment one' type='detail' />
            </View>
          </SegmentedView.Sheet>
          <SegmentedView.Sheet title={this.renderTitle(1)}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Label size='xl' text='Segment two' type='detail' />
            </View>
          </SegmentedView.Sheet>
          <SegmentedView.Sheet title={this.renderTitle(2)}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Label size='xl' text='Segment three' type='detail' />
            </View>
          </SegmentedView.Sheet>
        </SegmentedView>
        <View style={{height: 20}} />
        <ListRow
          detail={this.state.type}
          onPress={() => this.selectType()}
          title='Type'
          topSeparator='full'
        />
        <ListRow
          bottomSeparator='full'
          detail={<Switch onValueChange={value => this.setState({custom: value})} value={this.state.custom} />}
          title='Custom'
        />
        <View style={{height: Theme.screenInset.bottom}} />
      </View>
    )
  }
}
