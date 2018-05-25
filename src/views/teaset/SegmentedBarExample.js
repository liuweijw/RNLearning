// SegmentedBarExample.js

'use strict'

import React from 'react'
import {View, Image, ScrollView, Switch} from 'react-native'

import {Theme, NavigationPage, ListRow, Label, SegmentedBar, Carousel} from 'teaset'
import SelectRow from './SelectRow'

export default class SegmentedBarExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'SegmentedBar',
    showBackButton: true,
  };

  constructor(props) {
    super(props)

    this.barItems = [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
    ]
    this.barScrollItems = [
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
    this.barCustomItems = ['Home', 'Store', 'Me']

    this.justifyItemItems = ['fixed', 'scrollable']
    this.indicatorTypeItems = ['none', 'boxWidth', 'itemWidth']
    this.indicatorPositionItems = ['top', 'bottom']

    Object.assign(this.state, {
      justifyItem: 'fixed',
      indicatorType: 'itemWidth',
      indicatorPosition: 'bottom',
      animated: true,
      autoScroll: true,
      activeIndex: 0,
      custom: false,
    })
  }

  onSegmentedBarChange(index) {
    if (index != this.state.activeIndex) {
      this.setState({activeIndex: index})
      if (this.refs.carousel) {
        this.refs.carousel.scrollToPage(index, false)
      }
    }
  }

  onCarouselChange(index) {
    index != this.state.activeIndex && this.setState({activeIndex: index})
  }

  renderCustomItems() {
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
    const {activeIndex} = this.state
    return this.barCustomItems.map((item, index) => {
      const isActive = index == activeIndex
      const tintColor = isActive ? Theme.primaryColor : '#989898'
      return (
        <View key={index} style={{padding: 8, alignItems: 'center'}}>
          <Image
            source={isActive ? activeIcons[index] : icons[index]}
            style={{width: 20, height: 20, tintColor}}
          />
          <Label style={{color: tintColor, paddingTop: 4}} text={item} />
        </View>
      )
    })
  }

  renderPage() {
    const {justifyItem, indicatorType, indicatorPosition, animated, autoScroll, custom, activeIndex} = this.state
    const barItems = custom ? this.barCustomItems : (justifyItem == 'scrollable' ? this.barScrollItems : this.barItems)
    return (
      <ScrollView stickyHeaderIndices={[1]} style={{flex: 1}}>
        <View style={{height: 20}} />
        <SegmentedBar
          activeIndex={activeIndex}
          animated={animated}
          autoScroll={autoScroll}
          indicatorLineColor={custom ? '#5cb85c' : undefined}
          indicatorLineWidth={custom ? 1 : undefined}
          indicatorPosition={indicatorPosition}
          indicatorPositionPadding={custom ? 3 : undefined}
          indicatorType={indicatorType}
          justifyItem={justifyItem}
          onChange={index => this.onSegmentedBarChange(index)}
        >
          {custom ? this.renderCustomItems() : barItems.map((item, index) => <SegmentedBar.Item key={'item' + index} title={item} />)}
        </SegmentedBar>
        <Carousel
          ref='carousel'
          carousel={false}
          cycle={false}
          onChange={index => this.onCarouselChange(index)}
          startIndex={activeIndex}
          style={{backgroundColor: Theme.defaultColor, height: 238, borderTopWidth: 1, borderTopColor: Theme.pageColor}}
        >
          {barItems.map((item, index) => (
            <View key={'view' + index} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Label size='xl' text={item} type='detail' />
            </View>
          ))}
        </Carousel>
        <View style={{height: 20}} />
        <SelectRow
          items={this.justifyItemItems}
          onSelected={(item, index) => this.setState({justifyItem: item})}
          title='Justify item'
          topSeparator='full'
          value={justifyItem}
        />
        <SelectRow
          items={this.indicatorTypeItems}
          onSelected={(item, index) => this.setState({indicatorType: item})}
          title='Indicator type'
          value={indicatorType}
        />
        <SelectRow
          items={this.indicatorPositionItems}
          onSelected={(item, index) => this.setState({indicatorPosition: item})}
          title='Indicator position'
          value={indicatorPosition}
        />
        <ListRow
          detail={<Switch onValueChange={value => this.setState({animated: value})} value={animated} />}
          title='Animated'
        />
        <ListRow
          bottomSeparator='full'
          detail={<Switch onValueChange={value => this.setState({autoScroll: value})} value={autoScroll} />}
          title='Auto scroll (scrollable only)'
        />
        <View style={{height: 20}} />
        <ListRow
          bottomSeparator='full'
          detail={<Switch onValueChange={value => this.setState({custom: value})} value={custom} />}
          title='Custom'
          topSeparator='full'
        />
      </ScrollView>
    )
  }
}
