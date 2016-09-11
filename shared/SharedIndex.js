import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ListView,
} from 'react-native';

import {
  Container,
  Content,
  Button,
  Header,
  Title
} from 'native-base';

import { COLORS, transactionShape, createTransaction } from './utils';
import { addTransaction } from './actions';
import TransactionModal from './TransactionModal';

const styles = StyleSheet.create({
  contentBackground: {
    backgroundColor: COLORS.lightGreen
  }
});

class SharedIndex extends Component {
  static propTypes = {
    transactions: React.PropTypes.arrayOf(transactionShape),
    handleTransactionSubmit: React.PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged (r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      showModal: false,
      transactionDataSource: ds.cloneWithRows(props.transactions)
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (nextProps.transactions !== this.props.transactions) {
      console.log(nextProps)
      this.setState({
        transactionDataSource: this.state.transactionDataSource.cloneWithRows(nextProps.transactions)
      });
    }
  }

  onSubmit = (transaction) => {
    const trans = createTransaction(transaction);
    this.props.handleTransactionSubmit(trans);
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <Container>
        <Header backgroundColor={COLORS.darkGreen}>
          <Title>BF Track</Title>
        </Header>
        <Content style={styles.contentBackground}>
          <ListView
            dataSource={this.state.transactionDataSource}
            renderHeader={() => (
              <View>
                <Text >Stock</Text>
                <Text>Quantity</Text>
                <Text>Gain/Loss</Text>
              </View>
            )}
            renderRow={(rowData) => <Text>{rowData.type}</Text>}
          />
          <View style={styles.button}>
            <Button
              block
              onPress={this.openModal}
            >Add Transaction</Button>
          </View>

          <Modal
            animationType="slide"
            onRequestClose={this.closeModal}
            visible={this.state.showModal}
          >
            <TransactionModal handleSubmit={this.onSubmit} />
          </Modal>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleTransactionSubmit (transactionObj) {
    dispatch(addTransaction(transactionObj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SharedIndex);
