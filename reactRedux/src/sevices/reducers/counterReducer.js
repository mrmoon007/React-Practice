import { DECREMENT, INCREMENT, RESET } from "../constans/counter";

const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
           return {
            ...state,
            count: count += 1,
           }
        case DECREMENT:
           return {
            ...state,
            count: count -= 1,
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