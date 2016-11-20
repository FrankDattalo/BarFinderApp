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
  Button,
  ToolbarAndroid,
  Alert
} from 'react-native';

import { barsFromLocation } from './backend-talker.js';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class BarCrawlApp extends Component {

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
      <View>
        <ToolbarAndroid
          title="Bar Nun"
          titleColor="#f9f9f9"
          style={{height: 50, backgroundColor: "#2454a0" }} />
        <View>
          <Grid>
            <ScrollView>
              {mapped}
            </ScrollView>
          </Grid>
        </View>
      </View>
    )
  }

  componentDidMount() {
    barsFromLocation(1, 1, list => this.setState({ list }) )
  }
}

class RowItem extends Component {
  render() {
      return (
          <Row>
            <Col size={3}>
              <Text style={styles.header}>{this.props.item.name}</Text>
              <Text>{this.props.item.address}</Text>
            </Col>
            <Col size={1} >
              <Button
                title="Info"
                color="#2454a0"
                style={styles.button}
                onPress={() => Alert.alert("button press") } />
            </Col>
          </Row>
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
    height: 100,
    borderColor: '#3a3f47'
  },

  button: {
    width: 100
  },

  buttonColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    fontSize: 30,
  }
});

AppRegistry.registerComponent('BarCrawlApp', () => BarCrawlApp);
