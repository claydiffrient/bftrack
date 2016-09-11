import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducer from './reducers';

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

const logger = reduxLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function configureStore (initState = initialState) {
  const store = createStoreWithMiddleware(rootReducer, initState);
  return store;
}
