import { createStore } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, persistCombineReducers } from 'redux-persist'
import reducers from './reducers'

// 持久化存储配置
const config = {
  key: 'root',
  storage: AsyncStorage,
}

// 持久化存储Reducers
const persistReducers = persistCombineReducers(config, {reducers})

const configureStore = () => {
  const store = createStore(persistReducers)
  const persistor = persistStore(store)

  return { persistor, store }
}

// 持久化存储Store配置
export default configureStore
