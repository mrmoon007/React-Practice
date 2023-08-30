import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, RESET } from "../constans/counter";

const initialCounterState = {
    count: 0
}

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
           return {
            ...state,
            count: state.count += 1,
           }
        case DECREMENT:
           return {
            ...state,
            count: state.count -= 1,
           }
        case RESET:
           return {
            ...state,
            count: 0,
           }
        case INCREMENT_BY_VALUE:
           return {
            ...state,
            count: state.count += action.payload,
           }
        case RESET:
           return {
            ...state,
            count: 0,
           }
        default:
            return state;
    }
}

export default counterReducer;