// MultiScrollViewExample.js

// 通过交换内外层的scrollEnabled来实现滚动支持，不可使用，因交替时触摸事件无法传递，且交替后原ScrollView无法弹回原位

'use strict'

import React from 'react'
import {Image, ScrollView} from 'react-native'

import {NavigationPage, ListRow, SegmentedView, Carousel} from 'teaset'

export default class MultiScrollViewExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'MultiScrollView',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      width: 0,
      height: 0,
      outScroll: true,
    })
  }

  onOutScrollViewScroll(e) {
    // const {y} = e.nativeEvent.contentOffset
    if (this.state.outScroll && this.state.height + e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height) {
      this.setState({outScroll: false})
    }
  }

  onOutScrollViewLayout(e) {
    const {width, height} = e.nativeEvent.layout
    if (this.state.width != width || this.state.height != height) {
      this.setState({width, height})
    }
  }

  onInnerScrollViewScroll(e) {
    // const {y} = e.nativeEvent.contentOffset
    if (!this.state.outScroll && e.nativeEvent.contentOffset.y <= 0) {
      this.setState({outScroll: true})
    }
  }

  renderPage() {
    const {width, height, outScroll} = this.state
    const headerHeight = 30
    const items = [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
      'Filbert',
      'Grape',
      'Hickory',
      'Lemon',
      'Mango',
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
    return (
      <ScrollView
        alwaysBounceVertical={false}
        onLayout={e => this.onOutScrollViewLayout(e)}
        onScroll={(e) => this.onOutScrollViewScroll(e)}
        scrollEnabled={outScroll}
        scrollEventThrottle={16}
        style={{flex: 1}}
      >
        <Carousel control style={{height: 238}}>
          <Image resizeMode='cover' source={require('../../assets/images/teaset1.jpg')} style={{width, height: 238}} />
          <Image resizeMode='cover' source={require('../../assets/images/teaset2.jpg')} style={{width, height: 238}} />
          <Image resizeMode='cover' source={require('../../assets/images/teaset3.jpg')} style={{width, height: 238}} />
        </Carousel>
        <SegmentedView style={{height: height}}>
          <SegmentedView.Sheet title='one'>
            <ScrollView
              onScroll={(e) => this.onInnerScrollViewScroll(e)}
              scrollEnabled={!outScroll}
              scrollEventThrottle={16}
              style={{height: height - headerHeight}}
            >
              {items.map((item, index) => <ListRow key={'0' + index} title={item} />)}
            </ScrollView>
          </SegmentedView.Sheet>
          <SegmentedView.Sheet title='two'>
            <ScrollView
              onScroll={(e) => this.onInnerScrollViewScroll(e)}
              scrollEnabled={!outScroll}
              scrollEventThrottle={16}
              style={{height: height - headerHeight}}
            >
              {items.map((item, index) => <ListRow key={'0' + index} title={item} />)}
            </ScrollView>
          </SegmentedView.Sheet>
        </SegmentedView>
      </ScrollView>
    )
  }
}
