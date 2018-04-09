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

// import RNCloudinary from 'react-native-cloudinary-x'
// RNCloudinary.init('333221264261911','dF39uehusWB98IIUNYudKTV8hbc', 'leepuppychow')

type Props = {};
export default class CameraScreen extends Component<Props> {

  upload = () => {
    debugger
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header header="Take picture of handout"/>
        <Button
          title="Upload image"
          onPress={ this.upload }
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
});
