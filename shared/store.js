import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore (initialState = initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

export const initialState = {
  assets: {
    yellow: {
      value: 0,
      quantity: 0
    },
    blue: {
      value: 0,
      quantity: 0
    },
    red: {
      value: 0,
      quantity: 0
    },
    green: {
      value: 0,
      quantity: 0
    },
    orange: {
      value: 0,
      quantity: 0
    },
    silver: {
      quantity: 0
    }
  },
  transactions: []
};
