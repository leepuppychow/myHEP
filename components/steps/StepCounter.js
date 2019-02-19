import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AlertIOS,
  AsyncStorage,
} from 'react-native';
import Header from '../Header'
import { Pedometer } from 'expo'

export default class StepCounter extends Component {

  constructor() {
    super()
    this.state = {
      isPedometerAvailable: "checking",
      lastWeekStepCount: 0,
      todayStepCount: 0,
      currentStepCount: 0,
    }
  }

  componentDidMount() {
    this._subscribe()
  }

  componentWillUnMount() {
    this._unsubscribe()
  }

  stepsToday = () => {
    let end = new Date()
    let start = new Date()
    start.setDate(end.getDate() - 1)
    Pedometer.getStepCountAsync(start, end)
      .then(result => this.setState({ todayStepCount: result.steps }))
      .catch(error => this.setState({ todayStepCount: error }))
  }

  averageStepsPerDayOverLastWeek = () => {
    let end = new Date()
    let start = new Date()
    start.setDate(end.getDate() - 7)
    Pedometer.getStepCountAsync(start, end)
      .then(result => {
        this.setState({ lastWeekStepCount: Math.round(result.steps/7) })
      })
      .catch(error => this.setState({ lastWeekStepCount: error }))
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({ currentStepCount: result.steps })
    });

    Pedometer.isAvailableAsync()
      .then(result => this.setState({ isPedometerAvailable: String(result) }))
      .catch(error => this.setState({ isPedometerAvailable: error }))

    this.stepsToday()
    this.averageStepsPerDayOverLastWeek()
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove()
    this._subscription = null
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>
          Average Steps Per Day Last Week: {this.state.lastWeekStepCount}
        </Text>
        <Text>
          Steps taken today: {this.state.todayStepCount}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
