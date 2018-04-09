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

type Props = {};
export default class ExerciseCard extends Component<Props> {
  render() {
    return (
      <View>
        <Text>{ this.props.exercise.name} - { this.props.exercise.category}</Text>
        <Text>{ this.props.exercise.image}</Text>
        <Text>{ this.props.exercise.description}</Text>
        <Text>{ this.props.exercise.sets} x { this.props.exercise.reps }</Text>
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
