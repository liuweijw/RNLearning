// AlbumViewExample.js

'use strict'

import React from 'react'
import {View, Image, TouchableOpacity, StatusBar} from 'react-native'

import {NavigationPage, AlbumView, Overlay } from 'teaset'

export default class AlbumViewExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: ' AlbumView',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    this.images = [
      require('../../assets/images/teaset1.jpg'),
      require('../../assets/images/teaset2.jpg'),
      require('../../assets/images/teaset3.jpg'),
      require('../../assets/images/faircup.jpg'),
    ]
    this.thumbs = [
      require('../../assets/images/teaset1_s.jpg'),
      require('../../assets/images/teaset2_s.jpg'),
      require('../../assets/images/teaset3_s.jpg'),
      require('../../assets/images/faircup_s.jpg'),
    ]
  }

  onImagePress(index) {
    const pressView = this.refs['it' + index]
    pressView.measure((x, y, width, height, pageX, pageY) => {
      const overlayView = (
        <Overlay.PopView
          ref={v => this.fullImageView = v}
          containerStyle={{flex: 1}}
          customBounds={{x: pageX, y: pageY, width, height}}
          overlayOpacity={1}
          style={{}}
          type='custom'
        >
          <AlbumView
            control
            defaultIndex={index}
            images={this.images}
            onPress={() => this.fullImageView && this.fullImageView.close()}
            style={{flex: 1}}
            thumbs={this.thumbs}
          />
          <StatusBar animated={false} hidden />
        </Overlay.PopView>
      )
      Overlay.show(overlayView)
    })
  }

  renderPage() {
    return (
      <View style={{flex: 1}}>
        <View style={{padding: 20, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
          {this.thumbs.map((item, index) => (
            <View key={index} style={{width: 100, height: 100, padding: 10}}>
              <TouchableOpacity ref={'it' + index} onPress={() => this.onImagePress(index)} style={{flex: 1}}>
                <Image resizeMode='cover' source={item} style={{width: null, height: null, flex: 1}} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
/*
      {uri: 'https://b-ssl.duitang.com/uploads/item/201207/23/20120723200549_ZhRre.thumb.700_0.jpeg'},
      {uri: 'https://b-ssl.duitang.com/uploads/item/201207/23/20120723200511_8ihrP.thumb.700_0.jpeg'},
      {uri: 'https://b-ssl.duitang.com/uploads/item/201207/23/20120723200118_acfUi.thumb.700_0.jpeg'},
      {uri: 'http://img.warting.com/allimg/2017/0308/exsaicsvc5w-92.jpg'},
      {uri: 'http://img.warting.com/allimg/2017/0308/o4ovnsq2uqj-96.jpg'},

import AlbumSheet from 'teaset/components/AlbumView/AlbumSheet';

        <View style={{flexDirection:'row', flex: 1}}>
          <View style={{width: 100}} />
          <AlbumSheet
            style={{backgroundColor: '#faa', flex: 1}}
            image={require('../../assets/images/teaset1.jpg')}
            ref='albumSheet'
            />
        </View>
        <View style={{flexDirection:'row'}}>
          <Button title='left' onPress={() => this.refs.albumSheet.scrollTo('left')} />
          <Button title='center' onPress={() => this.refs.albumSheet.scrollTo('center')} />
          <Button title='right' onPress={() => this.refs.albumSheet.scrollTo('right')} />
        </View>

*/
