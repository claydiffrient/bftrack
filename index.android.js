import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import SharedIndex from './shared/SharedIndex';
import configureStore from './shared/store';

const store = configureStore();

// class BFTrack extends Component {

  // constructor () {
  //   super();
  //   const ds = new ListView.DataSource({
  //     rowHasChanged (r1, r2) {
  //       return r1 !== r2;
  //     }
  //   });
  //
  //   const initialTransactionData = ['row 1', 'row 2']
  //
  //   this.state = {
  //     transactionData: initialTransactionData,
  //     transactionDataSource: ds.cloneWithRows(initialTransactionData),
  //     showModal: false
  //   };
  //
  //   this.addTransaction = this.addTransaction.bind(this);
  // }

  // addTransaction () {
  //   this.seq = 0
  //   const oldData = this.state.transactionData
  //   const newData = oldData.concat(['a new row' + this.seq++]);
  //   this.setState({
  //     transactionData: newData,
  //     transactionDataSource: this.state.transactionDataSource.cloneWithRows(newData)
  //   });
  // }

  // render () {
  //   return (
  //     <Provider store={store}>
  //       <SharedIndex />
  //     </Provider>
  //   );
    // return (
    //   <View style={styles.container}>
    //     <Row>
    //       <Col sm={12}>
    //         <Text style={styles.header}>BF Track</Text>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col sm={12}>
    //         <Text>Transaction Log</Text>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col sm={12}>
    //         <ListView
    //           dataSource={this.state.transactionDataSource}
    //           renderHeader={() => (
    //             <Row size={8}>
    //               <Col sm={4}><Text>Stock</Text></Col>
    //               <Col sm={2}><Text>Quantity</Text></Col>
    //               <Col sm={2}><Text>Gain/Loss</Text></Col>
    //             </Row>
    //           )}
    //           renderRow={(rowData) => <Text>{rowData}</Text>}
    //         />
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col sm={12}>
    //         <Button
    //           onPress={() => this.setState({showModal: true})}
    //           block
    //         >
    //           Add Transaction
    //         </Button>
    //       </Col>
    //     </Row>
    //     <TransactionModal />
    //   </View>
    // );
//   }
// }

function BFTrack () {
  return (
    <Provider store={store}>
      <SharedIndex />
    </Provider>
  );
}

AppRegistry.registerComponent('BFTrack', () => BFTrack);
