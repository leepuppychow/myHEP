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
import ExerciseCard from './ExerciseCard'

type Props = {};
export default class ExercisesContainer extends Component<Props> {
  render() {
    return (
      <View>
        {
          this.props.exercises.map(exercise =>
          <ExerciseCard key={ exercise.id } exercise={ exercise } />)
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
