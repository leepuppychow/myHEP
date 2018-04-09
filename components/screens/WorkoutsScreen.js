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

  render() {
    return (
      <View style={ styles.container }>
        <Header header="Workouts" />
        <WorkoutsContainer workouts={ this.state.workouts } />
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
