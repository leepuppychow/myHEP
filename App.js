import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import LoginScreen from './components/screens/LoginScreen'
import HomeScreen from './components/screens/HomeScreen'
import SignupScreen from './components/screens/SignupScreen'

type Props = {};

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Signup: {
      screen: SignupScreen,
    }
  },

  {
    initialRouteName: 'Login',
  }
)

export default class App extends Component<Props> {
  render() {
    return <RootStack />
  }
}
