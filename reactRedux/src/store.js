import counterReducer from "./sevices/reducers/counterReducer";
import { createStore } from 'redux'

const store = createStore(counterReducer);

export default store;