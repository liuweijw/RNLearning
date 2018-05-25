// WheelExample.js

'use strict'

import React from 'react'
import {View} from 'react-native'

import {NavigationPage, Theme, Wheel} from 'teaset'

export default class WheelExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Wheel',
    showBackButton: true,
  };

  constructor(props) {
    super(props)
    this.years = []
    for (let i = 1970; i <= 2100; ++i) this.years.push(i)
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    this.daysCount = [
      [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    ]
    Object.assign(this.state, {
      date: new Date(),
    })
  }

  isLeapYear(year) {
    return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
  }

  onDateChange(year, month, day) {
    const {date} = this.state
    date.setFullYear(year)

    const daysCount = this.daysCount[this.isLeapYear(year) ? 1 : 0][month]
    if (day > daysCount) {
      day = daysCount
      date.setDate(day)
      date.setMonth(month)
    } else {
      date.setMonth(month)
      date.setDate(day)
    }
    this.setState({date})
  }

  renderPage() {
    const {date} = this.state
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const daysCount = this.daysCount[this.isLeapYear(year) ? 1 : 0][month]
    const days = []
    for (let i = 1; i <= daysCount; ++i) days.push(i)
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20}} />
        <View style={{backgroundColor: Theme.defaultColor, padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
          <Wheel
            index={this.years.indexOf(year)}
            items={this.years}
            itemStyle={{textAlign: 'center'}}
            onChange={index => this.onDateChange(this.years[index], month, day)}
            style={{height: 200, width: 80}}
          />
          <Wheel
            index={this.months.indexOf(month + 1)}
            items={this.months}
            itemStyle={{textAlign: 'center'}}
            onChange={index => this.onDateChange(year, this.months[index] - 1, day)}
            style={{height: 200, width: 80}}
          />
          <Wheel
            index={days.indexOf(day)}
            items={days}
            itemStyle={{textAlign: 'center'}}
            onChange={index => this.onDateChange(year, month, days[index])}
            style={{height: 200, width: 80}}
          />
        </View>
      </View>
    )
  }
}
