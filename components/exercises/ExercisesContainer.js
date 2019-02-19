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

export default class ExercisesContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
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
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
