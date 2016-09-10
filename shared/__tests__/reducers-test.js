import * as Actions from '../actions';
import reducer from '../reducers';

describe('ADD_TRANSACTION reducer', () => {
  it('adds the payload to the transaction log', () => {
    const action = Actions.addTransaction(1);
    const initialState = {
      transactions: []
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      transactions:[1]
    })
  });
});
