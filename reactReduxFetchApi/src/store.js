import { fetchDataReducer } from "./services/reducers/fetchDataReducer";
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(fetchDataReducer, applyMiddleware(thunk));

export default store;