import * as Actions from '../actions';

describe('addTransaction', () => {
  it('creates a proper transaction object', () => {
    const transaction = Actions.addTransaction(1);
    expect(transaction).toEqual({
      type: 'ADD_TRANSACTION',
      payload: 1
    });
  });
});
