import {
  FAILl_REQUEST,
  GET_REQUEST,
  SUCCESS_REQUEST,
} from "../constants/fetchDataConstants";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_REQUEST:
      return {
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case FAILl_REQUEST:
      return {
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
