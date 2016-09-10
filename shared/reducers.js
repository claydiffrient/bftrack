import { handleActions } from 'redux-actions';
import * as Actions from './actions';
import { initialState } from './store';

const reducer = handleActions({
  [Actions.ADD_TRANSACTION]: (state = initialState, action) => {
    state.transactions = state.transactions.concat([action.payload]);
    return state;
  }
});

export default reducer;
