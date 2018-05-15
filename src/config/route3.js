import React from 'react'
import { StackNavigator } from 'react-navigation'

import Tab from '../views/page3/tab/index'
import TabHome from '../views/page3/tabHome/index'
import Tab1 from '../views/page3/tab1/index'
import Tab2 from '../views/page3/tab2/index'
import Tab3 from '../views/page3/tab3/index'

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
  Tab: {
    screen: Tab
  },
  TabHome: {
    screen: TabHome
  },
  Tab1: {
    screen: Tab1
  },
  Tab2: {
    screen: Tab2
  },
  Tab3: {
    screen: Tab3
  }
})

export default () => <AppNavigator />
