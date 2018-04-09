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
export default class SignupScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    }
  }
  
  postOptions = (body) => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  }

  signup = () => {
    let body = {"user":
                  {
                    "first_name": this.state.firstName,
                    "last_name": this.state.lastName,
                    "username": this.state.username,
                    "email": this.state.email.toLowerCase(),
                    "password": this.state.password,
                  }
                }
    return fetch("https://my-hep.herokuapp.com/api/v1/users", this.postOptions(body))
      .then(response => {
        if(response.status == 400) {
          AlertIOS.alert("Unable to create account, please try again")
        } else {
          AlertIOS.alert("Account Created Successfully")
          this.login()
        }
      })
  }

  login = () => {
    let body = {"auth":
                  {
                    "email": this.state.email.toLowerCase(),
                    "password": this.state.password,
                  }
                }
    fetch("https://my-hep.herokuapp.com/api/v1/user_token", this.postOptions(body))
      .then(result => result.json())
      .then(token => AsyncStorage.setItem('jwt', JSON.stringify(token)))
      .then(() => this.props.navigation.navigate("Home"))
      .catch(error => AlertIOS.alert("Login unsuccessful, please try again"))
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header header="Signup for an Account" />
        <TextInput
          style={ styles.form }
          onChangeText={ firstName => this.setState({ firstName })}
          placeholder="First Name"
        />
        <TextInput
          style={ styles.form }
          onChangeText={ lastName => this.setState({ lastName })}
          placeholder="Last Name"
        />
        <TextInput
          style={ styles.form }
          onChangeText={ email => this.setState({ email })}
          placeholder="Enter email"
        />
        <TextInput
          style={ styles.form }
          onChangeText={ username => this.setState({ username })}
          placeholder="Username"
        />
        <TextInput
          style={ styles.form }
          onChangeText={ password => this.setState({ password })}
          secureTextEntry={true}
          placeholder="Enter password"
        />
        <Button
          onPress={ this.signup }
          title="Create Account"
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
