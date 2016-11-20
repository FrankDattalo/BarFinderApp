import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  ToolbarAndroid,
  Alert,
  Navigator,
  BackAndroid
} from 'react-native';
import {requestPermission} from 'react-native-android-permissions';
// const Permissions = require('react-native-permissions');
exports.framework = 'React';
exports.title = 'Geolocation';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): ReactElement {
      return <Geolocation />;
    },
  }
];

export default class Geolocation extends Component{
constructor(props){
  super(props)
}
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };

  watchID: ?number = null;

  componentDidMount() {
    setTimeout(() => {
      requestPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
        console.warn("Granted!", result);
        // now you can set the listenner to watch the user geo location

        navigator.geolocation.getCurrentPosition(
          (position) => {
            var initialPosition = JSON.stringify(position);
            this.setState({initialPosition});
          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
        );

        this.watchID = navigator.geolocation.watchPosition((position) => {
          var lastPosition = JSON.stringify(position);
          this.setState({lastPosition});
        });


      }, (result) => {
        console.warn("Not Granted!");
        console.warn(result);
      });
    },0);

  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
      return (
        <View>
          <Text>
            <Text style={styles.title}>Initial position: </Text>
            {this.state.initialPosition}
          </Text>
          <Text>
            <Text style={styles.title}>Current position: </Text>
            {this.state.lastPosition}
          </Text>
        </View>
      );
    }
}

  var styles = StyleSheet.create({
    title: {
      fontWeight: '500',
    },
  });
