
import { WITHDRAW } from './withdraw.types';


export const withdrawTransaction = (amount, name) => {
    return {
        type: WITHDRAW,
        info: name,
        payload: amount 
    }
}