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

import { barsFromLocation } from './backend-talker.js';
import { Col, Row, Grid } from "react-native-easy-grid";
import BarDetails from "./BarDetails.js"
var item;

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;
var backConfig = Navigator.SceneConfigs.FloatFromLeft;

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
});

var CustomBackSceneConfig = Object.assign({}, backConfig, {
  springTension: -100,
  springFriction: 1,
});


export class BarChoices extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  render() {
    mapped = this.state.list.map(item =>
      <RowItem styles={styles.main} key={item.id} item={item} navigator = {this.props.navigator}/>)

    return (
      <View>
        <ToolbarAndroid
          title="Bar Nun"
          titleColor="#f9f9f9"
          style={{height: 50, backgroundColor: "#2454a0" }} />
        <View>
          <ScrollView>
            { mapped }
          </ScrollView>
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
              <View>
                <Text style={styles.header}>{this.props.item.name}</Text>
                <Text>{this.props.item.address}</Text>
              </View>
            </Col>
            <Col size={1}>
              <View>
                <Button
                  title={"Info"}
                  containerStyle={{backgroundColor: "#2454a0"}}
                  onPress={this._handlePress.bind(this)}
                />
              </View>
            </Col>
          </Row>
      )
  }

  _handlePress(){
    item = this.props.item
    this.props.navigator.push({id:1,})
  }
}

export class BarCrawlApp extends Component{
  _renderScene(route, navigator) {
    switch(route.id){
      case 0:
        return <BarChoices navigator={navigator} />
      case 1:
        return <BarDetails navigator={navigator} barDetails = {item}/>
   }
 }

 _configureScene(route) {
    if(route.index===0){
      return CustomBackSceneConfig;
    }else{
      return CustomSceneConfig;
    }
}

render() {
  return (
      <Navigator

      initialRoute={{id:0,}}
      // Calls the function that helps the navigator choose which component to show based on route id.
      renderScene={this._renderScene}
      configureScene={this._configureScene}
      ref={(nav) => { navigator = nav;}} />
  );
}

}

var navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if(navigator && navigator.getCurrentRoutes().length > 1) {
    navigator.pop();
    return true;
  }
  return false;
});


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
