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
  ScrollView,
} from 'react-native';

import { barsFromLocation } from './backend-talker.js';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class BarCrawlApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  render() {
    mapped = this.state.list.map(item =>
      <RowItem styles={styles.main} key={item.id} item={item} />)

    return (
      <ScrollView style={styles.main}>
        {mapped}
      </ScrollView>
    )
  }

  componentDidMount() {
    barsFromLocation(1, 1, (bars) => {
      this.setState({
        list: bars
      })
    })
  }
}

class RowItem extends Component {
  render() {
      return (
        <View style={styles.row}>
          <View>
            <Text style={styles.header}>{this.props.item.name}</Text>
            <Text>{this.props.item.address} Rating: {this.props.item.rating}</Text>
          </View>
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
  }
});

AppRegistry.registerComponent('BarCrawlApp', () => BarCrawlApp);
