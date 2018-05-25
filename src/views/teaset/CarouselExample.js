// CarouselExample.js

'use strict'

import React from 'react'
import { View, Text, Image, ScrollView, Dimensions} from 'react-native'

import {NavigationPage, ListRow, Carousel, PullPicker} from 'teaset'

export default class CarouselExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Carousel',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    this.items = ['none', 'default', 'custom']
    Object.assign(this.state, {
      width: Dimensions.get('window').width,
      control: 'none',
    })
  }

  selectControl() {
    PullPicker.show(
      'Control',
      this.items,
      this.items.indexOf(this.state.control),
      (item, index) => this.setState({control: item})
    )
  }

  renderControl() {
    const {control} = this.state
    if (control === 'default') {
      return <Carousel.Control />
    } else if (control === 'custom') {
      return (
        <Carousel.Control
          activeDot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>■</Text>}
          dot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>□</Text>}
          style={{alignItems: 'flex-end'}}
        />
      )
    }
  }

  renderPage() {
    const {width} = this.state
    return (
      <ScrollView style={{flex: 1}}>
        <Carousel
          control={this.renderControl()}
          onLayout={e => this.setState({width: e.nativeEvent.layout.width})}
          style={{height: 238}}
        >
          <Image resizeMode='cover' source={require('../../assets/images/teaset1.jpg')} style={{width, height: 238}} />
          <Image resizeMode='cover' source={require('../../assets/images/teaset2.jpg')} style={{width, height: 238}} />
          <Image resizeMode='cover' source={require('../../assets/images/teaset3.jpg')} style={{width, height: 238}} />
        </Carousel>
        <View style={{height: 20}} />
        <ListRow bottomSeparator='full' detail={this.state.control} onPress={() => this.selectControl()} title='Control' topSeparator='full' />
      </ScrollView>
    )
  }
}
