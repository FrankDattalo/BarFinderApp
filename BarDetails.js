import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableWithoutFeedback,
  Navigator,
  ToolbarAndroid,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import BarCrawlApp from './index.android.js';
import { Col, Row, Grid } from "react-native-easy-grid";
import BarNoneHeader from './header.js';
import { addReview, increaseCount } from './backend-talker.js';

export default class BarDetails extends Component {

  constructor(props) {
    super(props)
    this.state={
      isDisabledRating: false,
      isDisabledLoudness: false,
      isDisabledCrowdedness:false
    }
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  setRatingValue(rating) {
    this.setState({
      isDisabledRating: true
    })
    this.setState({ rating })
  }

  setLoudnessValue(loudness) {
    this.setState({
      isDisabledLoudness: true
    })
    this.setState({ loudness })
  }

  setCrowdednessValue(crowdedness) {
    this.setState({
      isDisabledCrowdedness: true
    })
    this.setState({ crowdedness })
  }

  submitReview() {
    this.disable=true;
    addReview(this.props.item.id, this.state, (result) => {
      Alert.alert('Review Saved!')
      this.props.navigator.pop()
    })
  }

  render() {
    item = this.props.item
    score = Math.floor((item.person_count / this.props.total) * 100)

    return (
      <ScrollView>
        <Grid>
          <Row>
            <Col style={{backgroundColor: "#f9f9f9"}} >
              <Text style={{ fontSize: 35,
                borderColor: "#3a3f47",
                fontWeight: 'bold',
                margin: 5,
                textAlign: 'center' }}>{item.name}</Text>
              <Text style={{
                textAlign: 'center'
              }}>{item.address}</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text style={{
                textAlign: 'center',
                color: "#ff8a38",
                fontSize: 25,
                margin: 10,
                fontWeight: 'bold'
              }}>{score} of 100</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text style={{
                fontSize: 15,
                fontStyle: 'italic',
                textAlign: 'center',
                textAlignVertical: 'center',
                margin: 10,
                marginBottom: 35,
              }}>
                {item.description}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>

              <Row style={{marginBottom: 30}}>
                <Col>
                  <Row>
                    <Col>
                      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'right' }}>Rating</Text>
                    </Col>
                    <Col>
                      <Text style={{ textAlignVertical: 'center', fontSize: 20 }}> {item.rating} of 100</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{margin: 5}}>
                      <Button color="#2454a0"
                        disabled={this.state.isDisabledRating}
                        onPress={() => this.setRatingValue(0)}
                        title="-" />
                    </Col>
                    <Col style={{margin: 5}}>
                      <Button color="#2454a0"
                        disabled={this.state.isDisabledRating}
                        onPress={() => this.setRatingValue(100)}
                        title="+" />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row style={{marginBottom: 30}}>
                <Col>
                  <Row>
                    <Col>
                      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'right' }}>Loudness</Text>
                    </Col>
                    <Col>
                      <Text style={{ textAlignVertical: 'center', fontSize: 20 }}> {item.loudness} of 100</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{margin: 5}}>
                      <Button color="#2454a0"
                        disabled={this.state.isDisabledLoudness}
                        styleDisabled={{color: 'gray'}}
                        onPress={() => this.setLoudnessValue(0)}
                        title="-" />
                    </Col>
                    <Col style={{margin: 5}}>
                      <Button color="#2454a0"
                        disabled={this.state.isDisabledLoudness}
                        styleDisabled={{color: 'gray'}}
                        onPress={() => this.setLoudnessValue(100)}
                        title="+" />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row style={{marginBottom: 30}}>
                <Col>
                  <Row>
                    <Col>
                      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'right' }}>Crowdedness</Text>
                    </Col>
                    <Col>
                      <Text style={{ textAlignVertical: 'center', fontSize: 20 }}> {item.crowdedness} of 100</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{margin: 5}}>
                      <Button
                        color="#2454a0"
                        disabled = {this.state.isDisabledCrowdedness}
                        styleDisabled={{color: 'gray'}}
                        onPress={() => this.setCrowdednessValue(0)}
                        title="-" />
                    </Col>
                    <Col style={{margin: 5}}>
                      <Button
                        color="#2454a0"
                        disabled = {this.state.isDisabledCrowdedness}
                        styleDisabled={{color: 'gray'}}
                        onPress={() => this.setCrowdednessValue(100)}
                        title="+" />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col style={{margin: 5 }}>
                  <Button color="#2454a0"
                  styleDisabled={{color: 'gray'}}
                  onPress={this.submitReview.bind(this)}
                  title="Rate" />
                </Col>
              </Row>

            </Col>
          </Row>
        </Grid>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({


});
