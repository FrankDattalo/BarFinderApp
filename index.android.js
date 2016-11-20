/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableWithoutFeedback,
  Navigator,
  ToolbarAndroid
} from 'react-native';
import Button from 'react-native-button'
import { RadioButtons } from 'react-native-radio-buttons'



export default class BarCrawlApp extends Component {



  render() {
    return (
      <View style={styles.main}>
        <Text>Hello World</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    padding: 10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor:'#FF1A00'
  },
  btntxt:{
    fontSize: 20,
    color: 'white'
  }
});

AppRegistry.registerComponent('BarCrawlApp', () => BarCrawlApp);
