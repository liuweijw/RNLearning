import { Dimensions, Platform } from 'react-native'

// app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width

// UI 默认给图是 750
const defaultPx = 750

// px 转换为dp
export function pxToDp(px) {
  const dpNum = px * deviceWidthDp / defaultPx

  if (dpNum >= 1) {
    // 避免出现循环小数
    return Math.ceil(dpNum)
  } else if (Platform.OS === 'android') {
    // 如果是安卓，最小为1，避免边框出现锯齿
    return 1
  }
  return 0.5
}

export function dpToPx() {
}
