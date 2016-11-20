import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  Navigator,
  BackAndroid
} from 'react-native';

import { barsFromLocation, increaseCount } from './backend-talker.js';
import { Col, Row, Grid } from "react-native-easy-grid";
import BarDetails from "./BarDetails.js";
import BarNoneHeader from './header.js';

const CustomSceneConfig = Object.assign({},
    Navigator.SceneConfigs.FloatFromRight, {

  springTension: 100,
  springFriction: 1,
});

const CustomBackSceneConfig = Object.assign({},
    Navigator.SceneConfigs.FloatFromLeft, {

  springTension: -100,
  springFriction: 1,
});

var itemGlobal;
var globalItemTotalPeople = 0;

export class BarChoices extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  render() {
    mapped = this.state.list.map(item =>
      <RowItem
        styles={styles.main}
        key={item.id}
        item={item}
        navigator={this.props.navigator}/>)

    globalItemTotalPeople = 0

    this.state.list.forEach(item => {
      parsed = parseInt(item.person_count)
      if(isNaN(parsed)) {
        parsed = 0
      }

      globalItemTotalPeople += parsed
    })

    return (
      <View>
        <BarNoneHeader />
        <View>
          <ScrollView>
            { mapped }
          </ScrollView>
        </View>
      </View>
    )
  }

  componentDidMount() {
    barsFromLocation(1, 1, list => {
      this.setState({ list })
      increaseCount(1, 1)
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
            <View style={styles.buttonColumn}>
              <Button
                title={"Info"}
                color="#2454a0"
                containerStyle={{backgroundColor: "#2454a0"}}
                onPress={this.handlePress.bind(this)}
              />
            </View>
          </Col>
        </Row>
      )
  }

  handlePress(){
    itemGlobal = this.props.item
    this.props.navigator.push({ id:1, })
  }
}

export class BarCrawlApp extends Component {
    renderScene(route, navigator) {
      switch(route.id) {
        case 0:
          return <BarChoices navigator={navigator} />
        case 1:
          return <BarDetails navigator={navigator} item={itemGlobal} total={globalItemTotalPeople} />
     }
   }

   configureScene(route) {
      if(route.index === 0){
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
        renderScene={this.renderScene}
        configureScene={this.configureScene}
        ref={ nav => navigator = nav } />
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
    borderColor: '#3a3f47',
    flexDirection: 'row'
  },

  header: {
    fontSize: 30,
  }
});

AppRegistry.registerComponent('BarCrawlApp', () => BarCrawlApp);
