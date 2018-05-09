// 设置用户信息
export function setUserInfo(userInfo) {
  return {
    type: 'SET_USER_INFO',
    userInfo
  }
}

// 清除ReduxStore用户信息
export function clearReduxStore() {
  return {
    type: 'CLEAR_REDUX_STORE'
  }
}
