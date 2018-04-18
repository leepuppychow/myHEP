# README

This is the client-side codebase for my "myHEP" React Native application. The goal of this application is to allow physical therapy patients to organize their home exercise programs in order to increase compliance and motivate patients to perform their exercises.

This application is built in React Native using Expo. The server is built in Rails, and the repository can be found here: https://github.com/leepuppychow/myHEP_server

This project is still currently under construction. From a learning perspective, I wanted to explore using OpenCV in Python to perform image segmentation on a printed home exercise program handout. The end goal would be for a patient to take a picture of a printed HEP and the application would automatically post this to the server and then render this new workout. I have been working on a basic Flask API with OpenCV and the repository can be found here: https://github.com/leepuppychow/image_segmentation_API


## Setup

* Setup Expo locally: https://docs.expo.io/versions/latest/
* Download Expo app on mobile device
* Clone repository
* Run: exp start
* Open application on Expo application on mobile device. You may have to send URL to mobile device using:

```
  exp send -s <your-phone-number>
```

* NOTE: You can run exp ios (to see IOS simulator on your computer; however, you will have to delete line 48 in DashboardScreen.js for the <StepCounter /> component as this was not working with the IOS simulator.)
