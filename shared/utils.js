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

export function createTransaction (type, asset, quantity, price) {
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
  }
}

export default {};
