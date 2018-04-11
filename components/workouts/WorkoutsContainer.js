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
import WorkoutCard from './WorkoutCard'

type Props = {};
export default class WorkoutsContainer extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <View style={ styles.container }>
          {
            this.props.workouts.map(workout =>
              <WorkoutCard key={ workout.id } workout={ workout } />)
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
