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
      <View>
        <ToolbarAndroid
          title="Bar Nun"
          titleColor="#f9f9f9"
          style={{height: 50, backgroundColor: "#2454a0" }}/>
        <View>
          <Grid>
            <ScrollView style={styles.main}>
              {mapped}
            </ScrollView>
          </Grid>
        </View>
      </View>
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
        <Row style={styles.row}>
          <Col size={3}>
            <Text style={styles.header}>{this.props.item.name}</Text>
            <Text>{this.props.item.address}</Text>
          </Col>
          <Col size={1}>
            <Row>
              <Col style={{justifyContent: 'center'}}>
                <Button title={"Info"} style={{backgroundColor: "#2454a0"}} />
              </Col>
            </Row>
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
    borderColor: '#3a3f47',
    flexDirection: 'row'
  },

  header: {
    fontSize: 30,
  }
});

AppRegistry.registerComponent('BarCrawlApp', () => BarCrawlApp);
