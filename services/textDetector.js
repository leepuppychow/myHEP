import config from '../config'

const TextDetector = new vision.Request({
  image: new vision.Image('../assets/handwriting_sample.jpg'),
  features: [
    new vision.Feature('TEXT_DETECTION', 4)
  ]
})


module.exports = TextDetector
