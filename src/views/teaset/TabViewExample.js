// TabViewExample.js

'use strict'

import React from 'react'
import {View, ScrollView, Image, Switch, Platform} from 'react-native'

import {TeaNavigator, NavigationPage, BasePage, ListRow, TabView, Label, PullPicker} from 'teaset'

export default class TabViewExample extends BasePage {
  static defaultProps = {
    ...BasePage.defaultProps,
    scene: TeaNavigator.SceneConfigs.PushFromRight,
  };

  constructor(props) {
    super(props)
    Object.assign(this.state, {
      type: 'projector',
      custom: false,
    })
  }

  renderCustomButton() {
    const bigIcon = (
      <View style={{
        width: 54,
        height: 54,
        borderRadius: 27,
        shadowColor: '#ccc',
        shadowOffset: {height: -1},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Image
          source={require('../../assets/images/faircup.jpg')}
          style={{width: 44, height: 44, borderRadius: 22}}
        />
      </View>
    )
    return (
      <TabView.Sheet
        icon={bigIcon}
        iconContainerStyle={{justifyContent: 'flex-end'}}
        onPress={() => alert('Custom button press')}
        title='Custom'
        type='button'
      />
    )
  }

  renderPage() {
    const {type, custom} = this.state
    const customBarStyle = Platform.OS == 'android' ? null : {
      borderTopWidth: 0,
      shadowColor: '#ccc',
      shadowOffset: {height: -1},
      shadowOpacity: 0.4,
      shadowRadius: 0.5,
    }
    return (
      <TabView barStyle={custom ? customBarStyle : null} style={{flex: 1}} type={type}>
        <TabView.Sheet
          activeIcon={require('../../assets/images/icons/home_active.png')}
          icon={require('../../assets/images/icons/home.png')}
          title='Home'
        >
          <HomePage
            custom={custom}
            onChangeCustom={custom => this.setState({custom})}
            onChangeType={type => this.setState({type})}
            type={type}
          />
        </TabView.Sheet>
        {custom ? this.renderCustomButton() : null}
        <TabView.Sheet
          activeIcon={require('../../assets/images/icons/me_active.png')}
          badge={1}
          icon={require('../../assets/images/icons/me.png')}
          title='Me'
        >
          <MePage />
        </TabView.Sheet>
      </TabView>
    )
  }
}

class HomePage extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Home',
    showBackButton: true,
  };

  selectType() {
    const {onChangeType} = this.props
    const items = ['projector', 'carousel']
    PullPicker.show(
      'Type',
      items,
      items.indexOf(this.props.type),
      (item, index) => onChangeType && onChangeType(item)
    )
  }

  renderPage() {
    const {type, custom, onChangeCustom} = this.props
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow bottomSeparator='full' detail={type} onPress={() => this.selectType()} title='Type' topSeparator='full' />
        <View style={{height: 20}} />
        <ListRow bottomSeparator='full' detail={<Switch onValueChange={value => onChangeCustom(value)} value={custom} />} title='Custom' topSeparator='full' />
      </ScrollView>
    )
  }
}

class MePage extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Me',
    showBackButton: false,
  };

  renderPage() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Label size='xl' text={this.props.title} type='detail' />
      </View>
    )
  }
}
