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
import UserService from '../../services/userService'
const userService = new UserService()


export default class LoginScreen extends Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
  }

  login = () => {
    let email = this.state.email.toLowerCase()
    let password = this.state.password
    let body = {"auth":
                  {
                    "email": email,
                    "password": password,
                  }
                }
    userService.getUserToken(body)
      .then(result => result.json())
      .then(token => AsyncStorage.setItem('jwt', JSON.stringify(token)))
      .then(() => this.props.navigation.navigate("Home"))
      .catch(error => AlertIOS.alert("Login unsuccessful, please try again"))
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header header="Welcome to myHEP" />
        <TextInput
          style={ styles.form }
          onChangeText={ email => this.setState({ email })}
          placeholder="Enter email"
        />
        <TextInput
          style={ styles.form }
          onChangeText={ password => this.setState({ password })}
          secureTextEntry={true}
          placeholder="Enter password"
        />
        <Button
          title="Login"
          onPress={ this.login }
        />
        <Button
          title="Signup for New Account"
          onPress={ () => this.props.navigation.navigate("Signup")}
        />
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

  form: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
