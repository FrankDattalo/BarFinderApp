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

var bars = ["Midway", "Toos", "Big Bar", "Lucky's"];

export default class BarCrawlApp extends Component {

  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //        this.state = {
  //         dataSource: ds.cloneWithRows([
  //           "1Bar", "2Bar", "Red Fish", "Blue Fish"
  //         ])
  //       };
  //  }

  render() {
    return (
      <View style={styles.main}>
        <ToolbarAndroid
           
           onIconClicked={() => this.drawer.openDrawer()}
           style={styles.toolbar}
           actions={[{title:'hey guys'}]} />
        <View style={styles.container}>
          <Text style={styles.welcome}>Bars Neer You</Text>
          <RadioButtons
            options={bars}
            onSelection={ this.setSelectedOption}
            selectedOption={this.selectedOption }
            renderOption={ this.renderOption }
            renderContainer={ this.renderContainer }/>
        </View>
      </View>
    );
  }

  setSelectedOption(selectedOption){
    this.setState({
      selectedOption
    });
  }

 renderOption(option, selected, onSelect, index){
   const style = selected ? { fontWeight: 'bold'} : {};
   return (
     <TouchableWithoutFeedback onPress={onSelect} key={index}>
      <View>
       <Text>{option}</Text>
      </View>
     </TouchableWithoutFeedback>
   )

}
renderContainer(optionNodes){
  return <View>{optionNodes}</View>;
}

onValueChange(key: string, value: string) {
  const newState = {};
  newState[key] = value;
  this.setState(newState);
}


  _handleClick(){

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
