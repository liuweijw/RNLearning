import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import AppRedux from './AppRedux'
import AppRedux1 from './AppRedux1'
import AppRedux2 from './AppRedux2'

import configureStore from './src/redux/store'

// import RnToast from './src/module/RnToast'

const { persistor, store } = configureStore()

const ReduxApp = bundle => {
  var _key = bundle.routerType
  // RnToast.show('=====' + _key, RnToast.LONG)
  if (_key === '1') {
    return (
      // 配置 Provider 为根组件，同时传入 store 作为其属性
      <Provider store={store}>
        {/* redux 持久化存储 */}
        <PersistGate persistor={persistor}>
          <AppRedux1 />
        </PersistGate>
      </Provider>
    )
  } else if (_key === '2') {
    return (
      // 配置 Provider 为根组件，同时传入 store 作为其属性
      <Provider store={store}>
        {/* redux 持久化存储 */}
        <PersistGate persistor={persistor}>
          <AppRedux2 />
        </PersistGate>
      </Provider>
    )
  }
  return <AppRedux />
}

AppRegistry.registerComponent('RNLearning', () => ReduxApp)
