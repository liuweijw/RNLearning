import React from 'react'
import { StackNavigator } from 'react-navigation'

import Page2 from '../views/page2'

const StackModalNavigator = (routeConfigs, navigatorConfig) => {
  const CardStackNavigator = StackNavigator(routeConfigs, navigatorConfig)
  const modalRouteConfig = {}
  const routeNames = Object.keys(routeConfigs)

  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]]
  }

  const ModalStackNavigator = StackNavigator({
    CardStackNavigator: {
      screen: CardStackNavigator
    },
    ...modalRouteConfig
  }, {
    mode: 'modal',
    headerMode: 'none'
  })

  return ModalStackNavigator
}

const AppNavigator = StackModalNavigator({
  Page2: {
    screen: Page2
  }
})

export default () => <AppNavigator />
