# react-native-socketio-messaging

React native application that showcases the simple use of sockets to provide realtime updates to your application.

## Getting Started

* clone the repo (duh)
* Open the folder in your IDE or text editor of choice

### Prerequisites

* make sure you have node install

    [Link to Download node](https://nodejs.org/en/download/),
    choose your platform and download accordingly

* Install yarn (I used yarn as my package manager for this project)

    [Link to Download yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable),
    choose your platform


### Installing

* run **yarn install** upon cloning the repo to get all the node modules 

### Running the app

* **Android** => open an android emulator and run the following command in the folder directory
  * `yarn android`
* **IOS** => most of the time the emulator will automatically start upon running the following command but if it doesn't, open xcode and start and emulator
  * `yarn ios`

either command above will get the applicaiton running on your mobile os

change the ip address in App.js to the IP address of your computer => this is important for connecting the server

### SERVER!!!

* clone the server counter to this mobile aplicaition from [here](https://github.com/delavago/express-socketio-reactNative-backend)
  * follow README steps on the repo on how to run the server code

done !! for the most part