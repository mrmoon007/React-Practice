import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, RESET } from "../constans/counter"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const reset =() => {
    return {
        type: RESET
    }
}
export const incrementByValue =(value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}