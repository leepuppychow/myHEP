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
import { Camera, Permissions } from 'expo'

type Props = {};
export default class CameraScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState( { hasCameraPermission: status === 'granted' })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header header="Take picture of handout"/>
        <Camera style={ {flex: 1} } type={ this.state.type }>
        </Camera>
      </View>
    )
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
