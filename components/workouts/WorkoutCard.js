import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  AlertIOS,
  AsyncStorage,
} from 'react-native';
import ExercisesContainer from '../exercises/ExercisesContainer'

export default class WorkoutCard extends Component {
  render() {
    return (
      <ScrollView>
        <View style={ styles.container }>
          <Text style={ styles.header }>
            { this.props.workout.name} from { this.props.workout.therapist}
          </Text>
          <Text>
            { this.props.workout.weekdays.join(", ")}
          </Text>
          <ExercisesContainer exercises={ this.props.workout.workout_exercises }/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  container: {
    marginTop: 20,
  },
});
