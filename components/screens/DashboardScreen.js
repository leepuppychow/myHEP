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
        <Header header="Dashboard"/>
        <Text>Workout for the day</Text>
        <WorkoutsContainer workouts={ this.state.workouts } />
        <Text>Your Activity Levels</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
