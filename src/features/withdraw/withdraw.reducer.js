
import { WITHDRAW } from './withdraw.types';
import { initialState } from './../deposit/deposit.reducer';




export const withdrawReducer = (state = initialState, action)=> {
    switch(action.type) {
    
        case WITHDRAW: 
            return {
                ...state, 
                accountBalance: state - action.payload,
                info: action.info
            }
              
            default:
                return state;
    }
}