
import { DEPOSIT } from './deposit.types';


export const initialState = {
    accountBalance: 0
}




export const depositReducer = (state = initialState , action)=> {
    switch(action.type) {
        case DEPOSIT:
            return {
                ...state,
                accountBalance: state.accountBalance + action.payload,
                info: action.info
            }
            default:
                return state;
    }
}