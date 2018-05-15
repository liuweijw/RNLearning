import { TabBarBottom, TabNavigator } from 'react-navigation'
import TabHome from '../tabHome/index'
import Tab1 from '../tab1/index'
import Tab2 from '../tab2/index'
import Tab3 from '../tab3/index'

const Tab = TabNavigator(
  {
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
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
  }
)

export default Tab
