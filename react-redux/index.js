const { createStore } = require("redux")


const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


const initialCounter = {
    count: 0
}

const increment = () => {
    return {
        'type': INCREMENT
    }
}

const decrement = () => {
    return {
        'type': DECREMENT
    }
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...initialCounter,
                count: initialCounter.count += 1
            }
        case DECREMENT:
            return {
                ...initialCounter,
               count: initialCounter.count -= 1
            }
    
        default:
            return initialCounter;
    }
}

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());