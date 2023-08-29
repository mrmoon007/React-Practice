const { createStore } = require("redux")


// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'


// const initialCounter = {
//     count: 0
// }

// const increment = () => {
//     return {
//         'type': INCREMENT
//     }
// }

// const decrement = () => {
//     return {
//         'type': DECREMENT
//     }
// }

// const counterReducer = (state, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...initialCounter,
//                 count: initialCounter.count += 1
//             }
//         case DECREMENT:
//             return {
//                 ...initialCounter,
//                count: initialCounter.count -= 1
//             }
    
//         default:
//             return initialCounter;
//     }
// }

// const store = createStore(counterReducer);

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_PAYLOAD = 'INCREMENT_BY_PAYLOAD';
const DECREMENT_BY_PAYLOAD = 'DECREMENT_BY_PAYLOAD';

const counterState = {
    count: 0
}

const incrementByPayload = (payload) => {
    return {
        type: INCREMENT_BY_PAYLOAD,
        payload: payload
    }
}

const decrementByPayload = (payload) => {
    return {
        type: DECREMENT_BY_PAYLOAD,
        payload: payload
    }
}

const counterWithPayloadReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT_BY_PAYLOAD:
            return {
                ...state,
                count: state.count += action.payload
            }
        case DECREMENT_BY_PAYLOAD:
            return {
                ...state,
                count: state.count -= action.payload
            }
    
        default:
            return state;
    }
}

const store = createStore(counterWithPayloadReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementByPayload(5));
store.dispatch(incrementByPayload(20));
store.dispatch(decrementByPayload(10));