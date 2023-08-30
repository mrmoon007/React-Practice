import counterReducer from "./sevices/reducers/counterReducer";
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;