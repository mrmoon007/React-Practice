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