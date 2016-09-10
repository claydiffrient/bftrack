import { createTransaction } from '../utils';
import MockDate from 'mockdate';

describe('createTransaction', () => {
  it('throws error when type is not valid', () => {
    expect(() => createTransaction('trade', 'blue', 3, 30)).toThrowError('Transaction type is invalid.');
  });

  it('throws error when asset is not valid', () => {
    expect(() => createTransaction('buy', 'pink', 3, 30)).toThrowError('Asset is invalid.');
  });

  it('throws error when trying to sell silver', () => {
    expect(() => createTransaction('sell', 'silver', 3, 30)).toThrowError('You cannot sell silver.');
  })

  it('returns an object with the proper keys when done properly', () => {
    MockDate.set('9/10/2016');
    const transaction = createTransaction('sell', 'blue', 3, 30);

    expect(transaction).toEqual({
      type: 'sell',
      asset: 'blue',
      quantity: 3,
      price: 30,
      timestamp: new Date()
    });

    MockDate.reset();
  })
});
