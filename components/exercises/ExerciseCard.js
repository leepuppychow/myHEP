import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  Image,
} from 'react-native';

export default class ExerciseCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.exerciseName}>
          { this.props.exercise.name} ({ this.props.exercise.category})
        </Text>
        <Text>
          { this.props.exercise.sets} x { this.props.exercise.reps } repetitions
        </Text>
        <Image
          source={{ uri: this.props.exercise.image }}
          style={ styles.image }
        />
        <Text style={styles.description}>
          { this.props.exercise.description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    margin: 10,
  },
  image: {
    width: 175,
    height: 175,
    padding: 5,
  },
  exerciseName: {
    fontWeight: 'bold',
  },
  description: {
    fontStyle: "italic",
  }
});
