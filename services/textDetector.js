import Service from './service'
import { GOOGLE_VISION_KEY } from 'react-native-dotenv';

class TextDetector extends Service {
  constructor(photo) {
    super()
    this.photo = photo
  }

  textDetection = () => {
    let body = {
      "requests":[
        {
          "image":{
            "source":{
              "imageUri": `https://s3.us-east-2.amazonaws.com/my-hep-images/photos/${this.photo}`
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
    fetch(`https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_VISION_KEY}`,
      this.postOptions(body))
      .then(result => result.json())
      .then(response => {
        let text = response.responses[0].textAnnotations[0].description
        console.warn(text)
      })
      .catch(error => console.warn(error))
  }
}

module.exports = TextDetector
