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
import WorkoutsContainer from '../workouts/WorkoutsContainer'
import StepCounter from '../steps/StepCounter'

type Props = {};
export default class DashboardScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      workouts: [],
    }
  }

  componentDidMount() {
    this.getTodaysWorkouts()
  }

  getToken = () => {
    return AsyncStorage.getItem('jwt').then(token => JSON.parse(token)["jwt"])
  }

  getTodaysWorkouts = () => {
    this.getToken()
      .then(token => {
        fetch("https://my-hep.herokuapp.com/api/v1/workouts/today",
          {
            "headers": {"Authorization": "Bearer " + token}
          })
          .then(response => response.json())
          .then(workouts => this.setState({ workouts }))
          .catch(error => console.warn({ error }))
      })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionHeader }>Your Steps:</Text>
        <Text style={ styles.sectionHeader }>Today's Workout:</Text>
        <WorkoutsContainer workouts={ this.state.workouts } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  sectionHeader: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  }
});
