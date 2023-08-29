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