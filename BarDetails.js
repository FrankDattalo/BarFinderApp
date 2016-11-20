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
import BarCrawlApp from './index.android.js'

export default class BarDetails extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View ref={component => this._root = component} {...this.props}>
        <Text>{this.props.name}</Text>
      </View>
    )
  }

  render(){
    return(
      <View>
        <Text>Is Good Bar</Text>
      </View>
    )
  }
}
