
const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


let initialState = {
    accountBalance: 3000,
    dailyExpense: 0,
    rentStatus: 'unpaid'
};

/* defined possible actions */
const add_Funds = 'ADD_FUNDS';
const remove_Funds = 'REMOVE_FUNDS';

/* action creators */
const addFunds = amount => {
    return {
        type: add_Funds,
        payload: amount,
        info: 'deposit'
    };
};

const removeFunds = amount => {
    return {
        type: remove_Funds,
        payload: amount, 
        info: 'withdrawal'
    };
};

/* reducers */
const transactionReducer = (state = initialState, action)=> {
    switch(action.type) {
        case add_Funds:
            return {
                ...state,
                accountBalance: state.accountBalance + action.payload,
                info: action.info
            }
            
        case remove_Funds: 
            return {
                ...state, 
                accountBalance: state.accountBalance - action.payload,
                info: action.info
    
            }
              
            default:
                return state;
    }
}

// const withdrawalReducer = (state = initialState, action)=> {
//     switch (action.type) {
       
//         default:
//             return state 
//             break;
//     }
// }

const rootReducer = combineReducers ({
    transaction : transactionReducer,
})

const store = createStore (rootReducer)
console.log('Initial balance', store.getState())


const unsubscribe = store.subscribe(()=> {
    console.log('Updated State', store.getState())
})

store.dispatch(addFunds(700))
