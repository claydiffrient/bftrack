import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import SharedIndex from './shared/SharedIndex';
import configureStore from './shared/store';

const store = configureStore();

class BFTrack extends Component {
  render() {
    return (
      <Provider store={store}>
        <SharedIndex />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('BFTrack', () => BFTrack);
