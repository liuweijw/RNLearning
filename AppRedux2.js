
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './src/redux/actions'

import RoutePage2 from './src/config/route2'

class ReduxRoute extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return <RoutePage2 />
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxRoute)
