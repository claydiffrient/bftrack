import { PropTypes } from 'react';

export const ASSETS = [
  'yellow',
  'blue',
  'red',
  'green',
  'orange',
  'silver'
];

const TYPES = [
  'buy',
  'sell'
];

export const COLORS = {
  darkGreen: '#388e3c',
  lightGreen: '#a5d6a7',
  white: '#fff'
};

export function createTransaction ({ type, asset, quantity, price }) {
  console.log(type);
  if (!TYPES.includes(type)) {
    throw new Error('Transaction type is invalid.');
  }
  if (!ASSETS.includes(asset)) {
    throw new Error('Asset is invalid.');
  }
  if (asset === 'silver' && type === 'sell') {
    throw new Error('You cannot sell silver.');
  }

  return {
    timestamp: new Date(),
    type,
    asset,
    quantity,
    price
  };
}

export const transactionShape = PropTypes.shape({
  timestamp: PropTypes.object.isRequired,
  type: PropTypes.oneOf(TYPES).isRequired,
  asset: PropTypes.oneOf(ASSETS).isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
});

export default {};
