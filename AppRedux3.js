
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './src/redux/actions'

import RoutePage3 from './src/config/route3'

class ReduxRoute extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() { }

  componentDidMount() { }

  render() {
    return <RoutePage3 />
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
