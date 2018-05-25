// TransformViewExample.js

'use strict'

import React from 'react'
import {Image} from 'react-native'

import {Theme, NavigationPage, TransformView} from 'teaset'

export default class TransformViewExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: ' TransformView',
    showBackButton: true,
  };

  renderPage() {
    return (
      <TransformView
        maxScale={2.5}
        minScale={0.5}
        style={{backgroundColor: Theme.pageColor, flex: 1}}
      >
        <Image resizeMode='cover' source={require('../../assets/images/teaset1.jpg')} style={{width: 375, height: 300}} />
      </TransformView>
    )
  }
}
