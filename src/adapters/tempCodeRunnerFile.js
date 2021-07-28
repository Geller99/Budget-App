const store = createStore (rootReducer)
console.log('Initial balance', store.getState())


const unsubscribe = store.subscribe(()=> {
    console.log('Updated State', store.getState())
})