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
import { RNS3 } from 'react-native-aws3'
import TextDetector from '../../services/textDetector'
import { S3_BUCKET_ACCESS_KEY, S3_BUCKET_SECRET_KEY } from 'react-native-dotenv';

export default class CameraScreen extends Component {

  constructor() {
    super()
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      file: null,
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState( { hasCameraPermission: status === 'granted' })
  }

  detectText = () => {
    let text = new TextDetector('photo_YAHHH.jpg')
    text.textDetection()
  }

  ohhSnap = () => {
    this.camera.takePictureAsync()
      .then(data => {
        const file = {
          uri: data.uri,
          name: 'photo_YAHHH.jpg',
          type: 'image/jpeg'
        }

        const bucketOptions = {
          keyPrefix: 'photos/',
          bucket: 'my-hep-images',
          region: 'us-east-2',
          accessKey: S3_BUCKET_ACCESS_KEY,
          secretKey: S3_BUCKET_SECRET_KEY,
          successActionStatus: 201,
        }

        RNS3.put(file, bucketOptions)
          .then(response => {
            if(response.status === 201) {
              AlertIOS.alert("Photo uploaded successfully")
            } else {
              console.warn(`Failed to upload image: ${response.body}`)
            }
          })
      })
      .catch(error => console.warn(`ERROR: ${error}`))
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header header="Take picture of handout"/>
        <Camera
          ref={ cam => this.camera = cam }
          style={ {flex: 1} }
          type={ this.state.type }>
        </Camera>
        <Button
          title='TAKE PICTURE'
          style={ styles.snapButton }
          onPress={ this.ohhSnap }
        />
        <Button
          title='TEXT'
          style={ styles.snapButton }
          onPress={ this.detectText }
        />
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
  snapButton: {
    fontSize: 20,
    textAlign: 'center',
  }
});
