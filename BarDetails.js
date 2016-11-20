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

export default class BarDetails extends Component{
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View ref={component => this._root = component} {...this.props}>
        <Text>{this.props.barDetails}</Text>
      </View>
    )
  }

  render(){
    return(
      <View>
        <Text style={styles.header}>{this.props.barDetails.name}</Text>
        <Text style={textAlign='center'}>{this.props.barDetails.address}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  row: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    borderRadius: 0,
    borderWidth: .75,
    margin: 10,
    borderColor: '#3a3f47',
    flexDirection: 'row'
  },

  header: {
    fontSize: 30,
    textAlign: 'center'
  }
});
