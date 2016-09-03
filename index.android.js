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
  TextInput
} from 'react-native';

import {Column as Col, Row} from 'react-native-flexbox-grid';

class BFTrack extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Row>
          <Col sm={12}>
            <Text style={styles.header}>BF Track</Text>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Text>Yellow</Text>
            <TextInput
              style={styles.stockValueInput}
              keyboardType='numeric'
            />
          </Col>
          <Col sm={6}>
            <Text>Blue</Text>
            <TextInput
              style={styles.stockValueInput}
              keyboardType='numeric'
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Text>Red</Text>
            <TextInput
              style={styles.stockValueInput}
              keyboardType='numeric'
            />
          </Col>
          <Col sm={6}>
            <Text>Green</Text>
            <TextInput
              style={styles.stockValueInput}
              keyboardType='numeric'
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Text>Orange</Text>
            <TextInput
              style={styles.stockValueInput}
              keyboardType='numeric'
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Text>Total Value</Text>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Text>Transaction Log</Text>
          </Col>
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c4d08a',
    flex: 1
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  stockValueContainer: {
    backgroundColor: '#fff'
  },
  stockValueInput: {

  }
});

AppRegistry.registerComponent('BFTrack', () => BFTrack);
