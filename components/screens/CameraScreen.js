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
import config from '../../config'
// import TextDetector from '../../services/textDetector'

type Props = {};
export default class CameraScreen extends Component<Props> {

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

  postOptions = (body) => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  }

  textDetection = () => {
    let body = {
      "requests":[
        {
          "image":{
            "source":{
              "imageUri": "https://s3.us-east-2.amazonaws.com/my-hep-images/photos/photo_YAHHH.jpg"
            }
          },
          "features":[
            {
              "type":"TEXT_DETECTION",
              "maxResults":1
            }
          ]
        }
      ]
    }
    fetch(`https://vision.googleapis.com/v1/images:annotate?key=${config['GOOGLE_VISION_KEY']}`,
      this.postOptions(body))
      .then(result => result.json())
      .then(response => {
        let text = response.responses[0].textAnnotations[0].description
        console.warn(text)
      })
      .catch(error => console.warn(error))
  }

  ohhSnap = () => {
    this.textDetection()
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
          accessKey: config['ACCESS_KEY'],
          secretKey: config['SECRET_KEY'],
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
          onPress={ this.textDetection }
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
