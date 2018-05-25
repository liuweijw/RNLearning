import React, { Component } from 'react'
import { TeaNavigator, Theme } from 'teaset'
import TeasetExampleHome from './Home'

Theme.set({
  fitIPhoneX: true
})

export default class Teaset extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <TeaNavigator rootView={<TeasetExampleHome />} />
  }
}
