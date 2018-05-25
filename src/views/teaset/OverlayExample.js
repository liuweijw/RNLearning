// OverlayExample.js

'use strict'

import React from 'react'
import {View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native'

import {Theme, NavigationPage, ListRow, Overlay, Label, Button, Checkbox} from 'teaset'

export default class OverlayExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Overlay',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      black: true,
      shadow: false,
      showArrow: true,
    })
  }

  showDefault(transparent, modal, text) {
    const overlayView = (
      <Overlay.View
        ref={v => this.overlayView = v}
        modal={modal}
        overlayOpacity={transparent ? 0 : null}
        style={{alignItems: 'center', justifyContent: 'center'}}
      >
        <View style={{backgroundColor: transparent ? '#333' : Theme.defaultColor, padding: 40, borderRadius: 15, alignItems: 'center'}}>
          <Label size='xl' text={text} type='danger' />
          {modal ? <View style={{height: 20}} /> : null}
          {modal ? <Button onPress={() => this.overlayView && this.overlayView.close()} title='Close' /> : null}
        </View>
      </Overlay.View>
    )
    Overlay.show(overlayView)
  }

  showPop(type, modal, text) {
    const overlayView = (
      <Overlay.PopView
        ref={v => this.overlayPopView = v}
        modal={modal}
        style={{alignItems: 'center', justifyContent: 'center'}}
        type={type}
      >
        <View style={{backgroundColor: Theme.defaultColor, minWidth: 260, minHeight: 180, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
          <Label size='xl' text={text} type='title' />
          {modal ? <View style={{height: 60}} /> : null}
          {modal ? <Button onPress={() => this.overlayPopView && this.overlayPopView.close()} title='Close' /> : null}
        </View>
      </Overlay.PopView>
    )
    Overlay.show(overlayView)
  }

  showPopCustom(imageSource, fromView) {
    fromView.measure((x, y, width, height, pageX, pageY) => {
      const overlayView = (
        <Overlay.PopView
          ref={v => this.customPopView = v}
          customBounds={{x: pageX, y: pageY, width, height}}
          overlayOpacity={1}
          style={{alignItems: 'center', justifyContent: 'center'}}
          type='custom'
        >
          <TouchableWithoutFeedback onPress={() => this.customPopView && this.customPopView.close()}>
            <Image resizeMode='cover' source={imageSource} />
          </TouchableWithoutFeedback>
        </Overlay.PopView>
      )
      Overlay.show(overlayView)
    })
  }

  showPull(side, modal, text, rootTransform) {
    const overlayView = (
      <Overlay.PullView ref={v => this.overlayPullView = v} modal={modal} rootTransform={rootTransform} side={side}>
        <View style={{backgroundColor: Theme.defaultColor, minWidth: 300, minHeight: 260, justifyContent: 'center', alignItems: 'center'}}>
          <Label size='xl' text={text} type='title' />
          {modal ? <View style={{height: 60}} /> : null}
          {modal ? <Button onPress={() => this.overlayPullView && this.overlayPullView.close()} title='Close' /> : null}
        </View>
      </Overlay.PullView>
    )
    Overlay.show(overlayView)
  }

  showPopover(view, direction, align) {
    const {black, shadow, showArrow} = this.state
    const blackStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
    }
    const whiteStyle = {
      ...blackStyle,
      backgroundColor: '#fff',
    }
    const shadowStyle = {
      shadowColor: '#777',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 2,
    }
    const popoverStyle = [].concat(black ? blackStyle : whiteStyle).concat(shadow ? shadowStyle : null)

    view.measure((x, y, width, height, pageX, pageY) => {
      const fromBounds = {x: pageX, y: pageY, width, height}
      const overlayView = (
        <Overlay.PopoverView align={align} direction={direction} directionInsets={4} fromBounds={fromBounds} popoverStyle={popoverStyle} showArrow={showArrow}>
          <Label size='lg' style={{color: black ? '#fff' : '#000'}} text={direction + ' ' + align} />
        </Overlay.PopoverView>
      )
      Overlay.show(overlayView)
    })
  }

  showMulti() {
    const overlayView = (
      <Overlay.PullView modal={false}>
        <View style={{backgroundColor: Theme.defaultColor, minWidth: 200, minHeight: 260, justifyContent: 'center', alignItems: 'center'}}>
          <Label size='xl' text='Overlay' type='title' />
          <View style={{height: 60}} />
          <Button onPress={() => this.showDefault(false, true, 'New overlay')} title='New overlay' />
        </View>
      </Overlay.PullView>
    )
    Overlay.show(overlayView)
  }

  renderPage() {
    const img = require('../../assets/images/faircup.jpg')
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow onPress={() => this.showDefault(true, false, 'Transparent')} title='Transparent' topSeparator='full' />
        <ListRow onPress={() => this.showDefault(false, false, 'Translucent')} title='Translucent' />
        <ListRow bottomSeparator='full' onPress={() => this.showDefault(false, true, 'Translucent modal')} title='Translucent modal' />
        <View style={{height: 20}} />
        <ListRow onPress={() => this.showPull('bottom', false, 'Pull from bottom')} title='Pull from bottom' topSeparator='full' />
        <ListRow onPress={() => this.showPull('top', false, 'Pull from top')} title='Pull from top' />
        <ListRow onPress={() => this.showPull('left', false, 'Pull from left')} title='Pull from left' />
        <ListRow onPress={() => this.showPull('right', false, 'Pull from right')} title='Pull from right' />
        <ListRow onPress={() => this.showPull('bottom', true, 'Pull modal')} title='Pull modal' />
        <ListRow onPress={() => this.showPull('bottom', false, 'Pull and scale', 'scale')} title='Pull and scale' />
        <ListRow bottomSeparator='full' onPress={() => this.showPull('left', false, 'Pull and translate', 'translate')} title='Pull and translate' />
        <View style={{height: 20}} />
        <ListRow onPress={() => this.showPop('zoomOut', false, 'Pop zoom out')} title='Pop zoom out' topSeparator='full' />
        <ListRow onPress={() => this.showPop('zoomIn', false, 'Pop zoom in')} title='Pop zoom in' />
        <ListRow onPress={() => this.showPop('zoomOut', true, 'Pop modal')} title='Pop modal' />
        <ListRow
          bottomSeparator='full'
          detail={<Image ref={v => this.imgView = v} resizeMode='cover' source={img} style={{width: 40, height: 40}} />}
          onPress={() => this.showPopCustom(img, this.imgView)}
          title='Pop custom'
        />
        <View style={{height: 20}} />
        <ListRow
          detail={
            <View>
              <View style={{paddingTop: 16, paddingBottom: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Checkbox ref='black' checked={this.state.black} onChange={value => this.setState({black: value})} title='Black' />
                <Checkbox ref='shadow' checked={this.state.shadow} onChange={value => this.setState({shadow: value})} title='Shadow' />
                <Checkbox ref='showArrow' checked={this.state.showArrow} onChange={value => this.setState({showArrow: value})} title='Show arrow' />
              </View>

              <View style={{paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button ref='downstart' onPress={() => this.showPopover(this.refs['downstart'], 'down', 'start')} title='down start' />
                <Button ref='downcenter' onPress={() => this.showPopover(this.refs['downcenter'], 'down', 'center')} title='down center' />
                <Button ref='downend' onPress={() => this.showPopover(this.refs['downend'], 'down', 'end')} title='down end' />
              </View>
              <View style={{paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button ref='rightstart' onPress={() => this.showPopover(this.refs['rightstart'], 'right', 'start')} title='right start' />
                <Button ref='leftstart' onPress={() => this.showPopover(this.refs['leftstart'], 'left', 'start')} title='left start' />
              </View>
              <View style={{paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button ref='rightcenter' onPress={() => this.showPopover(this.refs['rightcenter'], 'right', 'center')} title='right center' />
                <Button ref='leftcenter' onPress={() => this.showPopover(this.refs['leftcenter'], 'left', 'center')} title='left center' />
              </View>
              <View style={{paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button ref='rightend' onPress={() => this.showPopover(this.refs['rightend'], 'right', 'end')} title='right end' />
                <Button ref='leftend' onPress={() => this.showPopover(this.refs['leftend'], 'left', 'end')} title='left end' />
              </View>
              <View style={{paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button ref='upstart' onPress={() => this.showPopover(this.refs['upstart'], 'up', 'start')} title='up start' />
                <Button ref='upcenter' onPress={() => this.showPopover(this.refs['upcenter'], 'up', 'center')} title='up center' />
                <Button ref='upend' onPress={() => this.showPopover(this.refs['upend'], 'up', 'end')} title='up end' />
              </View>
            </View>
          }
          title='Popover'
          titlePlace='top'
          topSeparator='full'
        />
        <View style={{height: 20}} />
        <ListRow bottomSeparator='full' onPress={() => this.showMulti()} title='Multi overlay' topSeparator='full' />
        <View style={{height: Theme.screenInset.bottom}} />
      </ScrollView>
    )
  }
}
