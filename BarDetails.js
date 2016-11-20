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
import BarCrawlApp from './index.android.js';
import { Col, Row, Grid } from "react-native-easy-grid";
import BarNoneHeader from './header.js';

export default class BarDetails extends Component {

  constructor(props) {
    super(props)
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    item = this.props.item

    return (
      <View>
        <BarNoneHeader />
        <View>
          <Grid style={{backgroundColor: '#ff0000'}}>
            <Row>
              <Col>
                <Text>{item.name}</Text>
              </Col>
            </Row>
          </Grid>
        </View>
      </View>
    )
  }
}
