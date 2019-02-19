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
import { TabNavigator } from 'react-navigation'
import CameraScreen from './CameraScreen'
import WorkoutsScreen from './WorkoutsScreen'
import DashboardScreen from './DashboardScreen'

const navConfig = {
  tabBarOptions: {
    initialRouteName: 'Dashboard',
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: 'lightblue'
    },
  }
}

const routeConfig = {
  Dashboard: {
    screen: DashboardScreen,
  },
  Workouts: {
    screen: WorkoutsScreen,
  },
  Camera: {
    screen: CameraScreen,
  },
}

const HomeNav = TabNavigator(routeConfig, navConfig)

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <HomeNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
