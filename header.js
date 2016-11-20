import React, { Component } from 'react';
import { ToolbarAndroid, Text, } from 'react-native';

export default class BarNoneHeader extends Component {
    render() {
      return (
        <ToolbarAndroid
          title="Bar None"
          titleColor="#f9f9f9"
          style={{height: 50, backgroundColor: "#2454a0" }} />
      )
    }
}
