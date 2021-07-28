  
import { combineReducers } from 'redux';
import { depositReducer } from './../../features/deposit/deposit.reducer';
import { withdrawReducer } from './../../features/withdraw/withdraw.reducer';


const rootReducer = combineReducers({
  deposit: depositReducer,
  withdraw: withdrawReducer
});


export default rootReducer;