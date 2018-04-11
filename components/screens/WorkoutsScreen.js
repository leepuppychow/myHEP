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
import { TabNavigator } from 'react-navigation'
import Header from '../Header'
import WorkoutCard from '../workouts/WorkoutCard'
import WorkoutsContainer from '../workouts/WorkoutsContainer'
import CameraScreen from './CameraScreen'

type Props = {};
export default class WorkoutsScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      workouts: [],
    }
  }

  componentDidMount() {
    this.getWorkouts()
  }

  getToken = () => {
    return AsyncStorage.getItem('jwt').then(token => JSON.parse(token)["jwt"])
  }

  getWorkouts = () => {
    this.getToken()
      .then(token => {
        fetch("https://my-hep.herokuapp.com/api/v1/workouts",
          {
            "headers": {"Authorization": "Bearer " + token}
          })
          .then(response => response.json())
          .then(workouts => this.setState({ workouts }))
          .catch(error => console.warn({ error }))
      })
  }

  getWorkoutCard = (workout) => {
    return () => (<WorkoutCard workout={ workout }/>)
  }

  getWorkoutTabs = () => {
    return this.state.workouts.reduce((tabs, workout) => {
      tabs[workout.name] = this.getWorkoutCard(workout)
      return tabs
    }, {})
  }

  loadingMessage = () => {
    return (
      <View style={ styles.container }>
        <Header header="Workouts" />
        <Text>Loading workouts...</Text>
      </View>
    )
  }

  showWorkouts = () => {
    const routes = this.getWorkoutTabs()
    const tabConfig = {
        tabBarPosition: 'top',
        tabBarOptions: {
          scrollEnabled: true,
          upperCaseLabel: false,
          style: {
            backgroundColor: 'powderblue',
            height: 20,
          },
          labelStyle: {
            fontSize: 16,
          },
        },
    }
    const WorkoutTabs = TabNavigator(routes, tabConfig)
    return (
      <WorkoutTabs />
    );
  }

  render() {
    if (this.state.workouts.length) {
      return this.showWorkouts()
    } else {
      return this.loadingMessage()
    }
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
