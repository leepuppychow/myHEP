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
import ExercisesContainer from '../exercises/ExercisesContainer'

type Props = {};
export default class WorkoutCard extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={ styles.header }>
          { this.props.workout.name} from { this.props.workout.therapist}
        </Text>
        <Text>
          { this.props.workout.weekdays.join(", ")}
        </Text>
        <ExercisesContainer exercises={ this.props.workout.workout_exercises }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});
