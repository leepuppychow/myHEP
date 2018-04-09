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

type Props = {};
export default class DashboardScreen extends Component<Props> {

  render() {
    return (
      <View style={ styles.container }>
        <Header header="Dashboard"/>
        <Text>Workout for the day</Text>
        <Text>Your Activity Levels</Text>
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
