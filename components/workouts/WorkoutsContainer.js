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
import WorkoutCard from './WorkoutCard'

type Props = {};
export default class WorkoutsContainer extends Component<Props> {
  render() {
    return (
      <View>
        {
          this.props.workouts.map(workout =>
          <WorkoutCard key={ workout.id } workout={ workout } />)
        }
      </View>
    )
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
