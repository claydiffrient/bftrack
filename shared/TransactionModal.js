import React, { Component } from 'react';
import { Picker, Text, TextInput, StyleSheet, View } from 'react-native';
import { List, ListItem, Radio, Button } from 'native-base';
import { ASSETS } from './utils';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  submitButton: {
    marginTop: 1
  }
});

function renderAssets () {
  return ASSETS.map((a) => {
    const capitalized = a.charAt(0).toUpperCase() + a.slice(1);
    return (
      <Picker.Item key={a} label={capitalized} value={a} />
    );
  });
}

export default class TransactionModal extends Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  };

  constructor () {
    super();
    this.state = {
      transactionType: '',
      quantity: 0,
      asset: '',
      price: 0
    };
  }

  setBuy = () => this.setState({ transactionType: 'buy' });
  setSell = () => this.setState({ transactionType: 'sell' });
  setQuantity = (quantity) => this.setState({ quantity });
  setAsset = (asset) => this.setState({ asset });
  setPrice = (price) => this.setState({ price });

  submitForm = () => {
    console.log(this.props);
    this.props.handleSubmit({
      type: this.state.transactionType,
      asset: this.state.asset,
      quantity: this.state.quantity,
      price: this.state.price
    });
  };

  render () {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Transaction</Text>
        </View>
        <View style={styles.transaction}>
          <List>
            <ListItem itemDivider>
              <Text>Transaction Type</Text>
            </ListItem>
            <ListItem>
              <Radio
                selected={this.state.transactionType === 'buy'}
                onPress={this.setBuy}
              />
              <Text>Buy</Text>
            </ListItem>
            <ListItem>
              <Radio
                onPress={this.setSell}
                selected={this.state.transactionType === 'sell'}
              />
              <Text>Sell</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Quantity</Text>
            </ListItem>
            <ListItem>
              <TextInput
                keyboardType="numeric"
                placeholder="12"
                onChangeText={this.setQuantity}
              />
            </ListItem>
            <ListItem itemDivider>
              <Text>Asset</Text>
            </ListItem>
            <ListItem>
              <Picker
                selectedValue={this.state.asset}
                onValueChange={this.setAsset}
              >
                {renderAssets()}
              </Picker>
            </ListItem>
            <ListItem itemDivider>
              <Text>Price</Text>
            </ListItem>
            <ListItem>
              <TextInput
                keyboardType="numeric"
                placeholder="50"
                onChangeText={this.setPrice}
              />
            </ListItem>
          </List>
        </View>
        <View style={styles.submitButton}>
          <Button
            block
            onPress={this.submitForm}
          >
            Submit
          </Button>
        </View>
      </View>
    );
  }
}
