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
  TextInput,
  ListView
} from 'react-native';

import {Button} from 'native-base';

import {Column as Col, Row} from 'react-native-flexbox-grid';

class BFTrack extends Component {

  constructor () {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged (r1, r2) {
        return r1 !== r2;
      }
    });

    const initialTransactionData = ['row 1', 'row 2']

    this.state = {
      transactionData: initialTransactionData,
      transactionDataSource: ds.cloneWithRows(initialTransactionData)
    };

    this.addTransaction = this.addTransaction.bind(this);
  }

  addTransaction () {
    this.seq = 0
    const oldData = this.state.transactionData
    const newData = oldData.concat(['a new row' + this.seq++]);
    this.setState({
      transactionData: newData,
      transactionDataSource: this.state.transactionDataSource.cloneWithRows(newData)
    });
  }

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
        <Row>
          <Col sm={12}>
            <ListView
              dataSource={this.state.transactionDataSource}
              renderHeader={() => (
                <Row size={8}>
                  <Col sm={4}><Text>Stock</Text></Col>
                  <Col sm={2}><Text>Quantity</Text></Col>
                  <Col sm={2}><Text>Gain/Loss</Text></Col>
                </Row>
              )}
              renderRow={(rowData) => <Text>{rowData}</Text>}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Button
              onPress={this.addTransaction}
              block>Add Transaction</Button>
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
