import { Component } from 'react'

import view from './view'
import RnToast from '../../module/RnToast'

class ViewPage1 extends Component {
  constructor(props) {
    super(props)
  }

  toToast(msg) {
    RnToast.show(msg, RnToast.SHORT)
  }

  render() {
    return view(this)
  }
}

export default ViewPage1
