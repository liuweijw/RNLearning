// 初始化用户信息
const initialState = {
  userInfo: {
    name: 'liuweijw',
    gender: '女'
  }
}

// 操作用户信息
function reducers(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      // 合并 userInfo 对象
      action.userInfo = Object.assign({}, state.userInfo, action.userInfo)

      // 更新状态
      return Object.assign({}, state, { userInfo: action.userInfo })
    case 'CLEAR_REDUX_STORE':
      // 清空 store 中的 userInfo 信息
      return { userInfo: {} }
    default:
      return state
  }
}

export default reducers
