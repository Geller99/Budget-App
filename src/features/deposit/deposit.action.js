
import { DEPOSIT } from './deposit.types';

// Action Creator
export const depositTransaction = (amount, name) => {
    return {
        type: DEPOSIT,
        info: name,
        payload: amount
    }
}